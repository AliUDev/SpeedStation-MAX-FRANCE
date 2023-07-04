import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { useLocation } from "react-router";
import dayjs from "dayjs";

const BookingCard = (props) => {
  const { state } = useLocation();

  return (
    <React.Fragment>
      <div className="col-lg-5 col-12 mt-lg-0 mt-4">
        <div className="card p-3">
          <h5>Einkaufswagen</h5>

          <div className="dates-area">
            <div className="d-flex justify-content-between dates-area-content">
              {props.currentDate && (
                <>
                  <div className="d-flex justify-content-between">
                    <div className="px-3 py-2">
                      <span>LieferTermin</span>
                      <div className="date-area">
                        <b>
                          {dayjs(props.currentDate).format("ddd")},
                          {dayjs(props.currentDate).format("DD")}
                          {dayjs(props.currentDate).format("MMMM")}
                          {dayjs(props.currentDate).format("YYYY")}
                        </b>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              )}
              {props.deliveryDate && (
                <>
                  <div className="d-flex justify-content-between">
                    <div className="px-3 py-2">
                      <span>Abholdatum</span>
                      <div className="date-area">
                        <b>
                          {dayjs(props.deliveryDate).format("ddd")},
                          {dayjs(props.deliveryDate).format("DD")}
                          {dayjs(props.deliveryDate).format("MMMM")}
                          {dayjs(props.deliveryDate).format("YYYY")}
                        </b>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <span>Grundpreis</span>
            <span>
              {isNaN(state.totalCost) ? 0 : state.totalCost.toFixed(2)} €
            </span>
          </div>
          <hr />
          {props.deliveryOnWorkingDay && (
            <>
              <div className="d-flex justify-content-between">
                <span>Zustellung einen Werktag nach Abholung</span>
                <span>45 €</span>
              </div>
              <hr />
            </>
          )}
          {props.deliveryLastMinute && (
            <>
              <div className="d-flex justify-content-between">
                <span>Last-Minute-Buchung</span>
                <span>25 €</span>
              </div>
              <hr />
            </>
          )}
          {props.deliveryByTwo && (
            <>
              <div className="d-flex justify-content-between">
                <span>Stündliche Lieferung</span>
                <span>45 €</span>
              </div>
              <hr />
            </>
          )}
          {props.hourlyDelivery && (
            <>
              <div className="d-flex justify-content-between">
                <span>Lieferung bis 14:00 Uhr</span>
                <span>45 €</span>
              </div>
              <hr />
            </>
          )}
          <div className="d-flex justify-content-between text-success">
            <b>
              <span>GesamtPreis</span>
            </b>
            <b>
              <span>{props.totalCost} €</span>
            </b>
          </div>
          <div className="d-flex justify-content-end pt-5">
            <button onClick={props.onClick} className="btn btn-booking">
              Zur Buchung
            </button>
          </div>
        </div>
        <div className="card mt-3 p-3">
          <h5>Ihre Sicherheit ist uns wichtig Community Verified icon</h5>
          <ul className="p-0">
            <li>
              <CheckIcon className="me-2" color="success" />
              Sichere Bezahlung
            </li>
            <li>
              <CheckIcon className="me-2" color="success" />
              verschlüsselte Übertragung Ihrer Daten
            </li>
            <li>
              <CheckIcon className="me-2" color="success" />
              geprüfter Spediteur
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookingCard;
