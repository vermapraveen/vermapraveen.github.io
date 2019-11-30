"use strict";

import HtmlComponentCreator from "/src/scripts/htmlComponents.js";

const getProjects = async () => {
    await HtmlComponentCreator.applyMasterPage();
    await HtmlComponentCreator.addToMainContainer("This is an PROJECT page", "projects-container");
  };

// Listen on page load:
window.addEventListener("load", getProjects);
