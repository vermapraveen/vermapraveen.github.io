"use strict";

import HtmlComponentCreator from "/src/scripts/htmlComponents.js";

const getAbout = async () => {
    await HtmlComponentCreator.applyMasterPage();
    await HtmlComponentCreator.addToMainContainer("This is an ABOUT page", "about-container");
  };

// Listen on page load:
window.addEventListener("load", getAbout);
