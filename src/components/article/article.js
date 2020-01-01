import MdToHtmlConverter from "/src/scripts/mdToHtmlConverter.js";

class Article extends React.Component {
  constructor() {
    super();
    this.state = { articleHtml: "" };
  }

  componentDidMount() {
    const getArticleRequestPath = new Request(
      "/content/posts/" + this.props.filename + ".md"
    );

    fetch(getArticleRequestPath)
      .then(response => response.text())
      .then(data => {
        let blogMarkupDiv = this.getArticleComponents(data);
        this.setState({ articleHtml: blogMarkupDiv });
      });
  }

  render() {
    return React.createElement(
      "div",
      { class: "blog-container" },
      React.createElement(
        "div",
        { class: "blog-content" },
        React.createElement(
          "div",
          {
            class: "blog-markup",
            dangerouslySetInnerHTML: { __html: this.state.articleHtml.innerHTML }
          },
          null
        )
      )
    );
  }

  getArticleComponents(markdownText) {
    const markdownHtml = MdToHtmlConverter.convert(markdownText);
    var blogMarkupDiv = document.createElement("DIV");
    blogMarkupDiv.innerHTML = markdownHtml;
    var metadataElement = blogMarkupDiv.getElementsByTagName("p")[0];
    blogMarkupDiv.removeChild(metadataElement);
    var hrBefore = blogMarkupDiv.getElementsByTagName("hr")[0];
    var hrAfter = blogMarkupDiv.getElementsByTagName("hr")[1];
    hrBefore.parentNode.removeChild(hrBefore);
    hrAfter.parentNode.removeChild(hrAfter);
    return blogMarkupDiv;
  }
}

export default Article;
