import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AdminLayout from "./assets/Layout/AdminLayout";
import Dashboard from "./pages/AdminPages/Dashboard";
import Orders from "./pages/AdminPages/Orders";
import Ideas from "./pages/AdminPages/Ideas";
import Directory from "./pages/AdminPages/Directory";
import AddressBook from "./pages/AdminPages/AddressBook";

import User from "./assets/Layout/User";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Terms from "./pages/AuthPages/Terms";
import ForgetPassword from "./pages/ForgetPassword";

import Navbar from "./assets/Layout/Navbar";
import Home from "./pages/Home";
import Freight from "./pages/Freight";
import About from "./pages/About";
import Career from "./pages/Career";
import Help from "./pages/Help";
import ChangePassword from "./pages/ChangePassword";
import Step from "./pages/Step";
import Checkout from "./pages/Checkout";
import Tarif from "./pages/Tarif/Tarif";

import "./assets/sass/style.scss";
import "./assets/sass/Style2.scss";
import "./assets/sass/dashboard.scss";
import "./assets/sass/app.scss";

import "./App.css";
import { useSelector } from "react-redux";
import Charge from "./pages/Charge";
import UserTable from "./pages/AdminPages/UserTable";
import FuelSurCharges from "./pages/AdminPages/FuelSurCharges";
import Payment from "./assets/components/Payment";
import BookingStepOne from "./pages/bookingPages/BookingStepOne";
import ConfirmOrder from "./pages/ConfirmOrder";
import DemoAccount from "./pages/DemoAccount";
import NavbarLogout from "./pages/NavbarLogout";
import ShippingPerMonthChart from "./assets/components/charts/ShippingPerMonthChart";
import OverView from "./assets/components/charts/OverView";
import SalesPerMonth from "./assets/components/charts/SalesPerMonth";
import TarifForm from "./pages/Tarif";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const [adminToggle, setadminToggle] = useState(true);
  const AdminToggler = () => {
    setadminToggle(!adminToggle);
  };

  return (
    <div className="App">
      {!isAuth && (
        <Routes>
          <Route element={<User />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup/:forwarder" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/forget" element={<ForgetPassword />} />
            <Route path="/forget/:email" element={<ChangePassword />} />
            <Route path="/demo-account" element={<DemoAccount />} />
            <Route path="charge" element={<Charge />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="booking-step-one" element={<BookingStepOne />} />
            <Route path="about" element={<About />} />
            <Route path="help" element={<Help />} />
            <Route path="user" element={<UserTable />} />
            <Route path="step" element={<Step />} />
            <Route path="confirm-order" element={<ConfirmOrder />} />
          </Route>
        </Routes>
      )}
      {isAuth && (
        <Routes>
          <Route element={<AdminLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="idea" element={<Ideas />} />
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="directory" element={<Directory />} />
            <Route path="directory/0" element={<AddressBook />} />
            <Route path="charge" element={<Charge />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="booking-step-one" element={<BookingStepOne />} />
            <Route path="home" element={<Home />} />
            <Route path="demo" element={<Freight />} />
            <Route path="about" element={<About />} />
            <Route path="career" element={<Career />} />
            <Route path="help" element={<Help />} />
            <Route path="user" element={<UserTable />} />
            <Route path="fuelsurcharges" element={<FuelSurCharges />} />
            <Route path="step" element={<Step />} />
            <Route path="confirm-order" element={<ConfirmOrder />} />
            <Route
              path="analyse-shippings"
              element={<ShippingPerMonthChart />}
            />
            <Route path="analyse-sales" element={<SalesPerMonth />} />
            <Route path="overview" element={<OverView />} />
            <Route path="tarif" element={<Tarif />} />
            <Route path="add-tarif" element={<TarifForm />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;

//ASx0GGrV87jG-OESwkAus0xmGwz1a5OHMz6h0rVLMnMNNMVlgtXaJvldvETFBJvpLFHAgeLcWbizdegf //client id
//EIVDqMvMOTKN1SGOClGyu5VYkSL4FuUd2w69_wrkWQS9K3o5irGy6flSIPqfZSatP1EM4bXfQ17vOI8M //client secret
//sb-tfmzd20988286@business.example.com //sandbox account
