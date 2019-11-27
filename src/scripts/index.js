window.onload = function () {
    var markdownFileName = window.location.search.substring(4);
    document.getElementById('editOnGithub').setAttribute("href", "https://github.com/vermapraveen/vermapraveen.github.io/blob/master/" + markdownFileName)

    getPostData(markdownFileName);
}

function getPostData(markdownFileName) {
    fetch('/' + markdownFileName)
        .then(contentResponse => contentResponse.text())
        .then(contentText => {
            var showdn = new Showdown.converter();
            var elementToDisplay = document.getElementById('blog-container');
            var mdText = showdn.makeHtml(unescapeHTML(contentText));
            //applyFirstStyle(mdText);            
            
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

            var matadataDiv = document.createElement("DIV");
            matadataDiv.setAttribute('class', 'blogItemInfoContainer');

            var jsontext = '{' + metadataElement.innerText + '}';
            var postMeta = JSON.parse(jsontext);

            if (postMeta) {

                // var row1 = document.createElement("DIV");
                // row1.setAttribute("class", "row");


                var thumbnailContainer = document.createElement("DIV");
                thumbnailContainer.classList.add("blogItemImgContainer");

                var thumbnailDivToAdd = document.createElement("IMG");
                thumbnailDivToAdd.setAttribute("class", "blogThumbnail");
                thumbnailDivToAdd.setAttribute("src", '/' + postMeta.thumbnail);

                thumbnailContainer.appendChild(thumbnailDivToAdd);
                matadataDiv.appendChild(thumbnailContainer);


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

                matadataDiv.appendChild(blogItemTxtContainer);
            }

            elementToDisplay.appendChild(matadataDiv);
            elementToDisplay.appendChild(blogContentDiv);
        });
};

function unescapeHTML(text) {
    return text.replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "'");
}

function applyFirstStyle(rawMdText) {
    var divToAdd = document.createElement("DIV");
    divToAdd.innerHTML = rawMdText;
    var metadataElement = divToAdd.firstElementChild.nextElementSibling;
    var postMeta = JSON.parse(metadataElement.innerText);

    if (postMeta) {
        if (postMeta.date) {
            var divToAdd = document.createElement("DIV");
            divToAdd.setAttribute("id", "dateofPost");
            divToAdd.innerHTML = postMeta.date;
        }
    }
}