import React from "react";
import { images } from "../../../image";

const Content = () => {
  return (
    <div className="content__root mt-80">
      <h2
        className="heading2 content__heading mt-80"
        style={{ textAlign: "start", paddingLeft: "16px" }}
      >
        Lorem ipsum{" "}
      </h2>
      <div className="horizontal section__horizontal" />
      <div className="flex">
        <img
          src={images.banner4}
          alt="banner"
          className="content__image mt-32"
        />
      </div>
      <div className="flex section__new">
        <div className="section__hidden">
          <h2
            className="heading2  mt-80 section__heading"
            style={{ textAlign: "start", paddingLeft: "16px" }}
          >
            Lorem ipsum{" "}
          </h2>
          <div className="horizontal" />
        </div>
        <h2
          className="content3 mt-32 section__content3"
          style={{
            paddingLeft: "16px",
            textAlign: "justify",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.{" "}
        </h2>
        <div className="flex-row gap-16 start mt-32 mb-80 section__last ">
          <h4 className="subheading color-black">Lorem ipsum</h4>
          <img src={images.arrowIcon} alt="arrow" className="content__arrow" />
        </div>
      </div>
    </div>
  );
};

export default Content;
