import React from "react";
import { Link } from "react-router-dom";
import "../sass/style.scss";
import Manager from "../images/product-manager-primary.png";
import Test from "../images/product-manager-primary.png";

const Benefitcard = () => {
  return (
    <div className="benefits-card">
      <img src={Test} />
      <div className="benefits-card-text">
        <h4>Vertrauen und Verantwortung</h4>
        <p>
          Bei speditioncheck vertrauen wir einander. Egal ob herausfordernde
          Aufgaben, vermeintlich „ .
        </p>
      </div>
    </div>
  );
};

export default Benefitcard;
