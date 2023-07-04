import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import SortTable from "../../assets/components/DashboardComponent/SortTable";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Orders = () => {
  const [personName, setPersonName] = useState([]);
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));
  const [filter, setFilter] = useState(false);
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("ASC");

  const CheckmarkSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const openFilter = () => {
    setFilter(!filter);
  };

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div className="dashboar_body_wrapper">
      <div className="dashboar_body_heading">
        <h1>Alle Bestellungen</h1>
      </div>
      <div className="dashboard_orders form-reset">
        <div className="dashboard_orders_inner">
          <div className="dashboard_order_container">
            {/* <div className="filter_Container">
              <div className="show_filter_outer">
                <button className="show_Filter_Button" onClick={openFilter}>
                  Filter
                </button>
              </div>
              <div className={`${filter ? "ShowFilter" : "Hide_Filter"} `}>
                <Container>
                  <Row>
                    <div className="col-12 col-md-3">
                      <div className="input_field_outer">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Stack spacing={3}>
                            <DesktopDatePicker
                              label="Referal Start Date"
                              inputFormat="MM/DD/YYYY"
                              value={value}
                              onChange={handleChange}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </Stack>
                        </LocalizationProvider>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="input_field_outer">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Stack spacing={3}>
                            <DesktopDatePicker
                              label="Referal End Date"
                              inputFormat="MM/DD/YYYY"
                              value={value}
                              onChange={handleChange}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </Stack>
                        </LocalizationProvider>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="input_field_outer">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Stack spacing={3}>
                            <DesktopDatePicker
                              label="Departure Start Date"
                              inputFormat="MM/DD/YYYY"
                              value={value}
                              onChange={handleChange}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </Stack>
                        </LocalizationProvider>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="input_field_outer">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Stack spacing={3}>
                            <DesktopDatePicker
                              label="Departure End Date"
                              inputFormat="MM/DD/YYYY"
                              value={value}
                              onChange={handleChange}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </Stack>
                        </LocalizationProvider>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="input_field_outer">
                        <FormControl fullWidth>
                          <InputLabel id="demo-multiple-checkbox-label">
                            Filter By Status
                          </InputLabel>
                          <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={personName}
                            onChange={CheckmarkSelectChange}
                            input={<OutlinedInput label="Filter By Status" />}
                            renderValue={(selected) => selected.join(", ")}
                            MenuProps={MenuProps}
                          >
                            {names.map((name) => (
                              <MenuItem key={name} value={name}>
                                <Checkbox
                                  checked={personName.indexOf(name) > -1}
                                />
                                <ListItemText primary={name} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="input_field_outer">
                        <TextField
                          fullWidth
                          label="Order Number"
                          id="fullWidth"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="input_field_outer">
                        <TextField
                          fullWidth
                          label="Internal Transaction Number"
                          id="fullWidth"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="input_field_outer">
                        <TextField
                          type="number"
                          fullWidth
                          label="Price Of"
                          id="fullWidth"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="input_field_outer">
                        <TextField
                          type="number"
                          fullWidth
                          label="Price Until"
                          id="fullWidth"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="input_field_outer">
                        <TextField
                          fullWidth
                          label="Start Finish"
                          id="fullWidth"
                        />
                      </div>
                    </div>
                  </Row>
                </Container>
              </div>
            </div> */}
            <div className="Orders_table_main_container">
              <SortTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
