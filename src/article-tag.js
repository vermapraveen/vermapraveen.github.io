import React from 'react'

const ArticleTag = props => {
  return React.createElement(
    "div",
    { className: "blogTagContainerItem" },
    props.tagName
  );
};

export default ArticleTag;
