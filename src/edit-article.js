import React from 'react'
const EditArticle = props => {
  return React.createElement(
    "div",
    { className: "edit-link-container" },
    React.createElement(
      "a",
      {
        href:
          "https://github.com/vermapraveen/vermapraveen.github.io/blob/master/content/posts/" +
          props.filePath
      },
      "Edit on GitHub"
    )
  );
};

export default EditArticle;
