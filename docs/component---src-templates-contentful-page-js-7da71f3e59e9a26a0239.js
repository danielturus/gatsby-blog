webpackJsonp([0xd60a9d8ce9b8],{104:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var n=a(25),r=i(n),s=a(42),l=i(s),d=a(41),u=i(d),c=a(58),f=i(c),p=a(57),h=i(p),y=a(2),g=i(y),b=a(6),m=i(b),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},S=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},E=void 0,L=[],_=function(e,t){o().observe(e),L.push([e,t])},j=null,I=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+r+s+t+a+n+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},z=function(e){var t=e.style,a=e.onLoad,i=(0,f.default)(e,["style","onLoad"]);return g.default.createElement("img",(0,h.default)({},i,{onLoad:a,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};z.propTypes={style:m.default.object,onLoad:m.default.func};var R=function(e){function t(a){(0,r.default)(this,t);var i=(0,l.default)(this,e.call(this,a)),o=!0,n=!0,s=!1,d=S(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,n=!1,s=!0),"undefined"==typeof window&&(o=!1,n=!1),i.state={isVisible:o,imgLoaded:n,IOSupported:s},i.handleRef=i.handleRef.bind(i),i}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&_(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,i=t.alt,o=t.className,n=t.outerWrapperClassName,r=t.style,s=void 0===r?{}:r,l=t.imgStyle,d=void 0===l?{}:l,u=t.sizes,c=t.resolutions,f=t.backgroundColor,p=t.Tag,y=void 0;y="boolean"==typeof f?"lightgray":f;var b=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d),m=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(u){var w=u;return w.srcWebp&&w.srcSetWebp&&I()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),g.default.createElement(p,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},g.default.createElement(p,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef},g.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&g.default.createElement(z,{alt:i,title:a,src:w.base64,style:b}),w.tracedSVG&&g.default.createElement(z,{alt:i,title:a,src:w.tracedSVG,style:b}),y&&g.default.createElement(p,{title:a,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&g.default.createElement(z,{alt:i,title:a,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:m,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,h.default)({alt:i,title:a},w))}})))}if(c){var S=c,E=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},s);return"inherit"===s.display&&delete E.display,S.srcWebp&&S.srcSetWebp&&I()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),g.default.createElement(p,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},g.default.createElement(p,{className:(o?o:"")+" gatsby-image-wrapper",style:E,ref:this.handleRef},S.base64&&g.default.createElement(z,{alt:i,title:a,src:S.base64,style:b}),S.tracedSVG&&g.default.createElement(z,{alt:i,title:a,src:S.tracedSVG,style:b}),y&&g.default.createElement(p,{title:a,style:{backgroundColor:y,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&g.default.createElement(z,{alt:i,title:a,width:S.width,height:S.height,srcSet:S.srcSet,src:S.src,style:m,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,h.default)({alt:i,title:a,width:S.width,height:S.height},S))}})))}return null},t}(g.default.Component);R.defaultProps={fadeIn:!0,alt:"",Tag:"div"},R.propTypes={responsiveResolution:m.default.object,responsiveSizes:m.default.object,resolutions:m.default.object,sizes:m.default.object,fadeIn:m.default.bool,title:m.default.string,alt:m.default.string,className:m.default.oneOfType([m.default.string,m.default.object]),outerWrapperClassName:m.default.oneOfType([m.default.string,m.default.object]),style:m.default.object,imgStyle:m.default.object,position:m.default.string,backgroundColor:m.default.oneOfType([m.default.string,m.default.bool]),onLoad:m.default.func,Tag:m.default.string},t.default=R},208:function(e,t,a){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=a(2),d=o(l),u=a(49),c=(o(u),a(6)),f=i(c),p=a(104),h=o(p),y={data:f.object.isRequired},g=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props.data.page,t=e.id,a=e.title,i=(e.slug,e.headerImage,e.body);return d.default.createElement("section",{key:t,className:"uk-section"},d.default.createElement("h1",null,a),this.renderHeaderImage(),d.default.createElement("div",null,d.default.createElement("div",{dangerouslySetInnerHTML:{__html:i.childMarkdownRemark.html}})))},t.prototype.renderHeaderImage=function(){var e=this.props.data.page.headerImage;return e?d.default.createElement(h.default,{sizes:e.sizes}):null},t}(d.default.Component);g.propTypes=y,t.default=g;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-contentful-page-js-7da71f3e59e9a26a0239.js.map