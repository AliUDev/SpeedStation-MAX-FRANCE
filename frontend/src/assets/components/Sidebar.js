import React from "react";
import { Link } from "react-router-dom";

import Logo from "../images/logo.png";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InsightsIcon from "@mui/icons-material/Insights";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import EuroIcon from "@mui/icons-material/Euro";

import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const userData = useSelector((state) => state.auth.user);

  let dashbord = userData.isFrightForwarder;

  return (
    <div className={`${props.adminToggle ? "Sidebar" : "hidden_Sidebar"}`}>
      <div className="sidebar_inner">
        <div className="sidebar_logo">
          <img src={Logo} className="sidebar_logo_img" alt="main logo" />
        </div>
        <div className="sidebar_dashboard_links">
          {dashbord ? (
            <>
              <Link
                to="/dashboard"
                className="transportation_booking_link w-100"
              >
                <LocalShippingIcon /> Transport buchen
              </Link>
              <p className="m-0">
                <a
                  className="d-flex w-100 justify-content-between"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="d-flex gap-2">
                    <InsightsIcon /> analysieren
                  </span>
                  <ArrowDropDownIcon className="text-end" />
                </a>
              </p>
              <div className="collapse ps-4" id="collapseExample">
                <Link to={"/overview"}>
                  <ViewQuiltIcon /> Überblick
                </Link>
                <Link to={"/analyse-shippings"}>
                  <BusinessCenterIcon /> Buchung
                </Link>
                <Link to={"/analyse-sales"}>
                  <EuroIcon /> Verkauf
                </Link>
              </div>

              <Link to="/orders">
                <BusinessCenterIcon />
                Aufträge
              </Link>
              {/* <Link to="/idea">
                <LocalShippingIcon />
                Pursuer
              </Link> */}
              {/* <Link to="/user">
                <FaUserAlt />
                User
              </Link> */}
              {/* <Link to="/fuelsurcharges">
                <LocalGasStationIcon />
                FuelSurCharges
              </Link> */}
              <Link to="/directory">
                <ContactMailIcon />
                Verzeichnis
              </Link>
              <Link to="/idea">
                <SettingsIcon />
                Ideen
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="transportation_booking_link">
                <LocalShippingIcon /> Transport buchen
              </Link>

              <Link to="/dashboard">
                <DashboardIcon />
                Armaturenbrett
              </Link>
              <Link to="/orders">
                <BusinessCenterIcon />
                Aufträge
              </Link>
              <Link to="/tarif">
                <BusinessCenterIcon />
                Configurator Tarif
              </Link>
              <Link to="/directory">
                <ContactMailIcon />
                Verzeichnis
              </Link>
              <Link to="/idea">
                <SettingsIcon />
                Ideen
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
