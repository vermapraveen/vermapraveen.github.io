import Index from "/src/components/index.js";

const MainContiner = props => {
  return React.createElement(
    "div",
    { class: "main-container" },
    React.createElement(Index, null, null)
  );
};

export default MainContiner;
