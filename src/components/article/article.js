import MdToHtmlConverter from "/src/scripts/mdToHtmlConverter.js";
import ArticleBody from "/src/components/article/article-body.js";
import ArticleListItem from "/src/components/article-list/article-list-item.js";
import EditArticle from "/src/components/article/edit-article.js";

class Article extends React.Component {
  constructor() {
    super();
    // this.state = { articleBodyHtml: null, articleHeader: null };
  }

  componentDidMount() {
    const getArticleRequestPath = new Request(
      "/content/posts/" + this.props.filename + ".md"
    );

    fetch(getArticleRequestPath)
      .then(response => response.text())
      .then(data => {
        let articleComponents = this.getArticleComponents(data);
        this.setState({
          articleBodyHtml: articleComponents.articleBodyHtml,
          articleHeader: articleComponents.articleHeader
        });
      });
  }

  render() {
    if (this.state && this.state.articleBodyHtml) {
      return React.createElement("div", { class: "blog-container" }, [
        React.createElement(
          ArticleListItem,
          { article_info: this.state.articleHeader },
          null
        ),
        React.createElement(
          ArticleBody,
          { articleBodyHtml: this.state.articleBodyHtml },
          null
        ),
        React.createElement(
          EditArticle,
          { filePath: this.props.filename + ".md" },
          null
        )
      ]);
    } else {
      return React.createElement("div", null, "Loading...");
    }
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

    var jsontext = "{" + metadataElement.innerText + "}";
    var articleHeader = JSON.parse(jsontext);

    const articleBodyHtml = blogMarkupDiv.innerHTML;
    return { articleBodyHtml, articleHeader };
  }
}

export default Article;
