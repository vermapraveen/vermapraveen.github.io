 
"use strict";

import HtmlComponentCreator from '/src/scripts/htmlComponents.js'

const loadBlogList = async () =>{
    getBasicData();
}

function getBasicData() {
    fetch("/content/metadata.json")
        .then(response => response.text())
        .then(text => {
            var actual_JSON = JSON.parse(text);
            var blogList = document.getElementById('blog-item-container');

            actual_JSON.forEach(function (blogInfoJson) {
                var blogItem = getBlogItemCompoenent(blogInfoJson);
                blogList.appendChild(blogItem);
            });

        });

    function getBlogItemCompoenent(blogInfoJson) {
        var menuLink = HtmlComponentCreator.getAnchorComponent('blog.html?id=' + blogInfoJson.path);
        menuLink.setAttribute('class', 'blogItemLink');

        var blogItemInfoContainer = document.createElement("DIV");
        blogItemInfoContainer.setAttribute('class', 'blogItemInfoContainer');

        var blogItemTxtContainer =  blogInfoJson.draft ? HtmlComponentCreator.getDraftBlogDetails(blogInfoJson.title) :  HtmlComponentCreator.getPublishedBlogDetails(blogInfoJson.title, blogInfoJson.date);

        blogItemInfoContainer.appendChild(HtmlComponentCreator.getBlogThumbnailContainer('/' + blogInfoJson.thumbnail));
        blogItemInfoContainer.appendChild(blogItemTxtContainer);

        var blogContainer_1 = document.createElement("DIV");
        blogContainer_1.setAttribute('class', 'blog-info-container-1');

        var blogContainer_2 = document.createElement("DIV");
        blogContainer_2.setAttribute('class', 'blog-info-container-2');

        blogContainer_1.appendChild(blogContainer_2);
        blogContainer_2.appendChild(blogItemInfoContainer);

        menuLink.appendChild(blogContainer_1);

        return menuLink

    };
};

// Listen on page load:
window.addEventListener('load', loadBlogList);