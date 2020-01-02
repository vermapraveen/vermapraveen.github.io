import React from 'react'
import CopyrightInfo from "./copyrightInfo.js";

const Footer = props => {
  return React.createElement(
    "div",
    { className: "footer", key: 'footer' },
    React.createElement(CopyrightInfo, null, null)
  );
};

export default Footer;
