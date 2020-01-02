import React from 'react'
import About from "./about-me.js";
import ArticleList from "./article-list.js";
import Projects from "./projects.js";
import IndexPage from "./indexPage.js";
import Article from "./article.js";

const { useState } = React;

const MainContiner = props => {
  const [pathInState, setPathFn] = useState(props);

  switch (pathInState.children[0]) {
    case "about":
      return React.createElement(
        "div",
        { className: "main-container" },
        React.createElement(About, null, null)
      );
    case "blog":
      const blogId = new URLSearchParams(window.location.search).get("id");
      if (blogId) {
        return React.createElement(
          "div",
          { className: "main-container" },
          React.createElement(Article, {filename: blogId}, null)
        );
      } else {
        return React.createElement(
          "div",
          { className: "main-container" },
          React.createElement(ArticleList, null, null)
        );
      }
    case "projects":
      return React.createElement(
        "div",
        { className: "main-container" },
        React.createElement(Projects, null, null)
      );
    default:
      return React.createElement(
        "div",
        { className: "main-container" },
        React.createElement(IndexPage, null, null)
      );
  }
  // return React.createElement(
  //   "div",
  //   { className: "main-container" },
  //   React.createElement(Index, null, null)
  // );
};

export default MainContiner;
