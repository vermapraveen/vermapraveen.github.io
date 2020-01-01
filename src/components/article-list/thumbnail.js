const Thumbnail = props => {
  return React.createElement(
    "div",
    { class: "blogItemImgContainer" },
    React.createElement(
      "img",
      { class: "blogThumbnail", src: props.thumbnailPath },
      null
    )
  );
};

export default Thumbnail;
