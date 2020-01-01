import ArticleTag from "/src/components/article-list/article-tag.js";

const ArticleTagList = props => {
  props.tags;
  return React.createElement(
    "div",
    { class: "blogTagContainer" },
    props.tags.map(t => React.createElement(ArticleTag, { tagName: t }, null))
  );
};

export default ArticleTagList;
