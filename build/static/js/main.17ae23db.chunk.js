(this.webpackJsonppraveen_k_verma=this.webpackJsonppraveen_k_verma||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=(a(15),function(e){return r.a.createElement("a",{href:"/",className:"logo",key:"home"},"Home")}),o=function(e){return r.a.createElement("div",{className:"nav-menu"},[r.a.createElement("a",{href:"/about",key:"about-href"},"About Me"),r.a.createElement("a",{href:"/blog",key:"blog-href"},"Articles"),r.a.createElement("a",{href:"/projects",key:"projects-href"},"Projects")])},m=function(e){return r.a.createElement("div",{className:"header",key:"header"},[r.a.createElement(i,{key:"Home"},null),r.a.createElement(o,{key:"Nav"},null)])},u=function(e){return r.a.createElement("div",{className:"footer-item"},"Copyright by Praveen K Verma")},s=function(e){return r.a.createElement("div",{className:"footer",key:"footer"},r.a.createElement(u,null,null))},d=a(9),f=function(e){return r.a.createElement("div",{key:"aboutKey"},"This is an ABOUT page")},h=a(1),E=a(2),v=a(4),g=a(3),p=a(5),b=function(e){return r.a.createElement("div",{className:"blogItemImgContainer"},r.a.createElement("img",{className:"blogThumbnail",src:e.thumbnailPath},null))},y=function(e){return r.a.createElement("span",{id:"draft"},"[DRAFT]")},N=function(e){return r.a.createElement("div",{className:"blogItemDateContainer"},"Published on: ".concat(e.publishedDate))},k=function(e){var t=e.draft?r.a.createElement(y,null,null):r.a.createElement(N,{publishedDate:e.publishedDate},null);return r.a.createElement("div",{className:"blogItemTxtContainer"},[r.a.createElement("h2",{className:"blogItemTxt"},e.title),t])},H=function(e){return r.a.createElement("div",{className:"blogTagContainerItem"},e.tagName)},T=function(e){return r.a.createElement("div",{className:"blogTagContainer"},e.tags.map((function(e){return r.a.createElement(H,{tagName:e},null)})))},j=function(e){var t=r.a.createElement("div",{className:"blogItemInfoContainer"},[r.a.createElement(b,{thumbnailPath:e.article_info.thumbnail},null),r.a.createElement(k,{title:e.article_info.title,draft:e.article_info.draft,publishedDate:e.article_info.date},null)]);return r.a.createElement("div",{className:"blog-info-container-1"},r.a.createElement("div",{className:"blog-info-container-2"},[t,r.a.createElement(T,{tags:e.article_info.tags},null)]))},C=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(v.a)(this,Object(g.a)(t).call(this))).state={articleListItems:[]},e}return Object(p.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Request("/content/metadata.json");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({articleListItems:t})}))}},{key:"render",value:function(){var e=this.state.articleListItems.map((function(e){return r.a.createElement("a",{href:"/blog?id="+e.slug},r.a.createElement(j,{article_info:e},null))}));return r.a.createElement("div",{className:"blog-item-container"},e)}}]),t}(r.a.Component),I=function(e){return r.a.createElement("div",null,"This is an Projects page")},B=function(e){return r.a.createElement("div",{className:"main-container-child"},"This is an Index Page")},O=a(8),_=a.n(O),w={unescapeHTML:function(e){return e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'")},convert:function(e){return(new _.a.Converter).makeHtml(w.unescapeHTML(e))}},L=w,P=function(e){return r.a.createElement("div",{className:"blog-content"},r.a.createElement("div",{className:"blog-markup",dangerouslySetInnerHTML:{__html:e.articleBodyHtml}},null))},A=function(e){return r.a.createElement("div",{className:"edit-link-container"},r.a.createElement("a",{href:"https://github.com/vermapraveen/vermapraveen.github.io/blob/master/content/posts/"+e.filePath},"Edit on GitHub"))},D=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Request("/content/posts/"+this.props.filename+".md");fetch(t).then((function(e){return e.text()})).then((function(t){var a=e.getArticleComponents(t);e.setState({articleBodyHtml:a.articleBodyHtml,articleHeader:a.articleHeader})}))}},{key:"render",value:function(){return this.state&&this.state.articleBodyHtml?r.a.createElement("div",{className:"blog-container",key:"blogContainer"},[r.a.createElement(j,{article_info:this.state.articleHeader,key:"ArticleListItem"},null),r.a.createElement(P,{articleBodyHtml:this.state.articleBodyHtml,key:"ArticleBody"},null),r.a.createElement(A,{filePath:this.props.filename+".md",key:"EditArticle"},null)]):r.a.createElement("div",null,"Loading...")}},{key:"getArticleComponents",value:function(e){var t=L.convert(e),a=document.createElement("DIV");a.innerHTML=t;var n=a.getElementsByTagName("p")[0];a.removeChild(n);var r=a.getElementsByTagName("hr")[0],l=a.getElementsByTagName("hr")[1];r.parentNode.removeChild(r),l.parentNode.removeChild(l);var c="{"+n.innerText+"}",i=JSON.parse(c);return{articleBodyHtml:a.innerHTML,articleHeader:i}}}]),t}(r.a.Component),M=r.a.useState,x=function(e){var t=M(e),a=Object(d.a)(t,2),n=a[0];a[1];switch(n.children[0]){case"about":return r.a.createElement("div",{className:"main-container"},r.a.createElement(f,null,null));case"blog":var l=new URLSearchParams(window.location.search).get("id");return l?r.a.createElement("div",{className:"main-container"},r.a.createElement(D,{filename:l},null)):r.a.createElement("div",{className:"main-container"},r.a.createElement(C,null,null));case"projects":return r.a.createElement("div",{className:"main-container"},r.a.createElement(I,null,null));default:return r.a.createElement("div",{className:"main-container"},r.a.createElement(B,null,null))}},S=function(e){return[r.a.createElement(m,{key:"Header"},null),r.a.createElement(x,{key:"MainContiner"},window.location.pathname.split("/").slice(1)),r.a.createElement(s,{key:"Footer"},null)]};c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.17ae23db.chunk.js.map