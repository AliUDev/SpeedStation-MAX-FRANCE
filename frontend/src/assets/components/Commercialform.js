import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { RegisterUser } from "../apis/ApiSerives";
import { useLocation, useNavigate, useParams } from "react-router";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import AddRoadOutlined from "@mui/icons-material/AddRoadOutlined";

import Swal from "sweetalert2";
import dayjs from "dayjs";

const Commercial = () => {
  const [company, setcompany] = useState(null);
  const [companytype, setcompanytype] = useState(null);
  const [salesTaxId, setSalesTaxId] = useState(null);
  const [salutation, setSalutation] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [houseNum, setHouseNum] = useState(null);
  const [address, setAddress] = useState(null);
  const [postCode, setPostCode] = useState(null);
  const [location, setLocation] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [country, setCountry] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);

  const navigate = useNavigate();

  const { forwarder } = useParams();

  const { state } = useLocation();

  const params = new URLSearchParams(window.location.search);
  const plan = params.get("plan");

  const handleRegisterForm = async (event) => {
    event.preventDefault();
    let isCommercial = true;
    let isFrightForwarder = forwarder === "freight-forwarder" ? true : false;
    let planType = plan === "paid" ? "free" : "none";
    let isPaid = plan === "paid" ? true : false;
    let planExpiryDate =
      plan === "paid"
        ? dayjs(new Date()).add(30, "day").format("YYYY-MM-DD")
        : "";
    let tariff = 5;

    if (password.length <= 7) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Das Passwort sollte mindestens 8 Zeichen lang sein",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (password === repeatPassword) {
      try {
        let response = await RegisterUser(
          company,
          companytype,
          salesTaxId,
          salutation,
          firstName,
          lastName,
          houseNum,
          address,
          postCode,
          location,
          phoneNumber,
          country,
          email,
          password,
          isCommercial,
          isFrightForwarder,
          planType,
          planExpiryDate,
          tariff,
          isPaid
        );
        if (response.status === 200) {
          navigate("/login");
        }
      } catch (error) {
        if (error.response.status === 400) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "E-Mail existiert bereits",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (error.response.status === 401) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Firma existiert bereits",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Passwort stimmt nicht überein",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleShippingAsGuest = (event) => {
    event.preventDefault();
    navigate("/booking-step-one", {
      state: {
        ...state,
        clientComapny: company,
        clientComapnyType: companytype,
        clientSalesTaxId: salesTaxId,
        clientSalutation: salutation,
        clientFirstName: firstName,
        clientFastName: lastName,
        clientHouseNum: houseNum,
        clientAddress: address,
        clientPostCode: postCode,
        clientLocation: location,
        clientPhoneNumber: phoneNumber,
        clientCountry: country,
        clientEmail: email,
      },
    });
  };

  return (
    <form
      onSubmit={
        plan !== "guest"
          ? (event) => handleRegisterForm(event)
          : (event) => handleShippingAsGuest(event)
      }
    >
      <div className="signup_form">
        <Container>
          <Row>
            <div className="col-12">
              <div className="input_field_outer">
                <BusinessCenterRoundedIcon className="email_icon_login" />
                <TextField
                  fullWidth
                  required
                  label="Unternehmen"
                  onChange={(event) => setcompany(event.target.value)}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="input_field_outer">
                <AddBusinessRoundedIcon className="email_icon_login" />
                <FormControl fullWidth autoComplete="off">
                  <InputLabel id="demo-simple-select-label">
                    Unternehmenstyp
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={companytype}
                    required
                    label="Unternehmenstyp"
                    onChange={(event) => setcompanytype(event.target.value)}
                  >
                    <MenuItem value={"Keine Firma"}>No Company</MenuItem>
                    <MenuItem value={"Einzelunternehmen / Freiberufler"}>
                      Einzelunternehmen / Freiberufler
                    </MenuItem>
                    <MenuItem value={"Gesellschaft"}>
                      Gesellschaft (GmbH, AG, UG, SE, KG, KGaA ...)
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col-12">
              <div className="input_field_outer">
                <AttachMoneyRoundedIcon className="email_icon_login" />
                <TextField
                  fullWidth
                  required
                  label="Umsatz- oder Steuer-ID"
                  type={"number"}
                  onChange={(event) => setSalesTaxId(event.target.value)}
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="input_field_outer">
                <WcOutlinedIcon className="email_icon_login" />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Anrede</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={salutation}
                    required
                    label="Anrede"
                    onChange={(event) => setSalutation(event.target.value)}
                  >
                    <MenuItem value={"Herr"}>Herr</MenuItem>
                    <MenuItem value={"Fehlt"}>Fehlt</MenuItem>
                    <MenuItem value={"sonstig"}>sonstig</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="input_field_outer">
                <Person2RoundedIcon className="email_icon_login" />
                <TextField
                  fullWidth
                  label="Vorname"
                  required
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="input_field_outer">
                <Person2RoundedIcon className="email_icon_login" />
                <TextField
                  fullWidth
                  required
                  label="Familienname, Nachname"
                  onChange={(event) => setLastName(event.target.value)}
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
                  onChange={(event) => setHouseNum(event.target.value)}
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
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="input_field_outer">
                <LocationOnIcon className="email_icon_login" />
                <TextField
                  fullWidth
                  label="Postleitzahl"
                  required
                  onChange={(event) => setPostCode(event.target.value)}
                />
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="input_field_outer">
                <LocationOnIcon className="email_icon_login" />
                <TextField
                  fullWidth
                  label="Standort"
                  required
                  onChange={(event) => setLocation(event.target.value)}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="input_field_outer">
                <PublicIcon className="email_icon_login" />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Land</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    required
                    label="Land"
                    onChange={(event) => setCountry(event.target.value)}
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
                </FormControl>
              </div>
            </div>
            <div className="col-12 ">
              <div className="input_field_outer">
                <LocalPhoneIcon className="email_icon_login" />
                <TextField
                  fullWidth
                  required
                  label="Telefonnummer"
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </div>
            </div>

            <div className="col-12">
              <div className="input_field_outer">
                <EmailIcon className="email_icon_login" />
                <TextField
                  fullWidth
                  required
                  type={"email"}
                  label="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            {plan !== "guest" && (
              <>
                <div className="col-12 col-md-6">
                  <div className="input_field_outer">
                    <LockIcon className="email_icon_login" />
                    <TextField
                      type="password"
                      fullWidth
                      required
                      label="Passwort"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="input_field_outer">
                    <LockIcon className="email_icon_login" />
                    <TextField
                      type="password"
                      fullWidth
                      label="Passwort wiederholen"
                      required
                      onChange={(event) =>
                        setRepeatPassword(event.target.value)
                      }
                    />
                  </div>
                </div>
              </>
            )}

            <div className="col-12">
              {plan !== "guest" ? (
                <div className="signup_submitt_button">
                  <button type="submit" className="submitt_button ">
                    Weiter
                  </button>
                </div>
              ) : (
                <div className="signup_submitt_button">
                  <button type="submit" className="submitt_button">
                    further
                  </button>
                </div>
              )}
            </div>
          </Row>
        </Container>
      </div>
    </form>
  );
};

export default Commercial;
