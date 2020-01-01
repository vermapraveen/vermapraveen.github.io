const ArticleTag = props => {
  return React.createElement(
    "div",
    { class: "blogTagContainerItem" },
    props.tagName
  );
};

export default ArticleTag;
