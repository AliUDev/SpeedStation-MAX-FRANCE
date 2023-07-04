import React from "react";
import { Link } from "react-router-dom";
import "../sass/style.scss";
import Test from "../images/product-manager-primary.png";

const Fragecard = () => {
  return (
    <div className="frage-card">
      <img src={Test} />
      <div className="frage-card-text">
        <a href="#">
          <h4>speditioncheck bewerten</h4>
        </a>
        <p>Ich möchte speditioncheck bei Trustpilot bewerten.</p>
      </div>
    </div>
  );
};

export default Fragecard;
