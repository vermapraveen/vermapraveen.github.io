import React from 'react'

const PublishedIndicator = props => {
  return React.createElement(
    "div",
    { className: "blogItemDateContainer" },
    `Published on: ${props.publishedDate}`
  );
};

export default PublishedIndicator;
