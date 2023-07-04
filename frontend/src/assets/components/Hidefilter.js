import React, { useState } from "react";
import "../sass/style.scss";
import { Container } from "react-bootstrap";

const Hidefilter = (props) => {
  const [show, setShow] = useState(false);
  const [collection, setcollection] = useState(false);
  const [delivery, setdelivery] = useState(false);
  const [custom, setcustom] = useState(false);

  return (
    <div>
      <Container>
        <div className="hide-filter-body">
          <div
            className="hide-filter-title text-lowercase fw-bold"
            onClick={() => setShow(!show)}
          >
            Kundengruppe
          </div>
          {show && (
            <div className="hidden-collapse">
              <div className="hidden-body">
                <div className="select-filter">
                  <p onClick={() => props.setCustomerGroup("commercial")}>
                    Für den gewerblichen Kunden
                  </p>
                </div>
                <div className="select-filter">
                  <p onClick={() => props.setCustomerGroup("private")}>
                    Für den Privatkunden
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hide-filter-body">
          <div
            className="hide-filter-title text-lowercase fw-bold"
            onClick={() => setcollection(!collection)}
          >
            Benachrichtigung
          </div>
          {collection && (
            <div className="hidden-collapse">
              <div className="hidden-body">
                <div
                  className={
                    props.pickupNotification
                      ? "cargo-type-selected select-filter"
                      : "select-filter"
                  }
                >
                  <p
                    onClick={() =>
                      props.setPickupNotification(!props.pickupNotification)
                    }
                  >
                    Abholbenachrichtigung
                  </p>
                </div>
                <div
                  className={
                    props.deliveryNotification
                      ? "cargo-type-selected select-filter"
                      : "select-filter"
                  }
                >
                  <p
                    onClick={() =>
                      props.setDeliveryNotification(!props.deliveryNotification)
                    }
                  >
                    Versandbenachrichtigung
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hide-filter-body">
          <div
            className="hide-filter-title text-lowercase fw-bold"
            onClick={() => setdelivery(!delivery)}
          >
            Sammlung
          </div>
          {delivery && (
            <div className="hidden-collapse">
              <div className="hidden-body">
                <div className="select-filter">
                  <p className="date-picker">
                    <label for="birthdaytime">Gewünschter Abholtag</label>
                    <input
                      type="datetime-local"
                      id="birthdaytime"
                      name="birthdaytime"
                      onChange={(event) =>
                        props.setDesiredDeliveryDate(event.target.value)
                      }
                    />
                  </p>
                </div>
                <div className="select-filter">
                  <p>Für den gewerblichen Kunden</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hide-filter-body">
          <div
            className="hide-filter-title text-lowercase fw-bold"
            onClick={() => setcustom(!custom)}
          >
            Ladung
          </div>
          {custom && (
            <div className="hidden-collapse">
              <div className="hidden-body">
                <div
                  className={
                    props.cargoType === "dangerous-goods"
                      ? "cargo-type-selected select-filter"
                      : "select-filter"
                  }
                >
                  <p onClick={() => props.setCargoType("dangerous-goods")}>
                    Gefahrgut
                  </p>
                </div>
                <div
                  className={
                    props.cargoType === "Fahrräder"
                      ? "cargo-type-selected select-filter"
                      : "select-filter"
                  }
                >
                  <p onClick={() => props.setCargoType("Fahrräder")}>
                    Fahrräder
                  </p>
                </div>
                <div
                  className={
                    props.cargoType === "Motorräder"
                      ? "cargo-type-selected select-filter"
                      : "select-filter"
                  }
                >
                  <p onClick={() => props.setCargoType("Motorräder")}>
                    Motorräder
                  </p>
                </div>
                <div
                  className={
                    props.cargoType === "Lebensmittel"
                      ? "cargo-type-selected select-filter"
                      : "select-filter"
                  }
                >
                  <p onClick={() => props.setCargoType("Lebensmittel")}>
                    Lebensmittel
                  </p>
                </div>
                <div
                  className={
                    props.cargoType === "gekühlte-Speisen"
                      ? "cargo-type-selected select-filter"
                      : "select-filter"
                  }
                >
                  <p onClick={() => props.setCargoType("gekühlte-Speisen")}>
                    gekühlte Speisen
                  </p>
                </div>
                <div
                  className={
                    props.cargoType === "Gebrauchte-Möbel"
                      ? "cargo-type-selected select-filter"
                      : "select-filter"
                  }
                >
                  <p onClick={() => props.setCargoType("Gebrauchte-Möbel")}>
                    Gebrauchte Möbel
                  </p>
                </div>
                <div
                  className={
                    props.cargoType === "Neue-Möbel"
                      ? "cargo-type-selected select-filter"
                      : "select-filter"
                  }
                >
                  <p onClick={() => props.setCargoType("Neue-Möbel")}>
                    Neue Möbel
                  </p>
                </div>
                <div
                  className={
                    props.cargoType === "Ausgepackte-Möbel"
                      ? "cargo-type-selected select-filter"
                      : "select-filter"
                  }
                >
                  <p onClick={() => props.setCargoType("Ausgepackte-Möbel")}>
                    Ausgepackte Möbel
                  </p>
                </div>
                <div
                  className={
                    props.cargoType === "Gefrorenes-Essen"
                      ? "cargo-type-selected select-filter"
                      : "select-filter"
                  }
                >
                  <p onClick={() => props.setCargoType("Gefrorenes-Essen")}>
                    Gefrorenes Essen
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Hidefilter;
