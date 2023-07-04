import React from "react";
import { Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { MenuItem, Select } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import AddRoadOutlined from "@mui/icons-material/AddRoadOutlined";

const BookingStepsCard = (props) => {
  return (
    <div>
      <div className="card p-4">
        <div className="d-flex justify-content-between">
          <strong>{props.name}</strong>
        </div>
        <div className="signup_form form-reset">
          <Container>
            <Row>
              <div className="col-12">
                <div className="input_field_outer">
                  <BusinessCenterRoundedIcon className="email_icon_login" />
                  <TextField
                    fullWidth
                    label="Company"
                    onChange={
                      props.name === "sender"
                        ? (event) => props.setSenderCompany(event.target.value)
                        : (event) => props.setReciverCompany(event.target.value)
                    }
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="input_field_outer">
                  <Person2RoundedIcon className="email_icon_login" />
                  <TextField
                    fullWidth
                    label="Vorname"
                    required
                    onChange={
                      props.name === "sender"
                        ? (event) =>
                            props.setSenderFirstName(event.target.value)
                        : (event) =>
                            props.setReciverFirstName(event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="input_field_outer">
                  <Person2RoundedIcon className="email_icon_login" />
                  <TextField
                    fullWidth
                    required
                    label="Familienname, Nachname"
                    onChange={
                      props.name === "sender"
                        ? (event) => props.setSenderLastName(event.target.value)
                        : (event) =>
                            props.setReciverLastName(event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="input_field_outer">
                  <HouseRoundedIcon className="email_icon_login" />
                  <TextField
                    fullWidth
                    label="Haus und Straße Nr"
                    required
                    onChange={
                      props.name === "sender"
                        ? (event) => props.setSenderHouseNum(event.target.value)
                        : (event) =>
                            props.setReciverHouseNum(event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-8">
                <div className="input_field_outer">
                  <AddRoadOutlined className="email_icon_login" />
                  <TextField
                    fullWidth
                    label="Adresszusatz"
                    required
                    onChange={
                      props.name === "sender"
                        ? (event) => props.setSenderAddress(event.target.value)
                        : (event) => props.setReciverAddress(event.target.value)
                    }
                  />
                </div>
              </div>

              <div className="col-lg-6 col-12 ">
                <div className="input_field_outer">
                  <LocalPhoneIcon className="email_icon_login" />
                  <TextField
                    fullWidth
                    required
                    label="Telefonnummer"
                    type={"number"}
                    onChange={
                      props.name === "sender"
                        ? (event) => props.setSenderPhoneNum(event.target.value)
                        : (event) =>
                            props.setReciverPhoneNum(event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="input_field_outer">
                  <EmailIcon className="email_icon_login" />
                  <TextField
                    fullWidth
                    required
                    type={"email"}
                    label="Email"
                    onChange={
                      props.name === "sender"
                        ? (event) => props.setSenderEmail(event.target.value)
                        : (event) => props.setReciverEmail(event.target.value)
                    }
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="input_field_outer">
                  <LocationOnIcon className="email_icon_login" />
                  <TextField
                    fullWidth
                    label="Postleitzahl"
                    aria-readonly={"true"}
                    onChange={
                      props.name === "sender"
                        ? (event) => props.setSenderPostCode(event.target.value)
                        : (event) =>
                            props.setReciverPostCode(event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="input_field_outer">
                  <LocationOnIcon className="email_icon_login" />
                  <TextField
                    fullWidth
                    label="Standort"
                    value={props.address}
                    aria-readonly={true}
                  />
                </div>
              </div>

              <div className="col-12 ">
                <div className="input_field_outer">
                  <PublicIcon className="email_icon_login" />
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.location}
                    label="Land"
                    fullWidth
                  >
                    <MenuItem value={"DE"}>Deutschland</MenuItem>
                    <MenuItem value={"AT"}>Österreich</MenuItem>
                    <MenuItem value={"CH"}>Schweiz</MenuItem>
                    <MenuItem value={"AL"}>Albanien</MenuItem>
                    <MenuItem value={"BE"}>Belgien</MenuItem>
                    <MenuItem value={"BA"}>Bosnien und Herzegowina</MenuItem>
                    <MenuItem value={"BG"}>Bulgarien</MenuItem>
                    <MenuItem value={"DK"}>Dänemark</MenuItem>
                    <MenuItem value={"EE"}>Estland</MenuItem>
                    <MenuItem value={"FE"}>Finnland</MenuItem>
                    <MenuItem value={"FR"}>Frankreich</MenuItem>
                    <MenuItem value={"GR"}>Griechenland</MenuItem>
                    <MenuItem value={"GB"}>Großbritannien</MenuItem>
                    <MenuItem value={"IE"}>Irland</MenuItem>
                    <MenuItem value={"IT"}>Italien</MenuItem>
                    <MenuItem value={"XK"}>Kosovo</MenuItem>
                    <MenuItem value={"HR"}>Kroatien</MenuItem>
                    <MenuItem value={"LV"}>Lettland</MenuItem>
                    <MenuItem value={"LI"}>Liechtenstein</MenuItem>
                    <MenuItem value={"LT"}>Litauen</MenuItem>
                    <MenuItem value={"LU"}>Luxemburg</MenuItem>
                    <MenuItem value={"MT"}>Malta</MenuItem>
                    <MenuItem value={"ME"}>Montenegro</MenuItem>
                    <MenuItem value={"NL"}>Niederlande</MenuItem>
                    <MenuItem value={"MK"}>Nordmazedonien</MenuItem>
                    <MenuItem value={"NO"}>Norwegen</MenuItem>
                    <MenuItem value={"PL"}>Polen</MenuItem>
                    <MenuItem value={"PT"}>Portugal</MenuItem>
                    <MenuItem value={"RO"}>Rumänien</MenuItem>
                    <MenuItem value={"SE"}>Schweden</MenuItem>
                    <MenuItem value={"RS"}>Serbien</MenuItem>
                    <MenuItem value={"SK"}>Slowakei</MenuItem>
                    <MenuItem value={"SI"}>Slowenien</MenuItem>
                    <MenuItem value={"IT"}>Spanien</MenuItem>
                    <MenuItem value={"CZ"}>Tschechien</MenuItem>
                    <MenuItem value={"TR"}>Türkei</MenuItem>
                    <MenuItem value={"HU"}>Ungarn</MenuItem>
                    <MenuItem value={"CY"}>Zypern</MenuItem>
                  </Select>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default BookingStepsCard;
