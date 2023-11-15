import React from "react";
import "./styles.scss";
import Cards from "./components/Cards";
import { images } from "../../image";
import Content from "./components/Content";

const Section = () => {
  return (
    <section id="page1">
      <div className="flex section__layer">
        <div className="flex gap-8 section__content section__content--main">
          <h2 className="content__title text-center mt-80 section__content">
            Lorem
          </h2>
          <h2 className=" conent__heading heading2 text-center mb-64 section__content">
            subtitle
          </h2>
        </div>
        <div className="flex section__container ">
          <Cards
            id={"01"}
            attachment={images.banner3}
            title="Lorem ipsum dolor sit"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <Cards
            id={"02"}
            attachment={images.banner2}
            title="Lorem ipsum dolor sit"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />

          <Cards
            id={"03"}
            attachment={images.banner1}
            title="Lorem ipsum dolor sit"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
        </div>
        <Content />
      </div>
    </section>
  );
};

export default Section;
