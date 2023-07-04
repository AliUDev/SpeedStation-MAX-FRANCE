import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { fieldJson } from "./constant";

const AdditionalServices_7 = () => {
  const [fields, setFields] = useState(fieldJson);

  // const handleChecks = (e, i, ind) => {
  //   const fieldsCopy = [...fields];
  //   const fieldIndex = fieldsCopy[ind].findIndex(field => field.name === fields[ind][i].name);

  //   if (fieldIndex !== -1) {
  //     fieldsCopy[ind][fieldIndex].check = e.target.checked;
  //     setFields(fieldsCopy);
  //   }
  // };
  const handleChecks = (e, i, ind) => {
    const fieldsCopy = [...fields];
    fieldsCopy[ind][i].check = e.target.checked;
    setFields([...fieldsCopy]);
  };
  // const handleChecks = (e, i, ind) => {
  //   const updatedFields = [...fields];
  //   updatedFields[ind][i][fields[ind][i].check] = e.target.checked;
  //   setFields(updatedFields);
  // };

  const handleChange = () => { 

  }


  return (
    <>
      <style jsx>{`
        .attribute-wrapper {
          display: grid;
          align-items: center;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 24px;
        }
      `}</style>
      <div className="row" style={{ rowGap: "18px" }}>
        {fields.map((d, ind) =>
          d.map((a, i) => {
            return (
              <div className="col-xs-12 col-lg-6">
                <div className="attribute-wrapper">
                  <div style={{ display: "inline-flex", alignItems: "center" }}>
                    <Checkbox
                      checked={a.check}
                      onClick={(e) => handleChecks(e, i, ind)}
                    />
                    <Typography variant="subtitle2">{a.title}</Typography>
                  </div>
                  <div>
                    <TextField
                      variant="standard"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">€</InputAdornment>
                        ),
                      }}
                      disabled={!a.check}
                      style={{ width: "calc(100% - 4px)" }}
                      type="number"
                      value={0}
                      label="Aufpreis"
                    />
                  </div>
                  {a.apiece && (
                    <div
                      style={{ display: "inline-flex", alignItems: "center" }}
                    >
                      <Checkbox disabled={!a.check} />
                      <Typography
                        variant="subtitle2"
                        style={{
                          color: `${!a.check ? "rgba(0, 0, 0, 0.38)" : "initial"
                            }`,
                        }}
                      >
                        pro Stück
                      </Typography>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default AdditionalServices_7;
