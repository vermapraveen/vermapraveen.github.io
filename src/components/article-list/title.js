import DraftInd from "/src/components/article-list/draft_indicator.js";
import PublishedInd from "/src/components/article-list/published_indicator.js";

const Title = props => {
  let publishingInfo = props.draft
    ? React.createElement(DraftInd, null, null)
    : React.createElement(PublishedInd, { publishedDate: props.publishedDate }, null);

  return React.createElement("div", { class: "blogItemTxtContainer" }, [
    React.createElement("h2", { class: "blogItemTxt" }, props.title),
    publishingInfo
  ]);
};

export default Title;
