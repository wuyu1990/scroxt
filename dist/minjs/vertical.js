!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=10)}([function(e,t,n){"use strict";function r(e){if(e&&e.nodeType)return 1===e.nodeType}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();t.default=r},function(e,t,n){"use strict";function r(e,t){return Object(o.default)(e)?window.getComputedStyle(e,null).getPropertyValue(t):"string"==typeof e&&document.querySelector(e)?window.getComputedStyle(document.querySelector(e),null).getPropertyValue(t):void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(0)},function(e,t,n){"use strict";function r(e){var t=document.createElement("style"),n=document.head||document.getElementsByTagName("head")[0];if(t.type="text/css",t.styleSheet){var r=function(){try{t.styleSheet.cssText=e}catch(e){console.log(e)}};t.styleSheet.disabled?setTimeout(r,10):r()}else{var o=document.createTextNode(e);t.appendChild(o)}n.appendChild(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){e.target,e.data,e.speed;this.options={target:"",data:[],speed:5},this.extendOpt(arguments[0]),this.targetElement=document.querySelector(this.options.target)}return e.prototype.extendOpt=function(e){var t=this;for(var n in e)e.hasOwnProperty(n)&&(t.options[n]=e[n])},e.prototype.createElement=function(e){void 0===e&&(e="");var t=this.targetElement,n=[],r=document.querySelector(".scroxt-wrapper");r||(r=document.createElement("div"),r.className="scroxt-wrapper",t.appendChild(r));for(var o=0,i=this.options.data.length;o<i;o++){var a=document.createElement("div");a.className=e;var c=document.createTextNode(this.options.data[o]);a.appendChild(c),r.appendChild(a),n.push(a)}return n},e}();t.default=r},function(e,t,n){"use strict";function r(e){if(Object(o.default)(e))e.parentNode.removeChild(e);else if("string"==typeof e&&document.querySelector(e)){var t=document.querySelector(e);t.parentNode.removeChild(t)}else console.log("参数错误")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(0)},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n(1),i=n(2),a=n(5),c=n(3),s=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(e){function t(t){var n=e.call(this,t)||this;return n.targetHeight=0,n.divWrapElementHeight=0,n.distance=0,n.targetHeight=parseFloat(Object(i.default)(n.targetElement,"height")),n.createStyle(),n.startRun(),n}return s(t,e),t.prototype.createStyle=function(){Object(c.default)("\n    \t\t\n    \t")},t.prototype.startRun=function(){this.divWrapElementHeight=this.createVertical(),this.STRun()},t.prototype.createVertical=function(){Object(a.default)(".scroxt-wrapper");var e=this.createElement("scroxt-vertical"),t=this.createElement("scroxt-vertical");return this.divWrapElement=document.querySelector(".scroxt-wrapper"),this.computeHeight(e.concat(t))},t.prototype.computeHeight=function(e){for(var t=0,n=0,r=e.length;n<r;n++)t+=Math.ceil(+Object(i.default)(e[n],"height").replace("px",""));return t},t.prototype.STRun=function(){this.STMove(),Object(o.default)(function(){this.STRun()}.bind(this))},t.prototype.STMove=function(){this.options.speed<0?this.distance<=-this.divWrapElementHeight/2&&(this.createVertical(),this.distance=0):this.distance>=this.targetHeight-this.divWrapElementHeight/2&&(this.createVertical(),this.distance=this.targetHeight-this.divWrapElementHeight),this.divWrapElement.style.transform="translate3d(0px, "+this.distance+"px, 0px)",this.divWrapElement.style.webkitTransform="translate3d(0px, "+this.distance+"px, 0px)",this.distance+=.1*this.options.speed},t}(r.default);t.default=u}]);