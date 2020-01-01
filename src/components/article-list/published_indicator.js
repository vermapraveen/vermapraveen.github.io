const PublishedIndicator = props => {
  return React.createElement(
    "div",
    { class: "blogItemDateContainer" },
    `Published on: ${props.publishedDate}`
  );
};

export default PublishedIndicator;
