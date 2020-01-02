import React from 'react'
const Thumbnail = props => {
  return React.createElement(
    "div",
    { className: "blogItemImgContainer" },
    React.createElement(
      "img",
      { className: "blogThumbnail", src: props.thumbnailPath },
      null
    )
  );
};

export default Thumbnail;
