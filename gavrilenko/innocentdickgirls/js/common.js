// Load CSS, CSS Localstorage & WebFonts Main Function
!function(e){"use strict";function t(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)}function n(t,n){return e.localStorage&&localStorage[t+"_content"]&&localStorage[t+"_file"]===n}function a(t,a){if(e.localStorage&&e.XMLHttpRequest)n(t,a)?o(localStorage[t+"_content"]):l(t,a);else{var s=r.createElement("link");s.href=a,s.id=t,s.rel="stylesheet",s.type="text/css",r.getElementsByTagName("head")[0].appendChild(s),r.cookie=t}}function l(e,t){var n=new XMLHttpRequest;n.open("GET",t,!0),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&(o(n.responseText),localStorage[e+"_content"]=n.responseText,localStorage[e+"_file"]=t)},n.send()}function o(e){var t=r.createElement("style");t.setAttribute("type","text/css"),r.getElementsByTagName("head")[0].appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.innerHTML=e}var r=e.document;e.loadCSS=function(e,t,n){var a,l=r.createElement("link");if(t)a=t;else{var o;o=r.querySelectorAll?r.querySelectorAll("style,link[rel=stylesheet],script"):(r.body||r.getElementsByTagName("head")[0]).childNodes,a=o[o.length-1]}var s=r.styleSheets;l.rel="stylesheet",l.href=e,l.media="only x",a.parentNode.insertBefore(l,t?a:a.nextSibling);var c=function(e){for(var t=l.href,n=s.length;n--;)if(s[n].href===t)return e();setTimeout(function(){c(e)})};return l.onloadcssdefined=c,c(function(){l.media=n||"all"}),l},e.loadLocalStorageCSS=function(l,o){n(l,o)||r.cookie.indexOf(l)>-1?a(l,o):t(e,"load",function(){a(l,o)})}}(this);

loadCSS("http://fonts.googleapis.com/css?family=Open+Sans:400,300italic,300,400italic,600,600italic,700", false, "all" );
loadCSS("./css/fancybox/jquery.fancybox.css?v=2.1.5", false, "all");
loadCSS("./css/fancybox/helpers/jquery.fancybox-buttons.css?v=1.0.5", false, "all");
loadCSS("./js/fancybox/helpers/jquery.fancybox-thumbs.css?v=1.0.7", false, "all");
loadCSS("./css/style.css", false, "all");

var scr = {"scripts":[
    {"src" : "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js", "async" : false},
    {"src" : "./js/jquery-ui-1.10.3.custom.min.js", "async" : false},
    {"src" : "./js/fancybox/jquery.mousewheel-3.0.6.pack.js", "async" : false},
    {"src" : "./js/fancybox/jquery.fancybox.js?v=2.1.5", "async" : false},
    {"src" : "./js/fancybox/helpers/jquery.fancybox-buttons.js?v=1.0.5", "async" : false},
    {"src" : "./js/fancybox/helpers/jquery.fancybox-thumbs.js?v=1.0.7", "async" : false},
    {"src" : "./js/fancybox/helpers/jquery.fancybox-media.js?v=1.0.6", "async" : false},
    {"src" : "./js/functions.js", "async" : false}
]};!function(t,n,r){"use strict";var c=function(t){if("[object Array]"!==Object.prototype.toString.call(t))return!1;for(var r=0;r<t.length;r++){var c=n.createElement("script"),e=t[r];c.src=e.src,c.async=e.async,n.body.appendChild(c)}return!0};t.addEventListener?t.addEventListener("load",function(){c(r.scripts);},!1):t.attachEvent?t.attachEvent("onload",function(){c(r.scripts)}):t.onload=function(){c(r.scripts)}}(window,document,scr);

