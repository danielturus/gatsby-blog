(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(1),r=t.n(n),i=t(0),o=t.n(i),s=t(215),l=t.n(s);t.d(a,"a",function(){return l.a}),t(227);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},217:function(e,a,t){"use strict";var n=t(33),r=t.n(n),i=(t(255),t(253)),o=t(1),s=t.n(o),l=t(0),c=t.n(l),u=t(252),m=t.n(u),p=(t(244),t(216)),d=function(e){function a(){return e.apply(this,arguments)||this}r()(a,e);var t=a.prototype;return t.render=function(){return this.props.menu.node.items,s.a.createElement("div",{className:"uk-container uk-margin"},s.a.createElement("nav",{className:"uk-navbar-container uk-navbar-transparent uk-hidden@s","data-uk-navbar":!0},s.a.createElement("div",{className:"uk-navbar-left uk-dark"},s.a.createElement("button",{className:"uk-navbar-toggle uk-button","data-uk-navbar-toggle-icon":!0,"data-uk-toggle":"target: #mobile-menu",href:"#"},"Menu")),s.a.createElement("div",{className:"uk-navbar-center"},s.a.createElement("a",{href:"/",className:"uk-navbar-item uk-logo"},"Bay Phillips"))),s.a.createElement("nav",{className:"uk-navbar-container uk-navbar-transparent uk-visible@s","data-uk-navbar":!0},s.a.createElement("div",{className:"uk-navbar-left"},s.a.createElement(p.a,{to:"/",className:"uk-navbar-item uk-logo"},"Bay Phillips"),s.a.createElement("ul",{className:"uk-navbar-nav uk-nav-primary"},this.renderNavigationMenuItems()))),s.a.createElement("div",{id:"mobile-menu","data-uk-offcanvas":"overlay: true"},s.a.createElement("div",{className:"uk-offcanvas-bar"},s.a.createElement("button",{className:"uk-offcanvas-close",type:"button","data-uk-close":!0}),s.a.createElement("ul",{className:"uk-nav uk-nav-primary"},this.renderNavigationMenuItems()))),s.a.createElement("hr",{className:"uk-margin-remove"}))},t.renderNavigationMenuItems=function(){return this.props.menu.node.items.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(p.a,{to:"/"+e.page.slug},e.name))})},a}(s.a.Component),f=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){return s.a.createElement("ul",{className:"uk-iconnav uk-margin-auto",style:{width:"70%"}},s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.github.com/bayphillips",target:"_blank",rel:"noopener noreferrer",className:"uk-icon-link","data-uk-icon":"icon: github"})),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.facebook.com/bay.phillips",target:"_blank",rel:"noopener noreferrer",className:"uk-icon-link","data-uk-icon":"icon: facebook"})),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.twitter.com/bayphillips",target:"_blank",rel:"noopener noreferrer",className:"uk-icon-link","data-uk-icon":"icon: twitter"})),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.instagram.com/bayphillips",target:"_blank",rel:"noopener noreferrer",className:"uk-icon-link","data-uk-icon":"icon: instagram"})))},a}(s.a.Component),k=t(218),h=t.n(k),g=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){return s.a.createElement("footer",{className:"uk-section-muted uk-margin-top uk-margin-remove-bottom uk-overflow-hidden",key:"mainFooter"},s.a.createElement("div",{className:"uk-flex uk-flex-column uk-flex-center uk-flex-middle"},s.a.createElement("section",{className:"uk-section"},s.a.createElement("div",{className:"uk-text-center"},s.a.createElement(f,null)),s.a.createElement("p",{className:"uk-text-primary uk-text-small uk-text-center"},"Copyright © ",h()(Date.now()).format("YYYY")," Bay Phillips"))))},a}(s.a.Component),v=t(243),b=t.n(v),y=t(239),w=t.n(y);t(238),t(236),t(234),"function"==typeof b.a.use&&b.a.use(w.a);var E=function(e){var a=e.children,t=e.location,n=e.title,r=e.description,o=e.keywords,l=e.previewImageUrl,c=void 0===l?null:l,u=e.structuredDataJson,m=void 0===u?null:u;return s.a.createElement(p.b,{query:"1963461588",render:function(e){return s.a.createElement(N,{data:e,children:a,location:t,title:n,description:r,keywords:o,previewImageUrl:c||e.defaultImage.fixed.src,structuredDataJson:m})},data:i})};E.propTypes={children:c.a.func};var N=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=void 0!==this.props.description?this.props.description:this.props.data.site.siteMetadata.description,a=void 0!==this.props.keywords?this.props.keywords.map(function(e){return e.toLowerCase()}).join(","):this.props.data.site.siteMetadata.keywords,t=""+this.props.data.site.siteMetadata.siteUrl+this.props.location.pathname;return s.a.createElement("div",{className:"main-container"},s.a.createElement(m.a,{title:this.props.title,defaultTitle:this.props.title,titleTemplate:"%s | Bay Phillips",meta:[{name:"description",content:e},{name:"keywords",content:a},{name:"og:title",content:this.props.title},{name:"og:description",content:e},{name:"og:url",content:t},{name:"og:image",content:"https:"+this.props.previewImageUrl},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@bayphillips"},{name:"twitter:site",content:"@bayphillips"},{name:"twitter:image:alt",content:this.props.title},{name:"google-site-verification",content:"NYAneve0llvi3Mmooz40QrY1GZNCNqsgiqYM-3DSMS4"}],script:[{type:"application/ld+json",innerHTML:""+JSON.stringify(this.props.structuredDataJson)}]},s.a.createElement("link",{rel:"canonical",href:t})),s.a.createElement(d,{location:this.props.location,menu:this.props.data.menu.edges[0]}),s.a.createElement("div",{className:"uk-container"},this.props.children),s.a.createElement(g,null))},a}(s.a.Component);N.propTypes={data:c.a.object.isRequired},a.a=E},227:function(e,a,t){var n;e.exports=(n=t(257))&&n.default||n},234:function(e,a,t){},253:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://blog.bayphillips.com",description:"Personal blog for Bay Phillips, a Software Engineering Manager based out of NYC working with other really smart people.",keywords:"ios,swift,react,fullstack,rails,engineer,engineering manager,nyc,new york city,cooking,Plated"}},defaultImage:{fixed:{src:"//images.ctfassets.net/sk06mmp11skx/d9teuYdzO04WwsokKCwKy/f482e0eff87af9c8a7f267e3f579b26d/NfSYD3A2_400x400.jpeg?w=900&h=450&q=50&fit=fill"}},menu:{edges:[{node:{id:"d6647d0f-86bd-5e71-9580-a3bedd0c8862",name:"Main menu",items:[{id:"dbe2e08e-0980-53eb-bea3-3aef69c5a7e2",name:"Blog",page:{id:"ac6baf54-1e24-5ebf-aa5e-5871382557be",slug:"blog"}},{id:"92fc5b24-5a5a-522d-a28a-e0d6c0248d8d",name:"About me",page:{id:"50ea8df4-af58-59ac-b0f8-3fb12a89e274",slug:"about"}}]}}]}}}},257:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(0),o=t.n(i),s=t(61),l=t(3),c=function(e){var a=e.location,t=l.a.getResourcesForPathname(a.pathname);return r.a.createElement(s.a,{location:a,pageResources:t})};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=c}}]);
//# sourceMappingURL=0-c9c16ded40d86b525c55.js.map