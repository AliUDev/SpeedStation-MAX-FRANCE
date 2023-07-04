import { Checkbox, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ExclusionCriteria_4 = () => {
  const [state, setstate] = useState({
    min_weight_kg: 0,
    max_weight_kg: 0,
    min_latemeter_ml: 0,
    max_latemeter_ml: 0,
    min_height_cm: 0,
    max_height_cm: 0,
    max_loading_volume: 0,
    max_weight_per_loading_meter: 0,
    max_number_of_package: 0,
    min_length: 0,
    max_length: 0,
    min_height: 0,
    max_height: 0,
    min_width: 0,
    max_width: 0,
    min_weight_cm: 0,
    max_weight_cm: 0,
    package_accessible: false,
    package_palletised: false,
  });
  console.log(state)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setstate((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleCheckboxChange = (event) => {
    const name = event.target.name;
    const value = event.target.checked;
    setstate((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
        Gesamte Ladung
      </Typography>
      <Typography variant="caption">
        Welche Bedingungen muss die Gesamtladung erfüllen?
      </Typography>
      <div className="my-2">
        <div className="row">
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              variant="standard"
              name="min_weight_kg"
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Minimales Gewicht"
            />
          </div>
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximales Gewicht"
              name="max_weight_kg"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">ml</InputAdornment>
                ),
              }}
              name="min_latemeter_ml"
              onChange={handleChange}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Minimale Lademeter"
            />
          </div>
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              variant="standard"
              name="max_latemeter_ml"
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">ml</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximale Lademeter"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              name="min_height_cm"
              onChange={handleChange}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Minimale Höhe"
            />
          </div>
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              name="max_height_cm"
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximale Höhe"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              name="max_loading_volume"
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    m<sup>3</sup>
                  </InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximales Ladevolumen"
            />
          </div>
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              name="max_weight_per_loading_meter"
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg/lm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximales Gewicht pro Lademeter"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4 mt-2">
            <TextField
              name="max_number_of_package"
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Stk.</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximale Packstück-Anzahl"
            />
          </div>
        </div>
      </div>

      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
        Packstücke
      </Typography>
      <Typography variant="caption">
        Welche Maße dürfen die einzelnen Packstücke höchstens besitzen?
      </Typography>

      <div className="mt-4">
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <TextField
              name="min_length"
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Minimale Länge"
            />
          </div>
          <div className="col-xs-12 col-md-3">
            <TextField
              name="max_length"
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximale Länge"
            />
          </div>
          <div className="col-xs-12 col-md-3">
            <TextField
              name="min_height"
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Minimale Höhe"
            />
          </div>
          <div className="col-xs-12 col-md-3">
            <TextField
              name="max_height"
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximale Höhe"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <TextField
              name="min_width"
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Minimale Breite"
            />
          </div>
          <div className="col-xs-12 col-md-3">
            <TextField
              name="max_width"
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximale Breite"
            />
          </div>
          <div className="col-xs-12 col-md-3">
            <TextField
              name="min_weight_cm"
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Minimales Gewicht"
            />
          </div>
          <div className="col-xs-12 col-md-3">
            <TextField
              name="max_weight_cm"
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              style={{ width: "calc(100% - 4px)" }}
              type="number"
              label="Maximales Gewicht"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-xs-12 col-md-6">
            <Checkbox
              name="package_accessible"
              checked={state.package_accessible}
              onChange={handleCheckboxChange}
            />Packstücke müssen unterfahrbar sein
            {/* <Checkbox name="package_accessible" value={state.package_accessible} onChange={() => handleCheckboxChange(!state.package_accessible)} />  */}
          </div>
          <div className="col-xs-12 col-md-6">
            <Checkbox
              name="package_palletised"
              checked={state.package_palletised}
              onChange={handleCheckboxChange}
            />Packstücke müssen palettiert sein
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusionCriteria_4;
