const HtmlComponentCreator = {
  getAnchorComponent: (link, displayTxt) => {
    let anchor = document.createElement("a");
    anchor.setAttribute("href", link);
    if (displayTxt) {
      anchor.innerText = displayTxt;
    }
    return anchor;
  },

  getMeta: () => {
    let meta = document.createElement("meta");
    meta.name = "viewport";
    meta.httpEquiv = "X-UA-Compatible";
    meta.content = "width=device-width, initial-scale=1";

    return meta;
  },

  getPageTitle: titleText => {
    var title = document.createElement("TITLE");
    title.setAttribute("text", titleText);
    return title;
  },

  getStyleComponent: stylePath => {
    var link = document.createElement("LINK");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", stylePath);
    return link;
  },

  getHeaderComponent: () => {
    var header = document.createElement("DIV");
    header.setAttribute("class", "header");

    var logoElement = HtmlComponentCreator.getAnchorComponent("/", "Home");
    logoElement.setAttribute("class", "logo");

    header.appendChild(logoElement);

    var nav = HtmlComponentCreator.getNavComponent();
    header.appendChild(nav);

    return header;
  },

  getNavComponent: () => {
    var navItem = document.createElement("DIV");
    navItem.setAttribute("class", "nav-menu");
    var { aboutMenuItem, blogsMenuItem, projectsMenuItem } = HtmlComponentCreator.getMenuItem2();

    navItem.appendChild(aboutMenuItem);
    navItem.appendChild(blogsMenuItem);
    navItem.appendChild(projectsMenuItem);

    return navItem;
  },

  getFooterComponent: () => {
    var footer = document.createElement("DIV");
    footer.setAttribute("class", "footer");

    var footerItem1 = document.createElement("DIV");
    footerItem1.setAttribute("class", "footer-item");
    footerItem1.innerText = "Copyright by Praveen K Verma";
    footer.appendChild(footerItem1);

    return footer;
  },

  getMenuItem2: () => {
    var aboutMenuItem = HtmlComponentCreator.getAnchorComponent(
      "/src/about.html",
      "About Me"
    );
    var blogsMenuItem = HtmlComponentCreator.getAnchorComponent(
      "/src/blogList.html",
      "Articles"
    );
    var projectsMenuItem = HtmlComponentCreator.getAnchorComponent(
      "/src/projects.html",
      "Projects"
    );
    return { aboutMenuItem, blogsMenuItem, projectsMenuItem };
  },

  getGitHubEditComponent: (filePath) => {
    var editLinkContainer = document.createElement("DIV");
    editLinkContainer.setAttribute("class", "edit-link-container");

    var editLink = HtmlComponentCreator.getAnchorComponent(
      "https://github.com/vermapraveen/vermapraveen.github.io/blob/master/content/posts/"+filePath,
      "Edit on GitHub"
    )

    editLinkContainer.appendChild(editLink);

    return editLinkContainer;
  },

  getBlogThumbnail: (imgSrc) => {
    var img = document.createElement("IMG");
    img.setAttribute('class', "blogThumbnail");
    img.setAttribute("src", imgSrc);
    return img;
  },

  getBlogThumbnailContainer: (imgSrc) => {
    var blogThumbnailContainer = document.createElement("DIV");
    blogThumbnailContainer.setAttribute('class', 'blogItemImgContainer');

    blogThumbnailContainer.appendChild( HtmlComponentCreator.getBlogThumbnail(imgSrc));

    return blogThumbnailContainer;
  },

  getBlogDetails: (blogTitle) => {
    var blogItemTxtContainer = document.createElement("DIV");
    blogItemTxtContainer.setAttribute('class', 'blogItemTxtContainer');

    var blogItemTxt = document.createElement("h2");
    blogItemTxt.setAttribute('class', 'blogItemTxt');

    var textNode = document.createTextNode(blogTitle);
    blogItemTxt.appendChild(textNode);
    blogItemTxtContainer.appendChild(blogItemTxt);
    return blogItemTxtContainer;
  },

  getDraftBlogDetails: (blogTitle) => {
    var blogItemTxtContainer = HtmlComponentCreator.getBlogDetails(blogTitle);
    var draftSpan = document.createElement('span');
    draftSpan.setAttribute('id', 'draft');
    draftSpan.innerText = "[DRAFT]";
    blogItemTxtContainer.appendChild(draftSpan);

    return blogItemTxtContainer;
  },

  getPublishedBlogDetails: (blogTitle, publishedDate) => {
    var blogItemTxtContainer = HtmlComponentCreator.getBlogDetails(blogTitle);
    var blogItemDateContainer = document.createElement("DIV");
    blogItemDateContainer.setAttribute('class', 'blogItemDateContainer');
    var textDateNode = document.createTextNode(publishedDate);
    blogItemDateContainer.appendChild(textDateNode);

    blogItemTxtContainer.appendChild(blogItemDateContainer);

    return blogItemTxtContainer;
  },

};

export default HtmlComponentCreator;
