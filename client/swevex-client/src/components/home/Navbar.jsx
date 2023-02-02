import React, { useState } from "react";
import logo from "../../images/swevex-logo.svg";
import openMenu from "../../images/openMenu.svg";
import closeMenu from "../../images/closeMenu.svg";
import "../../css/general-css/general.css";

function Navbar(props) {
  const [open, setOpen] = useState(false);
  const navbarFun = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav className="max-width-container | flex justify-between items-center">
        <div className="my-4">
          <img className="relative z-20 w-[144px] h-[76px]" src={logo} alt="" />
        </div>
        <div className="md:hidden">
          <img
            className="w-[18px] h-[16px] relative z-20"
            src={openMenu}
            alt=""
            onClick={navbarFun}
          />
          {open && (
            <ul className="mobile-ul flex flex-col justify-center items-center absolute inset-0 bg-slate-50 text-[25px] gap-2 z-10">
              {/* <img className='w-[18px] h-[16px] absolute top-0 right-0 my-[32px] mx-[45px]' src={closeMenu} alt="" onClick={navbarFun}/> */}
              <li className={props.page === "home" ? "active" : null}>
                <a href="/">HOME</a>
              </li>
              <li className={props.page === "about" ? "active" : null}>
                <a href="/about">ABOUT</a>
              </li>
              <li className={props.page === "services" ? "active" : null}>
                <a href="/services">SERVICES</a>
              </li>
              <li className={props.page === "careers" ? "active" : null}>
                <a href="/careers">CAREERS</a>
              </li>
              <li className={props.page === "contact" ? "active" : null}>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          )}
        </div>
        <ul className="desktop-ul hidden md:flex gap-6 md:text-[25px]">
          <li className={props.page === "home" ? "active" : null}>
            <a href="/">HOME</a>
          </li>
          <li className={props.page === "about" ? "active" : null}>
            <a href="/about">ABOUT</a>
          </li>
          <li className="dropdown">
            <a href="/services">SERVICES</a>
            <div className="dropdown-content uppercase">
              <a href="#">IT Infrastructure</a>
              <a href="#">Data Processing</a>
              <a href="#">Web Development</a>
              <a href="#">E-Commerce</a>
              <a href="#">Customer Support</a>
              <a href="#">Marketing</a>
            </div>
          </li>
          <li className={props.page === "careers" ? "active" : null}>
            <a href="/careers">CAREERS</a>
          </li>
          <li className={props.page === "contact" ? "active" : null}>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
