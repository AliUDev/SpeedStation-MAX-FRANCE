import React, { useState } from "react";
import "../assets/sass/style.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { LoginUser } from "../assets/apis/ApiSerives";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../store/AuthSlice";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();
  const { state } = useLocation();
  const params = new URLSearchParams(window.location.search);
  const checkout = params.get("checkout");

  const userData = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const handleLoginUser = async (event) => {
    event.preventDefault();
    try {
      const response = await LoginUser(email, password);
      if (response.status === 200) {
        dispatch(authSliceActions.handleIsAuth());
        dispatch(authSliceActions.handleUserLoggedIn(response?.data.data));
        if (checkout === null) {
          navigate("/");
        } else {
          navigate("/booking-step-one", {
            state: {
              ...state,
              clientComapny: response?.data.data.company,
              clientComapnyType: response?.data.data.companyType,
              clientSalesTaxId: response?.data.data.salesAndTaxId,
              clientSalutation: response?.data.data.salutation,
              clientFirstName: response?.data.data.firstName,
              clientFastName: response?.data.data.lastName,
              clientHouseNum: response?.data.data.houseNumber,
              clientAddress: response?.data.data.addressSupplement,
              clientPostCode: response?.data.data.postCode,
              clientLocation: response?.data.data.location,
              clientPhoneNumber: response?.data.data.phoneNumber,
              clientCountry: response?.data.data.country,
              clientEmail: response?.data.data.email,
            },
          });
        }
      }
    } catch (error) {
      if (error.response.status === 401) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Passwort stimmt nicht überein",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Benutzer nicht gefunden",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="auth-body d-flex">
      <div className="blank_screen">
        <div>
          <p>Die beliebteste Versandseite Deutschlands</p>
          <button onClick={() => navigate("/")}>Geh zurück</button>
        </div>
      </div>
      <div className="auth_screen">
        {/* <div className="back_link_outer">
          <Link to="/">Geh zurück</Link>
        </div> */}
        <div className="inner_body">
          {/* <div className="logo">
            <img src={Logo} alt="spedition check logo" />
          </div>
          <div className="title">Anmeldung</div> */}
          <h1>
            <div className="logo">
              <img src={Logo} alt="spedition check logo" />
            </div>
          </h1>
          <h2 className="hello_heading">Hallo wieder</h2>
          <h5 className="welcome_heading">Willkommen zurück</h5>
          <div className="login_form">
            <form onSubmit={(event) => handleLoginUser(event)}>
              <Container>
                <Row>
                  <div className="col-12 p-0">
                    <div className="input_field_outer">
                      <EmailIcon className="email_icon_login" />
                      <TextField
                        fullWidth
                        label="E-Mail-Addresse"
                        type={"email"}
                        required
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 p-0">
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

                  <button type="submit" className="submitt_button">
                    Anmeldung
                  </button>
                  <Link className="forgot_pswd_link" to="/forget">
                    Passwort vergessen..?
                  </Link>
                  <div className="separator">
                    <p>ODER</p>
                  </div>
                  <div className="register_Category_links">
                    {checkout === null ? (
                      <>
                        <Link to={"/signup/forwarder?plan=paid"}>
                          Als Absender anmelden
                        </Link>
                        <Link to={"/signup/freight-forwarder?plan=paid"}>
                          Registrieren Sie einen Spediteur
                        </Link>
                      </>
                    ) : (
                      <Link
                        to={"/signup/forwarder?plan=guest"}
                        state={{ ...state }}
                      >
                        als Gast anmelden
                      </Link>
                    )}
                  </div>
                  {/* <SearchAble /> */}
                </Row>
              </Container>
            </form>
          </div>
        </div>
        <div className="auth_copyright_outer"></div>
      </div>
    </div>
  );
};

export default Login;
