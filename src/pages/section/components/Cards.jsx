import React from "react";

const Cards = ({ attachment, title, content, id }) => {
  return (
    <div
      className="flex section__cards"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${attachment}), lightgray 50% / cover no-repeat`,
        backgroundSize: "cover",
        zIndex: 4,
        position: "relative",
      }}
    >
      <p className="section__hidden color-white content__title">{id}</p>
      <p className="heading2 color-white" style={{ padding: "0 24px" }}>
        {title}
      </p>
      <p className="content2 color-white">{content}</p>
    </div>
  );
};

export default Cards;
