function getBasicData() {
    fetch("../content/posts.json")
        .then(response => response.text())
        .then(text => {
            var actual_JSON = JSON.parse(text);

            var showdn = new Showdown.converter();
            var elementToDisplay = document.getElementById('item-list');

            actual_JSON.forEach(function (obj) {
                if (obj.draft) {
                    return;
                }

                var aTag = document.createElement('a');
                aTag.setAttribute('href', 'blog.html?id=' + obj.path);
                aTag.innerText = obj.title;

                elementToDisplay.appendChild(aTag);

            });
        });
};

function getPostData() {
    fetch('../' + 'content/posts/' + window.location.search.substring(4) + '.md')
        .then(contentResponse => contentResponse.text())
        .then(contentText => {
            var showdn = new Showdown.converter();
            var elementToDisplay = document.getElementById('data-markdown');
            var mdText = showdn.makeHtml(unescapeHTML(contentText));
            //applyFirstStyle(mdText);										
            var divToAdd = document.createElement("DIV");
            divToAdd.innerHTML = mdText;

            var metadataElement = divToAdd.firstElementChild.firstElementChild;
            var postMeta = JSON.parse(metadataElement.innerText);

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
                    thumbnailDivToAdd.setAttribute("src", '../' + postMeta.thumbnail);

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

            divToAdd.firstElementChild.style.display = 'none';
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