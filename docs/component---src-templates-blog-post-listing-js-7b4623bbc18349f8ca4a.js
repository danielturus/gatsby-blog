(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{219:function(e,t,a){"use strict";a.r(t),a(287),a(285);var n=a(1),l=a.n(n),i=a(220),r=a(227),o=a.n(r),c=a(221);t.default=function(e){e.data;var t=e.pageContext,a=t.group,n=t.index,r=(t.first,t.last,t.pageCount);console.log("What is index "+n+" and what is pageCount "+r);var s=n==r?null:"/blog/"+(n+1).toString(),u=n-1,g=u>=1?1==u?"/blog":"/blog/"+u.toString():null;return l.a.createElement(c.a,null,l.a.createElement("section",{className:"uk-section"},a.map(function(e){var t=e.node;return l.a.createElement("article",{key:t.id,className:"uk-article"},l.a.createElement("h1",{className:"uk-article-title"},l.a.createElement(i.Link,{to:"/blog/"+t.postSlug,className:"uk-link-heading"},t.postTitle)),l.a.createElement("div",{className:"uk-article-meta"},o()(t.datePosted).fromNow()),l.a.createElement("div",{className:"uk-margin",dangerouslySetInnerHTML:{__html:t.contentPreview.childMarkdownRemark.html}}),l.a.createElement("hr",{className:"uk-divider-small"}))}),l.a.createElement("div",{"data-uk-grid":"",className:"uk-margin"},g?l.a.createElement(i.Link,{to:g},"< Newer Posts"):null,s?l.a.createElement(i.Link,{to:s,className:"uk-width-expand uk-text-right"},"Older Posts >"):null)))}},231:function(e,t,a){"use strict";var n=a(106);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},285:function(e,t,a){var n=Date.prototype,l=n.toString,i=n.getTime;new Date(NaN)+""!="Invalid Date"&&a(58)(n,"toString",function(){var e=i.call(this);return e==e?l.call(this):"Invalid Date"})},286:function(e,t,a){a(34)&&"g"!=/./g.flags&&a(107).f(RegExp.prototype,"flags",{configurable:!0,get:a(231)})},287:function(e,t,a){"use strict";a(286);var n=a(106),l=a(231),i=a(34),r=/./.toString,o=function(e){a(58)(RegExp.prototype,"toString",e,!0)};a(18)(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?o(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?l.call(e):void 0)}):"toString"!=r.name&&o(function(){return r.call(this)})}}]);
//# sourceMappingURL=component---src-templates-blog-post-listing-js-7b4623bbc18349f8ca4a.js.map