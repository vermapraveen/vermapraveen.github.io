const Title = props => {
  return React.createElement(
    "div",
    { class: "blogItemTxtContainer" },
    React.createElement(
      "h2",
      { class: "blogItemTxt"},
      props.title
    )
  );
};

export default Title;
