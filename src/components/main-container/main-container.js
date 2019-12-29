import About from "/src/components/about/about-me.js";

const MainContiner = props => {
  return React.createElement(
    "div",
    { class: "main-container" },
    React.createElement(About, null, null)
  );
};

export default MainContiner;
