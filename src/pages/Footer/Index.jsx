import React from "react";
import "./styles.scss";
import FooterLinks from "./components/FooterLinks";
import FooterIcons from "./components/FooterIcons";

const Footer = () => {
  return (
    <div className="flex footer__root center" id="page2">
      <FooterLinks />
      <div className="footer__horizontal--line flex" />
      <FooterIcons />
      <p className="footer__content">© Logo, Inc.</p>
    </div>
  );
};

export default Footer;
