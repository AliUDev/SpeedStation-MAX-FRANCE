import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Logo from "../images/company_logo.png";

const CompanyInfo = (props) => {
  console.log(props);
  const [show, setShow] = useState(false);
  return (
    <div className="company-info-card">
      <div className="company-info-card-content">
        {props.error ? (
          <div className="p-4">KEIN UNTERNEHMEN ZUM ANZEIGEN</div>
        ) : (
          <>
            <div className="company-info-card-image-section">
              <p className="fw-bold">
                {props.isCommercial ? (
                  <div>
                    <strong>Name der Firma:</strong> {props.companyName}
                  </div>
                ) : (
                  <div>
                    <strong>Privater Spediteur:</strong> {props.firstName}
                  </div>
                )}
              </p>
            </div>
            <div className="company-info-card-description">
              <div className="company-info-card-description-content">
                <p>
                  {props.isCommercial ? (
                    <div>
                      <strong>Firmen-E-Mail:</strong> {props.companyEmail}
                    </div>
                  ) : (
                    <div>
                      <strong>private Weiterleitungs-E-Mail:</strong>{" "}
                      {props.companyEmail}
                    </div>
                  )}
                </p>
                <p>
                  <strong>Unternehmenstyp: </strong>{" "}
                  {props.isCommercial ? "Werbung" : "Privatgelände"}
                </p>
                <div className="package-info">
                  <p>
                    <b>Belastung:</b> {props.load.map((data) => data)}
                  </p>
                  <div className="vorkas">Vorkas</div>
                  <div className="show-more">
                    {/* <div className="text-grey" onClick={() => setShow(!show)}>
                      Zeig mehr
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons_container_charge">
              <h2 className="text-detailes-booking  text-center">
                €{isNaN(props.shippingCost) ? 0 : props.shippingCost}
              </h2>
              <button
                onClick={props.onClick}
                className="btn btn-detailes-booking text-nowrap"
              >
                Details & Buchung
              </button>
            </div>
          </>
        )}
      </div>
      {show && (
        <div className="hidden-collapse">
          <Row>
            <div className="col-4">
              <ul>
                <label>
                  <b>Additional services:</b>
                </label>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <label>
                  <b>Hints:</b>
                </label>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <label>
                  <b>Not Transportable:</b>
                </label>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
                <li>Delivery one working day after collection (optional)</li>
              </ul>
            </div>
          </Row>
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;
