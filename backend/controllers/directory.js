const DirectoryModel = require("../models/directory");

const getAllDirectories = async (req, res) => {
  await DirectoryModel.find()
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
};

const createDirectory = async (req, res) => {
  console.log(req.body.email);
  const directory = new DirectoryModel({
    userId: req.body.userId,
    company: req.body.company,
    companyType: req.body.companyType,
    addressType: req.body.addressType,
    salutation: req.body.salutation,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    internalTerm: req.body.internalTerm,
    houseNum: req.body.houseNum,
    addressSupplement: req.body.addressSupplement,
    salesAndTaxId: req.body.salesAndTaxId,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    zipCode: req.body.zipCode,
    isBillingAddress: req.body.isBillingAddress,
    isShippingAddress: req.body.isShippingAddress,
    isDefaultAddress: req.body.isDefaultAddress,
  });

  try {
    const userExsist = await DirectoryModel.find({ email: req.body.email });
    if (userExsist.length > 0) {
      res.status(400).send({
        message: "User already exsist",
      });
    } else {
      let data = await directory.save();
      if (data) {
        res.status(200).send({
          data,
          message: "success",
        });
      } else {
        res.status(404).send({
          message: "error creating directory",
        });
      }
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
    });
  }
};

const getDirectoriesByUserId = async (req, res) => {
  console.log(req.body.userId);
  try {
    const data = await DirectoryModel.find({ userId: req.body.userId });
    if (data.length > 0) {
      res.status(200).send({
        data,
        message: "success",
      });
    } else {
      res.status(404).send({
        message: "data not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
    });
  }
};

module.exports = {
  getAllDirectories,
  getDirectoriesByUserId,
  createDirectory,
};
