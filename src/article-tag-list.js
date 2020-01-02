import React from 'react'
import ArticleTag from "./article-tag.js";

const ArticleTagList = props => {
  return React.createElement(
    "div",
    { className: "blogTagContainer" },
    props.tags.map(t => React.createElement(ArticleTag, { tagName: t }, null))
  );
};

export default ArticleTagList;
