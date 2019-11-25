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

                var menuItem = getMenuItemAsDiv('blog.html?id=' + obj.path, obj.title, "blog-list-item");
                elementToDisplay.appendChild(menuItem);
            });

        });
};