import Thumbnail from "/src/components/article-list/thumbnail.js";
import Title from "/src/components/article-list/title.js";

const ArticleListItem = props => {
  var itemInfo = React.createElement(
    "div",
    { class: "blogItemInfoContainer" },
    [
      React.createElement(Thumbnail, {thumbnailPath: props.article_info.thumbnail}, null),
      React.createElement(Title, {title: props.article_info.title}, null)
    ]
  );

  return React.createElement(
    "div",
    {
      class: "blog-info-container-1"
    },
    React.createElement(
      "div",
      {
        class: "blog-info-container-2"
      },
      itemInfo
    )
  );
};

export default ArticleListItem;
