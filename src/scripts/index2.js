import HtmlComponentCreator from "/src/scripts/htmlComponents.js";
import MdToHtmlConverter from "/src/scripts/mdToHtmlConverter.js";

const getPage = async () => {
  await HtmlComponentCreator.applyMasterPage();

  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("id");

  var mainContainer = document.getElementsByClassName("main-container")[0];
  if (mainContainer.children.length > 0) {
    mainContainer.removeChild(mainContainer.children[0]);
  }

  if (blogId) {
    let filename = blogId + ".md";
    let path = "/content/posts/" + filename;

    fetch(path)
      .then(contentResponse => contentResponse.text())
      .then(async contentText => {
        await HtmlComponentCreator.addToMainContainer("", "blog-container");

        var markdownText = await MdToHtmlConverter.convert(contentText);
        await HtmlComponentCreator.getBlogContent(markdownText, filename);
      });
  } else {
    HtmlComponentCreator.addToMainContainer(
      "List of my articles",
      "blog-item-container"
    );

    fetch("/content/metadata.json")
      .then(response => response.text())
      .then(text => {
        var actual_JSON = JSON.parse(text);
        var blogList = document.getElementsByClassName(
          "blog-item-container"
        )[0];

        actual_JSON.forEach(async blogInfoJson => {
          var clickabelContainer = await HtmlComponentCreator.getAnchorComponent(
            "/blog/index2.html?id=" + blogInfoJson.slug
          );

          var blogInfo = await HtmlComponentCreator.getBlogInfoContainerDivs(
            blogInfoJson.title,
            blogInfoJson.thumbnail,
            blogInfoJson.draft,
            blogInfoJson.date,
            blogInfoJson.tags
          );

          clickabelContainer.appendChild(blogInfo);

          blogList.appendChild(clickabelContainer);
        });
      });
  }
};

// Listen on page load:
window.addEventListener("load", getPage);
