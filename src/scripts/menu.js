document.addEventListener("DOMContentLoaded", function (event) {
    var body = document.getElementsByTagName("BODY")[0];  
    var header = getHeaderComponent();

    body.insertBefore(header, body.firstChild);
});

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