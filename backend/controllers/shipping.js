const ShippingModel = require("../models/shipping");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const schedule = require("node-schedule");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hmughal0123@gmail.com",
    pass: "jaieiiujsvzoerqw",
  },
});

const getAllShipping = async (req, res) => {
  ShippingModel.find()
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
};

const createShipping = async (req, res) => {
  console.log(req.body);
  let userId =
    req.body.userId !== undefined ? req.body.userId : mongoose.Types.ObjectId();

  const sender = new ShippingModel({
    userId: userId,
    senderFirstName: req.body.senderFirstName,
    senderLastName: req.body.senderLastName,
    reciverFirstname: req.body.reciverFirstname,
    reciverLastName: req.body.reciverLastName,
    senderHouseNum: req.body.senderHouseNum,
    reciverHouseNum: req.body.reciverHouseNum,
    senderEmail: req.body.senderEmail,
    reciverEmail: req.body.reciverEmail,
    senderPhoneNum: req.body.senderPhoneNum,
    reciverPhoneNum: req.body.reciverPhoneNum,
    senderCompany: req.body.senderCompany,
    reciverCompany: req.body.reciverCompany,
    clientCompany: req.body.clientCompany,
    senderAddress: req.body.senderAddress,
    reciverAddress: req.body.reciverAddress,
    pickUpDestination: req.body.pickUpDestination,
    companyName: req.body.companyName,
    companyEmail: req.body.companyEmail,
    totalCost: req.body.totalCost,
    deliveryDestination: req.body.deliveryDestination,
    deliveryDate: req.body.deliveryDate,
    pickUpDate: req.body.currentDate,
    currentTime: req.body.currentTime,
    shippingCost: req.body.shippingCost,
    deliveryAddress: req.body.deliveryAddress,
    pickUpAddress: req.body.pickUpAddress,
    pickupNotification: req.body.pickupNotification,
    deliveryNotification: req.body.deliveryNotification,
    senderPostCode: req.body.senderPostCode,
    reciverPostCode: req.body.reciverPostCode,
    clientAddress: req.body.clientAddress,
    clientComapny: req.body.clientComapny,
    clientComapnyType: req.body.clientComapnyType,
    clientCountry: req.body.clientCountry,
    clientEmail: req.body.clientEmail,
    clientFastName: req.body.clientFastName,
    clientFirstName: req.body.clientFirstName,
    clientHouseNum: req.body.clientHouseNum,
    clientLocation: req.body.clientLocation,
    clientPhoneNumber: req.body.clientPhoneNumber,
    clientPostCode: req.body.clientPostCode,
    clientSalesTaxId: req.body.clientSalesTaxId,
    clientSalutation: req.body.clientSalutation,
  });

  try {
    let response = await sender.save();

    if (response) {
      if (response.pickupNotification) {
        const job = schedule.scheduleJob(response.pickUpDate, function () {
          let mailOptions = {
            from: "hmughal0123@gmailcom",
            to: response.senderEmail,
            subject: "Scheduled Email",
            text: "Hello, this is a scheduled email!",
            html: "<b>Hello, this is a scheduled email!</b>",
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
        });
      }
      if (response.deliveryNotification) {
        const job = schedule.scheduleJob(response.deliveryDate, function () {
          let mailOptions = {
            from: "hmughal0123@gmailcom",
            to: response.senderEmail,
            subject: "Scheduled Email",
            text: "Hello, this is a scheduled email!",
            html: "<b>Hello, this is a scheduled email!</b>",
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
        });
        console.log(job);
      }

      var mailOptions = {
        from: "hmughal0123@gmail.com",
        to: `${req.body.senderEmail}`,
        subject: "Order Created",
        html:
          "<h3>Hello!</h3>" +
          "<p>You are receiving this email because there is an order created.</p>" +
          `<p>Order is placed by ${req.body.email}.</p>` +
          "<p>Regards,</p>",
      };

      var mailOptions2 = {
        from: "hmughal0123@gmail.com",
        to: `${req.body.clientEmail}`,
        subject: "Order Created",
        html:
          "<h3>Hello!</h3>" +
          "<p>You are receiving this email because there is an order created.</p>" +
          `<p>Order is placed by ${req.body.clientEmail}.</p>` +
          "<p>Regards,</p>",
      };

      var mailOptions3 = {
        from: "hmughal0123@gmail.com",
        to: `${req.body.companyEmail}`,
        subject: "Order Created",
        html:
          "<h3>Hello!</h3>" +
          "<p>You are receiving this email because there is an order created.</p>" +
          `<p>Order is placed by ${req.body.companyEmail}.</p>` +
          "<p>Regards,</p>",
      };

      transporter.sendMail(mailOptions, function (error, info) {});
      transporter.sendMail(mailOptions2, function (error, info) {});
      transporter.sendMail(mailOptions3, function (error, info) {});

      res.status(200).json({
        data: response,
        message: "shipping successfull",
      });
    } else {
      res.status(400).json({
        message: "Error during shipping",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "internal server error",
    });
  }
};

const getOrdersById = async (req, res) => {
  try {
    let response = await ShippingModel.find({ userId: req.params.userId });
    if (response) {
      res.status(200).json({
        data: response,
        message: "shipping successfull",
      });
    } else {
      res.status(400).json({
        message: "Error during shipping",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const getOrdersByCompany = async (req, res) => {
  try {
    let response = await ShippingModel.find({
      companyName: req.params.companyName,
    });
    if (response) {
      res.status(200).json({
        data: response,
        message: "shipping successfull",
      });
    } else {
      res.status(400).json({
        message: "Error during shipping",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const cancelOrderById = async (req, res) => {
  try {
    const cancelOrder = await ShippingModel.findByIdAndDelete({
      _id: req.params.id,
    });

    if (cancelOrder) {
      var mailOptions = {
        from: "hmughal0123@gmail.com",
        to: `${cancelOrder.clientEmail}`,
        subject: "Order Canceled",
        html:
          "<h3>Hello!</h3>" +
          `<p>Order is canceled by ${cancelOrder.clientEmail}.</p>` +
          "<p>Regards,</p>",
      };

      var mailOptions2 = {
        from: "hmughal0123@gmail.com",
        to: `${cancelOrder.companyEmail}`,
        subject: "Order Created",
        html:
          "<h3>Hello!</h3>" +
          `<p>Order is canceled by ${cancelOrder.companyEmail}.</p>` +
          "<p>Regards,</p>",
      };

      transporter.sendMail(mailOptions, function (error, info) {});
      transporter.sendMail(mailOptions2, function (error, info) {});

      res.status(200).send({
        data: cancelOrder,
        message: "success",
      });
    } else {
      res.status(404).send({
        message: "Shipping not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error || "Internal server error",
    });
  }
};

module.exports = {
  getAllShipping,
  createShipping,
  getOrdersById,
  getOrdersByCompany,
  cancelOrderById,
};
