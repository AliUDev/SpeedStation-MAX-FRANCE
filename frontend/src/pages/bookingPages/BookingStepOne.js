import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import BookingStepsCard from "../../assets/components/BookingStepsCard";
import logo from "../../assets/images/logo.png";

const BookingStepOne = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [senderCompany, setSenderCompany] = useState("");
  const [reciverCompany, setReciverCompany] = useState("");
  const [senderFirstName, setSenderFirstName] = useState("");
  const [reciverFirstname, setReciverFirstName] = useState("");
  const [senderLastName, setSenderLastName] = useState("");
  const [reciverLastName, setReciverLastName] = useState("");
  const [senderHouseNum, setSenderHouseNum] = useState("");
  const [reciverHouseNum, setReciverHouseNum] = useState("");
  const [senderAddress, setSenderAddress] = useState("");
  const [reciverAddress, setReciverAddress] = useState("");
  const [senderPhoneNum, setSenderPhoneNum] = useState("");
  const [reciverPhoneNum, setReciverPhoneNum] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [reciverEmail, setReciverEmail] = useState("");
  const [senderPostCode, setSenderPostCode] = useState("");
  const [reciverPostCode, setReciverPostCode] = useState("");

  const handleToNextStep = async () => {
    navigate("/confirm-order", {
      state: {
        ...state,
        senderCompany,
        reciverCompany,
        senderFirstName,
        reciverFirstname,
        senderLastName,
        reciverLastName,
        senderHouseNum,
        reciverHouseNum,
        senderAddress,
        reciverAddress,
        senderPhoneNum,
        reciverPhoneNum,
        senderEmail,
        reciverEmail,
        senderPostCode,
        reciverPostCode,
      },
    });
  };

  return (
    <React.Fragment>
      <div className="booking-step-nav">
        <img src={logo} alt="speditioncheck" />
      </div>
      <div className="booking-step-1">
        <h1>Buchungsschritt 1</h1>
        <p>beginnen und beenden</p>

        <form
          onSubmit={(event) => handleToNextStep(event)}
          className="booking-step-cards-form"
        >
          <div className="booking-step-cards">
            <BookingStepsCard
              name={"sender"}
              setSenderCompany={setSenderCompany}
              setSenderFirstName={setSenderFirstName}
              setSenderLastName={setSenderLastName}
              setSenderHouseNum={setSenderHouseNum}
              setSenderAddress={setSenderAddress}
              setSenderPhoneNum={setSenderPhoneNum}
              setSenderEmail={setSenderEmail}
              setSenderPostCode={setSenderPostCode}
              address={state.deliveryAddress}
              location={state.deliveryLocation}
            />
            <BookingStepsCard
              name={"reciver"}
              setReciverCompany={setReciverCompany}
              setReciverFirstName={setReciverFirstName}
              setReciverLastName={setReciverLastName}
              setReciverHouseNum={setReciverHouseNum}
              setReciverAddress={setReciverAddress}
              setReciverPostCode={setReciverPostCode}
              setReciverPhoneNum={setReciverPhoneNum}
              setReciverEmail={setReciverEmail}
              address={state.pickUpAddress}
              location={state.pickUpLocation}
            />
          </div>
          <button type="submit">ZUM NÄCHSTEN SCHRITT</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default BookingStepOne;
