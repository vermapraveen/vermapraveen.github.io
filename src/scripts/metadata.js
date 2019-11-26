document.addEventListener("DOMContentLoaded", function (event) {
    getBasicData();
});

function getBasicData() {
    fetch("/content/metadata.json")
        .then(response => response.text())
        .then(text => {
            var actual_JSON = JSON.parse(text);
            var elementToDisplay = document.getElementById('blog-list');

            actual_JSON.forEach(function (obj) {
                if (obj.draft) {
                    return;
                }

                getPostData(obj.path);
                // var menuItem = getMenuItemAsDiv('blog.html?id=' + obj.path, obj.title, "blog-list-item");
                // elementToDisplay.appendChild(menuItem);
            });

        });
};


function getPostData(markdownFileName) {
    fetch('/' +markdownFileName)
        .then(contentResponse => contentResponse.text())
        .then(contentText => {
            var showdn = new Showdown.converter();
            var elementToDisplay = document.getElementById('data-markdown');
            var mdText = showdn.makeHtml(unescapeHTML(contentText));
            //applyFirstStyle(mdText);										
            var divToAdd = document.createElement("DIV");
            divToAdd.innerHTML = mdText;

            var metadataElement = divToAdd.getElementsByTagName('p')[0];
            var hrBefore = divToAdd.getElementsByTagName('hr')[0];
            var hrAfter = divToAdd.getElementsByTagName('hr')[1];
            hrBefore.parentNode.removeChild(hrBefore);
            hrAfter.parentNode.removeChild(hrAfter);

            var jsontext='{'+metadataElement.innerText+'}';
            var postMeta = JSON.parse(jsontext);

            if (postMeta) {
                if (postMeta.date) {
                    var dateDivToAdd = document.createElement("DIV");
                    dateDivToAdd.setAttribute("id", "blogCreationDate");
                    dateDivToAdd.innerHTML = postMeta.date;
                    divToAdd.appendChild(dateDivToAdd);
                }

                if (postMeta.title) {
                    var titleDivToAdd = document.createElement("DIV");
                    titleDivToAdd.setAttribute("id", "blogTitle");
                    titleDivToAdd.innerHTML = postMeta.title;
                    divToAdd.appendChild(titleDivToAdd);
                }

                if (postMeta.thumbnail) {
                    var thumbnailDivToAdd = document.createElement("IMG");
                    thumbnailDivToAdd.setAttribute("id", "blogThumbnail");
                    thumbnailDivToAdd.setAttribute("src", '/' + postMeta.thumbnail);

                    divToAdd.appendChild(thumbnailDivToAdd);
                }

                if (postMeta.tags) {
                    var tagListToAdd = document.createElement("UL");
                    tagListToAdd.setAttribute("id", "blogTags");

                    postMeta.tags.forEach(function (aTagData) {
                        var tagToAdd = document.createElement("LI");
                        var tagText = document.createTextNode(aTagData);
                        tagToAdd.appendChild(tagText);
                        tagListToAdd.appendChild(tagToAdd);
                    });

                    divToAdd.appendChild(tagListToAdd);
                }
            }

            metadataElement.style.display = 'none';
            elementToDisplay.appendChild(divToAdd);
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