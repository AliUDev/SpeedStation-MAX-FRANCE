import React from "react";
import "../sass/style.scss";
import Test from "../images/product-manager-primary.png";

const Kultercard = () => {
  return (
    <div className="kulter-card">
      <img src={Test} />
      <div className="kulter-card-text">
        <h4>Vertrauen und Verantwortung</h4>
        <p>
          Bei speditioncheck vertrauen wir einander. Egal ob herausfordernde
          Aufgaben, vermeintlich „dumme“ Fragen oder Arbeitszeiten –
          gegenseitiges Vertrauen ist essentiell für die Art wie wir arbeiten.
          Dies funktioniert, weil wir gemeinsam Verantwortung dafür übernehmen,
          Ergebnisse zu erzielen und speditioncheck voranzubringen.
        </p>
      </div>
    </div>
  );
};

export default Kultercard;
