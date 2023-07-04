import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import "../assets/sass/Style2.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation, useNavigate } from "react-router";

const Charge = () => {
  const { state } = useLocation();
  const [pakages, setPakages] = useState(true);

  const navigate = useNavigate();

  const [loadingMeter, setLoadingMeter] = useState([
    {
      loadMeter: 20,
      totalWeight: 20,
      maxHeigth: 20,
    },
  ]);

  const [chargeState, setChargeState] = useState([
    {
      number: 1,
      charge: "Standard",
      lengthPerPiece: 120,
      widthPerPiece: 100,
      heigthPerPiece: 100,
      weightPerPiece: 100,
      stackable: false,
    },
  ]);

  const handleWeight = useCallback(
    (index) => {
      let weight = 0;
      if (pakages) {
        weight =
          (chargeState[index].lengthPerPiece *
            chargeState[index].heigthPerPiece *
            chargeState[index].widthPerPiece) /
          5000;
      } else {
        weight =
          (loadingMeter[index].totalWeight / loadingMeter[index].loadMeter) *
          loadingMeter[index].maxHeigth;
      }
      return weight;
    },
    [chargeState, loadingMeter, pakages]
  );

  const handleCalculateShippingCost = useCallback(() => {
    let baseCost = 0;

    if (pakages) {
      chargeState.forEach((element, index) => {
        let weight = handleWeight(index);
        baseCost += weight;
      });
    } else {
      loadingMeter.forEach((element, index) => {
        let weight = handleWeight(index);
        baseCost += weight;
      });
    }

    return baseCost;
  }, [chargeState, handleWeight, loadingMeter, pakages]);

  useEffect(() => {
    handleCalculateShippingCost();
  }, [chargeState, handleCalculateShippingCost]);

  const handleAddPackage = () => {
    if (!pakages) {
      setLoadingMeter((prevState) => [
        ...prevState,
        {
          loadMeter: 20,
          totalWeight: 20,
          maxHeigth: 20,
        },
      ]);
    } else {
      setChargeState((prevState) => [
        ...prevState,
        {
          number: 1,
          charge: "Standard",
          lengthPerPiece: 120,
          widthPerPiece: 100,
          heigthPerPiece: 100,
          weightPerPiece: 100,
          stackable: false,
        },
      ]);
    }
  };

  const handleSetValues = (event, index) => {
    event.preventDefault();
    if (pakages) {
      let obj = [...chargeState]; // make a copy of the state array
      obj[index][event.target.name] = event.target.value; // update the corresponding value
      setChargeState(obj); // update the state with the new array
    } else {
      let obj = [...loadingMeter]; // make a copy of the state array
      obj[index][event.target.name] = event.target.value; // update the corresponding value
      setLoadingMeter(obj); // update the state with the new array
    }
  };

  const handleRemoveCharge = (event, index) => {
    event.preventDefault();
    if (pakages) {
      setChargeState((prevState) => prevState.filter((data, i) => i !== index));
    } else {
      setLoadingMeter((prevState) =>
        prevState.filter((data, i) => i !== index)
      );
    }
  };

  const handleChargeForPackage = (event) => {
    event.preventDefault();
    navigate("/step", {
      state: {
        ...state,
        pakages: pakages,
        charge: chargeState.map((data) => data.charge),
        shippingCost: handleCalculateShippingCost(),
      },
    });
  };

  return (
    <div className="charge-background-image p-5">
      <div>
        <h1>Aufladung</h1>
        <h2>SCHRITT 2 von 2</h2>
        <div className="radio-group-charge">
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            defaultValue={"Commercial"}
          >
            <FormControlLabel
              value="Commercial"
              control={<Radio />}
              label="Pakete"
              onChange={() => setPakages(true)}
            />
            <FormControlLabel
              value="Private"
              control={<Radio />}
              label="Lademeter"
              onChange={() => setPakages(false)}
            />
          </RadioGroup>
        </div>
        {pakages &&
          chargeState.map((data, index) => (
            <Box
              key={index}
              component="form"
              className="bg-light p-2 rounded-2 mb-2"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "max-content" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="d-flex flex-row">
                <TextField
                  label="Nummer"
                  id="number"
                  name="number"
                  sx={{ m: 1, maxWidth: "80px" }}
                  value={data.number}
                  onChange={(event) => handleSetValues(event, index)}
                  variant="standard"
                  type={"number"}
                  size="small"
                />
                <FormControl
                  variant="standard"
                  sx={{ m: 1, minWidth: "272px" }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Aufladung
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="charge"
                    name="charge"
                    className="padding-left-15"
                    value={data.charge}
                    onChange={(event) => handleSetValues(event, index)}
                    label="Aufladung"
                    size="small"
                  >
                    <MenuItem value={"Äußern"}>Äußern</MenuItem>
                    <MenuItem value={"Standard"}>Standard</MenuItem>
                  </Select>
                </FormControl>
                {index !== 0 && (
                  <button
                    onClick={(event) => handleRemoveCharge(event, index)}
                    className="border-0 bg-light"
                  >
                    <DeleteIcon className="mt-3" />
                  </button>
                )}
              </div>

              <div className="d-flex flex-row">
                <TextField
                  label="Länge/Stück"
                  id="lengthPerPiece"
                  name="lengthPerPiece"
                  sx={{ m: 1, maxWidth: "80px" }}
                  value={data.lengthPerPiece}
                  type={"number"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment className="align-self-end" position="end">
                        cm
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event) => handleSetValues(event, index)}
                  variant="standard"
                />
                <TextField
                  label="Breite/Stück"
                  id="widthPerPiece"
                  name="widthPerPiece"
                  sx={{ m: 1, maxWidth: "80px" }}
                  value={data.widthPerPiece}
                  type={"number"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment className="align-self-end" position="end">
                        cm
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event) => handleSetValues(event, index)}
                  variant="standard"
                />
                <TextField
                  label="Höhe/Stück"
                  id="heigthPerPiece"
                  name="heigthPerPiece"
                  value={data.heigthPerPiece}
                  sx={{ m: 1, maxWidth: "80px" }}
                  type={"number"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment className="align-self-end" position="end">
                        cm
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event) => handleSetValues(event, index)}
                  variant="standard"
                />
                <TextField
                  label="Gewicht/Stück"
                  id="weightPerPiece"
                  name="weightPerPiece"
                  sx={{ m: 1, maxWidth: "80px" }}
                  type={"number"}
                  value={data.weightPerPiece}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment className="align-self-end" position="end">
                        kg
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  onChange={(event) => handleSetValues(event, index)}
                />
              </div>
              <Checkbox
                id="stackable"
                name="stackable"
                onChange={(event) => handleSetValues(event, index)}
              />
              <span>stapelbar</span>
            </Box>
          ))}
        {!pakages &&
          loadingMeter.map((data, index) => (
            <Box
              key={index}
              component="form"
              className="bg-light p-2 rounded-2 mb-2"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "max-content" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="d-flex flex-row">
                <TextField
                  label="Lademeter"
                  id="loadMeter"
                  name="loadMeter"
                  sx={{ m: 1, minWidth: "365px" }}
                  value={data.loadMeter}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment className="align-self-end" position="end">
                        LM
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event) => handleSetValues(event, index)}
                  variant="standard"
                />
                {index !== 0 && (
                  <button
                    onClick={(event) => handleRemoveCharge(event, index)}
                    className="border-0 bg-light"
                  >
                    <DeleteIcon className="mt-3" />
                  </button>
                )}
              </div>

              <TextField
                label="Gesamtgewicht"
                id="maxHeigth"
                name="maxHeigth"
                sx={{ m: 1, minWidth: "365px" }}
                value={data.maxHeigth}
                InputProps={{
                  startAdornment: (
                    <InputAdornment className="align-self-end" position="end">
                      kg
                    </InputAdornment>
                  ),
                }}
                onChange={(event) => handleSetValues(event, index)}
                variant="standard"
              />
              <TextField
                label="maximale Höhe"
                id="totalWeight"
                name="totalWeight"
                sx={{ m: 1, minWidth: "365px" }}
                value={data.totalWeight}
                InputProps={{
                  startAdornment: (
                    <InputAdornment className="align-self-end" position="end">
                      cm
                    </InputAdornment>
                  ),
                }}
                onChange={(event) => handleSetValues(event, index)}
                variant="standard"
              />
            </Box>
          ))}

        <Button
          className="mt-3 button-additional-package"
          variant="outlined"
          size="large"
          onClick={() => handleAddPackage()}
        >
          + ZUSÄTZLICHES PAKET
        </Button>
        <Button
          onClick={(event) => handleChargeForPackage(event)}
          className="mt-4 mx-auto text-nowrap prices-button"
          variant="contained"
          size="large"
        >
          ZEIGEN SIE MIR PREISE
        </Button>
      </div>
    </div>
  );
};

export default Charge;
