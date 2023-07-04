import React from "react";
import TextField from "@mui/material/TextField";
import { Container, Row } from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "../../assets/apis/ApiSerives";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../store/AuthSlice";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import EuroIcon from "@mui/icons-material/Euro";
import AddRoadOutlined from "@mui/icons-material/AddRoadOutlined";

const Ideas = () => {
  const userData = useSelector((state) => state.auth.user);

  const [company, setcompany] = useState(userData.company);
  const [companytype, setcompanytype] = useState(userData.companytype);
  const [salesTaxId, setSalesTaxId] = useState(userData.salesAndTaxId);
  const [salutation, setSalutation] = useState(userData.salutation);
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [houseNum, setHouseNum] = useState(userData.houseNumber);
  const [address, setAddress] = useState(userData.addressSupplement);
  const [postCode, setPostCode] = useState(userData.postCode);
  const [location, setLocation] = useState(userData.location);
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber);
  const [tariff, setTariff] = useState(userData.tariff);
  const [email, setEmail] = useState(userData.email);

  const dispatch = useDispatch();

  const handleUpdateUser = async (event) => {
    event.preventDefault();
    try {
      const response = await updateUser(
        userData._id,
        company,
        companytype,
        salesTaxId,
        salutation,
        firstName,
        lastName,
        houseNum,
        address,
        postCode,
        tariff,
        phoneNumber
      );
      if (response) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "user Successfully updated",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(authSliceActions.handleUserLoggedIn(response?.data.data));
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error updating user",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Internal server error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  let dashbord = userData.isFrightForwarder;

  return (
    <div className="dashboar_body_wrapper">
      <div className="dashboar_body_heading">
        <h1>Account Einstellungen</h1>
      </div>
      <div className="dashboard_idea form-reset">
        <div className="dashboar_idea_inner">
          <form
            onSubmit={(event) => handleUpdateUser(event)}
            className="account_setting_form_container"
          >
            <Container>
              <Row>
                <div className={!dashbord ? "col-12 col-md-6" : "col-12"}>
                  <div className="input_field_outer">
                    <BusinessCenterRoundedIcon className="email_icon_login" />
                    <TextField
                      fullWidth
                      label="Geschäft"
                      value={company}
                      onChange={(event) => setcompany(event.target.value)}
                    />
                  </div>
                </div>
                {!dashbord && (
                  <>
                    <div className="col-12 col-md-6">
                      <div className="input_field_outer">
                        <AddBusinessRoundedIcon className="email_icon_login" />
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Company Type
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={companytype}
                            label="Unternehmenstyp"
                            onChange={(event) =>
                              setcompanytype(event.target.value)
                            }
                          >
                            <MenuItem value={"Keine Firma"}>
                              No Company
                            </MenuItem>
                            <MenuItem
                              value={"Einzelunternehmen / Freiberufler"}
                            >
                              Einzelunternehmen / Freiberufler
                            </MenuItem>
                            <MenuItem value={"Gesellschaft"}>
                              Gesellschaft (GmbH, AG, UG, SE, KG, KGaA ...)
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>

                    <div className="col-12 col-md-2">
                      <div className="input_field_outer">
                        <WcOutlinedIcon className="email_icon_login" />
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Anrede
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            value={salutation}
                            label="Anrede"
                            onChange={(event) =>
                              setSalutation(event.target.value)
                            }
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
                          value={firstName}
                          onChange={(event) => setFirstName(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="input_field_outer">
                        <Person2RoundedIcon className="email_icon_login" />
                        <TextField
                          fullWidth
                          label="Familienname, Nachname"
                          value={lastName}
                          onChange={(event) => setLastName(event.target.value)}
                        />
                      </div>
                    </div>
                  </>
                )}
                <div className="col-12 col-md-6">
                  <div className="input_field_outer">
                    <HouseRoundedIcon className="email_icon_login" />
                    <TextField
                      fullWidth
                      label="Straße, Hausnummer"
                      value={houseNum}
                      onChange={(event) => setHouseNum(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="input_field_outer">
                    <AddRoadOutlined className="email_icon_login" />
                    <TextField
                      fullWidth
                      label="Address Supplement*"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="input_field_outer">
                    <LocationOnIcon className="email_icon_login" />
                    <TextField
                      fullWidth
                      label="Postleitzahl*"
                      value={postCode}
                      onChange={(event) => setPostCode(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="input_field_outer">
                    <LocationOnIcon className="email_icon_login" />
                    <TextField
                      fullWidth
                      label="ORT*"
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                    />
                  </div>
                </div>
                <div className={!dashbord ? "col-12 col-md-6" : "col-12"}>
                  <div className="input_field_outer">
                    <PublicIcon className="email_icon_login" />
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Land
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        value={location}
                        label="Land"
                        onChange={(event) => setLocation(event.target.value)}
                      >
                        <MenuItem value={"DE"}>Deutschland</MenuItem>
                        <MenuItem value={"AT"}>Österreich</MenuItem>
                        <MenuItem value={"CH"}>Schweiz</MenuItem>
                        <MenuItem value={"AL"}>Albanien</MenuItem>
                        <MenuItem value={"BE"}>Belgien</MenuItem>
                        <MenuItem value={"BA"}>
                          Bosnien und Herzegowina
                        </MenuItem>
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
                {userData.isPaid &&
                  (userData.planType === "free" ||
                    userData.planType === "paid") && (
                    <div className="col-12 col-md-6">
                      <div className="input_field_outer">
                        <EuroIcon className="email_icon_login" />
                        <TextField
                          fullWidth
                          label="Tarif hinzufügen"
                          value={tariff}
                          type={"number"}
                          onChange={(event) => setTariff(event.target.value)}
                        />
                      </div>
                    </div>
                  )}
                <div className="col-12 col-md-6">
                  <div className="input_field_outer">
                    <LocalPhoneIcon className="email_icon_login" />
                    <TextField
                      fullWidth
                      label="Telefonnummer*"
                      type={"number"}
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                  </div>
                </div>
                {dashbord && (
                  <div className="col-12 col-md-6">
                    <div className="input_field_outer">
                      <EmailIcon className="email_icon_login" />
                      <TextField
                        fullWidth
                        label="Service-E-Mail*"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  </div>
                )}
                {dashbord && (
                  <div className="col-12 col-md-6">
                    <div className="input_field_outer">
                      <AttachMoneyRoundedIcon className="email_icon_login" />
                      <TextField
                        fullWidth
                        label="Verkaufs- oder Steuer-ID"
                        type={"number"}
                        value={salesTaxId}
                        onChange={(event) => setSalesTaxId(event.target.value)}
                      />
                    </div>
                  </div>
                )}
                <div className="col-12 col-md-6">
                  <div className="save_button">
                    <button type="submit">Speichern</button>
                    <div className="email_notification_div">
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="E-Mail-Benachrichtigungen senden Community Verified icon"
                        />
                      </FormGroup>
                    </div>
                  </div>
                </div>
              </Row>
            </Container>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
