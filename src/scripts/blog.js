 
"use strict";

import HtmlComponentCreator from '/src/scripts/htmlComponents.js'

const getPostData = async()=>{

    var markdownFileName = window.location.search.substring(4);
    // document.getElementById('editOnGithub').setAttribute("href", "https://github.com/vermapraveen/vermapraveen.github.io/blob/master/" + markdownFileName)

    fetch('/' + markdownFileName)
    .then(contentResponse => contentResponse.text())
    .then(contentText => {
        var showdn = new Showdown.converter();
        var elementToDisplay = document.getElementById('blog-container');
        var mdText = showdn.makeHtml(unescapeHTML(contentText));
        
        var blogContentDiv = document.createElement("DIV");
        blogContentDiv.setAttribute('class', 'blog-content');

        var blogMarkupDiv = document.createElement("DIV");
        blogMarkupDiv.setAttribute('class', 'blog-markup');

        blogMarkupDiv.innerHTML = mdText;

        var metadataElement = blogMarkupDiv.getElementsByTagName('p')[0];
        blogMarkupDiv.removeChild(metadataElement);

        var hrBefore = blogMarkupDiv.getElementsByTagName('hr')[0];
        var hrAfter = blogMarkupDiv.getElementsByTagName('hr')[1];
        hrBefore.parentNode.removeChild(hrBefore);
        hrAfter.parentNode.removeChild(hrAfter);

        blogContentDiv.appendChild(blogMarkupDiv);

        var blogContainer_1 = document.createElement("DIV");
        blogContainer_1.setAttribute('class', 'blog-info-container-1');

        var blogContainer_2 = document.createElement("DIV");
        blogContainer_2.setAttribute('class', 'blog-info-container-2');

        var blogContainer_3 = document.createElement("DIV");
        blogContainer_3.setAttribute('class', 'blogItemInfoContainer');

        blogContainer_1.appendChild(blogContainer_2);
        blogContainer_2.appendChild(blogContainer_3);

        var jsontext = '{' + metadataElement.innerText + '}';
        var postMeta = JSON.parse(jsontext);

        if (postMeta) {
            var thumbnailContainer = document.createElement("DIV");
            thumbnailContainer.classList.add("blogItemImgContainer");

            var thumbnailDivToAdd = document.createElement("IMG");
            thumbnailDivToAdd.setAttribute("class", "blogThumbnail");
            thumbnailDivToAdd.setAttribute("src", '/' + postMeta.thumbnail);

            thumbnailContainer.appendChild(thumbnailDivToAdd);
            blogContainer_3.appendChild(thumbnailContainer);


            var blogItemTxtContainer = document.createElement("DIV");
            blogItemTxtContainer.classList.add("blogItemTxtContainer");

            var blogItemTxt = document.createElement("h2");
            var textNode = document.createTextNode(postMeta.title);
            blogItemTxt.appendChild(textNode);
            blogItemTxt.setAttribute('class', 'blogItemTxt');

            var blogItemDateContainer = document.createElement("DIV");
            blogItemDateContainer.setAttribute('class', 'blogItemDateContainer');
            var textDateNode = document.createTextNode(postMeta.date);
            blogItemDateContainer.appendChild(textDateNode);

            blogItemTxtContainer.appendChild(blogItemTxt);
            blogItemTxtContainer.appendChild(blogItemDateContainer);

            var tagListToAdd = document.createElement("DIV");
            tagListToAdd.classList.add("blog-tag-list");

            postMeta.tags.forEach(function (aTagData) {
                var tagToAdd = document.createElement("DIV");
                tagToAdd.setAttribute("class", "blog-tag");

                var tagText = document.createTextNode(aTagData);
                tagToAdd.appendChild(tagText);
                tagListToAdd.appendChild(tagToAdd);
            });

            blogItemTxtContainer.appendChild(tagListToAdd);

            blogContainer_3.appendChild(blogItemTxtContainer);
        }

        elementToDisplay.appendChild(blogContainer_1);
        elementToDisplay.appendChild(blogContentDiv);

        let blogContainer = document.getElementsByClassName("main-container")[0];
        let editOnGithubComponent = HtmlComponentCreator.getGitHubEditComponent(markdownFileName);

        blogContainer.insertBefore(editOnGithubComponent, elementToDisplay.nextSibling);
    });
}

function unescapeHTML(text) {
    return text.replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "'");
}

// Listen on page load:
window.addEventListener('load', getPostData);