import { Checkbox, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import DynamicField from "../../../common/DynamicField";

const Precalculation_5 = () => {
  const [check, setCheck] = useState(false);

  const [form, setform] = useState({
    chargable_weight: 0,
    alternative_charging: false,
    discount_active: false,
    discount: 0,
    travel_surcharge: [{}],
    unloading_surcharge: [{}],

  });

  const catch1 = (e) => {
    setform(prevState => ({
      ...prevState,
      travel_surcharge: e
    }));
  }
  const catch2 = (e) => {
    setform(prevState => ({
      ...prevState,
      unloading_surcharge: e
    }));
  }

  console.log(form);
  const handleCheckboxChange = (event) => {
    const name = event.target.name;
    const value = event.target.checked;
    setform((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
        Frachtpflichtigkeit der Sendung
      </Typography>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <Typography variant="caption">
            Bei Sendungen, die schwerer sind, als sie groß sind, rechnen wir mit
            dem frachtpflichtigen Gewicht. Mit wie vielen Lademetern pro Tonne
            sollen wir rechnen?
          </Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Im/t</InputAdornment>
              ),
            }}
            onChange={(e) => setform(prevState => ({
              ...prevState,
              chargable_weight: e.target.value
            }))}
            label="Frachtpflichtiges Gewicht (lm/t)"
            style={{ width: "calc(100% - 4px)" }}
            type="number"
            variant="standard"
          />
        </div>
      </div>
      <div className="my-5">
        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
          Frachtpflichtigkeit bei Übergrößen
        </Typography>
        <Typography variant="caption">
          Für große Packstücke können wir die Lademeter abweichend berechnen,
          falls diese zur Preisermittlung die ganze Breite der Ladefläche
          einnehmen sollen.
        </Typography>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Checkbox
              name="alternative_charging"
              checked={form.alternative_charging}
              onChange={handleCheckboxChange}
            //  onChange={(e) => setCheck(!check)} 
            />
            Alternative Lademeter-Berechnung aktiv
          </div>
          {form.alternative_charging && (
            <div className="ms-5">
              <Typography variant="caption">
                Bei Packstücken, die länger als 240cm sind, wird deren Länge als
                Lademeter verwendet.
              </Typography>
              <div>
                <Typography variant="caption">
                  Bei allen anderen Paketstücken, die mindestens{" "}
                  <span style={{ textDecoration: "underline" }}>125 cm </span>
                  lang sind, wird deren Breite als Lademeter verwendet.
                </Typography>
              </div>
              <div className="mt-3">
                <Typography variant="caption">
                  Beispiel 1: Ein Packstück mit den Maßen 150cm x 300cm nimmt 3
                  Lademeter ein.
                </Typography>
              </div>
              <div>
                <Typography variant="caption">
                  Beispiel 2: Ein Packstück mit den Maßen 150cm x 80cm nimmt 0,8
                  Lademeter ein (wenn der Schwellenwert auf 125cm gesetzt ist).
                </Typography>
              </div>
            </div>
          )}
          <div className="mt-5">
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              Preisnachlass
            </Typography>
            <Typography variant="caption">
              Sie können einen Discount hinterlegen, der dem Kunden angezeigt
              wird (Streichpreis oder Sonderangebot).
            </Typography>
            <div className="row">
              <div className="col-xs-12 col-md-4 py-1">
                <Checkbox
                  name="discount_active"
                  checked={form.discount_active}
                  onChange={handleCheckboxChange}
                /> Preisnachlass aktiv
              </div>
              <div className="col-xs-12 col-md-4 py-1">
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                  onChange={(e) => setform(prevState => ({
                    ...prevState,
                    discount: e.target.value
                  }))}
                  required={form.discount_active}
                  label="Preisnachlass"
                  style={{ width: "calc(100% - 4px)" }}
                  type="number"
                  variant="standard"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              Anfahrtzuschlag
            </Typography>
            <Typography variant="caption">
              Pauschaler Zuschlag in Euro für gewünschte Postleitzahlen (z.B.
              für Inselabholungen oder für Abholungen aus Gebieten, in denen die
              Vorlaufkosten höher sind)
            </Typography>
            <DynamicField stateCatch={catch1} price />
          </div>
          <div className="mt-5">
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              Entladezuschlag
            </Typography>
            <Typography variant="caption">
              Pauschaler Zuschlag in Euro für gewünschte Postleitzahlen (z.B.
              für Inselabholungen oder für Abholungen aus Gebieten, in denen die
              Vorlaufkosten höher sind)
            </Typography>
            <DynamicField stateCatch={catch2} price />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Precalculation_5;
