(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{226:function(e,t,a){"use strict";a.r(t),a(278);var n=a(1),o=a.n(n),r=a(70),l=a(72),i=a.n(l),s=a(71);t.default=function(e){e.data;var t=e.pageContext,a=e.location,n=t.group,l=t.index,c=(t.first,t.last,l==t.pageCount?null:"/blog/"+(l+1).toString()),u=l-1,g=u>=1?1==u?"/blog":"/blog/"+u.toString():null,m=l>1?"Blog | Page "+l:"Blog";return o.a.createElement(s.a,{location:a,title:m,description:"Various blog posts regarding programming, technology and random musings of someone who's not that interesting..."},o.a.createElement("section",{className:"uk-section"},n.map(function(e){var t=e.node;return o.a.createElement("article",{key:t.id,className:"uk-article"},o.a.createElement("h1",{className:"uk-article-title"},o.a.createElement(r.a,{to:"/blog/"+t.postSlug,className:"uk-link-heading"},t.postTitle)),o.a.createElement("div",{className:"uk-article-meta"},i()(t.datePosted).fromNow()),o.a.createElement("div",{className:"uk-margin",dangerouslySetInnerHTML:{__html:t.contentPreview.childMarkdownRemark.html}}),o.a.createElement("hr",{className:"uk-divider-small"}))}),o.a.createElement("div",{"data-uk-grid":"",className:"uk-margin"},g?o.a.createElement(r.a,{to:g},"< Newer Posts"):null,c?o.a.createElement(r.a,{to:c,className:"uk-width-expand uk-text-right"},"Older Posts >"):null)))}},233:function(e,t,a){"use strict";var n=a(13);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},277:function(e,t,a){a(16)&&"g"!=/./g.flags&&a(17).f(RegExp.prototype,"flags",{configurable:!0,get:a(233)})},278:function(e,t,a){"use strict";a(277);var n=a(13),o=a(233),r=a(16),l=/./.toString,i=function(e){a(19)(RegExp.prototype,"toString",e,!0)};a(12)(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?i(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?o.call(e):void 0)}):"toString"!=l.name&&i(function(){return l.call(this)})}}]);
//# sourceMappingURL=component---src-templates-blog-post-listing-js-1d4cc9cefbd8f1ea66d1.js.map