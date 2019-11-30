"use strict";

import HtmlComponentCreator from "/src/scripts/htmlComponents.js";
import MdToHtmlConverter from "/src/scripts/mdToHtmlConverter.js";

const getPostData = async () => {
  var markdownFileName = window.location.search.substring(4);

  fetch("/" + markdownFileName)
    .then(contentResponse => contentResponse.text())
    .then(async (contentText) => {
        var  markdownText = await MdToHtmlConverter.convert(contentText);
        await HtmlComponentCreator.getBlogContent(markdownText, markdownFileName);
    });
};

// Listen on page load:
window.addEventListener("load", getPostData);
