const router = require("express").Router();

const {
  getUsers,
  userRegister,
  getUsersById,
  loginUser,
  forgetPassword,
  forgetPasswordLink,
  getCompaniesOfDeliveryRegion,
  updateUser,
} = require("../controllers/user");

router.get("/getUsers", getUsers);
router.get("/getUsersById/:id", getUsersById);
router.post("/userRegister", userRegister);
router.post("/loginUser", loginUser);
router.put("/forgetPassword", forgetPassword);
router.post("/forgetPasswordLink", forgetPasswordLink);
router.post("/getCompaniesOfDeliveryRegion", getCompaniesOfDeliveryRegion);
router.put("/updateUser/:id", updateUser);

module.exports = router;
