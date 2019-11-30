 
"use strict";

import HtmlComponentCreator from '/src/scripts/htmlComponents.js'

const loadMasterPage = async () => {

    HtmlComponentCreator.getMaterPage();  
}

// Listen on page load:
window.addEventListener('load', loadMasterPage);