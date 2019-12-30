import About from "/src/components/about/about-me.js";
import ArticleList from "/src/components/article-list/article-list.js";
import Projects from "/src/components/projects/projects.js";
import Index from "/src/components/index.js";

const { useState } = React;
let storePathInState;

const MainContiner = props => {
  const [pathInState, setPathFn] = useState(props);
  storePathInState = setPathFn;

  switch (pathInState.children[0]) {
    case "about":
      return React.createElement(
        "div",
        { class: "main-container" },
        React.createElement(About, null, null)
      );
    case "blog":
      return React.createElement(
        "div",
        { class: "main-container" },
        React.createElement(ArticleList, null, null)
      );
    case "projects":
      return React.createElement(
        "div",
        { class: "main-container" },
        React.createElement(Projects, null, null)
      );
    default:
      return React.createElement(
        "div",
        { class: "main-container" },
        React.createElement(Index, null, null)
      );
  }
  // return React.createElement(
  //   "div",
  //   { class: "main-container" },
  //   React.createElement(Index, null, null)
  // );
};

export default MainContiner;
