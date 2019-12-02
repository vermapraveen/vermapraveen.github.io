"use strict";

import HtmlComponentCreator from "/src/scripts/htmlComponents.js";

const getIndex = async () => {
  await HtmlComponentCreator.applyMasterPage();
  await HtmlComponentCreator.addToMainContainer("This is an INDEX page");
};


// Listen on page load:
window.addEventListener("load", getIndex);
