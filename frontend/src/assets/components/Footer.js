import React from "react";
import "./Footer.scss";
import { Container, Row } from "react-bootstrap";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaClock, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import visacards from "../images/visacards.svg";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="Footer_wrapper">
        <div className="footer_overlay">
          <Container>
            <Row className="justify-content-center">
              <div className="col-12 col-lg-3 mb-4">
                <div className="footer_logo_Section">
                  <div className="footer_logo_name">
                    <img src={logo} width="250px" alt={"footer main logo"} />
                  </div>
                  <p>
                    Wir bringen Sie als unabhängiges Vergleichs- und
                    Buchungsportal mit Speditionen zusammen. Unter dem Motto
                    #CheckDeineSpedition
                  </p>
                  <div className="d-flex justify-content-center gap-5 mt-3">
                    <FaFacebookF color="#007ffb" size={28} />
                    <InstagramIcon style={{ fill: "#007bff", fontSize: 28 }} />
                    <FaGoogle color="#007ffb" fontSize={28} />
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="footer_link_Section">
                  <ul>
                    <li className="mb-5">
                      <Link to="">Link</Link>
                    </li>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">Uber uns</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="footer_link_Section">
                  <ul>
                    <li className="mb-5">
                      <Link to="">Service</Link>
                    </li>
                    <li>
                      <Link to="">FAQ</Link>
                    </li>
                    <li>
                      <Link to="">Buchungsstornierung</Link>
                    </li>
                    <li>
                      <Link to="">Sendungsverfolgung</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="footer_link_Section">
                  <ul className="contact_list">
                    <li className="icon_list_item mb-5">
                      <Link to="tel:+4733378901">Kontakt</Link>
                    </li>
                    <li className="icon_list_item">
                      <FaClock />
                      <Link to="/">
                        <p> Mo - Fr : 8 - 12 Uhr</p>
                      </Link>
                    </li>
                    <li className="icon_list_item">
                      <PhoneIcon></PhoneIcon>
                      <Link to="tel:+4733378901">
                        <p>+47 333 78 901</p>
                      </Link>
                    </li>
                    <li className="icon_list_item">
                      <EmailIcon></EmailIcon>
                      <Link to="mailto:info@speditioncheck.de">
                        <p>info@speditioncheck.de</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      <div>
        <div className="copyright-container p-4">
          <div>
            <span className="text-light">
              © 2022 Speditioncheck. All rights reserved
            </span>
            <span className="text-light">Impressum</span>
            <span className="text-light">Nutzungsbedingungen</span>
            <span className="text-light">Datenschutz</span>
            <span className="text-light">Cookies</span>
          </div>
          <img src={visacards} alt="visa card" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
