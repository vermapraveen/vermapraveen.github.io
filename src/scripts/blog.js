"use strict";

import HtmlComponentCreator from "/src/scripts/htmlComponents.js";

const getPostData = async () => {
  var markdownFileName = window.location.search.substring(4);

  fetch("/" + markdownFileName)
    .then(contentResponse => contentResponse.text())
    .then(contentText => {
        HtmlComponentCreator.convertMdToHtml(contentText, markdownFileName);
    });
};

// Listen on page load:
window.addEventListener("load", getPostData);
