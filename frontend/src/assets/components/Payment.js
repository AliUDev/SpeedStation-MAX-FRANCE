import React from "react";
import Paypal from "./Paypal";
import Footer from "./Footer";

const Payment = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center p-5">
        <div className="w-50">
          <Paypal />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Payment;
