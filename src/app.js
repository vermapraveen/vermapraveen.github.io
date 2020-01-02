import React from 'react'
import Header from "./header.js";
import Footer from "./footer.js";
import MainContiner from "./main-container.js";

const App = props => {
  return [
    React.createElement(Header, {key: 'Header'}, null),
    React.createElement(MainContiner, {key: 'MainContiner'}, window.location.pathname.split("/").slice(1)),
    React.createElement(Footer, {key: 'Footer'}, null)
  ];
};

export default App;
