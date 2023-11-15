import React, { useEffect, useState } from "react";
import { images } from "../../image";
import Slideshow from "../../components/Scrollmage/Index";
import Details from "./components/Details.component";
import "./styles.scss";
import useAsyncImage from "../../hooks/useImageOptimise";
import LoadingCover from "../../components/Loading/LoadingCover";
import Box from "../../components/Logo/Box";

const imageArray = [
  images.banner3,
  images.banner1,
  images.banner2,
  images.banner3,
  images.banner4,
];

const HomeHero = () => {
  const src2 = useAsyncImage(images.banner3);
  const src1 = useAsyncImage(images.banner1);
  const src3 = useAsyncImage(images.banner4);
  const src4 = useAsyncImage(images.banner2);

  if (!src1) return;
  return (
    <div className="flex" style={{ height: "100vh" }} id="home">
      <Slideshow attachment={[src2, src1, src4]}>
        <Details />
      </Slideshow>
    </div>
  );
};

export default HomeHero;
