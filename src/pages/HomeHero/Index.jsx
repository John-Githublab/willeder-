import React from "react";
import { images } from "../../image";
import Slideshow from "../../components/Scrollmage/Index";
import Details from "./components/Details.component";
import "./styles.scss";

const imageArray = [
  images.banner3,
  images.banner1,
  images.banner2,
  images.banner3,
  images.banner4,
];

const HomeHero = () => {
  return (
    <div className="flex" style={{ height: "100vh" }}>
      <Slideshow attachment={imageArray}>
        <Details />
      </Slideshow>
    </div>
  );
};

export default HomeHero;
