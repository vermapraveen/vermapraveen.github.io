"use strict";

const createElement = React.createElement;
const renderElement = ReactDOM.render;

class IndexPageContent extends React.Component {
  render() {
    return createElement("div", {}, "This is new INDEX page");
  }
}

renderElement(createElement(IndexPageContent), document.querySelector("#main_container"));
