import { useState } from "react";
import { MenuItem, TextField, Typography } from "@mui/material";

const Basic_1 = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    subtitle: "",
    internalTitle: "",
    transportArt: "",
    status: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  console.log(formValues);

  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <TextField
            name="title"
            label="title"
            style={{ width: "calc(100% - 4px)" }}
            variant="standard"
            value={formValues.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <TextField
            name="subtitle"
            label="subtitle"
            style={{ width: "calc(100% - 4px)" }}
            variant="standard"
            value={formValues.subtitle}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-12 col-md-6">
          <TextField
            name="internalTitle"
            label="Internal title"
            style={{ width: "calc(100% - 4px)" }}
            variant="standard"
            value={formValues.internalTitle}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12 col-md-4">
          <Typography variant="subtitle2">Art of Transport</Typography>
          <TextField
            name="transportArt"
            label="Transport-Art"
            select
            style={{ width: "calc(100% - 4px)" }}
            variant="standard"
            value={formValues.transportArt}
            onChange={handleInputChange}
          >
            <MenuItem value="direct drive">direct drive</MenuItem>
            <MenuItem value="general cargo">general cargo</MenuItem>
          </TextField>
        </div>
        <div className="col-sm-12 col-md-4">
          <Typography variant="subtitle2">Tariff Status</Typography>
          <TextField
            name="status"
            label="Status"
            select
            style={{ width: "calc(100% - 4px)" }}
            variant="standard"
            value={formValues.status}
            onChange={handleInputChange}
          >
            <MenuItem value="inactive">inactive</MenuItem>
            <MenuItem value="active">active</MenuItem>
          </TextField>
        </div>
      </div>
    </div>
  );
};

export default Basic_1;
