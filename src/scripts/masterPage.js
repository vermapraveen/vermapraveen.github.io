 
"use strict";

import HtmlComponentCreator from '/src/scripts/htmlComponents.js'

const loadMasterPage = async () => {

    var head = document.getElementsByTagName("HEAD")[0];
    head.insertBefore(HtmlComponentCreator.getMeta(), head.firstChild);

    head.append(HtmlComponentCreator.getPageTitle("Praveen K Verma"));
    head.append(HtmlComponentCreator.getStyleComponent("/src/styles/main.css"));

    var body = document.getElementsByTagName("BODY")[0];

    var bodyConteiner = document.createElement('div');
    bodyConteiner.setAttribute('class', 'main-container');

    const currentBodyChildren = body.children;

    do {
        bodyConteiner.appendChild(currentBodyChildren[0]);
    }
    while (currentBodyChildren.length > 0);

    body.appendChild(bodyConteiner);

    var header = HtmlComponentCreator.getHeaderComponent();
    body.insertBefore(header, body.firstChild);

    var footer = HtmlComponentCreator.getFooterComponent();
    body.append(footer);  
}

// Listen on page load:
window.addEventListener('load', loadMasterPage);