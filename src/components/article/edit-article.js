const EditArticle = props => {
  return React.createElement(
    "div",
    { class: "edit-link-container" },
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
