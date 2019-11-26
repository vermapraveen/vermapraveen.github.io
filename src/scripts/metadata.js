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
                if (obj.draft) {
                    return;
                }

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
            var textNode = document.createTextNode(aBlogListObj.title); 
            blogItemTxt.appendChild(textNode);
            blogItemTxt.setAttribute('class', 'blogItemTxt');

            var blogItemDateContainer = document.createElement("DIV");
            blogItemDateContainer.setAttribute('class', 'blogItemDateContainer');
            var textDateNode = document.createTextNode(aBlogListObj.date); 
            blogItemDateContainer.appendChild(textDateNode);

            blogItemTxtContainer.appendChild(blogItemTxt);
            blogItemTxtContainer.appendChild(blogItemDateContainer);

            blogItemInfoContainer.appendChild(blogItemImgContainer);
            blogItemInfoContainer.appendChild(blogItemTxtContainer);

            menuLink.appendChild(blogItemInfoContainer);

            return menuLink
            
        };
};