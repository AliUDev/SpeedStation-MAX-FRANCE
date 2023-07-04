import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { Container, Row } from "react-bootstrap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function FuelSurCharges() {
  const [toggleForm, setToggleForm] = React.useState(true);
  const [name, setName] = useState("");
  const [surCharges, setSurCharges] = useState("");

  const handleAddEntry = (event) => {
    event.preventDefault();
  };

  return (
    <div className="p-5">
      <div className="d-flex justify-content-between mb-2">
        <h3
          onClick={
            toggleForm
              ? () => setToggleForm(toggleForm)
              : () => setToggleForm(!toggleForm)
          }
        >
          {toggleForm ? (
            "FuelSurCharges"
          ) : (
            <>
              <ArrowBackIcon />
              Apply fuel surCharges
            </>
          )}
        </h3>
        <Button
          className="bg-button"
          onClick={
            toggleForm
              ? () => setToggleForm(!toggleForm)
              : (event) => handleAddEntry(event)
          }
          variant="contained"
        >
          {toggleForm ? "New Entry" : "Apply Fuel SurCharges"}
        </Button>
      </div>
      {toggleForm ? (
        <TableContainer className="p-3" component={Paper}>
          <div>
            <h5>fuel surcharges</h5>
            <p>
              Store any number of surcharges, which you can update at any time.
              As soon as a surcharge has been created, you can add it to any of
              your tariffs in the tariff configurator. Only one surcharge per
              tariff can be active at a time.
            </p>
            <p>
              For each surcharge, enter an internal name and a percentage value
              that is applied to the base price (including discounts and
              surcharges) of your tariff. Your customers see the percentage
              surcharge as a single item during booking and within the order.
            </p>
          </div>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Percentage</TableCell>
                <TableCell align="right">actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map((row) => ( */}
              <TableRow
                // key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Awais ikram
                </TableCell>
                <TableCell align="right">2%</TableCell>
                <TableCell align="right">
                  <Button className="bg-button me-2" variant="contained">
                    Edit
                  </Button>
                  <Button className="bg-danger" variant="contained">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              {/* ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>
          <div className="dashboard_idea form-reset">
            <div className="dashboar_idea_inner">
              <div className="account_setting_form_container">
                <Container>
                  <Row>
                    <div className={"col-8"}>
                      <div className="input_field_outer">
                        <TextField
                          fullWidth
                          label="Name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className={"col-8"}>
                      <div className="input_field_outer">
                        <TextField
                          fullWidth
                          label="SurCharges"
                          type={"number"}
                          value={surCharges}
                          onChange={(event) =>
                            setSurCharges(event.target.value)
                          }
                        />
                      </div>
                    </div>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
