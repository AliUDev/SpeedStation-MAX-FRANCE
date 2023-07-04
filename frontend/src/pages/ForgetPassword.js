import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { ForgetPasswordLink } from "../assets/apis/ApiSerives";
import EmailIcon from "@mui/icons-material/Email";

import Swal from "sweetalert2";
import "../assets/sass/style.scss";

const ForgetPassword = () => {
  const [email, setEmail] = useState(null);

  const navigate = useNavigate();

  const handleForgetPassword = async (event) => {
    event.preventDefault();
    try {
      let response = await ForgetPasswordLink(email);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "E-Mail erfolgreich gesendet",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Interner Serverfehler",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="auth-body d-flex">
      <div className="blank_screen">
        <div>
          <h1>
            <div className="logo">
              <img src={Logo} alt="spedition check logo" />
            </div>
          </h1>
          <p>Die beliebteste Versandseite Deutschlands</p>
          <button onClick={() => navigate("/")}>Geh zurück</button>
        </div>
      </div>
      <div className="auth_screen">
        <h1 className="title">Passwort vergessen</h1>
        <div className="inner_body">
          <form
            onSubmit={(event) => handleForgetPassword(event)}
            className="login_form"
          >
            <Container>
              <Row>
                <div className="col-12">
                  <div className="input_field_outer">
                    <EmailIcon className="email_icon_login" />
                    <TextField
                      fullWidth
                      label="E-Mail-Addresse"
                      required
                      type={"email"}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>
                <Link className="forgot_pswd_link" to="/login">
                  Hier anmelden
                </Link>
                <button type={"submit"} className="submitt_button">
                  Einreichen
                </button>
              </Row>
            </Container>
          </form>
        </div>
        <div className="auth_copyright_outer"></div>
      </div>
      {/* <div className="blank_screen"></div> */}
    </div>
  );
};

export default ForgetPassword;
