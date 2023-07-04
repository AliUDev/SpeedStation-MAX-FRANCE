import React, { useState } from 'react'
import { Checkbox, FormControlLabel, InputAdornment, TextField, Typography } from "@mui/material";

const Rateattribute_10 = () => {
  const [option1, setoption1] = useState(false);
  const [checkedValues, setCheckedValues] = useState({
    'unpackaged furniture': false,
    'used furniture': false,
    'new furniture': false,
    'chilled foods': false,
    'frozen foods': false,
    'unrefrigerated foods': false,
    'refrigerated transport': false,
    'Suitable for spirits': false,
    'Used Items': false,
    'motorcycles': false,
    'Cycles': false,
    'E-bike': false,
    'pallets': false,
    'White goods': false,
    'Langholz': false,
    'Lumber': false,
    'Glas-Transport': false,
    'Plate Transport': false,
    'door and window': false,
    'machinery': false,
    'tires': false,
    'surcharge': ''
  });
  const handleCheckboxChange = (event) => {
    setCheckedValues({
      ...checkedValues,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCheckedValues((prevState) => ({ ...prevState, [name]: value }));
};

  console.log(checkedValues);
  const options = [
    { name: 'unpackaged furniture', value: 'unpackaged furniture' },
    { name: 'used furniture', value: 'used furniture' },
    { name: 'new furniture', value: 'new furniture' },
    { name: 'chilled foods', value: 'chilled foods' },
    { name: 'frozen foods', value: 'frozen foods' },
    { name: 'unrefrigerated foods', value: 'unrefrigerated foods' },
    { name: 'refrigerated transport', value: 'refrigerated transport' },
    { name: 'Suitable for spirits', value: 'Suitable for spirits' },
    { name: 'Used Items', value: 'Used Items' },
    { name: 'motorcycles', value: 'motorcycles' },
    { name: 'Cycles', value: 'Cycles' },
    { name: 'E-bike', value: 'E-bike' },
    { name: 'pallets', value: 'pallets' },
    { name: 'White goods (refrigerators, dishwashers, etc.)', value: 'White goods' },
    { name: 'Langholz', value: 'Langholz' },
    { name: 'Lumber', value: 'Lumber' },
    { name: 'Glas-Transport', value: 'Glas-Transport' },
    { name: 'Plate Transport', value: 'Plate Transport' },
    { name: 'door and window', value: 'door and window' },
    { name: 'machinery', value: 'machinery' },
    { name: 'tires (loose)', value: 'tires' }
  ];
  return (
    <div>
      <Typography variant="caption" sx={{ margin: "0 0 20px 0" }}>
        Please note that we are currently not making any differentiation between the dangerous goods classes. Therefore, ask the client and cancel accordingly if you do not have permission.
      </Typography>
      <div className='row m-0'>
        <div className='col-4 m-0 p-0'>
          <FormControlLabel
            control={
              <Checkbox
                checked={option1}
                onChange={() => setoption1(!option1)}
                name="dangerous goods"
              />
            }
            label="dangerous goods"
          />
        </div>
        <div className='col-4'>
          <TextField
            name='surcharge'
            onChange={handleChange}
            disabled={!option1}
            InputProps={{
              endAdornment: <InputAdornment position="end">€</InputAdornment>,
            }}
            id="standard-basic" sx={{ width: "100%" }} type="number" label="surcharge" required variant="standard" />
        </div>
      </div>
      {options.map((option) => (
        <div>
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={checkedValues[option.value] || false}
                onChange={handleCheckboxChange}
                name={option.value}
              />
            }
            label={option.name}
          />
        </div>
      ))}
    </div>
  )
}

export default Rateattribute_10