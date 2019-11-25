
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