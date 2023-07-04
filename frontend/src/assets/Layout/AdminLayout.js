import React, { useState } from "react";
import { Outlet, useLocation } from "react-router";
import Sidebar from "../components/Sidebar";
import AdminNav from "../../pages/AdminPages/AdminNav";

const AdminLayout = () => {
  const [adminToggle, setadminToggle] = useState(true);
  const AdminToggler = () => {
    setadminToggle(!adminToggle);
  };
  const location = useLocation();
  return (
    <>
      <div className="admin_outer">
        {location.pathname !== "/home" &&
          location.pathname !== "/booking-step-one" &&
          location.pathname !== "/confirm-order" &&
          location.pathname !== "/" &&
          location.pathname !== "/charge" &&
          location.pathname !== "/step" &&
          location.pathname !== "/checkout" && (
            <Sidebar adminToggle={adminToggle} />
          )}
        <div className="admin_content_outer">
          {location.pathname !== "/home" &&
            location.pathname !== "/booking-step-one" &&
            location.pathname !== "/confirm-order" &&
            location.pathname !== "/" &&
            location.pathname !== "/charge" &&
            location.pathname !== "/step" &&
            location.pathname !== "/checkout" && (
              <AdminNav AdminToggler={AdminToggler} />
            )}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
