import React from 'react'
import Home from "./home.js";
import Nav from "./nav-menu.js";

const Header = props => {
  return React.createElement("div", { className: "header", key: 'header' }, [
    React.createElement(Home, {key: 'Home'}, null),
    React.createElement(Nav, {key: 'Nav'}, null)
  ]);
};

export default Header;
