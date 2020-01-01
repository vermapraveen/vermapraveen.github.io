import ArticleListItem from "/src/components/article-list/article-list-item.js";

class ArticleList extends React.Component {
  constructor() {
    super();
    this.state = { articleListItems: [] };
  }

  componentDidMount() {
    var getArticleListRequestPath = new Request("/content/metadata.json");

    fetch(getArticleListRequestPath)
      .then(response => response.json())
      .then(data => {
        this.setState({ articleListItems: data });
      });
  }

  render() {
    const article_list_Items = this.state.articleListItems.map(ali =>
      React.createElement(
        "a",
        { href: "/blog?id=" + ali.slug },
        React.createElement(ArticleListItem, {article_info: ali}, null)
      )
    );

    return React.createElement("div", {class: "blog-item-container"}, article_list_Items);
  }
}

export default ArticleList;
