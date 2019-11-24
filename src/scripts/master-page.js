document.addEventListener("DOMContentLoaded", function (event) {
    var head = document.getElementsByTagName("HEAD")[0];  
    head.append(getMasterPageTitle("Praveen K Verma"));
    head.append(getMasterPageStyles("/src/styles/main.css"));

    var body = document.getElementsByTagName("BODY")[0];  
    var header = getHeaderComponent();

    body.insertBefore(header, body.firstChild);
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

function getMasterPage2() {
    var doc = document.implementation.createHTMLDocument();

    doc.head.append(getMasterPageTitle("Praveen K Verma"));
    doc.head.append(getMasterPageStyles("/src/styles/main.css"));
    doc.body.append(getMasterPageScripts("/src/scripts/menu.js"));

    return doc;
}

function getMasterPageBody() {
    var doc = document.implementation.createHTMLDocument();
    doc.body.append('Hello World!');
}

function getMasterPageTitle(titleText) {
    var title = document.createElement("TITLE");
    title.setAttribute('text', titleText);
    return title;
}

function getMasterPageStyles(stylePath) {
    var link = document.createElement("LINK");
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', stylePath);

    return link;
}

function getMasterPageScripts(scriptPath) {
    var script = document.createElement("SCRIPT");
    script.setAttribute('src', scriptPath);

    return script;
}

function getNavComponent() {
    var navItem = document.createElement("NAV");
    var siteMenu = createSiteMenu();
    navItem.appendChild(siteMenu);
    return navItem;
};

function createSiteMenu() {
    var menu = getMenuComponent();
    var homeMenuItem = getMenuItemComponent("/", "Home");
    menu.appendChild(homeMenuItem);
    var aboutMenuItem = getMenuItemComponent("/src/about.html", "About Me");
    menu.appendChild(aboutMenuItem);
    var blogsMenuItem = getMenuItemComponent("/src/blogs.html", "Blogs");
    menu.appendChild(blogsMenuItem);
    var projectsMenuItem = getMenuItemComponent("/src/projects.html", "Projects");
    menu.appendChild(projectsMenuItem);
    return menu;
}

function getHeaderComponent() {
    var header = document.createElement("DIV");
    header.setAttribute('class', "header");

    var nav=getNavComponent();
    header.appendChild(nav);

    return header;
};

function getMenuComponent() {
    var menu = document.createElement("UL");
    return menu;
};

function getMenuItemComponent(link, displayTxt) {
    var menuItem = document.createElement("LI");
    var menuLink = getAnchorComponent(link, displayTxt);
    menuItem.appendChild(menuLink);
    return menuItem;
};

function getAnchorComponent(link, displayTxt) {
    var anchor = document.createElement('a');
    anchor.setAttribute('href', link);
    anchor.innerText = displayTxt;
    return anchor;
};