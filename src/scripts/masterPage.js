 
"use strict";

import HtmlComponentCreator from '/src/scripts/htmlComponents.js'

const loadMasterPage = async () => {

    var head = document.getElementsByTagName("HEAD")[0];
    head.insertBefore(HtmlComponentCreator.getMeta(), head.firstChild);

    head.append(HtmlComponentCreator.getPageTitle("Praveen K Verma"));
    head.append(HtmlComponentCreator.getStyleComponent("/src/styles/main.css"));

    var body = document.getElementsByTagName("BODY")[0];

    var bodyContainer = document.createElement('div');
    bodyContainer.setAttribute('class', 'main-container');

    do {
        bodyContainer.appendChild(body.children[0]);
    }
    while (body.children.length > 0);

    body.appendChild(bodyContainer);

    var header = HtmlComponentCreator.getHeaderComponent();
    body.insertBefore(header, body.firstChild);

    var footer = HtmlComponentCreator.getFooterComponent();
    body.append(footer);  
}

// Listen on page load:
window.addEventListener('load', loadMasterPage);