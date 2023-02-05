import React from "react";
import { Link, useNavigate } from "react-router-dom";
import swevex from "../../images/swevex-logo.svg";
import logout from "../../images/logout.svg";
function handleLogout(Navaigate) {
  localStorage.clear();
  Navaigate("/admin-login");
}
function DashboardNavbar() {
  const Navaigate = useNavigate();
  return (
    <div>
      <div className="Dashboard-Navbar | flex border-2 justify-between border-black p-5 items-center">
        <div>
          <Link to="/admin-dashboard">
            <img className="w-[80px] md:w-[120px]" src={swevex} alt="" />
          </Link>
        </div>
        <div className="cta | flex gap-5 items-center">
          <div className="application-details">
            <Link
              to="/application-Details"
              className="uppercase text-[10px] md:text-[18px]"
            >
              {" "}
              Applications
            </Link>
          </div>
          <div className="Contact-details">
            <Link
              to="/contact-Details"
              className="uppercase text-[10px] md:text-[18px]"
            >
              {" "}
              Contacts
            </Link>
          </div>
          <div className="logout-cta">
            <img
              src={logout}
              className="w-[20px] md:w-[30px] cursor-pointer "
              onClick={() => handleLogout(Navaigate)}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
