import React from "react";

const FooterLinks = () => {
  return (
    <div className="flex ">
      <ul className="flex gap-24 footerlink__root">
        <li>
          <p className="subheading">Home</p>
        </li>
        <li>
          <p className="subheading">Page 1</p>
        </li>
        <li>
          <p className="subheading">Page 2</p>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
