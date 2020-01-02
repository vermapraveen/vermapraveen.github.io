import React from 'react'
import Thumbnail from "./thumbnail.js";
import Title from "./title.js";
import ArticleTagList from "./article-tag-list.js";

const ArticleListItem = props => {
  var itemInfo = React.createElement(
    "div",
    { className: "blogItemInfoContainer" },
    [
      React.createElement(
        Thumbnail,
        { thumbnailPath: props.article_info.thumbnail },
        null
      ),
      React.createElement(
        Title,
        {
          title: props.article_info.title,
          draft: props.article_info.draft,
          publishedDate: props.article_info.date
        },
        null
      )
    ]
  );

  return React.createElement(
    "div",
    {
      className: "blog-info-container-1"
    },
    React.createElement(
      "div",
      {
        className: "blog-info-container-2"
      },
      [
        itemInfo,
        React.createElement(
          ArticleTagList,
          { tags: props.article_info.tags },
          null
        )
      ]
    )
  );
};

export default ArticleListItem;
