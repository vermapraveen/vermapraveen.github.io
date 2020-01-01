const ArticleBody = props => {
  return React.createElement(
    "div",
    { class: "blog-content" },
    React.createElement(
      "div",
      {
        class: "blog-markup",
        dangerouslySetInnerHTML: { __html: props.articleBodyHtml }
      },
      null
    )
  );
};

export default ArticleBody;
