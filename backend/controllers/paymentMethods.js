const PaymentModel = require("../models/paymentMethods");
const stripe = require("stripe")(
  "sk_test_51MfKRECuOfiUADckhVRt50Wm1I5pp7YJDL385D57eoPg435cH24TRwv4iqA7qF0stqeUT17QcSwHyZZ2irzoaTRh00BvLgP1sa"
);

const getAllShipping = async (req, res) => {
  PaymentModel.find()
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
};

const createCheckoutSession = async (req, res) => {
  console.log(response);
  // stripe.charges.create(req.body, postStripeCharge(res));

  // const session = await stripe.checkout.sessions.create({
  //   line_items: [
  //     {
  //       price_data: {
  //         currency: "usd",
  //         product_data: {
  //           name: "T-shirt",
  //         },
  //         unit_amount: 2000,
  //       },
  //       quantity: 1,
  //     },
  //   ],
  //   mode: "payment",
  //   success_url: "http://localhost:3000/success",
  //   cancel_url: "http://localhost:3000/cancel",
  // });

  // console.log(session.url);

  // res.redirect(303, session.url);
};

module.exports = { getAllShipping, createCheckoutSession };
