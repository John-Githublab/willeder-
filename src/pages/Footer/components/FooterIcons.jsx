import React from "react";
import { images } from "../../../image";

const icons = [images.fb, images.twitter, images.insta, images.tiktok];

const FooterIcons = () => {
  return (
    <div className="flex flex-row center gap-24">
      {icons?.map((value) => (
        <img src={value} alt="value" className="footer__icons" />
      ))}
    </div>
  );
};

export default FooterIcons;
