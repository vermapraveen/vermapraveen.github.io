"use strict";

import HtmlComponentCreator from "/src/scripts/htmlComponents.js";

const loadBlogList = async () => {
  getBasicData();
};

function getBasicData() {
  fetch("/content/metadata.json")
    .then(response => response.text())
    .then(text => {
      var actual_JSON = JSON.parse(text);
      var blogList = document.getElementById("blog-item-container");

      actual_JSON.forEach(function(blogInfoJson) {
        blogList.appendChild(
          HtmlComponentCreator.getBlogInfoContainerDivs(
            blogInfoJson.path,
            blogInfoJson.title,
            blogInfoJson.thumbnail,
            blogInfoJson.draft,
            blogInfoJson.date
          )
        );
      });
    });
}

// Listen on page load:
window.addEventListener("load", loadBlogList);
