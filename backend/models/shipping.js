const mongoose = require("mongoose");

const ShippingSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    senderFirstName: {
      type: String,
    },
    senderLastName: {
      type: String,
    },
    reciverFirstname: {
      type: String,
    },
    reciverLastName: {
      type: String,
    },
    senderHouseNum: {
      type: String,
    },
    reciverHouseNum: {
      type: String,
    },
    senderEmail: {
      type: String,
    },
    reciverEmail: {
      type: String,
    },
    senderPhoneNum: {
      type: String,
    },
    reciverPhoneNum: {
      type: String,
    },
    senderCompany: {
      type: String,
    },
    reciverCompany: {
      type: String,
    },
    clientCompany: {
      type: String,
    },
    senderAddress: {
      type: String,
    },
    companyName: {
      type: String,
    },
    companyEmail: {
      type: String,
    },
    reciverAddress: {
      type: String,
    },
    pickUpDestination: {
      type: String,
    },
    deliveryDestination: {
      type: String,
    },
    deliveryDate: {
      type: String,
    },
    pickUpDate: {
      type: String,
    },
    currentTime: {
      type: String,
    },
    shippingCost: {
      type: String,
    },
    totalCost: {
      type: String,
    },
    deliveryAddress: {
      type: String,
    },
    pickUpAddress: {
      type: String,
    },
    pickupNotification: {
      type: Boolean,
    },
    deliveryNotification: {
      type: Boolean,
    },
    senderPostCode: {
      type: String,
    },
    reciverPostCode: {
      type: String,
    },
    clientAddress: {
      type: String,
    },
    clientComapny: {
      type: String,
    },
    clientComapnyType: {
      type: String,
    },
    clientCountry: {
      type: String,
    },
    clientEmail: {
      type: String,
    },
    clientFastName: {
      type: String,
    },
    clientFirstName: {
      type: String,
    },
    clientHouseNum: {
      type: String,
    },
    clientLocation: {
      type: String,
    },
    clientPhoneNumber: {
      type: String,
    },
    clientPostCode: {
      type: String,
    },
    clientSalesTaxId: {
      type: String,
    },
    clientSalutation: {
      type: String,
    },
  },
  { timestamps: true }
);

const Shipping = mongoose.model("Shipping", ShippingSchema);
module.exports = Shipping;
