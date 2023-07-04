const router = require("express").Router();

const {
  getAllDirectories,
  createDirectory,
  getDirectoriesByUserId,
} = require("../controllers/directory");

router.get("/getAllDirectories", getAllDirectories);
router.post("/createDirectory", createDirectory);
router.post("/getDirectoriesByUserId", getDirectoriesByUserId);

module.exports = router;
