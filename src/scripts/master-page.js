document.addEventListener("DOMContentLoaded", function (event) {
    var head = document.getElementsByTagName("HEAD")[0];  
    head.append(getMasterPageTitle("Praveen K Verma"));
    head.append(getMasterPageStyles("/src/styles/main.css"));

    var body = document.getElementsByTagName("BODY")[0]; 

    var header = getHeaderComponent();
    var nav = getNavComponent();
    header.appendChild(nav);

    body.insertBefore(header, body.firstChild);
});

function getHeaderComponent() {
    var header = document.createElement("DIV");
    header.setAttribute('class', "header");

    return header;
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
    var { homeMenuItem, aboutMenuItem, blogsMenuItem, projectsMenuItem } = getMenuItem2();

    navItem.appendChild(homeMenuItem);
    navItem.appendChild(aboutMenuItem);
    navItem.appendChild(blogsMenuItem);
    navItem.appendChild(projectsMenuItem);

    return navItem;
};

function getMenuItem2() {
    var homeMenuItem = getMenuItemAsDiv("/", "Home", "nav-menu-item");
    var aboutMenuItem = getMenuItemAsDiv("/src/about.html", "About Me", "nav-menu-item");
    var blogsMenuItem = getMenuItemAsDiv("/src/blogs.html", "Blogs", "nav-menu-item");
    var projectsMenuItem = getMenuItemAsDiv("/src/projects.html", "Projects", "nav-menu-item");
    return { homeMenuItem, aboutMenuItem, blogsMenuItem, projectsMenuItem };
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