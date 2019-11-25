document.addEventListener("DOMContentLoaded", function (event) {
    getBasicData();
});

function getBasicData() {
    fetch("/content/metadata.json")
        .then(response => response.text())
        .then(text => {
            var actual_JSON = JSON.parse(text);
            var elementToDisplay = document.getElementById('item-list');
            var menu = getMenuComponent();

            actual_JSON.forEach(function (obj) {
                if (obj.draft) {
                    return;
                }

                var aboutMenuItem = getMenuItemComponent('blog.html?id=' + obj.path, obj.title);
                menu.appendChild(aboutMenuItem);
            });

            elementToDisplay.appendChild(menu);
        });
};