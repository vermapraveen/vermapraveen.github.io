import MdToHtmlConverter from "/src/scripts/mdToHtmlConverter.js";

const HtmlComponentCreator = {
  getAnchorComponent: async (link, displayTxt) => {
    let anchor = document.createElement("a");
    anchor.setAttribute("href", link);
    if (displayTxt) {
      anchor.innerText = displayTxt;
    }
    return anchor;
  },

  getClickableComponent: async displayTxt => {
    var clickable = document.createElement("DIV");
    clickable.setAttribute("class", "clickable");
    var textNode = document.createTextNode(displayTxt);
    clickable.appendChild(textNode);

    return clickable;
  },

  getClickableComponent2: async (link, displayTxt) => {
    var clickable = document.createElement("DIV");
    clickable.setAttribute("class", "clickable");
    var textNode = document.createTextNode(displayTxt);
    clickable.appendChild(textNode);

    clickable.addEventListener("click", e => {
      history.pushState({ page: 1 }, link);
    });

    return clickable;
  },

  getMeta: async () => {
    let meta = document.createElement("meta");
    meta.name = "viewport";
    meta.httpEquiv = "X-UA-Compatible";
    meta.content = "width=device-width, initial-scale=1";

    return meta;
  },

  getPageTitle: async titleText => {
    var title = document.createElement("TITLE");
    title.setAttribute("text", titleText);
    return title;
  },

  getStyleComponent: async stylePath => {
    var link = document.createElement("LINK");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", stylePath);
    return link;
  },

  getHeaderComponent: async () => {
    var header = document.createElement("DIV");
    header.setAttribute("class", "header");

    var logoElement = await HtmlComponentCreator.getAnchorComponent(
      "/",
      "Home"
    );
    logoElement.setAttribute("class", "logo");

    header.appendChild(logoElement);

    var nav = await HtmlComponentCreator.getNavComponent();
    header.appendChild(nav);

    return header;
  },

  getNavComponent: async () => {
    var navItem = document.createElement("DIV");
    navItem.setAttribute("class", "nav-menu");
    var {
      aboutMenuItem,
      blogsMenuItem,
      projectsMenuItem
    } = await HtmlComponentCreator.getMenuItem2();

    navItem.appendChild(aboutMenuItem);
    navItem.appendChild(blogsMenuItem);
    navItem.appendChild(projectsMenuItem);

    return navItem;
  },

  getFooterComponent: async () => {
    var footer = document.createElement("DIV");
    footer.setAttribute("class", "footer");

    var footerItem1 = document.createElement("DIV");
    footerItem1.setAttribute("class", "footer-item");
    footerItem1.innerText = "Copyright by Praveen K Verma";
    footer.appendChild(footerItem1);

    return footer;
  },

  getMenuItem2: async () => {
    var aboutMenuItem = await HtmlComponentCreator.getAnchorComponent(
      "/about",
      "About Me"
    );

    var blogsMenuItem = await HtmlComponentCreator.getAnchorComponent(
      "/blog/index2.html",
      "Articles"
    );
    var projectsMenuItem = await HtmlComponentCreator.getAnchorComponent(
      "/projects",
      "Projects"
    );

    return { aboutMenuItem, blogsMenuItem, projectsMenuItem };
  },

  getGitHubEditComponent: async filePath => {
    var editLinkContainer = document.createElement("DIV");
    editLinkContainer.setAttribute("class", "edit-link-container");

    var editLink = await HtmlComponentCreator.getAnchorComponent(
      "https://github.com/vermapraveen/vermapraveen.github.io/blob/master/content/posts/" +
        filePath,
      "Edit on GitHub"
    );

    editLinkContainer.appendChild(editLink);

    return editLinkContainer;
  },

  getBlogThumbnail: async imgSrc => {
    var img = document.createElement("IMG");
    img.setAttribute("class", "blogThumbnail");
    img.setAttribute("src", imgSrc);
    return img;
  },

  getBlogThumbnailContainer: async imgSrc => {
    var blogThumbnailContainer = document.createElement("DIV");
    blogThumbnailContainer.setAttribute("class", "blogItemImgContainer");

    blogThumbnailContainer.appendChild(
      await HtmlComponentCreator.getBlogThumbnail(imgSrc)
    );

    return blogThumbnailContainer;
  },

  getBlogDetails: async blogTitle => {
    var blogItemTxtContainer = document.createElement("DIV");
    blogItemTxtContainer.setAttribute("class", "blogItemTxtContainer");

    var blogItemTxt = document.createElement("h2");
    blogItemTxt.setAttribute("class", "blogItemTxt");

    var textNode = document.createTextNode(blogTitle);
    blogItemTxt.appendChild(textNode);
    blogItemTxtContainer.appendChild(blogItemTxt);
    return blogItemTxtContainer;
  },

  getDraftBlogDetails: async blogTitle => {
    var blogItemTxtContainer = await HtmlComponentCreator.getBlogDetails(
      blogTitle
    );
    var draftSpan = document.createElement("span");
    draftSpan.setAttribute("id", "draft");
    draftSpan.innerText = "[DRAFT]";
    blogItemTxtContainer.appendChild(draftSpan);

    return blogItemTxtContainer;
  },

  getPublishedBlogDetails: async (blogTitle, publishedDate) => {
    var blogItemTxtContainer = await HtmlComponentCreator.getBlogDetails(
      blogTitle
    );
    var blogItemDateContainer = document.createElement("DIV");
    blogItemDateContainer.setAttribute("class", "blogItemDateContainer");
    var textDateNode = document.createTextNode(publishedDate);
    blogItemDateContainer.appendChild(textDateNode);

    blogItemTxtContainer.appendChild(blogItemDateContainer);

    return blogItemTxtContainer;
  },

  getBlogInfoContainerDivs: async (
    blogTitle,
    blogThumbnailPath,
    isDraft,
    publishedDate,
    tags
  ) => {
    var blogItemInfoContainer = document.createElement("DIV");
    blogItemInfoContainer.setAttribute("class", "blogItemInfoContainer");

    var blogItemTxtContainer = isDraft
      ? await HtmlComponentCreator.getDraftBlogDetails(blogTitle)
      : await HtmlComponentCreator.getPublishedBlogDetails(
          blogTitle,
          publishedDate
        );

    var blogTagContainer = document.createElement("DIV");
    blogTagContainer.setAttribute("class", "blogTagContainer");
    tags.forEach(async tagText => {
      var aTag = document.createElement("DIV");
      aTag.setAttribute("class", "blogTagContainerItem");
      var textElement = document.createTextNode(tagText);
      aTag.appendChild(textElement);
      blogTagContainer.appendChild(aTag);
    });

    blogItemInfoContainer.appendChild(
      await HtmlComponentCreator.getBlogThumbnailContainer(
        blogThumbnailPath
      )
    );
    blogItemInfoContainer.appendChild(blogItemTxtContainer);

    var blogContainer_1 = document.createElement("DIV");
    blogContainer_1.setAttribute("class", "blog-info-container-1");

    var blogContainer_2 = document.createElement("DIV");
    blogContainer_2.setAttribute("class", "blog-info-container-2");

    blogContainer_1.appendChild(blogContainer_2);
    blogContainer_2.appendChild(blogItemInfoContainer);
    blogContainer_2.appendChild(blogTagContainer);

    return blogContainer_1;
  },

  getBlogInfoLink: async (
    path,
    blogTitle,
    blogThumbnailPath,
    isDraft,
    publishedDate
  ) => {
    // var menuLink = await HtmlComponentCreator.getClickableComponent(
    //   "/blog?id=" + path
    // );
    // menuLink.setAttribute("class", "blogItemLink");

    // menuLink.appendChild(
    var blogInfo = await HtmlComponentCreator.getBlogInfoContainerDivs(
      blogTitle,
      blogThumbnailPath,
      isDraft,
      publishedDate
    );

    // blogInfo.addEventListener("click", e => {
    //   var mainContainer = document.getElementsByClassName("main-container")[0];
    //   if (mainContainer.children.length > 0) {
    //     mainContainer.removeChild(mainContainer.children[0]);
    //   }

    //   fetch("/content/posts/" + path)
    //     .then(contentResponse => contentResponse.text())
    //     .then(async contentText => {
    //       await HtmlComponentCreator.addToMainContainer("", "blog-container");

    //       var markdownText = await MdToHtmlConverter.convert(contentText);
    //       await HtmlComponentCreator.getBlogContent(markdownText, path);
    //     });
    // });
    // );

    return blogInfo;
  },

  getBlogContent: async (mdText, markdownFileName) => {
    var elementToDisplay = document.getElementsByClassName("blog-container")[0];
    var blogContentDiv = document.createElement("DIV");
    blogContentDiv.setAttribute("class", "blog-content");
    var blogMarkupDiv = document.createElement("DIV");
    blogMarkupDiv.setAttribute("class", "blog-markup");
    blogMarkupDiv.innerHTML = mdText;
    var metadataElement = blogMarkupDiv.getElementsByTagName("p")[0];
    blogMarkupDiv.removeChild(metadataElement);
    var hrBefore = blogMarkupDiv.getElementsByTagName("hr")[0];
    var hrAfter = blogMarkupDiv.getElementsByTagName("hr")[1];
    hrBefore.parentNode.removeChild(hrBefore);
    hrAfter.parentNode.removeChild(hrAfter);
    blogContentDiv.appendChild(blogMarkupDiv);
    var jsontext = "{" + metadataElement.innerText + "}";
    var postMeta = JSON.parse(jsontext);
    elementToDisplay.appendChild(
      await HtmlComponentCreator.getBlogInfoContainerDivs(
        postMeta.title,
        postMeta.thumbnail,
        postMeta.draft,
        postMeta.date,
        postMeta.tags
      )
    );
    elementToDisplay.appendChild(blogContentDiv);
    let blogContainer = document.getElementsByClassName("main-container")[0];
    let editOnGithubComponent = await HtmlComponentCreator.getGitHubEditComponent(
      markdownFileName
    );
    blogContainer.insertBefore(
      editOnGithubComponent,
      elementToDisplay.nextSibling
    );
  },

  applyMasterPage: async () => {
    var head = document.getElementsByTagName("HEAD")[0];
    head.insertBefore(await HtmlComponentCreator.getMeta(), head.firstChild);
    head.append(await HtmlComponentCreator.getPageTitle("Praveen K Verma"));
    head.append(
      await HtmlComponentCreator.getStyleComponent("/src/styles/main2.css")
    );
    var body = document.getElementsByTagName("BODY")[0];
    var bodyContainer = await HtmlComponentCreator.getMainContainer(body);
    body.appendChild(bodyContainer);

    var header = await HtmlComponentCreator.getHeaderComponent();
    body.insertBefore(header, body.firstChild);

    var footer = await HtmlComponentCreator.getFooterComponent();
    body.append(footer);
  },

  getMainContainer: async body => {
    var bodyContainer = document.createElement("div");
    bodyContainer.setAttribute("class", "main-container");

    for (; body.children.length > 0; ) {
      bodyContainer.appendChild(body.children[0]);
    }

    return bodyContainer;
  },

  addToMainContainer: async (textToDispaly, classToApply) => {
    var mainContainerFirstChild = document.createElement("DIV");
    mainContainerFirstChild.innerHTML = textToDispaly;

    if (classToApply) {
      mainContainerFirstChild.setAttribute("class", classToApply);
    } else {
      mainContainerFirstChild.classList.add("main-container-child");
    }

    var mainContainer = document.getElementsByClassName("main-container")[0];
    mainContainer.insertBefore(
      mainContainerFirstChild,
      mainContainer.firstChild
    );
  }
};

export default HtmlComponentCreator;
