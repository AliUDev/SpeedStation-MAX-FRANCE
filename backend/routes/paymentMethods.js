const router = require("express").Router();

const { createCheckoutSession } = require("../controllers/paymentMethods");

router.post("/create-checkout-session", createCheckoutSession);

module.exports = router;
