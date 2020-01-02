import React from 'react'
import DraftInd from "./draft_indicator.js";
import PublishedInd from "./published_indicator.js";

const Title = props => {
  let publishingInfo = props.draft
    ? React.createElement(DraftInd, null, null)
    : React.createElement(PublishedInd, { publishedDate: props.publishedDate }, null);

  return React.createElement("div", { className: "blogItemTxtContainer" }, [
    React.createElement("h2", { className: "blogItemTxt" }, props.title),
    publishingInfo
  ]);
};

export default Title;
