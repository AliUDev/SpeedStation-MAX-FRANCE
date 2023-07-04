import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import SearchAble from "../../assets/components/SearchAble";
import { CreateDirectory } from "../../assets/apis/ApiSerives";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const AddressBook = () => {
  const userData = useSelector((state) => state.auth.user);

  const navigate = useNavigate();

  const [company, setcompany] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [addressType, setAddressType] = useState("");
  const [salutation, setSalutation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [internalTerm, setInternalTerm] = useState("");
  const [houseNum, setHouseNum] = useState("");
  const [addressSupplement, setAddressSupplement] = useState("");
  const [salesAndTaxId, setSalesAndTaxId] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isBillingAddress, setIsBillingAddress] = useState(true);
  const [isShippingAddress, setIsShippingAddress] = useState(true);
  const [isDefaultAddress, setIsDefaultAddress] = useState(true);

  const handleCreateDirectory = async (event) => {
    event.preventDefault();
    try {
      const response = await CreateDirectory(
        userData._id,
        company,
        companyType,
        addressType,
        salutation,
        firstName,
        lastName,
        internalTerm,
        houseNum,
        addressSupplement,
        salesAndTaxId,
        email,
        phoneNumber,
        zipCode,
        isBillingAddress,
        isShippingAddress,
        isDefaultAddress
      );
      if (response) {
        navigate("/directory");
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "error creating directory",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Directory already exsist",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Internal server error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="dashboar_body_wrapper">
      <div className="dashboar_body_heading">
        <Link to="/directory" className="directory_link_text">
          Back To Directory
        </Link>
      </div>
      <div className="dashboard_address form-reset">
        <div className="dashboar_address_inner">
          <form
            onSubmit={(event) => handleCreateDirectory(event)}
            className="addressbook_form_container"
          >
            <Container>
              <Row>
                <div className="col-12 col-md-8">
                  <div className="addressbook_form_heading">
                    <p>Address</p>
                  </div>
                  <Row>
                    <div className="col-12">
                      <div className="input_field_outer">
                        <TextField
                          fullWidth
                          label="Company"
                          value={company}
                          onChange={(event) => setcompany(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="input_field_outer">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Salutation
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            value={salutation}
                            required
                            label="Salutation"
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
                        <TextField
                          fullWidth
                          label="First Name"
                          value={firstName}
                          required
                          onChange={(event) => setFirstName(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="input_field_outer">
                        <TextField
                          fullWidth
                          label="Last Name"
                          value={lastName}
                          required
                          onChange={(event) => setLastName(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="input_field_outer">
                        <TextField
                          fullWidth
                          label="Street and House No"
                          value={houseNum}
                          required
                          onChange={(event) => setHouseNum(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="input_field_outer">
                        <TextField
                          fullWidth
                          label="Address Supplement"
                          required
                          value={addressSupplement}
                          onChange={(event) =>
                            setAddressSupplement(event.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="input_field_outer">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Company Type
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={companyType}
                            required
                            label="Company Type"
                            onChange={(event) =>
                              setCompanyType(event.target.value)
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
                    <div className="col-12 col-md-4">
                      <div className="input_field_outer">
                        <TextField
                          fullWidth
                          label="Sales or Tax Id"
                          required
                          type={"number"}
                          value={salesAndTaxId}
                          onChange={(event) =>
                            setSalesAndTaxId(event.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="input_field_outer">
                        <TextField
                          fullWidth
                          label="Email"
                          required
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="input_field_outer">
                        <TextField
                          fullWidth
                          label="Phone"
                          required
                          value={phoneNumber}
                          onChange={(event) =>
                            setPhoneNumber(event.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="filter_outer">
                        <div className="home_banner_selct_container">
                          <Select
                            onChange={(event) => setZipCode(event.target.value)}
                            displayEmpty
                            value={zipCode}
                            inputProps={{ "aria-label": "Without label" }}
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
                        </div>
                        <SearchAble />
                      </div>
                    </div>
                  </Row>
                </div>
                <div className="col-12 col-md-4">
                  <div className="addressbook_form_heading">
                    <p>Optional Settings</p>
                  </div>
                  <Row>
                    <div className="col-12">
                      <div className="input_field_outer">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Type Of Address
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={addressType}
                            label="Company Type"
                            onChange={(event) =>
                              setAddressType(event.target.value)
                            }
                          >
                            <MenuItem value={"commercial"}>commercial</MenuItem>
                            <MenuItem value={"private"}>private</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input_field_outer">
                        <TextField
                          fullWidth
                          label="The Internal Term"
                          value={internalTerm}
                          onChange={(event) =>
                            setInternalTerm(event.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="checkmark_input_outer">
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                defaultChecked
                                onChange={(event) =>
                                  setIsBillingAddress(!isBillingAddress)
                                }
                              />
                            }
                            label="This is one of my billing addresses"
                          />
                        </FormGroup>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="checkmark_input_outer">
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                defaultChecked
                                onChange={(event) =>
                                  setIsShippingAddress(!isShippingAddress)
                                }
                              />
                            }
                            label="This is one of my shipping addresses"
                          />
                        </FormGroup>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="checkmark_input_outer">
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                defaultChecked
                                onChange={(event) =>
                                  setIsDefaultAddress(!isDefaultAddress)
                                }
                              />
                            }
                            label="This is my new default address"
                          />
                        </FormGroup>
                      </div>
                    </div>
                  </Row>
                </div>
                <div className="col-12">
                  <div className="form_save_button">
                    <button type="submit">Save</button>
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

export default AddressBook;
