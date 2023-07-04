import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { createOrder } from "../assets/apis/ApiSerives";
import logo from "../assets/images/logo.png";

const ConfirmOrder = () => {
  const { state } = useLocation();

  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.auth.isAuth);
  const userData = useSelector((state) => state.auth.user);

  console.log(state);

  let obj = { userId: userData._id, ...state };
  const handleCreateShipping = async (event) => {
    event.preventDefault();
    try {
      const response = await createOrder(obj);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bestellung erfolgreich erstellt",
          showConfirmButton: false,
          timer: 1500,
        });
        if (isAuth) {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Etwas ist schief gelaufen",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="">
      <div className="booking-step-nav">
        <img src={logo} alt="top nav main logo" />
      </div>
      <div className="confirm-booking-detailes">
        <h2>Ihr Transport</h2>
        <div className="card p-3">
          <div className="d-flex justify-content-between pb-3 mb-3 border-bottom">
            <div className="d-flex gap-4">
              <strong>#</strong>
              <strong>Beschreibung</strong>
            </div>
            <strong>Preis</strong>
          </div>
          <div className="d-flex justify-content-between detailes-card-confirm-order">
            <div className="d-flex gap-4">
              <strong>{state.charge.length}</strong>
              <div className="d-flex flex-column">
                <p>1 Paket</p>
                <p>{state.shippingCost} kg Gewicht</p>
                <p>
                  Geschätzte Abholzeit: am{" "}
                  {dayjs(state.currentDate).format("dddd")},{" "}
                  {dayjs(state.currentDate).format("MMMM")} {state.currentDate}
                </p>
                <p>
                  Voraussichtliche Lieferzeit: am{" "}
                  {dayjs(state.deliveryDate).format("dddd")},{" "}
                  {dayjs(state.deliveryDate).format("MMMM")}{" "}
                  {state.deliveryDate}
                </p>
              </div>
            </div>
            <strong>{state.totalCost}€</strong>
          </div>
        </div>
      </div>
      <div className="confirm-booking-detailes">
        <h2>Adressen</h2>
        <div className="card p-3">
          <div className="d-flex justify-content-between detailes-card-confirm-order detailes-card-information">
            <div className="d-flex flex-column">
              <strong className="mb-3">Klient</strong>
              <strong>{state.companyName}</strong>
              <span>
                {userData.firstName} {userData.lastName}
              </span>
              <span>{userData?.addressSupplement}</span>
              <span>{userData?.location}</span>
              <span>{userData?.addressSupplement}</span>
              <span>{userData?.companyType}</span>
              <span>{userData?.salesAndTaxId}</span>
              <span>{userData.email}</span>
              <span>{userData.phoneNumber}</span>
            </div>
            <div className="d-flex flex-column">
              <strong className="mb-3">Sender</strong>
              <strong>codezbit</strong>
              <span>
                {state.senderFirstName} {state.senderLastName}
              </span>
              <span>{state.senderHouseNum}</span>
              <span>{state.senderAddress}</span>
              <span>{state.pickUpLocation}</span>
              <span>{state.senderEmail}</span>
              <span>{state.senderPhoneNum}</span>
            </div>
            <div className="d-flex flex-column">
              <strong className="mb-3">Recipient</strong>
              <strong>codezbit</strong>
              <span>
                {state.reciverFirstname} {state.reciverLastname}
              </span>
              <span>{state.reciverHouseNum}</span>
              <span>{state.reciverAddress}</span>
              <span>{state.deliveryLocation}</span>
              <span>{state.reciverEmail}</span>
              <span>{state.reciverPhoneNum}</span>
            </div>
          </div>
        </div>
      </div>
      <button
        className="confirm-order-button"
        type="button"
        onClick={(event) => handleCreateShipping(event)}
      >
        Bestellung bestätigen
      </button>
    </div>
  );
};

export default ConfirmOrder;
