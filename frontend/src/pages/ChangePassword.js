import React, { useState } from "react";
import "../assets/sass/style.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { ResetPasswordLink } from "../assets/apis/ApiSerives";
import Swal from "sweetalert2";

const ChangePassword = () => {
  const [password, setPassword] = useState(null);
  const { email } = useParams();

  const navigate = useNavigate();

  const handleForgetPassword = async (event) => {
    event.preventDefault();
    if (password.length < 8) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Das Passwort sollte 8 Zeichen lang sein",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      try {
        let response = await ResetPasswordLink(email, password);
        if (response.status === 200) {
          navigate("/login");
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
        <h1 className="title">Passwort zurücksetzen</h1>
        <div className="inner_body">
          <form
            onSubmit={(event) => handleForgetPassword(event)}
            className="login_form"
          >
            <Container>
              <Row>
                <div className="col-12">
                  <div className="input_field_outer">
                    <TextField
                      fullWidth
                      label="Passwort zurücksetzen"
                      required
                      type={"password"}
                      onChange={(event) => setPassword(event.target.value)}
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
    </div>
  );
};

export default ChangePassword;
