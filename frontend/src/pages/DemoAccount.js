import React from "react";
import Footer from "../assets/components/Footer";
import NavbarLogout from "./NavbarLogout";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CableIcon from "@mui/icons-material/Cable";
import PaymentIcon from "@mui/icons-material/Payment";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import ThumbsUpDownOutlinedIcon from "@mui/icons-material/ThumbsUpDownOutlined";
import { GrCompliance } from "react-icons/gr";

import { Link } from "react-router-dom";

const DemoAccount = () => {
  return (
    <React.Fragment>
      <NavbarLogout />
      <div className="demo-account-hero-banner">
        <h1 className="text-center">Ihre digitale Weiterleitung online</h1>
        <p className="text-center">Die Toolbox für den digitalen Vertrieb</p>
        <div>
          <a href={"#create-demo-account"} className="btn">
            kostenlos testen
          </a>
        </div>
      </div>

      <div className="video-container">
        <video controls autoPlay>
          <source src="https://www.youtube.com/watch?v=1LkOa7Ky2ak" />
        </video>
      </div>

      <div className="demo-account-success-stories">
        <h1>Erfolgsgeschichte</h1>
        <p>Eine Spedition erfolgreich digitalisieren</p>
        <p>am Beispiel der FME Frachtmanagement Europe GmbH</p>
        <div>
          <div className="card">
            <h1>30</h1>
            <h3>Protokoll</h3>
            <p>
              übernimmt die Installation und Integration von speditioncheck4You
              die FME-Website. speditioncheck funktioniert Plug & Play mit Ihrem
              TMS und verursacht keinen IT-Aufwand.
            </p>
          </div>
          <div className="card">
            <h1>€110,000</h1>
            <h3>Umsatz / Monat</h3>
            <p>
              generierten wir innerhalb der ersten Monate via speditioncheck.
              speditioncheck arbeitet bei FME wie ein Handelsvertreter und
              reduziert den Akquisitionsaufwand erheblich.
            </p>
          </div>
          <div className="card">
            <h1>3</h1>
            <h3>Sekunden / Angebot</h3>
            <p>
              Die Preise für eine Anfrage werden berechnet und angezeigt sofort.
              Interessenten können direkt digital buchen online. Das geht nicht
              nur schnell, sondern auch kundenfreundlich.
            </p>
          </div>
        </div>
      </div>

      <div className="demo-account-digital-advantage">
        <h1 className="text-center">Digital Advantage</h1>
        <p className="text-center">In All Speditioncheck Products</p>
        <div>
          <div className="card">
            <SupportAgentIcon />
            <h4>Premium Support</h4>
            <p>
              We support you in setting up and designing your individual
              solution.
            </p>
          </div>
          <div className="card">
            <CableIcon />
            <h4>TMS connection</h4>
            <p>for smooth transmission of orders, labels and status</p>
          </div>
          <div className="card">
            <PaymentIcon />
            <h4>Online payment & factoring</h4>
            <p>for smooth transmission of orders, labels and status</p>
          </div>
        </div>
      </div>

      <div id="create-demo-account" className="demo-account-registration-card">
        <h1>Start digitizing your forwarding agency</h1>
        <p>and secure access to thousands of shippers on speditioncheck.de</p>
        <div className="card">
          <Link
            to={"/signup/freight-forwarder?plan=free"}
            className="btn demo-account-btn"
          >
            Create A Demo Account
          </Link>
          <span>or call us at</span>
          <a href="tel:+4733378901">+47 333 789 01</a>
        </div>
      </div>

      <div className="demo-account-countup">
        <div className="card">
          <Person3OutlinedIcon />
          <div>
            <h6>1,500 Spediteure</h6>
            <p>pro Tag auf Speditioncheck</p>
          </div>
        </div>
        <div className="card">
          <GrCompliance className="icons-svg-path-color" />
          <div>
            <h6>DSGVO-konform</h6>
            <p>Datenmanagement</p>
          </div>
        </div>
        <div className="card">
          <BackupOutlinedIcon />
          <div>
            <h6>Cloud-Software</h6>
            <p>Hergestellt in Deutschland</p>
          </div>
        </div>
        <div className="card">
          <ThumbsUpDownOutlinedIcon />
          <div>
            <h6>4,5 von 5 Sternen</h6>
            <p>auf Trustpilot</p>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default DemoAccount;
