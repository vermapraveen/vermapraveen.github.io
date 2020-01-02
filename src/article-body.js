import React from 'react'

const ArticleBody = props => {
  return React.createElement(
    "div",
    { className: "blog-content" },
    React.createElement(
      "div",
      {
        className: "blog-markup",
        dangerouslySetInnerHTML: { __html: props.articleBodyHtml }
      },
      null
    )
  );
};

export default ArticleBody;
