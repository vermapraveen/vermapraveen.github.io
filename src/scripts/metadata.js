document.addEventListener("DOMContentLoaded", function (event) {
    getBasicData();
});

function getBasicData() {
    fetch("/content/metadata.json")
        .then(response => response.text())
        .then(text => {
            var actual_JSON = JSON.parse(text);
            var elementToDisplay = document.getElementById('blog-item-container');

            actual_JSON.forEach(function (obj) {
                var menuItem = getBlogItemCompoenent(obj);
                elementToDisplay.appendChild(menuItem);
            });

        });

    function getBlogItemCompoenent(aBlogListObj) {
        var menuLink = getAnchorComponent('blog.html?id=' + aBlogListObj.path);
        menuLink.setAttribute('class', 'blogItemLink');

        var blogItemInfoContainer = document.createElement("DIV");
        blogItemInfoContainer.setAttribute('class', 'blogItemInfoContainer');

        var blogItemImgContainer = document.createElement("DIV");
        blogItemImgContainer.setAttribute('class', 'blogItemImgContainer');

        var thumbnailDivToAdd = document.createElement("IMG");
        thumbnailDivToAdd.setAttribute('class', "blogThumbnail");
        thumbnailDivToAdd.setAttribute("src", '/' + aBlogListObj.thumbnail);

        blogItemImgContainer.appendChild(thumbnailDivToAdd);

        var blogItemTxtContainer = document.createElement("DIV");
        blogItemTxtContainer.setAttribute('class', 'blogItemTxtContainer');


        var blogItemTxt = document.createElement("h2");
        blogItemTxt.setAttribute('class', 'blogItemTxt');

        var textNode = document.createTextNode(aBlogListObj.title);
        blogItemTxt.appendChild(textNode);
        blogItemTxtContainer.appendChild(blogItemTxt);

        if (aBlogListObj.draft) {
            var draftSpan = document.createElement('span');
            draftSpan.setAttribute('id', 'draft');
            draftSpan.innerText = "[DRAFT]";
            blogItemTxt.appendChild(draftSpan);
        }
        else {
            var blogItemDateContainer = document.createElement("DIV");
            blogItemDateContainer.setAttribute('class', 'blogItemDateContainer');
            var textDateNode = document.createTextNode(aBlogListObj.date);
            blogItemDateContainer.appendChild(textDateNode);

            blogItemTxtContainer.appendChild(blogItemDateContainer);
        }

        blogItemInfoContainer.appendChild(blogItemImgContainer);
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