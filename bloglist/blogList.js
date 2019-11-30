"use strict";

import HtmlComponentCreator from "/src/scripts/htmlComponents.js";

const getBlogList = async () => {
  await HtmlComponentCreator.applyMasterPage();
  await HtmlComponentCreator.addToMainContainer("List of my articles", "blog-item-container");
  
  fetch("/content/metadata.json")
    .then(response => response.text())
    .then(text => {
      var actual_JSON = JSON.parse(text); 
      var blogList = document.getElementsByClassName("blog-item-container")[0];

      actual_JSON.forEach(async (blogInfoJson) => {
        blogList.appendChild(
          await HtmlComponentCreator.getBlogInfoLink(
            blogInfoJson.slug,
            blogInfoJson.title,
            blogInfoJson.thumbnail,
            blogInfoJson.draft,
            blogInfoJson.date
          )
        );
      });
    });
};

// Listen on page load:
window.addEventListener("load", getBlogList);
