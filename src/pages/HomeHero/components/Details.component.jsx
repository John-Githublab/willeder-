import React from "react";
import { images } from "../../../image";

const Details = () => {
  return (
    <div className="flex end h-100">
      <div className="flex-row gap-16 center">
        <img
          src={images.logo}
          alt="logo"
          style={{ width: "69px", height: "69px" }}
        />
        <h1 className="main-title">LOGO</h1>
      </div>
      <div className="hero__mainheading">
        <h2 className="heading ">
          Lorem ipsum dolor <br /> sit amet
        </h2>
      </div>
      <div
        className="flex hero__maincontent"
        style={{ whiteSpace: "break-spaces" }}
      >
        <p className="content ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor ut labore et dolore magna aliqua.
        </p>
      </div>
      <div
        onClick={() => window.scrollTo(0, 600)}
        className="flex hero__scrollcontent"
        style={{ whiteSpace: "break-spaces" }}
      >
        <p className="subheading ">scroll</p>
      </div>
      <div className="arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1"
          height="32"
          viewBox="0 0 1 32"
          fill="none"
        >
          <path d="M0.5 0V32" stroke="white" />
        </svg>
      </div>
    </div>
  );
};

export default Details;
