const router = require("express").Router();

const {
  getAllShipping,
  createShipping,
  getOrdersById,
  getOrdersByCompany,
  cancelOrderById,
} = require("../controllers/shipping");

router.get("/getAllShipping", getAllShipping);
router.post("/createShipping", createShipping);
router.get("/getOrdersById/:userId", getOrdersById);
router.get("/getOrdersByCompany/:companyName", getOrdersByCompany);
router.delete("/cancelOrderById/:id", cancelOrderById);

module.exports = router;
