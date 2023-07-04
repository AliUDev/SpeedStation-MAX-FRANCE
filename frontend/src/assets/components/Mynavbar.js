import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/navbar.scss";

const Mynavbar = () => {
  const [stickyClass, setStickyClass] = useState("transparent");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 60
        ? setStickyClass("fixed")
        : setStickyClass("transparent");
    }
  };

  return (
    <div className="Navbar_outer_section">
      <div className={`navbar_inner ${stickyClass}`}>
        <Link to="/">Home</Link>
        <Link to="/freight">Freight Forwarders</Link>
      </div>
    </div>
  );
};

export default Mynavbar;
