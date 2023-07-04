import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ErrorIcon from "@mui/icons-material/Error";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const ForwarderTwo = () => {
  const navigate = useNavigate();
  const [PakageLenght, setPakagelenght] = useState([{ pakages: "" }]);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [pkg, setPakage] = useState(true);
  const packageHandle = () => {
    setPakage(!pkg);
  };
  const handlepakageservice = () => {
    setPakagelenght([...PakageLenght, { pakage: "" }]);
  };
  const handlepakageserviceRemove = (index) => {
    const list = [...PakageLenght];
    list.splice(index, 1);
    setPakagelenght(list);
  };
  return (
    <div className="forwareser_outer_container">
      <div></div>
      <div className="pkg_form_outer_container">
        <div className="forwareder_heading">
          <h1>Charge</h1>
          <p>Step 2 of 2</p>
        </div>
        <div className="pakage_toggler">
          <p className={`${pkg ? "non_active" : "active"}`}>Packages</p>
          <Switch {...label} defaultChecked onClick={packageHandle} />
          <p className={`${pkg ? "active" : "non_active"}`}>Loading Meter</p>
        </div>
        <div className="pakages_form">
          {pkg ? (
            <>
              <div className="loading_meter_outer_container">
                <div className="loading_meter_input">
                  <p className="meter_unit">
                    <Tooltip title="The loading meter is a unit of measurement for the loading area required by packages. A loading meter corresponds to one meter of the loading space of a truck in length when using the standard width of 2.40 m.">
                      <IconButton>
                        <ErrorIcon />
                      </IconButton>
                    </Tooltip>{" "}
                    LM
                  </p>
                  <TextField
                    label="Search field"
                    type="search"
                    variant="filled"
                  />
                </div>
                <div className="loading_meter_input">
                  <p className="meter_unit">KG</p>
                  <TextField
                    label="Search field"
                    type="search"
                    variant="filled"
                  />
                </div>
                <div className="loading_meter_input">
                  <p className="meter_unit">CM</p>
                  <TextField
                    label="Search field"
                    type="search"
                    variant="filled"
                  />
                </div>
              </div>
              <button className="results_button">Show Results</button>
            </>
          ) : (
            <>
              {PakageLenght.map((pakage, index) => (
                <div key={index} className="pakage_outer_container">
                  {PakageLenght.length > 1 && (
                    <DeleteIcon
                      className="remove_button"
                      onClick={handlepakageserviceRemove}
                    />
                  )}
                  <div className="measurements_input_outer">
                    <div className="package_input_outer w-20">
                      <TextField
                        label="Lenght/Piece"
                        id="standard-start-adornment"
                        sx={{ m: 1, width: "25ch" }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="end">cm</InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                    </div>
                    <div className="package_input_outer w-75">
                      <FormControl fullWidth>
                        <InputLabel
                          variant="standard"
                          htmlFor="uncontrolled-native"
                        >
                          Age
                        </InputLabel>
                        <NativeSelect
                          defaultValue={30}
                          inputProps={{
                            name: "age",
                            id: "uncontrolled-native",
                          }}
                        >
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </NativeSelect>
                      </FormControl>
                    </div>
                    <div className="package_input_outer w-23">
                      <TextField
                        label="Lenght/Piece"
                        id="standard-start-adornment"
                        sx={{ m: 1, width: "25ch" }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="end">cm</InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                    </div>
                    <div className="package_input_outer w-23">
                      <TextField
                        label="Width/Piece"
                        id="standard-start-adornment"
                        sx={{ m: 1, width: "25ch" }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="end">cm</InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                    </div>
                    <div className="package_input_outer w-23">
                      <TextField
                        label="Hight/Piece"
                        id="standard-start-adornment"
                        sx={{ m: 1, width: "25ch" }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="end">cm</InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                    </div>
                    <div className="package_input_outer w-23">
                      <TextField
                        label="Weight/Piece"
                        id="standard-start-adornment"
                        sx={{ m: 1, width: "25ch" }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="end">KG</InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                    </div>
                    <div className="checkmark_input_outer m-0">
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="Stoclable"
                        />
                      </FormGroup>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={handlepakageservice}
                className="additional_pkg_button"
              >
                + Additional Pakage
              </button>
              <button className="results_button">Show Results</button>
            </>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ForwarderTwo;
