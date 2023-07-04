import dayjs from "dayjs";
import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { updatePaymentPlan } from "../apis/ApiSerives";
import Paypal from "./Paypal";

const PaymentModal = (props) => {
  const userData = useSelector((state) => state.auth.user);

  const handleCheckout = async (event, token, address) => {
    let planType = "paid";
    let paymentMethod = "stripe";
    let planExpiryDate = dayjs(new Date()).add(30, "day").format("YYYY-MM-DD");

    try {
      const response = await updatePaymentPlan(
        userData._id,
        planType,
        paymentMethod,
        planExpiryDate
      );
      console.log(response);
      if (response.status === 200) {
        props.setShow(false);
      }
    } catch (error) {
      console.log(error, "=================");
    }
  };
  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <StripeCheckout
            token={(event) => handleCheckout(event)}
            stripeKey="pk_test_51MfKRECuOfiUADckXnBBRaqi8wBMel5wQxggBa8dZfUPlKgYGUdNLtFniQY6KLdrt35n6akFpzNLBBKxVHkBPeJd008OWFMqGh"
            amount={99 * 100}
            billingAddress
            shippingAddress
          >
            <button className="btn btn-outline-primary justify-content-center align-items-center mb-5 w-100 al d-flex">
              Stripe
            </button>
          </StripeCheckout>
        </div>
        <div>
          <Paypal setShow={props.setShow} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentModal;
