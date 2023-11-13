import React from "react";
import "./styles.scss";
import Cards from "./components/Cards";

const Section = () => {
  return (
    <Section>
      <div className="flex section__layer">
        <div className="flex gap-8">
          <h2 className="content__title text-center mt-80">Lorem</h2>
          <h2 className="heading2 text-center mb-64">subtitle</h2>
        </div>
      </div>
      <div className="flex">
        <Cards />
      </div>
    </Section>
  );
};

export default Section;
