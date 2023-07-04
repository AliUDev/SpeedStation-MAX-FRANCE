const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    company: {
      type: String,
    },
    companyType: {
      type: String,
    },
    salesAndTaxId: {
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
    houseNumber: {
      type: String,
    },
    addressSupplement: {
      type: String,
    },
    postCode: {
      type: String,
    },
    location: { type: String },
    phoneNumber: {
      type: String,
    },
    country: {
      type: String,
    },
    tariff: { type: String },
    email: { type: String, require: [true, "email is required"] },
    password: { type: String, require: [true, "password is required"] },
    isCommercial: { type: Boolean },
    isFrightForwarder: { type: Boolean },
    planType: {
      type: String,
    },
    isPaid: {
      type: Boolean,
    },
    paymentMethod: { type: String },
    planExpiryDate: {
      type: String,
    },
    userRole: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
