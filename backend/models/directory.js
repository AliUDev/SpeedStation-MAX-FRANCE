const mongoose = require("mongoose");

const DirectorySchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    company: {
      type: String,
    },
    companyType: {
      type: String,
    },
    addressType: {
      type: String,
    },
    salutation: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    internalTerm: {
      type: String,
    },
    houseNum: {
      type: String,
    },
    addressSupplement: {
      type: String,
    },
    salesAndTaxId: {
      type: String,
    },
    email: { type: String, require: [true, "email is required"] },
    phoneNumber: {
      type: String,
    },
    zipCode: { type: String },
    isBillingAddress: { type: Boolean },
    isShippingAddress: { type: Boolean },
    isDefaultAddress: { type: Boolean },
  },
  { timestamps: true }
);

const Directory = mongoose.model("Directory", DirectorySchema);
module.exports = Directory;
