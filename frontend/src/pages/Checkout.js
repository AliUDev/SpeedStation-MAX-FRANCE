import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../assets/components/Footer";
import { TextField } from "@mui/material";
import BookingCard from "../assets/components/BookingCard";
import { useLocation, useNavigate } from "react-router";
import dayjs from "dayjs";

import "../assets/sass/style.scss";
import "../assets/sass/Style2.scss";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { state } = useLocation();
  const [isTouched1, setIsTouched1] = useState(false);
  const [isTouched2, setIsTouched2] = useState(false);
  const [isTouched3, setIsTouched3] = useState(false);
  const [isTouched4, setIsTouched4] = useState(false);
  const [deliveryOnWorkingDay, setDeliveryOnWorkingDay] = useState(false);
  const [deliveryLastMinute, setDeliveryLastMinute] = useState(false);
  const [hourlyDelivery, setHourlyDelivery] = useState(false);
  const [deliveryByTwo, setDeliveryByTwo] = useState(false);
  const [totalCost, setTotalCost] = useState(
    isNaN(state.totalCost) ? 0 : state.totalCost
  );

  const isAuth = useSelector((state) => state.auth.isAuth);
  const userData = useSelector((state) => state.auth.user);

  const navigate = useNavigate();

  let currentDate = dayjs(new Date()).format("YYYY-MM-DD");
  let deliveryDate = dayjs(currentDate).add(7, "day").format("YYYY-MM-DD");
  let currentTime = dayjs(new Date()).format("hh:mm");

  const handleHourlydelivery = () => {
    setHourlyDelivery(!hourlyDelivery);
    setDeliveryByTwo(false);
  };

  const handleDeliveryByTwo = () => {
    setDeliveryByTwo(!deliveryByTwo);
    setHourlyDelivery(false);
  };

  useEffect(() => {
    let cost = totalCost;
    if (deliveryOnWorkingDay && !isTouched1) {
      cost += 45;
      setIsTouched1(true);
    }
    if (!deliveryOnWorkingDay && isTouched1) {
      cost -= 45;
      setIsTouched1(false);
    }
    if (deliveryLastMinute && !isTouched2) {
      cost += 25;
      setIsTouched2(true);
    }
    if (!deliveryLastMinute && isTouched2) {
      cost -= 25;
      setIsTouched2(false);
    }
    if (hourlyDelivery && !isTouched3) {
      cost += 45;
      setIsTouched3(true);
    }
    if (!hourlyDelivery && isTouched3) {
      cost -= 45;
      setIsTouched3(false);
    }
    if (deliveryByTwo && !isTouched4) {
      cost += 45;
      setIsTouched4(true);
    }
    if (!deliveryByTwo && isTouched4) {
      cost -= 45;
      setIsTouched4(false);
    }
    setTotalCost(cost);
  }, [
    deliveryOnWorkingDay,
    deliveryLastMinute,
    hourlyDelivery,
    deliveryByTwo,
    isTouched1,
    isTouched2,
    isTouched3,
    isTouched4,
    totalCost,
  ]);

  const handleNavigateTobookingSteps = () => {
    if (isAuth) {
      navigate("/booking-step-one", {
        state: {
          ...state,
          totalCost: totalCost,
          deliveryDate:
            state.desiredDeliveryDate !== ""
              ? state.desiredDeliveryDate.split("T")[0]
              : deliveryDate,
          currentDate,
          currentTime,
          clientComapny: userData.company,
          clientComapnyType: userData.companyType,
          clientSalesTaxId: userData.salesAndTaxId,
          clientSalutation: userData.salutation,
          clientFirstName: userData.firstName,
          clientFastName: userData.lastName,
          clientHouseNum: userData.houseNumber,
          clientAddress: userData.addressSupplement,
          clientPostCode: userData.postCode,
          clientLocation: userData.location,
          clientPhoneNumber: userData.phoneNumber,
          clientCountry: userData.country,
          clientEmail: userData.email,
        },
      });
    } else {
      navigate("/login?checkout=true", {
        state: {
          ...state,
          totalCost: totalCost,
          deliveryDate:
            state.desiredDeliveryDate !== ""
              ? state.desiredDeliveryDate.split("T")[0]
              : deliveryDate,
          currentDate,
        },
      });
    }
  };

  return (
    <div className="about-us-body">
      <div className="about-us-header">
        <Container>
          <div className="about-us-header-content">
            <h1>Wer ist speditioncheck?</h1>
            <h4>Wir über uns</h4>
          </div>
        </Container>
      </div>
      <Container className="py-5">
        <Row>
          <div className="col-lg-7 col-12">
            <div className="card">
              <Container>
                <Row>
                  <div className="col-6 p-3">
                    <h5>Sammlung</h5>
                    <Container className="p-0 pt-2">
                      <Row>
                        <div className="col-6">
                          <TextField
                            id="date"
                            label="Datum"
                            type="date"
                            value={currentDate}
                            sx={{ width: "100%" }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{ readOnly: true }}
                          />
                        </div>
                        <div className="col-6">
                          <TextField
                            id="time"
                            label="Abholzeit"
                            type="time"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            sx={{ width: "100%" }}
                            InputProps={{ readOnly: true }}
                            value={currentTime}
                          />
                        </div>
                      </Row>
                    </Container>
                    <div className="pt-2">
                      <strong>Abholung ist</strong> An{" "}
                      {dayjs(currentDate).format("dddd")},<br />
                      {dayjs(currentDate).format("MMMM")} {currentDate}
                    </div>
                  </div>
                  <div className="col-6 p-3">
                    <h5>Lieferung</h5>
                    <Container className="p-0 pt-2">
                      <Row>
                        <div className="col-6">
                          <TextField
                            id="date"
                            label="Date"
                            type="date"
                            value={
                              state.desiredDeliveryDate !== ""
                                ? state.desiredDeliveryDate.split("T")[0]
                                : deliveryDate
                            }
                            sx={{ width: "100%" }}
                            InputProps={{ readOnly: true }}
                          />
                        </div>
                        <div className="col-6">
                          <TextField
                            id="time"
                            label="Abholzeit"
                            type="time"
                            value={currentTime}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            inputProps={{
                              step: 300, // 5 min
                            }}
                            sx={{ width: "100%" }}
                            InputProps={{ readOnly: true }}
                          />
                        </div>
                      </Row>
                    </Container>
                    <div className="pt-2">
                      <strong>Die Lieferung erfolgt</strong> An{" "}
                      {state.desiredDeliveryDate !== ""
                        ? dayjs(state.desiredDeliveryDate).format("dddd")
                        : dayjs(deliveryDate).format("dddd")}
                      ,<br />
                      {state.desiredDeliveryDate !== ""
                        ? dayjs(state.desiredDeliveryDate).format("MMMM")
                        : dayjs(deliveryDate).format("MMMM")}{" "}
                      {state.desiredDeliveryDate !== ""
                        ? state.desiredDeliveryDate.split("T")[0]
                        : deliveryDate}
                    </div>
                  </div>
                </Row>
              </Container>
              <div className="d-flex">
                <div
                  onClick={() => setDeliveryOnWorkingDay(!deliveryOnWorkingDay)}
                  className={
                    deliveryOnWorkingDay
                      ? "card m-2 p-2 justify-content-between rounded-0 w-100 delivery-selected-true"
                      : "card m-2 p-2 justify-content-between rounded-0 w-100"
                  }
                >
                  <p className="delivery-card-text">
                    Zustellung einen Werktag nach Abholung
                  </p>
                  <strong className="delivery-card-price-text">45 €</strong>
                </div>
                <div
                  onClick={() => setDeliveryLastMinute(!deliveryLastMinute)}
                  className={
                    deliveryLastMinute
                      ? "card m-2 p-2 justify-content-between rounded-0 w-100 delivery-selected-true"
                      : "card m-2 p-2 justify-content-between rounded-0 w-100"
                  }
                >
                  <p className="delivery-card-text">Last-Minute-Buchung</p>
                  <strong className="delivery-card-price-text">25 €</strong>
                </div>
                <div
                  onClick={() => handleHourlydelivery()}
                  className={
                    hourlyDelivery
                      ? "card m-2 p-2 justify-content-between rounded-0 w-100 delivery-selected-true"
                      : "card m-2 p-2 justify-content-between rounded-0 w-100"
                  }
                >
                  <p className="delivery-card-text">Stündliche Lieferung</p>
                  <strong className="delivery-card-price-text">45 €</strong>
                </div>
                <div
                  onClick={() => handleDeliveryByTwo()}
                  className={
                    deliveryByTwo
                      ? "card m-2 p-2 justify-content-between rounded-0 w-100 delivery-selected-true"
                      : "card m-2 p-2 justify-content-between rounded-0 w-100"
                  }
                >
                  <p className="delivery-card-text">Lieferung bis 14:00 Uhr</p>
                  <strong className="delivery-card-price-text">45 €</strong>
                </div>
              </div>
            </div>
            <div className="card p-3 mt-3">
              <h6>Hinweise der Reederei</h6>
              <p>
                <strong>
                  Bitte beachten Sie: Abhol- und Liefertermine können nur
                  eingehalten werden, wenn Zahlung per Vorkasse (Tag vor
                  Abholung) am erfolgt Speditionskonto. Ansonsten Zeitpunkt des
                  Transports hängt vom Zahlungseingang ab.
                </strong>{" "}
                Bei Fragen wenden Sie sich bitte an das Versandunternehmen. Wenn
                Sie vor Abholung und Lieferung anrufen möchten, bitten wir Sie
                um die Benachrichtigung auf speditioncheck.de zu buchen.
                Ansonsten der Fahrer ruft NICHT an! Bitte buchen Sie eine
                Hebebühne + Palette LKW, wenn Sie keinen Gabelstapler oder keine
                Laderampe haben
              </p>
            </div>
          </div>

          <BookingCard
            onClick={() => handleNavigateTobookingSteps()}
            deliveryOnWorkingDay={deliveryOnWorkingDay}
            deliveryLastMinute={deliveryLastMinute}
            deliveryByTwo={deliveryByTwo}
            hourlyDelivery={hourlyDelivery}
            totalCost={totalCost.toFixed(2)}
            deliveryDate={deliveryDate}
            currentDate={currentDate}
          />
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default Checkout;
