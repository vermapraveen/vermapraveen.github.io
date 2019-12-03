
const MdToHtmlConverter = {
  unescapeHTML: async text => {
    return text
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  },

  convert: async (contentText) => {
    var showdn = new showdown.Converter();
    var mdText = showdn.makeHtml(
      await MdToHtmlConverter.unescapeHTML(contentText)
    );

    return mdText;
  }
};

export default MdToHtmlConverter;
