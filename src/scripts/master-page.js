document.addEventListener("DOMContentLoaded", function (event) {
    var masterPageHtml = getMasterPageHtml();
});

function getMasterPageHtml() {
    fetch("/src/components/master-page.html")
        .then(response => response.text())
        .then(text => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(text, "text/html");
            return doc;
        });
};