import React from "react";
import "./styles/styles.scss";
import { images } from "../../image";

const Navbar = () => {
  return (
    <div className="bg-white nav__padding">
      <div className="flex flex-direction-row gap-1 align-center">
        <img src={images.logo} alt="log" className="logo__icon" />
        <h1 className="title">LOGO</h1>
      </div>
      <div className="flex center w-100 navbar__menu">
        <ul className="flex flex-row gap-120">
          <li>
            <p className="subheading color-black">
              <a href="#home">Home</a>
            </p>
          </li>
          <li>
            <p className="subheading color-black">
              <a href="#page1">Page 1</a>
            </p>
          </li>
          <li>
            <p className="subheading color-black">
              <a href="#page2">Page 2</a>
            </p>
          </li>
        </ul>
      </div>
      <svg
        className="menubar"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
      >
        <rect width="20" height="2" fill="#6A45FF" />
        <rect y="7" width="20" height="2" fill="#6A45FF" />
        <rect y="14" width="20" height="2" fill="#6A45FF" />
      </svg>
    </div>
  );
};

export default Navbar;
