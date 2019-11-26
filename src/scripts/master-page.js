document.addEventListener("DOMContentLoaded", function (event) {
    var meta = document.createElement('meta');
    meta.name="viewport";
    meta.httpEquiv = "X-UA-Compatible";
    meta.content = "width=device-width, initial-scale=1";

    var head = document.getElementsByTagName("HEAD")[0];
    head.insertBefore(meta, head.firstChild);

    head.append(getMasterPageTitle("Praveen K Verma"));
    head.append(getMasterPageStyles("/src/styles/main.css"));

    var body = document.getElementsByTagName("BODY")[0];

    var bodyConteiner = document.createElement('div');
    bodyConteiner.setAttribute('class', 'main-container');

    const currentBodyChildren = body.children;

    do {
        bodyConteiner.appendChild(currentBodyChildren[0]);
    }
    while (currentBodyChildren.length > 0);

    body.appendChild(bodyConteiner);

    var header = getHeaderComponent();
    body.insertBefore(header, body.firstChild);

    var footer = getFooterComponent();
    body.append(footer);
});

function getHeaderComponent() {
    var header = document.createElement("DIV");
    header.setAttribute('class', "header");

    var logoElement = getAnchorComponent("/", "Home");
    logoElement.setAttribute('class', "logo");

    header.appendChild(logoElement);

    var nav = getNavComponent();
    header.appendChild(nav);

    return header;
};

function getFooterComponent() {
    var footer = document.createElement("DIV");
    footer.setAttribute('class', "footer");

    var footerItem1 = document.createElement("DIV");
    footerItem1.setAttribute('class', "footer-item");
    footerItem1.innerText = "Copyright by Praveen K Verma"
    footer.appendChild(footerItem1);

    return footer;
};

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
    var navItem = document.createElement("DIV");
    navItem.setAttribute('class', 'nav-menu')
    var { aboutMenuItem, blogsMenuItem, projectsMenuItem } = getMenuItem2();

    navItem.appendChild(aboutMenuItem);
    navItem.appendChild(blogsMenuItem);
    navItem.appendChild(projectsMenuItem);

    return navItem;
};

function getMenuItem2() {
    var aboutMenuItem = getAnchorComponent("/src/about.html", "About Me");
    var blogsMenuItem = getAnchorComponent("/src/blog-list.html", "Articles");
    var projectsMenuItem = getAnchorComponent("/src/projects.html", "Projects");
    return { aboutMenuItem, blogsMenuItem, projectsMenuItem };
}

function getMenuItemAsDiv(link, displayTxt, itemClass) {
    var menuItem = document.createElement("DIV");
    menuItem.setAttribute('class', itemClass);
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