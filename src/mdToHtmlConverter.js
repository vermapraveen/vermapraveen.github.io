import showdown from 'showdown'

const MdToHtmlConverter = {
  unescapeHTML: text => {
    return text
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  },

  convert: (contentText) => {
    var showdn = new showdown.Converter();
    var mdText = showdn.makeHtml(
      MdToHtmlConverter.unescapeHTML(contentText)
    );

    return mdText;
  }
};

export default MdToHtmlConverter;
