import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

import "../assets/sass/Style2.scss";

const NavbarLogout = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="navbar_logout_logo"
            src={logo}
            alt="speditioncheck logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            {!isAuth ? (
              <>
                <Link className="btn align-self-center" to={"/"}>
                  Für Absender
                </Link>
                <Link className="btn align-self-center" to={"/demo-account"}>
                  Für Spediteure
                </Link>
                <button
                  onClick={() => navigate("/login")}
                  className="btn"
                  type="button"
                >
                  Anmeldung
                </button>
                <button
                  onClick={() =>
                    navigate("/signup/freight-forwarder?plan=paid")
                  }
                  className="btn btn-register"
                  type="button"
                >
                  Registrieren
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="btn"
                  type="button"
                >
                  Mein Konto
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLogout;
