import React from 'react'
import MdToHtmlConverter from "./mdToHtmlConverter.js";
import ArticleBody from "./article-body.js";
import ArticleListItem from "./article-list-item.js";
import EditArticle from "./edit-article.js";

class Article extends React.Component {
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
      return React.createElement("div", { className: "blog-container", key: 'blogContainer' }, [
        React.createElement(
          ArticleListItem,
          { article_info: this.state.articleHeader, key: 'ArticleListItem' },
          null
        ),
        React.createElement(
          ArticleBody,
          { articleBodyHtml: this.state.articleBodyHtml, key: 'ArticleBody' },
          null
        ),
        React.createElement(
          EditArticle,
          { filePath: this.props.filename + ".md", key: 'EditArticle' },
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
