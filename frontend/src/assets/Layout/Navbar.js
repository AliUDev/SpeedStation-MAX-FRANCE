import React from "react";
import Mynavbar from "../components/Mynavbar";
import { Outlet } from "react-router";

const Navbar = () => {
  return (
    <div>
      <Mynavbar />
      <Outlet />
    </div>
  );
};

export default Navbar;
