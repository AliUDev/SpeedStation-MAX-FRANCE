import dayjs from "dayjs";
import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { authSliceActions } from "../../store/AuthSlice";
import { updatePaymentPlan } from "../apis/ApiSerives";

export default function Paypal(props) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user);

  const handleOnSuccess = async (details, data) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Payment Successfull",
      showConfirmButton: false,
      timer: 1500,
    });
    try {
      let planType = "paid";
      let paymentMethod = "paypal";
      let planExpiryDate = dayjs(new Date())
        .add(30, "day")
        .format("YYYY-MM-DD");
      const response = await updatePaymentPlan(
        userData._id,
        planType,
        paymentMethod,
        planExpiryDate
      );
      if (response) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "user Successfully updated",
          showConfirmButton: false,
          timer: 1500,
        });
        props.setShow(false);
        dispatch(authSliceActions.handleUserLoggedIn(response?.data.data));
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password does not match",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <PayPalButton
        options={{
          clientId:
            "ARvm2YiOCYz2ihVs7OE91F4SRAN9Nq89d_2uXVRz8nCaYWNO7g3kHkWEMV4YA6ZsoMtI0sYGZe_dI44C",
          currency: "USD",
        }}
        amount={99}
        onSuccess={(details, data) => handleOnSuccess(details, data)}
      />
    </div>
  );
}
