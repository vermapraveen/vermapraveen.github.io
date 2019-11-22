function getBasicData() {
    fetch("content/posts.json")
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