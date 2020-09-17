handleWindowResize = undefined;
/*
//   ___   ___       ___  ___ ___ ___ ___ _____ 
//  / _ \ / __|     / __|/ __| _ \_ _| _ \_   _|
// | (_) | (__   _  \__ \ (__|   /| ||  _/ | |  
//  \___/ \___| (_) |___/\___|_|_\___|_|   |_|  
//  --------------------------------------------
//   .JS v1.00                      Made by Fwup
//  --------------------------------------------
//
//  Special thanks - zeratul, Xaekai, needim
//
//  --------------------------------------------
//
//  TODO
// 
//  - Clean up 
//  - Fix /shout bug (or just remove this feature lol)
//  - poll stuff like toggle button
//  - add tour
//  - fix userlist
//  - notification toggle
// 
//  --------------------------------------------
*/

//--------- FONTS ---------
$.getScript("https://use.fontawesome.com/b6c5a3a808.js");

//--------- EXTERNAL SCRIPTS ---------
$.getScript("https://drive.google.com/uc?id=15WqPJMP3kvsYEK_F8JaNCVym3F1nFaB2"); //noty
$.getScript("https://drive.google.com/uc?id=1489CMbePCWifi1gga3yhMrAs3Doa2x0e"); //externalplaylist
$.getScript("https://drive.google.com/uc?id=1FjuyZ4uv_wqmOvbMr9TzNg8F07Q6x3Mu"); //playlistmessages

//$.getScript("https://dl.dropboxusercontent.com/s/93r59p5varus2a2/noty.js"); //noty
//$.getScript("https://dl.dropboxusercontent.com/s/wl2ka4zqocoplxo/external_playlist.js"); //externalplaylist
//$.getScript("https://dl.dropboxusercontent.com/s/hubz1rar6z70xy9/playlist_messages.js"); //playlistmessages


//--------- EXTERNAL CSS ---------
$("head").append(
  "<link rel='stylesheet' href='https://drive.google.com/uc?id=1wBhjjrp85rD-v08rgJFfiOPfk-eqr8D6' />"
); //notycss

$("head").append(
  "<link rel='stylesheet' href='https://drive.google.com/uc?id=1zqgtOK05BjjJTHV2yQXImNtbk-mivG-z' />"
); //stylecss

/*
$("head").append(
  "<link rel='stylesheet' href='https://dl.dropboxusercontent.com/s/v89x8lva8grwgz6/style.css' />"
); //notycss

$("head").append(
  "<link rel='stylesheet' href='https://dl.dropboxusercontent.com/s/qcf0pz7dneogu89/noty.css' />"
); //stylecss
*/
$("head").append(
  '<link id="favicon" rel="shortcut icon" type="image/png" sizes="64x64" href="https://kek.gg/i/5JTQft.png">'
);

//--------- FUNCTIONS ---------
(function($) {
  $.fn.clickToggle = function(func1, func2) {
    var funcs = [func1, func2];
    this.data("toggleclicked", 0);
    this.click(function() {
      var data = $(this).data();
      var tc = data.toggleclicked;
      $.proxy(funcs[tc], this)();
      data.toggleclicked = (tc + 1) % 2;
    });
    return this;
  };
})(jQuery);

var delay = (function() {
  var timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

//tippy.js
(function(t,e){'object'==typeof exports&&'undefined'!=typeof module?module.exports=e():'function'==typeof define&&define.amd?define(e):t.tippy=e()})(this,function(){'use strict';function t(t){return'[object Object]'==={}.toString.call(t)}function a(t){return[].slice.call(t)}function o(e){if(e instanceof Element||t(e))return[e];if(e instanceof NodeList)return a(e);if(Array.isArray(e))return e;try{return a(document.querySelectorAll(e))}catch(t){return[]}}function r(t){for(var e=['','webkit'],a=t.charAt(0).toUpperCase()+t.slice(1),o=0;o<e.length;o++){var i=e[o],r=i?i+a:t;if('undefined'!=typeof document.body.style[r])return r}return null}function p(t,e,a){var i=document.createElement('div');i.setAttribute('class','tippy-popper'),i.setAttribute('role','tooltip'),i.setAttribute('id','tippy-'+t),i.style.zIndex=a.zIndex,i.style.maxWidth=a.maxWidth;var o=document.createElement('div');if(o.setAttribute('class','tippy-tooltip'),o.setAttribute('data-size',a.size),o.setAttribute('data-animation',a.animation),o.setAttribute('data-state','hidden'),a.theme.split(' ').forEach(function(e){o.classList.add(e+'-theme')}),a.arrow){var p=document.createElement('div');p.style[r('transform')]=a.arrowTransform,'round'===a.arrowType?(p.classList.add('tippy-roundarrow'),p.innerHTML='<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>'):p.classList.add('tippy-arrow'),o.appendChild(p)}if(a.animateFill){o.setAttribute('data-animatefill','');var n=document.createElement('div');n.setAttribute('data-state','hidden'),n.classList.add('tippy-backdrop'),o.appendChild(n)}a.inertia&&o.setAttribute('data-inertia',''),a.interactive&&o.setAttribute('data-interactive','');var s=document.createElement('div');s.setAttribute('class','tippy-content');var l=a.html;if(l){var d;l instanceof Element?(s.appendChild(l),d='#'+l.id||'tippy-html-template'):(s.innerHTML=document.querySelector(l).innerHTML,d=l),i.setAttribute('data-html',''),o.setAttribute('data-template-id',d),a.interactive&&i.setAttribute('tabindex','-1')}else s[a.allowTitleHTML?'innerHTML':'textContent']=e;return o.appendChild(s),i.appendChild(o),i}function n(t,e,a,i){var o=a.onTrigger,r=a.onMouseLeave,p=a.onBlur,n=a.onDelegateShow,s=a.onDelegateHide,l=[];if('manual'===t)return l;var d=function(t,a){e.addEventListener(t,a),l.push({event:t,handler:a})};return i.target?(zt.supportsTouch&&i.touchHold&&(d('touchstart',n),d('touchend',s)),'mouseenter'===t&&(d('mouseover',n),d('mouseout',s)),'focus'===t&&(d('focusin',n),d('focusout',s)),'click'===t&&d('click',n)):(d(t,o),zt.supportsTouch&&i.touchHold&&(d('touchstart',o),d('touchend',r)),'mouseenter'===t&&d('mouseleave',r),'focus'===t&&d(Bt?'focusout':'blur',p)),l}function s(t,e){var a=qt.reduce(function(a,i){var o=t.getAttribute('data-tippy-'+i.toLowerCase())||e[i];return'false'===o&&(o=!1),'true'===o&&(o=!0),isFinite(o)&&!isNaN(parseFloat(o))&&(o=parseFloat(o)),'target'!==i&&'string'==typeof o&&'['===o.trim().charAt(0)&&(o=JSON.parse(o)),a[i]=o,a},{});return Vt({},e,a)}function l(t,e){return e.arrow&&(e.animateFill=!1),e.appendTo&&'function'==typeof e.appendTo&&(e.appendTo=e.appendTo()),'function'==typeof e.html&&(e.html=e.html(t)),e}function d(t){var e=function(e){return t.querySelector(e)};return{tooltip:e(Ut.TOOLTIP),backdrop:e(Ut.BACKDROP),content:e(Ut.CONTENT),arrow:e(Ut.ARROW)||e(Ut.ROUND_ARROW)}}function c(t){var e=t.getAttribute('title');e&&t.setAttribute('data-original-title',e),t.removeAttribute('title')}function m(t){return t&&'[object Function]'==={}.toString.call(t)}function f(t,e){if(1!==t.nodeType)return[];var a=getComputedStyle(t,null);return e?a[e]:a}function h(t){return'HTML'===t.nodeName?t:t.parentNode||t.host}function b(t){if(!t)return document.body;switch(t.nodeName){case'HTML':case'BODY':return t.ownerDocument.body;case'#document':return t.body;}var e=f(t),a=e.overflow,i=e.overflowX,o=e.overflowY;return /(auto|scroll|overlay)/.test(a+o+i)?t:b(h(t))}function u(t){if(!t)return document.documentElement;for(var e=ee(10)?document.body:null,a=t.offsetParent;a===e&&t.nextElementSibling;)a=(t=t.nextElementSibling).offsetParent;var i=a&&a.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(a.nodeName)&&'static'===f(a,'position')?u(a):a:t?t.ownerDocument.documentElement:document.documentElement}function y(t){var e=t.nodeName;return'BODY'!==e&&('HTML'===e||u(t.firstElementChild)===t)}function g(t){return null===t.parentNode?t:g(t.parentNode)}function w(t,e){if(!t||!t.nodeType||!e||!e.nodeType)return document.documentElement;var a=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=a?t:e,o=a?e:t,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var p=r.commonAncestorContainer;if(t!==p&&e!==p||i.contains(o))return y(p)?p:u(p);var n=g(t);return n.host?w(n.host,e):w(t,g(e).host)}function x(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',a='top'===e?'scrollTop':'scrollLeft',i=t.nodeName;if('BODY'===i||'HTML'===i){var o=t.ownerDocument.documentElement,r=t.ownerDocument.scrollingElement||o;return r[a]}return t[a]}function v(t,e){var a=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],i=x(e,'top'),o=x(e,'left'),r=a?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}function k(t,e){var a='x'===e?'Left':'Top',i='Left'==a?'Right':'Bottom';return parseFloat(t['border'+a+'Width'],10)+parseFloat(t['border'+i+'Width'],10)}function E(t,e,a,i){return Mt(e['offset'+t],e['scroll'+t],a['client'+t],a['offset'+t],a['scroll'+t],ee(10)?a['offset'+t]+i['margin'+('Height'===t?'Top':'Left')]+i['margin'+('Height'===t?'Bottom':'Right')]:0)}function T(){var t=document.body,e=document.documentElement,a=ee(10)&&getComputedStyle(e);return{height:E('Height',t,e,a),width:E('Width',t,e,a)}}function O(t){return re({},t,{right:t.left+t.width,bottom:t.top+t.height})}function L(t){var e={};try{if(ee(10)){e=t.getBoundingClientRect();var a=x(t,'top'),i=x(t,'left');e.top+=a,e.left+=i,e.bottom+=a,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r='HTML'===t.nodeName?T():{},p=r.width||t.clientWidth||o.right-o.left,n=r.height||t.clientHeight||o.bottom-o.top,s=t.offsetWidth-p,l=t.offsetHeight-n;if(s||l){var d=f(t);s-=k(d,'x'),l-=k(d,'y'),o.width-=s,o.height-=l}return O(o)}function A(t,e){var a=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],i=ee(10),o='HTML'===e.nodeName,r=L(t),p=L(e),n=b(t),s=f(e),l=parseFloat(s.borderTopWidth,10),d=parseFloat(s.borderLeftWidth,10);a&&'HTML'===e.nodeName&&(p.top=Mt(p.top,0),p.left=Mt(p.left,0));var c=O({top:r.top-p.top-l,left:r.left-p.left-d,width:r.width,height:r.height});if(c.marginTop=0,c.marginLeft=0,!i&&o){var m=parseFloat(s.marginTop,10),h=parseFloat(s.marginLeft,10);c.top-=l-m,c.bottom-=l-m,c.left-=d-h,c.right-=d-h,c.marginTop=m,c.marginLeft=h}return(i&&!a?e.contains(n):e===n&&'BODY'!==n.nodeName)&&(c=v(c,e)),c}function C(t){var e=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],a=t.ownerDocument.documentElement,i=A(t,a),o=Mt(a.clientWidth,window.innerWidth||0),r=Mt(a.clientHeight,window.innerHeight||0),p=e?0:x(a),n=e?0:x(a,'left'),s={top:p-i.top+i.marginTop,left:n-i.left+i.marginLeft,width:o,height:r};return O(s)}function S(t){var e=t.nodeName;return'BODY'!==e&&'HTML'!==e&&('fixed'===f(t,'position')||S(h(t)))}function Y(t){if(!t||!t.parentElement||ee())return document.documentElement;for(var e=t.parentElement;e&&'none'===f(e,'transform');)e=e.parentElement;return e||document.documentElement}function P(t,e,a,i){var o=!!(4<arguments.length&&void 0!==arguments[4])&&arguments[4],r={top:0,left:0},p=o?Y(t):w(t,e);if('viewport'===i)r=C(p,o);else{var n;'scrollParent'===i?(n=b(h(e)),'BODY'===n.nodeName&&(n=t.ownerDocument.documentElement)):'window'===i?n=t.ownerDocument.documentElement:n=i;var s=A(n,p,o);if('HTML'===n.nodeName&&!S(p)){var l=T(),d=l.height,c=l.width;r.top+=s.top-s.marginTop,r.bottom=d+s.top,r.left+=s.left-s.marginLeft,r.right=c+s.left}else r=s}return r.left+=a,r.top+=a,r.right-=a,r.bottom-=a,r}function X(t){var e=t.width,a=t.height;return e*a}function I(t,e,a,i,o){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf('auto'))return t;var p=P(a,i,r,o),n={top:{width:p.width,height:e.top-p.top},right:{width:p.right-e.right,height:p.height},bottom:{width:p.width,height:p.bottom-e.bottom},left:{width:e.left-p.left,height:p.height}},s=Object.keys(n).map(function(t){return re({key:t},n[t],{area:X(n[t])})}).sort(function(t,e){return e.area-t.area}),l=s.filter(function(t){var e=t.width,i=t.height;return e>=a.clientWidth&&i>=a.clientHeight}),d=0<l.length?l[0].key:s[0].key,c=t.split('-')[1];return d+(c?'-'+c:'')}function D(t,e,a){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,o=i?Y(e):w(e,a);return A(a,o,i)}function R(t){var e=getComputedStyle(t),a=parseFloat(e.marginTop)+parseFloat(e.marginBottom),i=parseFloat(e.marginLeft)+parseFloat(e.marginRight),o={width:t.offsetWidth+i,height:t.offsetHeight+a};return o}function N(t){var e={left:'right',right:'left',bottom:'top',top:'bottom'};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function _(t,e,a){a=a.split('-')[0];var i=R(t),o={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(a),p=r?'top':'left',n=r?'left':'top',s=r?'height':'width',l=r?'width':'height';return o[p]=e[p]+e[s]/2-i[s]/2,o[n]=a===n?e[n]-i[l]:e[N(n)],o}function H(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function M(t,e,a){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===a});var i=H(t,function(t){return t[e]===a});return t.indexOf(i)}function W(t,e,a){var i=void 0===a?t:t.slice(0,M(t,'name',a));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var a=t['function']||t.fn;t.enabled&&m(a)&&(e.offsets.popper=O(e.offsets.popper),e.offsets.reference=O(e.offsets.reference),e=a(e,t))}),e}function B(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=D(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=I(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=_(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',t=W(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function z(t,e){return t.some(function(t){var a=t.name,i=t.enabled;return i&&a===e})}function U(t){for(var e=[!1,'ms','Webkit','Moz','O'],a=t.charAt(0).toUpperCase()+t.slice(1),o=0;o<e.length;o++){var i=e[o],r=i?''+i+a:t;if('undefined'!=typeof document.body.style[r])return r}return null}function F(){return this.state.isDestroyed=!0,z(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[U('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function q(t){var e=t.ownerDocument;return e?e.defaultView:window}function j(t,e,a,i){var o='BODY'===t.nodeName,r=o?t.ownerDocument.defaultView:t;r.addEventListener(e,a,{passive:!0}),o||j(b(r.parentNode),e,a,i),i.push(r)}function K(t,e,a,i){a.updateBound=i,q(t).addEventListener('resize',a.updateBound,{passive:!0});var o=b(t);return j(o,'scroll',a.updateBound,a.scrollParents),a.scrollElement=o,a.eventsEnabled=!0,a}function V(){this.state.eventsEnabled||(this.state=K(this.reference,this.options,this.state,this.scheduleUpdate))}function G(t,e){return q(t).removeEventListener('resize',e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener('scroll',e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}function Q(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=G(this.reference,this.state))}function Z(t){return''!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function $(t,e){Object.keys(e).forEach(function(a){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(a)&&Z(e[a])&&(i='px'),t.style[a]=e[a]+i})}function J(t,e){Object.keys(e).forEach(function(a){var i=e[a];!1===i?t.removeAttribute(a):t.setAttribute(a,e[a])})}function tt(t,e,a){var i=H(t,function(t){var a=t.name;return a===e}),o=!!i&&t.some(function(t){return t.name===a&&t.enabled&&t.order<i.order});if(!o){var r='`'+e+'`';console.warn('`'+a+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return o}function et(t){return'end'===t?'start':'start'===t?'end':t}function at(t){var e=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],a=ne.indexOf(t),i=ne.slice(a+1).concat(ne.slice(0,a));return e?i.reverse():i}function it(t,e,a,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],p=o[2];if(!r)return t;if(0===p.indexOf('%')){var n;switch(p){case'%p':n=a;break;case'%':case'%r':default:n=i;}var s=O(n);return s[e]/100*r}if('vh'===p||'vw'===p){var l;return l='vh'===p?Mt(document.documentElement.clientHeight,window.innerHeight||0):Mt(document.documentElement.clientWidth,window.innerWidth||0),l/100*r}return r}function ot(t,e,a,i){var o=[0,0],r=-1!==['right','left'].indexOf(i),p=t.split(/(\+|\-)/).map(function(t){return t.trim()}),n=p.indexOf(H(p,function(t){return-1!==t.search(/,|\s/)}));p[n]&&-1===p[n].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var s=/\s*,\s*|\s+/,l=-1===n?[p]:[p.slice(0,n).concat([p[n].split(s)[0]]),[p[n].split(s)[1]].concat(p.slice(n+1))];return l=l.map(function(t,i){var o=(1===i?!r:r)?'height':'width',p=!1;return t.reduce(function(t,e){return''===t[t.length-1]&&-1!==['+','-'].indexOf(e)?(t[t.length-1]=e,p=!0,t):p?(t[t.length-1]+=e,p=!1,t):t.concat(e)},[]).map(function(t){return it(t,o,e,a)})}),l.forEach(function(t,e){t.forEach(function(a,i){Z(a)&&(o[e]+=a*('-'===t[i-1]?-1:1))})}),o}function rt(t,e){var a,i=e.offset,o=t.placement,r=t.offsets,p=r.popper,n=r.reference,s=o.split('-')[0];return a=Z(+i)?[+i,0]:ot(i,p,n,s),'left'===s?(p.top+=a[0],p.left-=a[1]):'right'===s?(p.top+=a[0],p.left+=a[1]):'top'===s?(p.left+=a[0],p.top-=a[1]):'bottom'===s&&(p.left+=a[0],p.top+=a[1]),t.popper=p,t}function pt(t){var e=t.style;e[r('transform')]=null,e.top=null,e.left=null}function nt(t){void t.offsetHeight}function st(t,e,a){var i=t.popper,o=t.options,r=o.onCreate,p=o.onUpdate;o.onCreate=o.onUpdate=function(){nt(i),e&&e(),p(),o.onCreate=r,o.onUpdate=p},a||t.scheduleUpdate()}function lt(t){return t.getAttribute('x-placement').replace(/-.+/,'')}function dt(t,e,a){if(!e.getAttribute('x-placement'))return!0;var i=t.clientX,o=t.clientY,r=a.interactiveBorder,p=a.distance,n=e.getBoundingClientRect(),s=lt(e),l=r+p,d={top:n.top-o>r,bottom:o-n.bottom>r,left:n.left-i>r,right:i-n.right>r};return'top'===s?d.top=n.top-o>l:'bottom'===s?d.bottom=o-n.bottom>l:'left'===s?d.left=n.left-i>l:'right'===s?d.right=i-n.right>l:void 0,d.top||d.bottom||d.left||d.right}function ct(t,e,a,i){if(!e.length)return'';var o={scale:function(){return 1===e.length?''+e[0]:a?e[0]+', '+e[1]:e[1]+', '+e[0]}(),translate:function(){return 1===e.length?i?-e[0]+'px':e[0]+'px':a?i?e[0]+'px, '+-e[1]+'px':e[0]+'px, '+e[1]+'px':i?-e[1]+'px, '+e[0]+'px':e[1]+'px, '+e[0]+'px'}()};return o[t]}function mt(t,e){if(!t)return'';return e?t:{X:'Y',Y:'X'}[t]}function ft(t,e,a){var i=lt(t),o='top'===i||'bottom'===i,p='right'===i||'bottom'===i,n=function(t){var e=a.match(t);return e?e[1]:''},s=function(t){var e=a.match(t);return e?e[1].split(',').map(parseFloat):[]},l={translate:/translateX?Y?\(([^)]+)\)/,scale:/scaleX?Y?\(([^)]+)\)/},d={translate:{axis:n(/translate([XY])/),numbers:s(l.translate)},scale:{axis:n(/scale([XY])/),numbers:s(l.scale)}},c=a.replace(l.translate,'translate'+mt(d.translate.axis,o)+'('+ct('translate',d.translate.numbers,o,p)+')').replace(l.scale,'scale'+mt(d.scale.axis,o)+'('+ct('scale',d.scale.numbers,o,p)+')');e.style[r('transform')]=c}function ht(t){return-(t-Ft.distance)+'px'}function bt(t){requestAnimationFrame(function(){setTimeout(t,1)})}function ut(t,a){var i=Element.prototype.closest||function(t){for(var a=this;a;){if(e.call(a,t))return a;a=a.parentElement}};return i.call(t,a)}function yt(t,e){return Array.isArray(t)?t[e]:t}function gt(t,e){t.forEach(function(t){t&&t.setAttribute('data-state',e)})}function wt(t,e){t.filter(Boolean).forEach(function(t){t.style[r('transitionDuration')]=e+'ms'})}function xt(t){var e=window.scrollX||window.pageXOffset,a=window.scrollY||window.pageYOffset;t.focus(),scroll(e,a)}function vt(){var t=this._(me).lastTriggerEvent;return this.options.followCursor&&!zt.usingTouch&&t&&'focus'!==t.type}function kt(t){var e=ut(t.target,this.options.target);if(e&&!e._tippy){var a=e.getAttribute('title')||this.title;a&&(e.setAttribute('title',a),Nt(e,Vt({},this.options,{target:null})),Et.call(e._tippy,t))}}function Et(t){var e=this,a=this.options;if(Ct.call(this),!this.state.visible){if(a.target)return void kt.call(this,t);if(this._(me).isPreparingToShow=!0,a.wait)return void a.wait.call(this.popper,this.show.bind(this),t);if(vt.call(this)){this._(me).followCursorListener||St.call(this);var i=d(this.popper),o=i.arrow;o&&(o.style.margin='0'),document.addEventListener('mousemove',this._(me).followCursorListener)}var r=yt(a.delay,0);r?this._(me).showTimeout=setTimeout(function(){e.show()},r):this.show()}}function Tt(){var t=this;if(Ct.call(this),!!this.state.visible){this._(me).isPreparingToShow=!1;var e=yt(this.options.delay,1);e?this._(me).hideTimeout=setTimeout(function(){t.state.visible&&t.hide()},e):this.hide()}}function Ot(){var t=this;return{onTrigger:function(e){if(t.state.enabled){var a=zt.supportsTouch&&zt.usingTouch&&-1<['mouseenter','mouseover','focus'].indexOf(e.type);a&&t.options.touchHold||(t._(me).lastTriggerEvent=e,'click'===e.type&&'persistent'!==t.options.hideOnClick&&t.state.visible?Tt.call(t):Et.call(t,e),a&&zt.iOS&&t.reference.click&&t.reference.click())}},onMouseLeave:function(e){if(!(-1<['mouseleave','mouseout'].indexOf(e.type)&&zt.supportsTouch&&zt.usingTouch&&t.options.touchHold)){if(t.options.interactive){var a=Tt.bind(t),i=function e(i){var o=ut(i.target,Ut.REFERENCE),r=ut(i.target,Ut.POPPER)===t.popper,p=o===t.reference;r||p||dt(i,t.popper,t.options)&&(document.body.removeEventListener('mouseleave',a),document.removeEventListener('mousemove',e),Tt.call(t,e))};return document.body.addEventListener('mouseleave',a),void document.addEventListener('mousemove',i)}Tt.call(t)}},onBlur:function(e){if(!(e.target!==t.reference||zt.usingTouch)){if(t.options.interactive){if(!e.relatedTarget)return;if(ut(e.relatedTarget,Ut.POPPER))return}Tt.call(t)}},onDelegateShow:function(e){ut(e.target,t.options.target)&&Et.call(t,e)},onDelegateHide:function(e){ut(e.target,t.options.target)&&Tt.call(t)}}}function Lt(){var t=this,e=this.popper,a=this.reference,i=this.options,o=d(e),r=o.tooltip,p=i.popperOptions,n='round'===i.arrowType?Ut.ROUND_ARROW:Ut.ARROW,s=r.querySelector(n),l=Vt({placement:i.placement},p||{},{modifiers:Vt({},p?p.modifiers:{},{arrow:Vt({element:n},p&&p.modifiers?p.modifiers.arrow:{}),flip:Vt({enabled:i.flip,padding:i.distance+5,behavior:i.flipBehavior},p&&p.modifiers?p.modifiers.flip:{}),offset:Vt({offset:i.offset},p&&p.modifiers?p.modifiers.offset:{})}),onCreate:function(){r.style[lt(e)]=ht(i.distance),s&&i.arrowTransform&&ft(e,s,i.arrowTransform)},onUpdate:function(){var t=r.style;t.top='',t.bottom='',t.left='',t.right='',t[lt(e)]=ht(i.distance),s&&i.arrowTransform&&ft(e,s,i.arrowTransform)}});return Pt.call(this,{target:e,callback:function(){t.popperInstance.update()},options:{childList:!0,subtree:!0,characterData:!0}}),new le(a,e,l)}function At(t){var e=this.options;if(this.popperInstance?(pt(this.popper),this.popperInstance.scheduleUpdate(),e.livePlacement&&!vt.call(this)&&this.popperInstance.enableEventListeners()):(this.popperInstance=Lt.call(this),!e.livePlacement&&this.popperInstance.disableEventListeners()),!vt.call(this)){var a=d(this.popper),i=a.arrow;i&&(i.style.margin=''),this.popperInstance.reference=this.reference}st(this.popperInstance,t,!0),e.appendTo.contains(this.popper)||e.appendTo.appendChild(this.popper)}function Ct(){var t=this._(me),e=t.showTimeout,a=t.hideTimeout;clearTimeout(e),clearTimeout(a)}function St(){var t=this;this._(me).followCursorListener=function(e){var a=t._(me).lastMouseMoveEvent=e,i=a.clientX,o=a.clientY;t.popperInstance&&(t.popperInstance.reference={getBoundingClientRect:function(){return{width:0,height:0,top:o,left:i,right:i,bottom:o}},clientWidth:0,clientHeight:0},t.popperInstance.scheduleUpdate())}}function Yt(){var t=this,e=function(){t.popper.style[r('transitionDuration')]=t.options.updateDuration+'ms'},a=function(){t.popper.style[r('transitionDuration')]=''};bt(function i(){t.popperInstance&&t.popperInstance.scheduleUpdate(),e(),t.state.visible?requestAnimationFrame(i):a()})}function Pt(t){var e=t.target,a=t.callback,i=t.options;if(window.MutationObserver){var o=new MutationObserver(a);o.observe(e,i),this._(me).mutationObservers.push(o)}}function Xt(t,a){if(!t)return a();var e=d(this.popper),i=e.tooltip,o=function(t,e){e&&i[t+'EventListener']('ontransitionend'in window?'transitionend':'webkitTransitionEnd',e)},r=function t(r){r.target===i&&(o('remove',t),a())};o('remove',this._(me).transitionendListener),o('add',r),this._(me).transitionendListener=r}function It(t,e){return t.reduce(function(t,a){var i=be,o=l(a,e.performance?e:s(a,e)),r=a.getAttribute('title');if(!r&&!o.target&&!o.html&&!o.dynamicTitle)return t;a.setAttribute(o.target?'data-tippy-delegate':'data-tippy',''),c(a);var m=p(i,r,o),f=new he({id:i,reference:a,popper:m,options:o,title:r,popperInstance:null});o.createPopperInstanceOnInit&&(f.popperInstance=Lt.call(f),f.popperInstance.disableEventListeners());var h=Ot.call(f);return f.listeners=o.trigger.trim().split(' ').reduce(function(t,e){return t.concat(n(e,a,h,o))},[]),o.dynamicTitle&&Pt.call(f,{target:a,callback:function(){var t=d(m),e=t.content,i=a.getAttribute('title');i&&(e[o.allowTitleHTML?'innerHTML':'textContent']=f.title=i,c(a))},options:{attributes:!0}}),a._tippy=f,m._tippy=f,m._reference=a,t.push(f),be++,t},[])}function Dt(t){var e=a(document.querySelectorAll(Ut.POPPER));e.forEach(function(e){var a=e._tippy;if(a){var i=a.options;(!0===i.hideOnClick||-1<i.trigger.indexOf('focus'))&&(!t||e!==t.popper)&&a.hide()}})}function Rt(){var t=function(){zt.usingTouch||(zt.usingTouch=!0,zt.iOS&&document.body.classList.add('tippy-touch'),zt.dynamicInputDetection&&window.performance&&document.addEventListener('mousemove',i),zt.onUserInputChange('touch'))},i=function(){var t;return function(){var e=performance.now();20>e-t&&(zt.usingTouch=!1,document.removeEventListener('mousemove',i),!zt.iOS&&document.body.classList.remove('tippy-touch'),zt.onUserInputChange('mouse')),t=e}}();document.addEventListener('click',function(t){if(!(t.target instanceof Element))return Dt();var e=ut(t.target,Ut.REFERENCE),a=ut(t.target,Ut.POPPER);if(!(a&&a._reference._tippy.options.interactive)){if(e){var i=e._tippy.options;if(!i.multiple&&zt.usingTouch||!i.multiple&&-1<i.trigger.indexOf('click'))return Dt(e._tippy);if(!0!==i.hideOnClick||-1<i.trigger.indexOf('click'))return}Dt()}}),document.addEventListener('touchstart',t),window.addEventListener('blur',function(){var t=document,a=t.activeElement;a&&a.blur&&e.call(a,Ut.REFERENCE)&&a.blur()}),window.addEventListener('resize',function(){a(document.querySelectorAll(Ut.POPPER)).forEach(function(t){var e=t._tippy;e.options.livePlacement||e.popperInstance.scheduleUpdate()})}),!zt.supportsTouch&&(navigator.maxTouchPoints||navigator.msMaxTouchPoints)&&document.addEventListener('pointerdown',t)}function Nt(e,a){return zt.supported&&!ue&&(Rt(),ue=!0),t(e)&&(e.refObj=!0,e.attributes=e.attributes||{},e.setAttribute=function(t,a){e.attributes[t]=a},e.getAttribute=function(t){return e.attributes[t]},e.removeAttribute=function(t){delete e.attributes[t]},e.addEventListener=function(){},e.removeEventListener=function(){},e.classList={classNames:{},add:function(t){return e.classList.classNames[t]=!0},remove:function(t){return delete e.classList.classNames[t],!0},contains:function(t){return!!e.classList.classNames[t]}}),a=Vt({},Ft,a),{selector:e,options:a,tooltips:zt.supported?It(o(e),a):[],destroyAll:function(){this.tooltips.forEach(function(t){return t.destroy()}),this.tooltips=[]}}}var _t=Math.min,Ht=Math.floor,Mt=Math.max,Wt='undefined'!=typeof window,Bt=Wt&&/MSIE |Trident\//.test(navigator.userAgent),zt={};Wt&&(zt.supported='requestAnimationFrame'in window,zt.supportsTouch='ontouchstart'in window,zt.usingTouch=!1,zt.dynamicInputDetection=!0,zt.iOS=/iPhone|iPad|iPod/.test(navigator.platform)&&!window.MSStream,zt.onUserInputChange=function(){});for(var Ut={POPPER:'.tippy-popper',TOOLTIP:'.tippy-tooltip',CONTENT:'.tippy-content',BACKDROP:'.tippy-backdrop',ARROW:'.tippy-arrow',ROUND_ARROW:'.tippy-roundarrow',REFERENCE:'[data-tippy]'},Ft={placement:'top',livePlacement:!0,trigger:'mouseenter focus',animation:'shift-away',html:!1,animateFill:!0,arrow:!1,delay:0,duration:[350,300],interactive:!1,interactiveBorder:2,theme:'dark',size:'regular',distance:10,offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,updateDuration:350,sticky:!1,appendTo:function(){return document.body},zIndex:9999,touchHold:!1,performance:!1,dynamicTitle:!1,flip:!0,flipBehavior:'flip',arrowType:'sharp',arrowTransform:'',maxWidth:'',target:null,allowTitleHTML:!0,popperOptions:{},createPopperInstanceOnInit:!1,onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){}},qt=zt.supported&&Object.keys(Ft),jt=function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function')},Kt=function(){function t(t,e){for(var a,o=0;o<e.length;o++)a=e[o],a.enumerable=a.enumerable||!1,a.configurable=!0,('value'in a)&&(a.writable=!0),Object.defineProperty(t,a.key,a)}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),Vt=Object.assign||function(t){for(var e,a=1;a<arguments.length;a++)for(var i in e=arguments[a],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},Gt='undefined'!=typeof window&&'undefined'!=typeof document,Qt=['Edge','Trident','Firefox'],Zt=0,$t=0;$t<Qt.length;$t+=1)if(Gt&&0<=navigator.userAgent.indexOf(Qt[$t])){Zt=1;break}var i=Gt&&window.Promise,Jt=i?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Zt))}},te={},ee=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'all';return(t=t.toString(),te.hasOwnProperty(t))?te[t]:('11'===t?te[t]=-1!==navigator.userAgent.indexOf('Trident'):'10'===t?te[t]=-1!==navigator.appVersion.indexOf('MSIE 10'):'all'===t?te[t]=-1!==navigator.userAgent.indexOf('Trident')||-1!==navigator.userAgent.indexOf('MSIE'):void 0,te.all=te.all||Object.keys(te).some(function(t){return te[t]}),te[t])},ae=function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function')},ie=function(){function t(t,e){for(var a,o=0;o<e.length;o++)a=e[o],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),oe=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t},re=Object.assign||function(t){for(var e,a=1;a<arguments.length;a++)for(var i in e=arguments[a],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},pe=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ne=pe.slice(3),se={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},le=function(){function t(e,a){var i=this,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ae(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=Jt(this.update.bind(this)),this.options=re({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=a&&a.jquery?a[0]:a,this.options.modifiers={},Object.keys(re({},t.Defaults.modifiers,o.modifiers)).forEach(function(e){i.options.modifiers[e]=re({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return re({name:t},i.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&m(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return ie(t,[{key:'update',value:function(){return B.call(this)}},{key:'destroy',value:function(){return F.call(this)}},{key:'enableEventListeners',value:function(){return V.call(this)}},{key:'disableEventListeners',value:function(){return Q.call(this)}}]),t}();le.Utils=('undefined'==typeof window?global:window).PopperUtils,le.placements=pe,le.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,a=e.split('-')[0],i=e.split('-')[1];if(i){var o=t.offsets,r=o.reference,p=o.popper,n=-1!==['bottom','top'].indexOf(a),s=n?'left':'top',l=n?'width':'height',d={start:oe({},s,r[s]),end:oe({},s,r[s]+r[l]-p[l])};t.offsets.popper=re({},p,d[i])}return t}},offset:{order:200,enabled:!0,fn:rt,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var a=e.boundariesElement||u(t.instance.popper);t.instance.reference===a&&(a=u(a));var i=P(t.instance.popper,t.instance.reference,e.padding,a,t.positionFixed);e.boundaries=i;var o=e.priority,r=t.offsets.popper,p={primary:function(t){var a=r[t];return r[t]<i[t]&&!e.escapeWithReference&&(a=Mt(r[t],i[t])),oe({},t,a)},secondary:function(t){var a='right'===t?'left':'top',o=r[a];return r[t]>i[t]&&!e.escapeWithReference&&(o=_t(r[a],i[t]-('right'===t?r.width:r.height))),oe({},a,o)}};return o.forEach(function(t){var e=-1===['left','top'].indexOf(t)?'secondary':'primary';r=re({},r,p[e](t))}),t.offsets.popper=r,t},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,a=e.popper,i=e.reference,o=t.placement.split('-')[0],r=Ht,p=-1!==['top','bottom'].indexOf(o),n=p?'right':'bottom',s=p?'left':'top',l=p?'width':'height';return a[n]<r(i[s])&&(t.offsets.popper[s]=r(i[s])-a[l]),a[s]>r(i[n])&&(t.offsets.popper[s]=r(i[n])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var a;if(!tt(t.instance.modifiers,'arrow','keepTogether'))return t;var i=e.element;if('string'==typeof i){if(i=t.instance.popper.querySelector(i),!i)return t;}else if(!t.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),t;var o=t.placement.split('-')[0],r=t.offsets,p=r.popper,n=r.reference,s=-1!==['left','right'].indexOf(o),l=s?'height':'width',d=s?'Top':'Left',c=d.toLowerCase(),m=s?'left':'top',h=s?'bottom':'right',b=R(i)[l];n[h]-b<p[c]&&(t.offsets.popper[c]-=p[c]-(n[h]-b)),n[c]+b>p[h]&&(t.offsets.popper[c]+=n[c]+b-p[h]),t.offsets.popper=O(t.offsets.popper);var u=n[c]+n[l]/2-b/2,y=f(t.instance.popper),g=parseFloat(y['margin'+d],10),w=parseFloat(y['border'+d+'Width'],10),x=u-t.offsets.popper[c]-g-w;return x=Mt(_t(p[l]-b,x),0),t.arrowElement=i,t.offsets.arrow=(a={},oe(a,c,Math.round(x)),oe(a,m,''),a),t},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(t,e){if(z(t.instance.modifiers,'inner'))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var a=P(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split('-')[0],o=N(i),r=t.placement.split('-')[1]||'',p=[];switch(e.behavior){case se.FLIP:p=[i,o];break;case se.CLOCKWISE:p=at(i);break;case se.COUNTERCLOCKWISE:p=at(i,!0);break;default:p=e.behavior;}return p.forEach(function(n,s){if(i!==n||p.length===s+1)return t;i=t.placement.split('-')[0],o=N(i);var l=t.offsets.popper,d=t.offsets.reference,c=Ht,m='left'===i&&c(l.right)>c(d.left)||'right'===i&&c(l.left)<c(d.right)||'top'===i&&c(l.bottom)>c(d.top)||'bottom'===i&&c(l.top)<c(d.bottom),f=c(l.left)<c(a.left),h=c(l.right)>c(a.right),b=c(l.top)<c(a.top),u=c(l.bottom)>c(a.bottom),y='left'===i&&f||'right'===i&&h||'top'===i&&b||'bottom'===i&&u,g=-1!==['top','bottom'].indexOf(i),w=!!e.flipVariations&&(g&&'start'===r&&f||g&&'end'===r&&h||!g&&'start'===r&&b||!g&&'end'===r&&u);(m||y||w)&&(t.flipped=!0,(m||y)&&(i=p[s+1]),w&&(r=et(r)),t.placement=i+(r?'-'+r:''),t.offsets.popper=re({},t.offsets.popper,_(t.instance.popper,t.offsets.reference,t.placement)),t=W(t.instance.modifiers,t,'flip'))}),t},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,a=e.split('-')[0],i=t.offsets,o=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(a),n=-1===['top','left'].indexOf(a);return o[p?'left':'top']=r[a]-(n?o[p?'width':'height']:0),t.placement=N(e),t.offsets.popper=O(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!tt(t.instance.modifiers,'hide','preventOverflow'))return t;var e=t.offsets.reference,a=H(t.instance.modifiers,function(t){return'preventOverflow'===t.name}).boundaries;if(e.bottom<a.top||e.left>a.right||e.top>a.bottom||e.right<a.left){if(!0===t.hide)return t;t.hide=!0,t.attributes['x-out-of-boundaries']=''}else{if(!1===t.hide)return t;t.hide=!1,t.attributes['x-out-of-boundaries']=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var a=e.x,i=e.y,o=t.offsets.popper,r=H(t.instance.modifiers,function(t){return'applyStyle'===t.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var p,n,s=void 0===r?e.gpuAcceleration:r,l=u(t.instance.popper),d=L(l),c={position:o.position},m={left:Ht(o.left),top:Ht(o.top),bottom:Ht(o.bottom),right:Ht(o.right)},f='bottom'===a?'top':'bottom',h='right'===i?'left':'right',b=U('transform');if(n='bottom'==f?-d.height+m.bottom:m.top,p='right'==h?-d.width+m.right:m.left,s&&b)c[b]='translate3d('+p+'px, '+n+'px, 0)',c[f]=0,c[h]=0,c.willChange='transform';else{var y='bottom'==f?-1:1,g='right'==h?-1:1;c[f]=n*y,c[h]=p*g,c.willChange=f+', '+h}var w={"x-placement":t.placement};return t.attributes=re({},w,t.attributes),t.styles=re({},c,t.styles),t.arrowStyles=re({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(t){return $(t.instance.popper,t.styles),J(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&$(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,a,i,o){var r=D(o,e,t,a.positionFixed),p=I(a.placement,r,e,t,a.modifiers.flip.boundariesElement,a.modifiers.flip.padding);return e.setAttribute('x-placement',p),$(e,{position:a.positionFixed?'fixed':'absolute'}),a},gpuAcceleration:void 0}}};var de={};if(Wt){var ce=Element.prototype;de=ce.matches||ce.matchesSelector||ce.webkitMatchesSelector||ce.mozMatchesSelector||ce.msMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),a=e.length;0<=--a&&e.item(a)!==this;);return-1<a}}var e=de,me={},fe=function(t){return function(e){return e===me&&t}},he=function(){function t(e){for(var a in jt(this,t),e)this[a]=e[a];this.state={destroyed:!1,visible:!1,enabled:!0},this._=fe({mutationObservers:[]})}return Kt(t,[{key:'enable',value:function(){this.state.enabled=!0}},{key:'disable',value:function(){this.state.enabled=!1}},{key:'show',value:function(t){var e=this;if(!this.state.destroyed&&this.state.enabled){var a=this.popper,i=this.reference,o=this.options,p=d(a),n=p.tooltip,s=p.backdrop,l=p.content;return o.dynamicTitle&&!i.getAttribute('data-original-title')?void 0:i.refObj||document.documentElement.contains(i)?void(o.onShow.call(a,this),t=yt(void 0===t?o.duration:t,0),wt([a,n,s],0),a.style.visibility='visible',this.state.visible=!0,At.call(this,function(){if(e.state.visible){if(vt.call(e)||e.popperInstance.scheduleUpdate(),vt.call(e)){e.popperInstance.disableEventListeners();var p=yt(o.delay,0),d=e._(me).lastTriggerEvent;d&&e._(me).followCursorListener(p&&e._(me).lastMouseMoveEvent?e._(me).lastMouseMoveEvent:d)}wt([n,s,s?l:null],t),s&&getComputedStyle(s)[r('transform')],o.interactive&&i.classList.add('tippy-active'),o.sticky&&Yt.call(e),gt([n,s],'visible'),Xt.call(e,t,function(){o.updateDuration||n.classList.add('tippy-notransition'),o.interactive&&xt(a),i.setAttribute('aria-describedby','tippy-'+e.id),o.onShown.call(a,e)})}})):void this.destroy()}}},{key:'hide',value:function(t){var e=this;if(!this.state.destroyed&&this.state.enabled){var a=this.popper,i=this.reference,o=this.options,r=d(a),p=r.tooltip,n=r.backdrop,s=r.content;o.onHide.call(a,this),t=yt(void 0===t?o.duration:t,1),o.updateDuration||p.classList.remove('tippy-notransition'),o.interactive&&i.classList.remove('tippy-active'),a.style.visibility='hidden',this.state.visible=!1,wt([p,n,n?s:null],t),gt([p,n],'hidden'),o.interactive&&-1<o.trigger.indexOf('click')&&xt(i),bt(function(){Xt.call(e,t,function(){e.state.visible||!o.appendTo.contains(a)||(!e._(me).isPreparingToShow&&(document.removeEventListener('mousemove',e._(me).followCursorListener),e._(me).lastMouseMoveEvent=null),i.removeAttribute('aria-describedby'),e.popperInstance.disableEventListeners(),o.appendTo.removeChild(a),o.onHidden.call(a,e))})})}}},{key:'destroy',value:function(){var t=this,e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];if(!this.state.destroyed){this.state.visible&&this.hide(0),this.listeners.forEach(function(e){t.reference.removeEventListener(e.event,e.handler)}),this.title&&this.reference.setAttribute('title',this.title),delete this.reference._tippy;['data-original-title','data-tippy','data-tippy-delegate'].forEach(function(e){t.reference.removeAttribute(e)}),this.options.target&&e&&a(this.reference.querySelectorAll(this.options.target)).forEach(function(t){return t._tippy&&t._tippy.destroy()}),this.popperInstance&&this.popperInstance.destroy(),this._(me).mutationObservers.forEach(function(t){t.disconnect()}),this.state.destroyed=!0}}}]),t}(),be=1,ue=!1;return Nt.version='2.4.1',Nt.browser=zt,Nt.defaults=Ft,Nt.disableAnimations=function(){Ft.updateDuration=Ft.duration=0,Ft.animateFill=!1},function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'';if(Wt&&zt.supported){var e=document.head||document.querySelector('head'),a=document.createElement('style');a.type='text/css',e.insertBefore(a,e.firstChild),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}('.tippy-touch{cursor:pointer!important}.tippy-notransition{-webkit-transition:none!important;transition:none!important}.tippy-popper{max-width:350px;-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;-webkit-transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4}.tippy-popper[data-html]{max-width:96%;max-width:calc(100% - 20px)}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 90%;transform-origin:0 90%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(5.5) translate(-50%,25%);transform:scale(5.5) translate(-50%,25%);opacity:1}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,25%);transform:scale(1) translate(-50%,25%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(90deg);transform:translateY(0) rotateX(90deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -90%;transform-origin:0 -90%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(5.5) translate(-50%,-125%);transform:scale(5.5) translate(-50%,-125%);opacity:1}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,-125%);transform:scale(1) translate(-50%,-125%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-90deg);transform:translateY(0) rotateX(-90deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:90% 0;transform-origin:90% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(5.5) translate(33%,-50%);transform:scale(5.5) translate(33%,-50%);opacity:1}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(33%,-50%);transform:scale(1.5) translate(33%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-90deg);transform:translateX(0) rotateY(-90deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-90% 0;transform-origin:-90% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(5.5) translate(-133%,-50%);transform:scale(5.5) translate(-133%,-50%);opacity:1}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(-133%,-50%);transform:scale(1.5) translate(-133%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(90deg);transform:translateX(0) rotateY(90deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-animatefill] .tippy-content{-webkit-transition:-webkit-clip-path cubic-bezier(.46,.1,.52,.98);transition:-webkit-clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98),-webkit-clip-path cubic-bezier(.46,.1,.52,.98)}.tippy-tooltip[data-interactive]{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{-webkit-transition-timing-function:cubic-bezier(.53,2,.36,.85);transition-timing-function:cubic-bezier(.53,2,.36,.85)}.tippy-tooltip[data-inertia][data-state=hidden]{-webkit-transition-timing-function:ease;transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-roundarrow path{pointer-events:auto}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:26%;left:50%;top:50%;z-index:-1;-webkit-transition:all cubic-bezier(.46,.1,.52,.98);transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(100% 100% at 50% 50%);clip-path:ellipse(100% 100% at 50% 50%)}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(5% 50% at 50% 50%);clip-path:ellipse(5% 50% at 50% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 0 50%);clip-path:ellipse(135% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(25% 100% at 0 50%);clip-path:ellipse(25% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 100% 50%);clip-path:ellipse(135% 100% at 100% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(25% 100% at 100% 50%);clip-path:ellipse(25% 100% at 100% 50%)}@media (max-width:360px){.tippy-popper{max-width:96%;max-width:calc(100% - 20px)}}'),Nt});

/*
 * arrive.js
 * v2.4.1
 * https://github.com/uzairfarooq/arrive
 * MIT licensed
 *
 * Copyright (c) 2014-2017 Uzair Farooq
 */

var Arrive=function(e,t,n){"use strict";function r(e,t,n){l.addMethod(t,n,e.unbindEvent),l.addMethod(t,n,e.unbindEventWithSelectorOrCallback),l.addMethod(t,n,e.unbindEventWithSelectorAndCallback)}function i(e){e.arrive=f.bindEvent,r(f,e,"unbindArrive"),e.leave=d.bindEvent,r(d,e,"unbindLeave")}if(e.MutationObserver&&"undefined"!=typeof HTMLElement){var o=0,l=function(){var t=HTMLElement.prototype.matches||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector;return{matchesSelector:function(e,n){return e instanceof HTMLElement&&t.call(e,n)},addMethod:function(e,t,r){var i=e[t];e[t]=function(){return r.length==arguments.length?r.apply(this,arguments):"function"==typeof i?i.apply(this,arguments):n}},callCallbacks:function(e,t){t&&t.options.onceOnly&&1==t.firedElems.length&&(e=[e[0]]);for(var n,r=0;n=e[r];r++)n&&n.callback&&n.callback.call(n.elem,n.elem);t&&t.options.onceOnly&&1==t.firedElems.length&&t.me.unbindEventWithSelectorAndCallback.call(t.target,t.selector,t.callback)},checkChildNodesRecursively:function(e,t,n,r){for(var i,o=0;i=e[o];o++)n(i,t,r)&&r.push({callback:t.callback,elem:i}),i.childNodes.length>0&&l.checkChildNodesRecursively(i.childNodes,t,n,r)},mergeArrays:function(e,t){var n,r={};for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r},toElementsArray:function(t){return n===t||"number"==typeof t.length&&t!==e||(t=[t]),t}}}(),c=function(){var e=function(){this._eventsBucket=[],this._beforeAdding=null,this._beforeRemoving=null};return e.prototype.addEvent=function(e,t,n,r){var i={target:e,selector:t,options:n,callback:r,firedElems:[]};return this._beforeAdding&&this._beforeAdding(i),this._eventsBucket.push(i),i},e.prototype.removeEvent=function(e){for(var t,n=this._eventsBucket.length-1;t=this._eventsBucket[n];n--)if(e(t)){this._beforeRemoving&&this._beforeRemoving(t);var r=this._eventsBucket.splice(n,1);r&&r.length&&(r[0].callback=null)}},e.prototype.beforeAdding=function(e){this._beforeAdding=e},e.prototype.beforeRemoving=function(e){this._beforeRemoving=e},e}(),a=function(t,r){var i=new c,o=this,a={fireOnAttributesModification:!1};return i.beforeAdding(function(n){var i,l=n.target;(l===e.document||l===e)&&(l=document.getElementsByTagName("html")[0]),i=new MutationObserver(function(e){r.call(this,e,n)});var c=t(n.options);i.observe(l,c),n.observer=i,n.me=o}),i.beforeRemoving(function(e){e.observer.disconnect()}),this.bindEvent=function(e,t,n){t=l.mergeArrays(a,t);for(var r=l.toElementsArray(this),o=0;o<r.length;o++)i.addEvent(r[o],e,t,n)},this.unbindEvent=function(){var e=l.toElementsArray(this);i.removeEvent(function(t){for(var r=0;r<e.length;r++)if(this===n||t.target===e[r])return!0;return!1})},this.unbindEventWithSelectorOrCallback=function(e){var t,r=l.toElementsArray(this),o=e;t="function"==typeof e?function(e){for(var t=0;t<r.length;t++)if((this===n||e.target===r[t])&&e.callback===o)return!0;return!1}:function(t){for(var i=0;i<r.length;i++)if((this===n||t.target===r[i])&&t.selector===e)return!0;return!1},i.removeEvent(t)},this.unbindEventWithSelectorAndCallback=function(e,t){var r=l.toElementsArray(this);i.removeEvent(function(i){for(var o=0;o<r.length;o++)if((this===n||i.target===r[o])&&i.selector===e&&i.callback===t)return!0;return!1})},this},s=function(){function e(e){var t={attributes:!1,childList:!0,subtree:!0};return e.fireOnAttributesModification&&(t.attributes=!0),t}function t(e,t){e.forEach(function(e){var n=e.addedNodes,i=e.target,o=[];null!==n&&n.length>0?l.checkChildNodesRecursively(n,t,r,o):"attributes"===e.type&&r(i,t,o)&&o.push({callback:t.callback,elem:i}),l.callCallbacks(o,t)})}function r(e,t){return l.matchesSelector(e,t.selector)&&(e._id===n&&(e._id=o++),-1==t.firedElems.indexOf(e._id))?(t.firedElems.push(e._id),!0):!1}var i={fireOnAttributesModification:!1,onceOnly:!1,existing:!1};f=new a(e,t);var c=f.bindEvent;return f.bindEvent=function(e,t,r){n===r?(r=t,t=i):t=l.mergeArrays(i,t);var o=l.toElementsArray(this);if(t.existing){for(var a=[],s=0;s<o.length;s++)for(var u=o[s].querySelectorAll(e),f=0;f<u.length;f++)a.push({callback:r,elem:u[f]});if(t.onceOnly&&a.length)return r.call(a[0].elem,a[0].elem);setTimeout(l.callCallbacks,1,a)}c.call(this,e,t,r)},f},u=function(){function e(){var e={childList:!0,subtree:!0};return e}function t(e,t){e.forEach(function(e){var n=e.removedNodes,i=[];null!==n&&n.length>0&&l.checkChildNodesRecursively(n,t,r,i),l.callCallbacks(i,t)})}function r(e,t){return l.matchesSelector(e,t.selector)}var i={};d=new a(e,t);var o=d.bindEvent;return d.bindEvent=function(e,t,r){n===r?(r=t,t=i):t=l.mergeArrays(i,t),o.call(this,e,t,r)},d},f=new s,d=new u;t&&i(t.fn),i(HTMLElement.prototype),i(NodeList.prototype),i(HTMLCollection.prototype),i(HTMLDocument.prototype),i(Window.prototype);var h={};return r(f,h,"unbindAllArrive"),r(d,h,"unbindAllLeave"),h}}(window,"undefined"==typeof jQuery?null:jQuery,void 0);

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Driver=e():t.Driver=e()}(window,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=10)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.OVERLAY_OPACITY=.75,e.OVERLAY_PADDING=10,e.SHOULD_ANIMATE_OVERLAY=!0,e.SHOULD_OUTSIDE_CLICK_CLOSE=!0,e.ESC_KEY_CODE=27,e.LEFT_KEY_CODE=37,e.RIGHT_KEY_CODE=39;var n=e.ID_OVERLAY="driver-page-overlay",o=e.ID_STAGE="driver-highlighted-element-stage",s=e.ID_POPOVER="driver-popover-item",r=(e.CLASS_DRIVER_HIGHLIGHTED_ELEMENT="driver-highlighted-element",e.CLASS_POSITION_RELATIVE="driver-position-relative",e.CLASS_FIX_STACKING_CONTEXT="driver-fix-stacking",e.CLASS_NO_ANIMATION="driver-no-animation",e.CLASS_POPOVER_TIP="driver-popover-tip"),h=e.CLASS_POPOVER_TITLE="driver-popover-title",l=e.CLASS_POPOVER_DESCRIPTION="driver-popover-description",a=e.CLASS_POPOVER_FOOTER="driver-popover-footer",d=e.CLASS_CLOSE_BTN="driver-close-btn",u=e.CLASS_NEXT_STEP_BTN="driver-next-btn",c=e.CLASS_PREV_STEP_BTN="driver-prev-btn";e.CLASS_BTN_DISABLED="driver-disabled",e.ANIMATION_DURATION_MS=400,e.POPOVER_HTML='\n  <div id="'+s+'">\n    <div class="'+r+'"></div>\n    <div class="'+h+'">Popover Title</div>\n    <div class="'+l+'">Popover Description</div>\n    <div class="'+a+'">\n      <button class="'+d+'">Close</button>\n      <span class="driver-btn-group">\n        <button class="'+c+'">&larr; Previous</button>\n        <button class="'+u+'">Next &rarr;</button>\n      </span>\n    </div>\n  </div>',e.OVERLAY_HTML='<div id="'+n+'"></div>',e.STAGE_HTML='<div id="'+o+'"></div>'},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.createNodeFromString=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.getStyleProperty=function t(e,i){if(arguments.length>2&&void 0!==arguments[2]&&arguments[2]){for(var n=["","-webkit-","-ms-","moz-","-o-"],o=0;o<n.length;o++){var s=t(e,n[o]+i);if(s)return s}return""}var r="";return e.currentStyle?r=e.currentStyle[i]:document.defaultView&&document.defaultView.getComputedStyle&&(r=document.defaultView.getComputedStyle(e,null).getPropertyValue(i)),r&&r.toLowerCase?r.toLowerCase():r}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),r=i(1),h=i(6),l=(n=h)&&n.__esModule?n:{default:n};var a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.node,n=e.options,o=e.popover,s=e.stage,r=e.overlay,h=e.window,l=e.document;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.node=i,this.document=l,this.window=h,this.options=n,this.overlay=r,this.popover=o,this.stage=s,this.animationTimeout=null}return o(t,[{key:"isInView",value:function(){for(var t=this.node.offsetTop,e=this.node.offsetLeft,i=this.node.offsetWidth,n=this.node.offsetHeight,o=this.node;o.offsetParent;)t+=(o=o.offsetParent).offsetTop,e+=o.offsetLeft;return t>=this.window.pageYOffset&&e>=this.window.pageXOffset&&t+n<=this.window.pageYOffset+this.window.innerHeight&&e+i<=this.window.pageXOffset+this.window.innerWidth}},{key:"scrollManually",value:function(){var t=this.node.getBoundingClientRect().top+this.window.pageYOffset-this.window.innerHeight/2;this.window.scrollTo(0,t)}},{key:"bringInView",value:function(){if(!this.isInView())if(this.node.scrollIntoView)try{this.node.scrollIntoView(this.options.scrollIntoViewOptions||{behavior:"instant",block:"center"})}catch(t){this.scrollManually()}else this.scrollManually()}},{key:"getCalculatedPosition",value:function(){var t=this.document.body,e=this.document.documentElement,i=this.window,n=this.window.pageYOffset||e.scrollTop||t.scrollTop,o=i.pageXOffset||e.scrollLeft||t.scrollLeft,s=this.node.getBoundingClientRect();return new l.default({top:s.top+n,left:s.left+o,right:s.left+o+s.width,bottom:s.top+n+s.height})}},{key:"onDeselected",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.hidePopover(),t&&this.hideStage(),this.removeHighlightClasses(),this.window.clearTimeout(this.animationTimeout),this.options.onDeselected&&this.options.onDeselected(this)}},{key:"isSame",value:function(t){return!(!t||!t.node)&&t.node===this.node}},{key:"onHighlightStarted",value:function(){this.options.onHighlightStarted&&this.options.onHighlightStarted(this)}},{key:"onHighlighted",value:function(){this.showPopover(),this.showStage(),this.addHighlightClasses();var t=this.popover;t&&!t.isInView()&&t.bringInView(),this.isInView()||this.bringInView(),this.options.onHighlighted&&this.options.onHighlighted(this)}},{key:"removeHighlightClasses",value:function(){this.node.classList.remove(s.CLASS_DRIVER_HIGHLIGHTED_ELEMENT),this.node.classList.remove(s.CLASS_POSITION_RELATIVE),this.document.querySelectorAll("."+s.CLASS_FIX_STACKING_CONTEXT).forEach(function(t){t.classList.remove(s.CLASS_FIX_STACKING_CONTEXT)})}},{key:"addHighlightClasses",value:function(){this.node.classList.add(s.CLASS_DRIVER_HIGHLIGHTED_ELEMENT),this.canMakeRelative()&&this.node.classList.add(s.CLASS_POSITION_RELATIVE),this.fixStackingContext()}},{key:"fixStackingContext",value:function(){for(var t=this.node.parentNode;t&&t.tagName&&"body"!==t.tagName.toLowerCase();){var e=(0,r.getStyleProperty)(t,"z-index"),i=parseFloat((0,r.getStyleProperty)(t,"opacity")),n=(0,r.getStyleProperty)(t,"transform",!0),o=(0,r.getStyleProperty)(t,"filter",!0),h=(0,r.getStyleProperty)(t,"perspective",!0);(/[0-9]+/.test(e)||i<1||n&&"none"!==n||o&&"none"!==o||h&&"none"!==h)&&t.classList.add(s.CLASS_FIX_STACKING_CONTEXT),t=t.parentNode}}},{key:"canMakeRelative",value:function(){var t=this.getStyleProperty("position");return-1===["absolute","fixed","relative"].indexOf(t)}},{key:"getStyleProperty",value:function(t){return(0,r.getStyleProperty)(this.node,t)}},{key:"showStage",value:function(){this.stage.show(this.getCalculatedPosition())}},{key:"getNode",value:function(){return this.node}},{key:"hideStage",value:function(){this.stage.hide()}},{key:"hidePopover",value:function(){this.popover&&this.popover.hide()}},{key:"showPopover",value:function(){var t=this;if(this.popover){var e=this.getCalculatedPosition(),i=s.ANIMATION_DURATION_MS;this.options.animate&&this.overlay.lastHighlightedElement||(i=0),this.animationTimeout=this.window.setTimeout(function(){t.popover.show(e)},i)}}},{key:"getFullPageSize",value:function(){var t=this.document.body,e=this.document.documentElement;return{height:Math.max(t.scrollHeight,t.offsetHeight,e.scrollHeight,e.offsetHeight),width:Math.max(t.scrollWidth,t.offsetWidth,e.scrollWidth,e.offsetWidth)}}},{key:"getSize",value:function(){return{height:Math.max(this.node.scrollHeight,this.node.offsetHeight),width:Math.max(this.node.scrollWidth,this.node.offsetWidth)}}}]),t}();e.default=a,t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),r=i(1),h=i(2),l=(n=h)&&n.__esModule?n:{default:n};var a=function(t){function e(t,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.options=t,o.window=i,o.document=n,o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,l.default),o(e,[{key:"makeNode",value:function(){var t=this.document.getElementById(s.ID_STAGE);t||(t=(0,r.createNodeFromString)(s.STAGE_HTML),document.body.appendChild(t)),this.node=t,this.options.animate?this.node.classList.remove(s.CLASS_NO_ANIMATION):this.node.classList.add(s.CLASS_NO_ANIMATION)}},{key:"hide",value:function(){this.node&&this.node.parentElement&&this.node.parentElement.removeChild(this.node)}},{key:"setInitialStyle",value:function(){this.node.style.display="block",this.node.style.left="0",this.node.style.top="0",this.node.style.bottom="",this.node.style.right=""}},{key:"show",value:function(t){this.makeNode(),this.setInitialStyle();var e=2*this.options.padding,i=t.right-t.left+e,n=t.bottom-t.top+e;this.node.style.display="block",this.node.style.position="absolute",this.node.style.width=i+"px",this.node.style.height=n+"px",this.node.style.top=t.top-e/2+"px",this.node.style.left=t.left-e/2+"px",this.node.style.backgroundColor=this.options.stageBackground}}]),e}();e.default=a,t.exports=e.default},function(t,e,i){"use strict";!function(){for(var t=0,e=["ms","moz","webkit","o"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var i=(new Date).getTime(),n=Math.max(0,16-(i-t)),o=window.setTimeout(function(){e(i+n)},n);return t=i+n,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}()},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(2),h=(n=r)&&n.__esModule?n:{default:n},l=i(0),a=i(1);var d=function(t){function e(t,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var s=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return s.options=o({isFirst:!0,isLast:!0,totalCount:1,currentIndex:0,showButtons:!0,closeBtnText:"Close",doneBtnText:"Done",startBtnText:"Next &rarr;",nextBtnText:"Next &rarr;",prevBtnText:"&larr; Previous"},t),s.window=i,s.document=n,s.makeNode(),s.hide(),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,h.default),s(e,[{key:"makeNode",value:function(){var t=this.document.getElementById(l.ID_POPOVER);t||(t=(0,a.createNodeFromString)(l.POPOVER_HTML),document.body.appendChild(t)),this.node=t,this.tipNode=t.querySelector("."+l.CLASS_POPOVER_TIP),this.titleNode=t.querySelector("."+l.CLASS_POPOVER_TITLE),this.descriptionNode=t.querySelector("."+l.CLASS_POPOVER_DESCRIPTION),this.footerNode=t.querySelector("."+l.CLASS_POPOVER_FOOTER),this.nextBtnNode=t.querySelector("."+l.CLASS_NEXT_STEP_BTN),this.prevBtnNode=t.querySelector("."+l.CLASS_PREV_STEP_BTN),this.closeBtnNode=t.querySelector("."+l.CLASS_CLOSE_BTN)}},{key:"hide",value:function(){this.node.style.display="none"}},{key:"setInitialState",value:function(){this.node.style.display="block",this.node.style.left="0",this.node.style.top="0",this.node.style.bottom="",this.node.style.right="",this.node.querySelector("."+l.CLASS_POPOVER_TIP).className=l.CLASS_POPOVER_TIP}},{key:"show",value:function(t){switch(this.setInitialState(),this.titleNode.innerHTML=this.options.title,this.descriptionNode.innerHTML=this.options.description,this.renderButtons(),this.options.position){case"left":this.positionOnLeft(t);break;case"right":this.positionOnRight(t);break;case"top":this.positionOnTop(t);break;case"bottom":this.positionOnBottom(t);break;case"auto":default:this.autoPosition(t)}}},{key:"renderButtons",value:function(){this.nextBtnNode.innerHTML=this.options.nextBtnText,this.prevBtnNode.innerHTML=this.options.prevBtnText,this.closeBtnNode.innerHTML=this.options.closeBtnText,this.options.showButtons&&this.options.totalCount&&1!==this.options.totalCount?(this.footerNode.style.display="block",this.options.isFirst?(this.prevBtnNode.classList.add(l.CLASS_BTN_DISABLED),this.nextBtnNode.innerHTML=this.options.startBtnText):this.prevBtnNode.classList.remove(l.CLASS_BTN_DISABLED),this.options.isLast?this.nextBtnNode.innerHTML=this.options.doneBtnText:this.nextBtnNode.innerHTML=this.options.nextBtnText):this.footerNode.style.display="none"}},{key:"positionOnLeft",value:function(t){var e=this.getSize().width,i=this.options.padding+10;this.node.style.left=t.left-e-i+"px",this.node.style.top=t.top-this.options.padding+"px",this.node.style.right="",this.node.style.bottom="",this.tipNode.classList.add("right")}},{key:"positionOnRight",value:function(t){var e=this.options.padding+10;this.node.style.left=t.right+e+"px",this.node.style.top=t.top-this.options.padding+"px",this.node.style.right="",this.node.style.bottom="",this.tipNode.classList.add("left")}},{key:"positionOnTop",value:function(t){var e=this.getSize().height,i=this.options.padding+10;this.node.style.top=t.top-e-i+"px",this.node.style.left=t.left-this.options.padding+"px",this.node.style.right="",this.node.style.bottom="",this.tipNode.classList.add("bottom")}},{key:"positionOnBottom",value:function(t){var e=this.options.padding+10;this.node.style.top=t.bottom+e+"px",this.node.style.left=t.left-this.options.padding+"px",this.node.style.right="",this.node.style.bottom="",this.tipNode.classList.add("top")}},{key:"autoPosition",value:function(t){var e=this.getFullPageSize(),i=this.getSize(),n=e.height,o=i.height,s=this.options.padding+10;t.bottom+o+s>=n?this.positionOnTop(t):this.positionOnBottom(t)}}]),e}();e.default=d,t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.left,n=void 0===i?0:i,o=e.top,s=void 0===o?0:o,r=e.right,h=void 0===r?0:r,l=e.bottom,a=void 0===l?0:l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.left=n,this.right=h,this.top=s,this.bottom=a}return n(t,[{key:"canHighlight",value:function(){return this.left<this.right&&this.top<this.bottom}},{key:"equals",value:function(t){return Math.round(this.left)===Math.round(t.left)&&Math.round(this.right)===Math.round(t.right)&&Math.round(this.top)===Math.round(t.top)&&Math.round(this.bottom)===Math.round(t.bottom)}}]),t}();e.default=o,t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),s=i(1);var r=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e,this.highlightedElement=null,this.lastHighlightedElement=null,this.hideTimer=null,this.window=i,this.document=n,this.removeNode=this.removeNode.bind(this)}return n(t,[{key:"makeNode",value:function(){var t=this.document.getElementById(o.ID_OVERLAY);t||(t=(0,s.createNodeFromString)(o.OVERLAY_HTML),document.body.appendChild(t)),this.node=t,this.node.style.opacity="0",this.options.animate?this.node.classList.remove(o.CLASS_NO_ANIMATION):this.node.classList.add(o.CLASS_NO_ANIMATION)}},{key:"highlight",value:function(t){t&&t.node?t.isSame(this.highlightedElement)||(this.window.clearTimeout(this.hideTimer),t.onHighlightStarted(),this.highlightedElement&&!this.highlightedElement.isSame(this.lastHighlightedElement)&&this.highlightedElement.onDeselected(),t.getCalculatedPosition().canHighlight()&&(this.lastHighlightedElement=this.highlightedElement,this.highlightedElement=t,this.show(),this.highlightedElement.onHighlighted())):console.warn("Invalid element to highlight. Must be an instance of `Element`")}},{key:"show",value:function(){var t=this;this.node&&this.node.parentElement||(this.makeNode(),window.setTimeout(function(){t.node.style.opacity=""+t.options.opacity,t.node.style.position="fixed",t.node.style.left="0",t.node.style.top="0",t.node.style.bottom="0",t.node.style.right="0"}))}},{key:"getHighlightedElement",value:function(){return this.highlightedElement}},{key:"getLastHighlightedElement",value:function(){return this.lastHighlightedElement}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.highlightedElement){this.highlightedElement.onDeselected(!0)}this.highlightedElement=null,this.lastHighlightedElement=null,this.node&&(this.window.clearTimeout(this.hideTimer),this.options.animate&&!t?(this.node.style.opacity="0",this.hideTimer=this.window.setTimeout(this.removeNode,o.ANIMATION_DURATION_MS)):this.removeNode())}},{key:"removeNode",value:function(){this.node&&this.node.parentElement&&this.node.parentElement.removeChild(this.node)}},{key:"refresh",value:function(){this.highlightedElement&&(this.highlightedElement.showPopover(),this.highlightedElement.showStage())}}]),t}();e.default=r,t.exports=e.default},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=d(i(7)),r=d(i(2)),h=d(i(5));i(4);var l=i(0),a=d(i(3));function d(t){return t&&t.__esModule?t:{default:t}}var u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=n({animate:l.SHOULD_ANIMATE_OVERLAY,opacity:l.OVERLAY_OPACITY,padding:l.OVERLAY_PADDING,scrollIntoViewOptions:null,allowClose:l.SHOULD_OUTSIDE_CLICK_CLOSE,stageBackground:"#ffffff",onHighlightStarted:function(){},onHighlighted:function(){},onDeselected:function(){}},e),this.document=document,this.window=window,this.isActivated=!1,this.steps=[],this.currentStep=0,this.overlay=new s.default(this.options,window,document),this.onResize=this.onResize.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onClick=this.onClick.bind(this),this.bind()}return o(t,[{key:"bind",value:function(){this.window.addEventListener("resize",this.onResize,!1),this.window.addEventListener("keyup",this.onKeyUp,!1),this.window.addEventListener("click",this.onClick,!1)}},{key:"onClick",value:function(t){if(this.isActivated&&this.hasHighlightedElement()){var e=this.overlay.getHighlightedElement(),i=this.document.getElementById(l.ID_POPOVER),n=e.node.contains(t.target),o=i&&i.contains(t.target);if(n||o||!this.options.allowClose){var s=t.target.classList.contains(l.CLASS_NEXT_STEP_BTN),r=t.target.classList.contains(l.CLASS_PREV_STEP_BTN);t.target.classList.contains(l.CLASS_CLOSE_BTN)?this.reset():s?this.moveNext():r&&this.movePrevious()}else this.reset()}}},{key:"onResize",value:function(){this.isActivated&&this.overlay.refresh()}},{key:"onKeyUp",value:function(t){this.isActivated&&(t.keyCode===l.ESC_KEY_CODE&&this.options.allowClose?this.reset():0!==this.steps.length&&(t.keyCode===l.RIGHT_KEY_CODE?this.moveNext():t.keyCode===l.LEFT_KEY_CODE&&this.movePrevious()))}},{key:"movePrevious",value:function(){this.currentStep-=1,this.steps[this.currentStep]?this.overlay.highlight(this.steps[this.currentStep]):this.reset()}},{key:"moveNext",value:function(){this.currentStep+=1,this.steps[this.currentStep]?this.overlay.highlight(this.steps[this.currentStep]):this.reset()}},{key:"hasNextStep",value:function(){return!!this.steps[this.currentStep+1]}},{key:"hasPreviousStep",value:function(){return!!this.steps[this.currentStep-1]}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.currentStep=0,this.isActivated=!1,this.overlay.clear(t)}},{key:"hasHighlightedElement",value:function(){var t=this.overlay.getHighlightedElement();return t&&t.node}},{key:"getHighlightedElement",value:function(){return this.overlay.getHighlightedElement()}},{key:"getLastHighlightedElement",value:function(){return this.overlay.getLastHighlightedElement()}},{key:"defineSteps",value:function(t){var e=this;this.steps=[],t.forEach(function(i,n){if(!i.element||"string"!=typeof i.element)throw new Error("Element (query selector string) missing in step "+n);var o=e.prepareElementFromStep(i,t,n);o&&e.steps.push(o)})}},{key:"prepareElementFromStep",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o="",s={};"string"==typeof t?o=t:(o=t.element,s=n({},this.options,t));var l=this.document.querySelector(o);if(!l)return console.warn("Element to highlight "+o+" not found"),null;var d=null;if(s.popover&&s.popover.description){var u=n({},this.options,s.popover,{totalCount:e.length,currentIndex:i,isFirst:0===i,isLast:i===e.length-1});d=new h.default(u,this.window,this.document)}var c=n({},this.options,s),p=new a.default(c,this.window,this.document);return new r.default({node:l,options:s,popover:d,stage:p,overlay:this.overlay,window:this.window,document:this.document})}},{key:"start",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(!this.steps||0===this.steps.length)throw new Error("There are no steps defined to iterate");this.isActivated=!0,this.currentStep=t,this.overlay.highlight(this.steps[t])}},{key:"highlight",value:function(t){this.isActivated=!0;var e=this.prepareElementFromStep(t);e&&this.overlay.highlight(e)}}]),t}();e.default=u,t.exports=e.default},function(t,e){},function(t,e,i){i(9),t.exports=i(8)}])});
//driver.min.js


/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),Math.abs(b)>1?c:d}var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.firstTick=!0,this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.options.defer===!1&&this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var a,b=new Date;return a=this.finalDate.getTime()-b.getTime(),a=Math.ceil(a/1e3),a=!this.options.elapse&&a<0?0:Math.abs(a),this.totalSecsLeft===a||this.firstTick?void(this.firstTick=!1):(this.totalSecsLeft=a,this.elapsed=b>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-b.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},void(this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish"))))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});

/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.4.1
 * 
 * Copyright KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 22.03.2018
 */
/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.4.1
 * 
 * Copyright KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 22.03.2018
 */
!function(e,t){"function"==typeof define&&define.amd?define(function(){return t(e,e.document,void 0)}):"object"==typeof exports?module.exports=t(e,e.document,void 0):t(e,e.document,void 0)}("undefined"!=typeof window?window:this,function(e,t,n){"use-strict";var r="OverlayScrollbars",i={o:"object",f:"function",a:"array",s:"string",n:"number",u:"undefined"},o={c:"class",s:"style",i:"id",oH:"offsetHeight",cH:"clientHeight",sH:"scrollHeight",oW:"offsetWidth",cW:"clientWidth",sW:"scrollWidth"},a={wW:function(){return e.innerWidth||t.documentElement[o.cW]||t.body[o.cW]},wH:function(){return e.innerHeight||t.documentElement[o.cH]||t.body[o.cH]},mO:function(){return e.MutationObserver||e.WebKitMutationObserver||e.WebkitMutationObserver||e.MozMutationObserver||n},rO:function(){return e.ResizeObserver||e.WebKitResizeObserver||e.WebkitResizeObserver||e.MozResizeObserver||n},rAF:function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){return e.setTimeout(t,1e3/60)}},cAF:function(){return e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.oCancelAnimationFrame||e.msCancelAnimationFrame||function(t){return e.clearTimeout(t)}},now:function(){return Date.now()||(new Date).getTime()},stpP:function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},prvD:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},page:function(e){var r="page",i="client",o="X",a=((e=e.originalEvent||e).target||e.srcElement||t).ownerDocument||t,s=a.documentElement,l=a.body;if(e.touches!==n){var c=e.touches[0];return{x:c[r+o],y:c.pageY}}return!e[r+o]&&e[i+o]&&null!=e[i+o]?{x:e[i+o]+(s&&s.scrollLeft||l&&l.scrollLeft||0)-(s&&s.clientLeft||l&&l.clientLeft||0),y:e[i+"Y"]+(s&&s.scrollTop||l&&l.scrollTop||0)-(s&&s.clientTop||l&&l.clientTop||0)}:{x:e[r+o],y:e.pageY}},mBtn:function(e){return e.which||e.button===n?e.which:1&e.button?1:2&e.button?3:4&e.button?2:0},bind:function(e,t){if(typeof e!==i.f)throw"Can't bind function!";var n=Array.prototype.slice.call(arguments,2),r=function(){},o=function(){return e.apply(this instanceof r?this:t,n.concat(Array.prototype.slice.call(arguments)))};return e.prototype&&(r.prototype=e.prototype),o.prototype=new r,o}},s=function(r){var o=/[^\x20\t\r\n\f]+/g,a=Object.prototype.toString,s=" ",l="",c=[],u={animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},f={swing:function(e,t,n,r,i){return.5-Math.cos(e*Math.PI)/2},linear:function(e,t,n,r,i){return e},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t+n:-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t+n:r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t+n:-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t*t+n:r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return 0==t?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(1-Math.pow(2,-10*t/i))+n},easeInOutExpo:function(e,t,n,r,i){return 0==t?n:t==i?n+r:(t/=i/2)<1?r/2*Math.pow(2,10*(t-1))+n:r/2*(2-Math.pow(2,-10*--t))+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){return(t/=i/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+n:r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var o=1.70158,a=0,s=r;if(0==t)return n;if(1==(t/=i))return n+r;if(a||(a=.3*i),s<Math.abs(r)){s=r;o=a/4}else o=a/(2*Math.PI)*Math.asin(r/s);return-s*Math.pow(2,10*(t-=1))*Math.sin((t*i-o)*(2*Math.PI)/a)+n},easeOutElastic:function(e,t,n,r,i){var o=1.70158,a=0,s=r;if(0==t)return n;if(1==(t/=i))return n+r;if(a||(a=.3*i),s<Math.abs(r)){s=r;o=a/4}else o=a/(2*Math.PI)*Math.asin(r/s);return s*Math.pow(2,-10*t)*Math.sin((t*i-o)*(2*Math.PI)/a)+r+n},easeInOutElastic:function(e,t,n,r,i){var o=1.70158,a=0,s=r;if(0==t)return n;if(2==(t/=i/2))return n+r;if(a||(a=i*(.3*1.5)),s<Math.abs(r)){s=r;o=a/4}else o=a/(2*Math.PI)*Math.asin(r/s);return t<1?s*Math.pow(2,10*(t-=1))*Math.sin((t*i-o)*(2*Math.PI)/a)*-.5+n:s*Math.pow(2,-10*(t-=1))*Math.sin((t*i-o)*(2*Math.PI)/a)*.5+r+n},easeInBack:function(e,t,r,i,o,a){return a==n&&(a=1.70158),i*(t/=o)*t*((a+1)*t-a)+r},easeOutBack:function(e,t,r,i,o,a){return a==n&&(a=1.70158),i*((t=t/o-1)*t*((a+1)*t+a)+1)+r},easeInOutBack:function(e,t,r,i,o,a){return a==n&&(a=1.70158),(t/=o/2)<1?i/2*(t*t*((1+(a*=1.525))*t-a))+r:i/2*((t-=2)*t*((1+(a*=1.525))*t+a)+2)+r},easeInBounce:function(e,t,n,r,i){return r-this.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){return(t/=i)<1/2.75?r*(7.5625*t*t)+n:t<2/2.75?r*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?r*(7.5625*(t-=2.25/2.75)*t+.9375)+n:r*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,r,i){return t<i/2?.5*this.easeInBounce(e,2*t,0,r,i)+n:.5*this.easeOutBounce(e,2*t-i,0,r,i)+.5*r+n}},h=function(e){var n,r,o,a=0;if(h.type(e)===i.s){for(n=[],"<"===e.charAt(0)?((o=t.createElement("div")).innerHTML=e,r=o.children):r=t.querySelectorAll(e);a<r.length;a++)n.push(r[a]);return new O(n)}return new O(e)},v=(h.extend=function(){var e,t,r,o,a,s,l=arguments[0]||{},c=1,u=arguments.length,f=!1;for("boolean"==typeof l&&(f=l,l=arguments[1]||{},c=2),typeof l!==i.o&&!h.type(l)===i.f&&(l={}),u===c&&(l=h,--c);c<u;c++)if(null!=(a=arguments[c]))for(o in a)e=l[o],l!==(r=a[o])&&(f&&r&&(h.isPlainObject(r)||(t=h.isArray(r)))?(t?(t=!1,s=e&&h.isArray(e)?e:[]):s=e&&h.isPlainObject(e)?e:{},l[o]=h.extend(f,s,r)):r!==n&&(l[o]=r));return l},h.type=function(e){return e===n?e+l:null===e?e+l:a.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()}),d=h.isFunction=function(e){return v(e)===i.f},p=(h.isArray=function(e){return v(e)===i.a},h.isEmptyObject=function(e){for(var t in e)return!1;return!0},h.isPlainObject=function(e){if(!e||v(e)!==i.o)return!1;var t,n=Object.prototype.hasOwnProperty,r=n.call(e,"constructor"),o=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!r&&!o)return!1;for(t in e);return typeof t===i.u||n.call(e,t)},h.inArray=function(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1},h.each=function(e,t){var n,r,o,a=0;if(r=!!(n=e)&&"length"in n&&n.length,o=v(n),!d(o)&&(o===i.a||0===r||typeof r===i.n&&r>0&&r-1 in n))for(;a<e.length&&!1!==t.call(e[a],a,e[a]);a++);else for(a in e)if(!1===t.call(e[a],a,e[a]))break;return e});function y(e){return(e.match(o)||[]).join(s)}function m(e,n){for(var r=(e.parentNode||t).querySelectorAll(n)||[],i=r.length;i--;)if(r[i]==e)return!0;return!1}function g(e,t,n){h.type(n)===i.s?e.insertAdjacentHTML(t,n):n.nodeType?e.insertAdjacentElement(t,n):e.insertAdjacentElement(t,n[0])}function w(e,t,r){try{e.style[t]!==n&&(e.style[t]=function(e,t){u[e.toLowerCase()]||h.type(t)!==i.n||(t=t+="px");return t}(t,r))}catch(e){}}function b(e,t){var n,r;!1!==t&&e.q.splice(0,1),e.q.length>0?(r=e.q[0],C(e.el,r.props,r.duration,r.easing,r.complete,!0)):(n=h.inArray(e,c))>-1&&c.splice(n,1)}function x(e,t,n){"scrollLeft"===t?e[t]=n:"scrollTop"===t?e[t]=n:w(e,t,n)}function C(e,t,n,i,o,a){var s,l,u,v,p,y,m={},g={},w=0,C=h.isPlainObject(n);for(C?(i=n.easing,n.start,u=n.progress,v=n.step,p=n.specialEasing,o=n.complete,y=n.duration):y=n,p=p||{},y=y||400,i=i||"swing",a=a||!1;w<c.length;w++)if(c[w].el===e){l=c[w];break}l||(l={el:e,q:[]},c.push(l));for(s in t)m[s]="scrollLeft"===s||"scrollTop"===s?e[s]:new O(e).css(s);for(s in m)m[s]!==t[s]&&(g[s]=t[s]);if(h.isEmptyObject(g))a&&b(l);else{var M,S,A,T,z,E,H,k,I,W=a?0:h.inArray(L,l.q),L={props:g,duration:C?n:y,easing:i,complete:o};if(-1===W&&(W=l.q.length,l.q.push(L)),0===W)if(y>0)H=r.now(),k=function(){M=r.now(),I=M-H,S=L.stop||I>=y,A=1-(Math.max(0,H+y-M)/y||0);for(s in g)T=m[s],z=g[s],E=(z-T)*f[p[s]||i](A,A*y,0,1,y)+T,x(e,s,E),d(v)&&v(E,{elem:e,prop:s,start:T,now:E,end:z,pos:A,options:{easing:i,speacialEasing:p,duration:y,complete:o,step:v},startTime:H});d(u)&&u({},A,Math.max(0,y-I)),S?(b(l),d(o)&&o()):L.frame=r.rAF()(k)},L.frame=r.rAF()(k);else{for(s in g)x(e,s,g[s]);b(l)}}}function O(e){h.type(e)===i.s||e.length||(e=[e]);for(var t=0;t<e.length;t++)this[t]=e[t];return this.length=e.length,this}return O.prototype={each:function(e){return p(this,e)},append:function(e){return this.each(function(){g(this,"beforeend",e)})},prepend:function(e){return this.each(function(){g(this,"afterbegin",e)})},before:function(e){return this.each(function(){g(this,"beforebegin",e)})},after:function(e){return this.each(function(){g(this,"afterend",e)})},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},first:function(){return new O(this[0])},last:function(){return new O(this[this.length-1])},find:function(e){var t,n=[];return this.each(function(){var r=this.querySelectorAll(e);for(t=0;t<r.length;t++)n.push(r[t])}),new O(n)},hide:function(){return this.each(function(){this.style.display="none"})},show:function(){return this.each(function(){this.style.display="block"})},attr:function(e,t){for(var r=0;r<this.length;r++){var i=this[r];if(t===n)return i.getAttribute(e);i.setAttribute(e,t)}return this},removeAttr:function(e){return this.each(function(){this.removeAttribute(e)})},prop:function(e,t){for(var r=0;r<this.length;r++){var i=this[r];if(t===n)return i[e];i[e]=t}return this},val:function(e){var t=this[0];return e?(t.value=e,this):t.value},scrollLeft:function(e){for(var t=0;t<this.length;t++){var r=this[t];if(e===n)return r.scrollLeft;r.scrollLeft=e}return this},scrollTop:function(e){for(var t=0;t<this.length;t++){var r=this[t];if(e===n)return r.scrollTop;r.scrollTop=e}return this},children:function(e){var t,n,r=[];return this.each(function(){for(t=(i=this).children,n=0;n<t.length;n++){var i=t[n];e?(i.matches&&i.matches(e)||m(i,e))&&r.push(i):r.push(i)}}),new O(r)},on:function(e,t){var n,r;return e=(e||l).match(o)||[l],this.each(function(){if((r=this).addEventListener)for(n=0;n<e.length;n++)r.addEventListener(e[n],t);else if(r.detachEvent)for(n=0;n<e.length;n++)r.attachEvent("on"+e[n],t)})},off:function(e,t){var n,r;return e=(e||l).match(o)||[l],this.each(function(){if((r=this).removeEventListener)for(n=0;n<e.length;n++)r.removeEventListener(e[n],t);else if(r.detachEvent)for(n=0;n<e.length;n++)r.detachEvent("on"+e[n],t)})},trigger:function(e){var n,r;return this.each(function(){n=this,t.createEvent?((r=t.createEvent("HTMLEvents")).initEvent(e,!0,!1),n.dispatchEvent(r)):n.fireEvent("on"+e)})},hasClass:function(e){for(var t,n=0,r=s+e+s;t=this[n++];)if(t.classList){if(t.classList.contains(e))return!0}else if(1===t.nodeType&&(s+y(t.className)+s).indexOf(r)>-1)return!0;return!1},addClass:function(e){var t,r,i,a,l,c,u=null,f=0,h=0;if(e)for(t=e.match(o)||[];r=this[f++];)if(u===n&&(u=r.classList!==n),u)for(;l=t[h++];)r.classList.add(l);else if(a=r.className,i=1===r.nodeType&&s+y(a)+s){for(;l=t[h++];)i.indexOf(s+l+s)<0&&(i+=l+s);a!==(c=y(i))&&(r.className=c)}return this},removeClass:function(e){var t,r,i,a,l,c,u=null,f=0,h=0;if(e)for(t=e.match(o)||[];r=this[f++];)if(u===n&&(u=r.classList!==n),u)for(;l=t[h++];)r.classList.remove(l);else if(a=r.className,i=1===r.nodeType&&s+y(a)+s){for(;l=t[h++];)for(;i.indexOf(s+l+s)>-1;)i=i.replace(s+l+s,s);a!==(c=y(i))&&(r.className=c)}return this},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},offset:function(){var n=this[0].getBoundingClientRect(),r=e.pageXOffset||t.documentElement.scrollLeft,i=e.pageYOffset||t.documentElement.scrollTop;return{top:n.top+i,left:n.left+r}},css:function(t,r){var o,a;return h.type(t)===i.s?r===n?(o=this[0],e.getComputedStyle?e.getComputedStyle(o,null).getPropertyValue(t):o.currentStyle[t]):this.each(function(){w(this,t,r)}):this.each(function(){for(a in t)w(this,a,t[a])})},unwrap:function(){var e,t,n,r=[];for(this.each(function(){n=this.parentNode,-1===h.inArray(n,r)&&r.push(n)}),e=0;e<r.length;e++){for(t=r[e],n=t.parentNode;t.firstChild;)n.insertBefore(t.firstChild,t);n.removeChild(t)}return this},wrapAll:function(e){for(var t,n=this,r=new h(e)[0],i=r,o=n[0].parentNode,a=n[0].previousSibling;i.childNodes.length>0;)i=i.childNodes[0];for(t=0;n.length-t;i.firstChild===n[0]&&t++)i.appendChild(n[t]);var s=a?a.nextSibling:o.firstChild;return o.insertBefore(r,s),this},wrapInner:function(e){return this.each(function(){var t=new O(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){return this.each(function(){new h(this).wrapAll(e)})},contents:function(){var e,t,n=[];return this.each(function(){for(e=this.childNodes,t=0;t<e.length;t++)n.push(e[t])}),new O(n)},parent:function(){var e=[];return this.each(function(){e.push(this.parentNode)}),new O(e)},is:function(e){var t,n;for(n=0;n<this.length;n++){if(t=this[n],":visible"===e)return"none"!==t.style.display;if(":hidden"===e)return"none"===t.style.display;if(t.matches&&t.matches(e)||m(t,e))return!0}return!1},animate:function(e,t,n,r){return this.each(function(){C(this,e,t,n,r)})},stop:function(e,t){return this.each(function(){!function(e,t,n){for(var i,o,a,s=0;s<c.length;s++)if((i=c[s]).el===e){if(i.q.length>0){if((o=i.q[0]).stop=!0,r.cAF()(o.frame),i.q.splice(0,1),n)for(a in o.props)x(e,a,o.props[a]);t?i.q=[]:b(i,!1)}break}}(this,e,t)})}},h}(a),l=function(e){var t=[],r="__overlayScrollbars__";function i(e){for(var n=0;n<t.length;n++)if(e===t[n])return e[r]}return{all:function(){return t},add:function(e,n){e[r]=n,t.push(e)},rem:function(n){var i=e.inArray(n,t);i>-1&&(delete n[r],t.splice(i,1))},has:function(e){return i(e)!==n},get:i}}(s),c=function(e){function t(r,o,a,s,l){var c=!1;if(a=a===n?"":a,typeof o!==i.s)return c;if(0===o.length)return c;if(""===a){for(var u=o.split("."),f=r,h="",v=!1,d=0;d<u.length;d++){var p=u[d];if(f=f[p],h+=p+".",e.type(f)!==i.o&&d+1!==u.length){v=!0;break}}if(v)return h.slice(0,-1)}for(var y in r)if(r.hasOwnProperty(y)){var m=a+y===o;if(e.type(r[y])!==i.o||m){if(m){typeof s===i.f&&s(r,y),c=!0;break}}else if(c=t(r[y],o,a+y+".",s,l),typeof l===i.f&&l(r,y),c)break}return c}return{has:function(e,n){return t(e,n)},get:function(e,n){var r;return t(e,n,"",function(e,t){r=e[t]}),r},set:function(n,r,i,o){var a=!1;if(t(n,r,"",function(e,t){e[t]=i,a=!0}),!a&&o){for(var s=r.split("."),l={},c=l,u=0;u<s.length;u++){var f=u===s.length-1?i:{};c=c[s[u]]=f}e.extend(!0,n,l),a=!0}return a},del:function(n,r,i){var o=!1;return t(n,r,"",function(e,t){delete e[t],o=!0},function(t,n){i&&e.isEmptyObject(t[n])&&delete t[n]}),o}}}(s),u=(function(s,l,c,u){var f,h,v={className:"os-theme-dark",resize:"none",sizeAutoCapable:!0,clipAlways:!0,normalizeRTL:!0,paddingAbsolute:!1,autoUpdate:null,autoUpdateInterval:33,nativeScrollbarsOverlaid:{showNativeScrollbars:!1,initialize:!0},overflowBehavior:{x:"scroll",y:"scroll"},scrollbars:{visibility:"auto",autoHide:"never",autoHideDelay:800,dragScrolling:!0,clickScrolling:!1,touchSupport:!0},textarea:{dynWidth:!1,dynHeight:!1},callbacks:{onInitialized:null,onInitializationWithdrawn:null,onDestroyed:null,onScrollStart:null,onScroll:null,onScrollStop:null,onOverflowChanged:null,onOverflowAmountChanged:null,onDirectionChanged:null,onContentSizeChanged:null,onHostSizeChanged:null,onUpdated:null}};function d(){f===n&&(f=new function(r){var i=this;i.defaultOptions=r,i.autoUpdateLoop=!1,i.autoUpdateRecommended=s.mO()===n;var a=c("body"),u=c('<div id="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>'),f=function(){a.append(u);var e,t="overflow",n="hidden",r=u[0],s=c(u.children("div").first()),l=r[o.oH];return 0===l&&u.hide().show(),e={x:r[o.oH]-r[o.cH],y:r[o.oW]-r[o.cW]},i.restrictedMeasuring=function(){u.css(t,n);var e={w:r[o.sW],h:r[o.sH]};u.css(t,"visible");var i={w:r[o.sW],h:r[o.sH]};return e.w-i.w!=0||e.h-i.h!=0}(),i.nativeScrollbarStyling=(u.addClass("os-viewport-native-scrollbars-invisible"),u.css(t,n).hide().css(t,"scroll").show(),r[o.oH]-r[o.cH]==0&&r[o.oW]-r[o.cW]==0),i.rtlScrollBehavior=function(){u.css({"overflow-y":n,direction:"rtl"}).scrollLeft(0);var e=u.offset(),t=s.offset();u.scrollLeft(999);var r=s.offset();return{i:e.left===t.left,n:t.left-r.left==0}}(),u.removeAttr(o.s).remove(),e}(),h={x:0===f.x,y:0===f.y};function v(e){var r=!1,i="Webkit Moz ms O".split(" "),o=t.createElement("div"),a=null;if(e=e.toLowerCase(),o.style[e]!==n&&(r=!0),!1===r){a=e.charAt(0).toUpperCase()+e.substr(1);for(var s=0;s<i.length;s++)if(o.style[i[s]+a]!==n){r=!0;break}}return r}i.nativeScrollbarSize=f,i.nativeScrollbarIsOverlaid=h,i.overlayScrollbarDummySize={x:30,y:30},i.msie=function(){var t=e.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return parseInt(t.substring(n+5,t.indexOf(".",n)),10);var r=t.indexOf("Trident/");if(r>0){var i=t.indexOf("rv:");return parseInt(t.substring(i+3,t.indexOf(".",i)),10)}var o=t.indexOf("Edge/");return o>0&&parseInt(t.substring(o+5,t.indexOf(".",o)),10)}(),i.cssCalc=function(){for(var e=t.createElement("div"),n=["calc","-webkit-calc","-moz-calc","-o-calc"],r=0;r<n.length;++r){var i=n[r];if(e.style.cssText="width:"+i+"(1px);",e.style.length)return i}return null}(),i.supportTransform=v("transform"),i.supportTransition=v("transition");var d=!1;try{var p=Object.defineProperty({},"passive",{get:function(){d=!0}});e.addEventListener("test",null,p)}catch(e){}i.supportPassiveEvents=d,i.supportResizeObserver=s.rO()!==n,i.supportMutationObserver=s.mO()!==n,function(){if(!h.x||!h.y){var t=s.wW(),n=s.wH(),r=f();c(e).on("resize",function(){if(l.all().length>0){var e=s.wW(),h=s.wH(),v=e-t,d=h-n;if(0===v&&0===d)return;var p=Math.round(e/(t/100)),y=Math.round(h/(n/100)),m=Math.abs(v),g=Math.abs(d),w=Math.abs(p),b=Math.abs(y),x=f(),C=m>2&&g>2,O=(T=w,z=b,E=Math.abs(T),H=Math.abs(z),!(E!==H&&E+1!==H&&E-1!==H)),M=x!==r&&r>0,S=!(C&&O&&M);if(!S){a.append(u);var A=u[0];i.nativeScrollbarSize={x:A[o.oH]-A[o.cH],y:A[o.oW]-A[o.cW]},u.remove(),c.each(l.all(),function(){l.has(this)&&l.get(this).update("zoom")})}t=e,n=h,r=x}var T,z,E,H})}function f(){var t=e.screen.deviceXDPI||0,n=e.screen.logicalXDPI||1;return e.devicePixelRatio||t/n}}()}(v)),h===n&&(h=new function(e){var t,r="autoUpdate",i=[],o=[],a=!1,l=33,u=s.now(),f=function(){if(i.length>0&&a){t=s.rAF()(function(){f()});var e=s.now(),c=e-u;if(c>l){u=e-c%l;for(var h=33,v=0;v<i.length;v++){var d=i[v];if(d!==n){var p=d.options(),y=p[r],m=Math.max(1,p.autoUpdateInterval),g=s.now();(!0===y||null===y)&&g-o[v]>m&&(d.update("auto"),o[v]=new Date(g+=m)),h=Math.max(1,Math.min(h,m))}}l=h}}else l=33};this.add=function(t){-1===c.inArray(t,i)&&(i.push(t),o.push(s.now()),i.length>0&&!a&&(a=!0,e.autoUpdateLoop=a,f()))},this.remove=function(r){var l=c.inArray(r,i);l>-1&&(o.splice(l,1),i.splice(l,1),0===i.length&&a&&(a=!1,e.autoUpdateLoop=a,t!==n&&(s.cAF()(t),t=-1)))}}(f))}function p(t,f,h,v){if(Gr(t)){if(l.has(t)){var d=l.get(t);return d.options(f),d}var p,y,m,g,w,b,x,C,O,M,S,A,T,z,E,H,k,I,W,L,P,F,N,D,R,B,j,q,_,U,Q,V,X,Y,J,K,$,G,Z,ee,te,ne,re,ie,oe,ae,se,le,ce,ue,fe,he,ve,de,pe,ye,me,ge,we,be,xe,Ce,Oe,Me,Se,Ae,Te,ze,Ee,He,ke,Ie,We,Le,Pe,Fe,Ne,De,Re,Be,je,qe,_e,Ue,Qe,Ve,Xe,Ye,Je,Ke,$e,Ge,Ze,et,tt,nt,rt,it,ot,at,st,lt,ct,ut,ft,ht,vt,dt,pt,yt,mt,gt,wt,bt=new e[r],xt=!1,Ct=!1,Ot=!1,Mt=!1,St=!1,At={w:0,h:0},Tt={},zt={},Et={},Ht=175,kt="-hidden",It="margin-",Wt="padding-",Lt="border-",Pt="top",Ft="right",Nt="bottom",Dt="left",Rt="min-",Bt="max-",jt="width",qt="height",_t="float",Ut="",Qt="auto",Vt="scroll",Xt="100%",Yt="x",Jt="y",Kt='<div class="',$t='"></div>',Gt=".",Zt=" ",en="scrollbar",tn="-horizontal",nn="-vertical",rn=Vt+"Left",on=Vt+"Top",an="mousedown touchstart",sn="mouseup touchend",ln="mousemove touchmove",cn="mouseenter",un="mouseleave",fn="keydown",hn="keyup",vn="selectstart",dn="transitionend webkitTransitionEnd oTransitionEnd",pn="__overlayScrollbarsRO__",yn="os-",mn="os-html",gn="os-host",wn=gn+"-textarea",bn=gn+"-"+en+tn+kt,xn=gn+"-"+en+nn+kt,Cn=gn+"-transition",On=gn+"-rtl",Mn=gn+"-resize-disabled",Sn=gn+"-scrolling",An=gn+"-overflow",Tn=An+"-x",zn=An+"-y",En="os-textarea",Hn=En+"-cover",kn="os-padding",In="os-viewport",Wn=In+"-native-scrollbars-invisible",Ln=In+"-native-scrollbars-overlaid",Pn="os-content",Fn="os-content-glue",Nn="os-size-auto-observer",Dn="os-resize-observer",Rn="os-resize-observer-item",Bn=Rn+"-final",jn="os-text-inherit",qn=yn+en,_n=qn+"-track",Un=_n+"-off",Qn=qn+"-handle",Vn=Qn+"-off",Xn=qn+"-unusable",Yn=qn+"-"+Qt+kt,Jn=qn+"-corner",Kn=Jn+"-resize",$n=Kn+"-both",Gn=Kn+tn,Zn=Kn+nn,er=qn+tn,tr=qn+nn,nr="os-dragging",rr="os-theme-none",ir={},or=33,ar=[],sr=11,lr=[112,113,114,115,116,117,118,119,120,121,123,33,34,37,38,39,40,16,17,18,19,20,144],cr=[],ur={x:0,y:0},fr={w:0,h:0};if(bt.sleep=function(){N=!0},bt.update=function(e){var t,n,r="zoom"===e;e===Qt?(t=function(){if(N||nt)return!1;var e=J.attr(o.i)||Ut,t=wr(e,Le),n=J.attr(o.c)||Ut,r=wr(n,Pe),i=J.attr(o.s)||Ut,a=wr(i,Fe),s=J.is(":visible")||Ut,l=wr(s,Ne),c=Ot&&Y.attr("rows")||Ut,u=wr(c,De),f=Ot&&Y.attr("cols")||Ut,h=wr(f,Re),v=Ot&&Y.attr("wrap")||Ut,d=wr(v,Be);return Le=e,r&&(r=ni(Pe,n)),Pe=n,Fe=i,Ne=s,De=c,Re=f,Be=v,t||r||a||l||u||h||d}(),n=function(){if(N)return!1;var e,t=Ot&&pe&&!Ie?Y.val().length:0,n=!nt&&pe&&!Ot,r={};n&&(e=ne.css(_t),r[_t]=F?Ft:Dt,r[jt]=Qt,ne.css(r));var i={w:ai()[o.sW]+t,h:ai()[o.sH]+t};n&&(r[_t]=e,r[jt]=Xt,ne.css(r));var a=ei(),s=br(i,je)||a;return je=i,s}(),(t||n)&&si(!1,n)):r?si(!0,!0):(e=N||e,N=!1,si(!1,!1,e)),Ot||r||ne.find("img").each(function(e,t){-1===c.inArray(t,ar)&&(t=c(t)).off("load",Rr).on("load",Rr)})},bt.options=function(e,t){if(c.isEmptyObject(e)||!c.isPlainObject(e)){if(c.type(e)===i.s){if(arguments.length>=2){var n={};return u.set(n,e,t,!0),ii(n),void si()}return u.get(B,e)}return B}ii(e);var r=N||!1;N=!1,si(),N=r},bt.destroy=function(){Ct=!0,v.remove(bt),Sr(),gr($),St&&gr(K),$.remove(),G!==n&&G.remove(),te!==n&&te.remove(),St&&K.remove(),A?(dr(J,ln,Kr),dr(J,cn,Yr),dr(J,un,Jr)):J.off(ln,Kr).off(cn,Yr).off(un,Jr),oe.remove(),le.remove(),ie&&ie.remove(),yt||zr(),ne.contents().unwrap().unwrap().unwrap(),Mt&&V.removeClass(mn),Ot?(Y.off(Vt,Nr).off("drop",Lr).off("focus",Pr).off("focusout",Fr),m>9||!y?Y.off("input",kr):Y.off(fn,Ir).off(hn,Wr),re.remove(),Y.removeClass(En).removeClass(jn).unwrap().removeAttr(o.s),J.remove()):(Y.removeClass(gn),J.removeClass(gn).removeClass(Mn).removeClass(On).removeClass(bn).removeClass(xn).removeClass(Cn).removeClass(Sn).removeClass(An).removeClass(Tn).removeClass(zn).removeClass(rr).removeClass(Je));for(var e=0;e<ar.length;e++)c(ar[e]).off("load",Rr);ar=n,l.rem(t);var r=j.callbacks.onDestroyed;c.isFunction(r)&&Cr(r);for(var i in bt)delete bt[i];bt=n},bt.scroll=function(t,r,a,s){if(0===arguments.length||t===n){var l=Tt,u=zt,f=Ye&&F&&p.i,h=Ye&&F&&p.n,v=l.cs,d=l.csr,y=l.ms;return d=f?1-d:d,v=f?y-v:v,{x:{position:v*=h?-1:1,ratio:d,max:y*=h?-1:1,handleOffset:l.ho,handleLength:l.hl,handleLengthRatio:l.hlr,trackLength:l.tl,isRTL:F,isRTLNormalized:Ye},y:{position:u.cs,ratio:u.csr,max:u.ms,handleOffset:u.ho,handleLength:u.hl,handleLengthRatio:u.hlr,trackLength:u.tl}}}var m,g=[Yt,Dt,"l"],w=[Jt,Pt,"t"],b=["+=","-=","*=","/="],x={},C=c.type(r)===i.o,O="begin",M="center",A="nearest",T={axis:"xy",block:[O,O],margin:[0,0,0,0]},z=[Yt,Jt,"xy","yx"],E=[O,"end",M,A],H=t.hasOwnProperty("el"),k=H?t.el:t,I=k instanceof c||k instanceof e.jQuery,W=!I&&Gr(k),L=function(e,t){for(m=0;m<t.length;m++)if(e===t[m])return!0;return!1},P=function(e){var t={};if(c.type(e)===i.a&&e.length>0)t.x=e[0],t.y=e[1];else if(c.type(e)===i.s||c.type(e)===i.n)t.x=e,t.y=e;else if(c.type(e)===i.o){e=c.extend({},e),m=0;for(var n in e)e.hasOwnProperty(n)&&(m>2&&delete e[n],m++);var r=function(t){var n=t?g:w;for(m=0;m<n.length;m++)if(n[m]in e)return e[n[m]]};t.x=r(!0),t.y=r(!1)}return t},N=function(t,r){var o,a,s,l=t?Tt:zt,u=l.cs,f=l.ms,h=F&&t,v=h&&p.n&&!Ye;if(c.type(r)===i.s){if(r.length>2){var d=r.substr(0,2);for(m=0;m<b.length;m++)if(d===b[m]){o=b[m];break}}r=(r=(r=(r=(r=(r=(r=(r=(r=o!==n?r.substr(2):r).replace(/min/g,0)).replace(/</g,0)).replace(/max/g,(v?"-":Ut)+Xt)).replace(/>/g,(v?"-":Ut)+Xt)).replace(/px/g,Ut)).replace(/%/g," * "+f*(h&&p.n?-1:1)/100)).replace(/vw/g," * "+Et.w)).replace(/vh/g," * "+Et.h),a=oi(e.parseFloat(e.eval(r)).toFixed())}else c.type(r)===i.n&&(a=r);if(!isNaN(a)&&a!==n&&c.type(a)===i.n){var y=Ye&&h,g=u*(y&&p.n?-1:1),w=y&&p.i,x=y&&p.n;switch(g=w?f-g:g,o){case"+=":s=g+a;break;case"-=":s=g-a;break;case"*=":s=g*a;break;case"/=":s=g/a;break;default:s=a}w&&(s=f-s),x&&(s*=-1),h&&p.n?(s=Math.max(f,s),s=Math.min(0,s)):(s=Math.min(f,s),s=Math.max(0,s)),s===u&&(s=n)}return s};if(I||W){var D=I?k:c(k);if(0===D.length)return;if(H){var R,B,j,q=t.axis,_=t.block,U=c.type(_),Q=t.margin,V=c.type(Q);if(U===i.s)_=[_,_];else if(U===i.a)if((B=_.length)>2||B<1)_=n;else{for(R=!0,1===B&&(_[1]=O),m=0;m<B;m++){var X=_[m];if(c.type(X)!==i.s||!L(X,E)){R=!1;break}}R||(_=n)}else _=n;if(V===i.n)Q=[Q,Q,Q,Q];else if("boolean"===V)Q=Q?[oi(D.css(It+Pt)),oi(D.css(It+Ft)),oi(D.css(It+Nt)),oi(D.css(It+Dt))]:[0,0,0,0];else if(V===i.a)if(2!==(j=Q.length)&&4!==j)Q=n;else{for(R=!0,m=0;m<j;m++)if(c.type(Q[m])!==i.n){R=!1;break}R?2===j&&(Q=[Q[0],Q[1],Q[0],Q[1]]):Q=n}else Q=n;T.axis=L(q,z)?q:T.axis,T.block=_||T.block,T.margin=Q||T.margin}var Y=D.offset(),J=Z.offset(),K=Tt.cs,$=zt.cs,G=T.axis,te=T.block,ne=T.margin,re={x:te[0]===(F?O:"end"),y:"end"===te[1]},ie={x:te[0]===M,y:te[1]===M},oe={x:te[0]===A,y:te[1]===A},ae={},se=re.x||re.y||ie.x||ie.y||oe.x||oe.y;Y.top-=ne[0],Y.left-=ne[3];var le={x:Math.round(Y.left-J.left+K),y:Math.round(Y.top-J.top+$)};if(F&&(p.n||p.i||(le.x=Math.round(J.left-Y.left+K)),p.n&&Ye&&(le.x*=-1),p.i&&Ye&&(le.x=Math.round(J.left-Y.left+(Tt.ms-K)))),se){var ce,ue={},fe={w:(ue=S?{w:(ce=D[0].getBoundingClientRect())[jt],h:ce[qt]}:{w:D[0][o.oW],h:D[0][o.oH]}).w+ne[3]+ne[1],h:ue.h+ne[0]+ne[2]},he=function(e){var t=Xr(e),n=ie[t.xy]?2:1,r=Y[t.lt]+fe[t._wh]/2,i=J[t.lt]+Et[t._wh]/2;oe[t.xy]&&(ae[t.xy]=fe[t._wh]<=Et[t._wh]&&Y[t.lt]>=J[t.lt]&&Y[t.lt]+fe[t._wh]<=J[t.lt]+Et[t._wh],re[t.xy]=fe[t._wh]<Et[t._wh]?r>i:r<i),(re[t.xy]||ie[t.xy])&&(le[t.xy]-=(Et[t._wh]/n-fe[t._wh]/n)*(e&&F&&Ye?-1:1))};he(!0),he(!1)}(G===Yt||ae.y)&&delete le.y,(G===Jt||ae.x)&&delete le.x,t=le}x.x=N(!0,P(t).x),x.y=N(!1,P(t).y);var ve=x.x!==n,de=x.y!==n;if(r>0||C){var pe={};if(ve&&(pe[rn]=x.x),de&&(pe[on]=x.y),C)ee.animate(pe,r);else{var ye={duration:r,complete:s};if(c.type(a)===i.a){var me={};me[rn]=a[0],me[on]=a[1],ye.specialEasing=me}else ye.easing=a;ee.animate(pe,ye)}}else ve&&ee[rn](x.x),de&&ee[on](x.y)},bt.scrollStop=function(e,t,n){ee.stop(e,t,n)},bt.getElements=function(){return{target:Y[0],host:J[0],padding:Z[0],viewport:ee[0],content:ne[0],scrollbarHorizontal:{scrollbar:oe[0],track:ae[0],handle:se[0]},scrollbarVertical:{scrollbar:le[0],track:ce[0],handle:ue[0]},scrollbarCorner:ie}},bt.getState=function(e){var t=function(e){if(!c.isPlainObject(e))return e;var t=c.extend(!0,{},e);u.del(t,"c");var n=function(e,n){t.hasOwnProperty(e)&&(t[n]=t[e],delete t[e])};return n("w",jt),n("h",qt),t},n={sleeping:t(N)||!1,autoUpdate:t(!nt),widthAuto:t(pe),heightAuto:t(ye),padding:t(we),overflowAmount:t(ze),hideOverflow:t(de),hasOverflow:t(ve),contentScrollSize:t(he),viewportSize:t(Et),hostSize:t(fe)};return c.type(e)===i.s?u.get(n,e):n},function(e,t){R=h.defaultOptions,g=h.nativeScrollbarStyling,b=c.extend(!0,{},h.nativeScrollbarSize),C=c.extend(!0,{},h.nativeScrollbarIsOverlaid),O=c.extend(!0,{},h.overlayScrollbarDummySize),p=c.extend(!0,{},h.rtlScrollBehavior),ii(c.extend(!0,{},R,t));var n,r=j.callbacks;if(C.x&&C.x&&!j.nativeScrollbarsOverlaid.initialize){var i=r.onInitializationWithdrawn;return c.isFunction(i)&&Cr(i),!1}if(w=h.cssCalc,m=h.msie,y=h.autoUpdateRecommended,M=h.supportTransition,S=h.supportTransform,A=h.supportPassiveEvents,T=h.supportResizeObserver,rt=h.supportMutationObserver,z=h.restrictedMeasuring,Q=c(e.ownerDocument),U=c(Q[0].defaultView||Q[0].parentWindow),V=Q.find("html").first(),X=V.find("body").first(),Y=c(e),Ot=Y.is("textarea"),(Mt=Y.is("body"))&&((n={}).l=Math.max(Y[rn](),V[rn](),U[rn]()),n.t=Math.max(Y[on](),V[on](),U[on]())),Ot){Y.wrap(Kt+wn+$t),Y.addClass(En).addClass(jn),J=Y.parent();var a={};j.sizeAutoCapable||(a[jt]=Y.css(jt),a[qt]=Y.css(qt)),J.css(a).wrapInner(Kt+Pn+Zt+jn+$t).wrapInner(Kt+In+Zt+jn+$t).wrapInner(Kt+kn+Zt+jn+$t),ne=J.find(Gt+Pn).first(),ee=J.find(Gt+In).first(),Z=J.find(Gt+kn).first(),re=c(Kt+Hn+$t),ne.prepend(re),Y.on(Vt,Nr).on("drop",Lr).on("focus",Pr).on("focusout",Fr),m>9||!y?Y.on("input",kr):Y.on(fn,Ir).on(hn,Wr)}else Y.addClass(gn),(J=Y).wrapInner(Kt+Pn+$t).wrapInner(Kt+In+$t).wrapInner(Kt+kn+$t),ne=J.find(Gt+Pn).first(),ee=J.find(Gt+In).first(),Z=J.find(Gt+kn).first(),ne.on(dn,function(e){!0!==He&&function(e){if(!xt)return!0;var t=[jt,Rt+jt,Bt+jt,It+Dt,It+Ft,Dt,Ft,"font-weight","word-spacing"],n=[Wt+Dt,Wt+Ft,Lt+Dt+jt,Lt+Ft+jt],r=[qt,Rt+qt,Bt+qt,It+Pt,It+Nt,Pt,Nt,"line-height"],i=[Wt+Pt,Wt+Nt,Lt+Pt+jt,Lt+Nt+jt],o="s"===Te.x||"v-s"===Te.x,a=!1,s=function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1};return("s"===Te.y||"v-s"===Te.y)&&((a=s(r,e))||E||(a=s(i,e))),o&&!a&&((a=s(t,e))||E||(a=s(n,e))),a}((e=e.originalEvent||e).propertyName)&&si(Qt)});if(oe=c(Kt+qn+Zt+er+$t),ae=c(Kt+_n+$t),se=c(Kt+Qn+$t),le=c(Kt+qn+Zt+tr+$t),ce=c(Kt+_n+$t),ue=c(Kt+Qn+$t),oe.append(ae),ae.append(se),le.append(ce),ce.append(ue),Z.after(le),Z.after(oe),M&&(oe.on(dn,function(e){e.target===oe[0]&&(_r(!0),Ur(!0,ee[rn]()))}),le.on(dn,function(e){e.target===le[0]&&(_r(!1),Ur(!1,ee[on]()))})),Vr(!0),Vr(!1),ie=c(Kt+Zt+Jn+$t),J.append(ie),A?vr(ee,Vt,$r):ee.on(Vt,$r),g&&(C.x&&C.y?ee.addClass(Ln):ee.addClass(Wn)),rt){var l,u=s.mO(),f=s.now();et=new u(function(e){if(xt&&!N){var t=!1;c.each(e,function(){var e=this.target,n=this.attributeName;if(t=n===o.c?ni(this.oldValue,e.className):n!==o.s||this.oldValue!==e.style.cssText)return!1}),t&&bt.update(Qt)}}),tt=new u(function(e){if(xt&&!N){for(var t=!1,n=0;n<e.length;n++)if(ri(e[n])){t=!0;break}if(t){var r=s.now(),i=ye||pe,o=function(){f=r,Ot&&Er(),i?bt.update():bt.update(Qt)};clearTimeout(l),sr<=0||r-f>sr||!i?o():l=setTimeout(o,sr)}}})}Mt&&(V.addClass(mn),ee[rn](n.l),ee[on](n.t)),$=c(Kt+"os-resize-observer-host"+$t),J.prepend($),mr($,hr),hr(),bt.update(Qt),setTimeout(function(){M&&!Ct&&J.addClass(Cn)},333),xt=!0;var v=r.onInitialized;return c.isFunction(v)&&Cr(v),xt}(t,f))return l.add(t,bt),bt;bt=n}function hr(){if(!N){var e=$[0],t={w:e[o.sW],h:e[o.sH]};if(xt){var n=br(t,qe);qe=t,n&&si(!0,!1)}else qe=t}}function vr(e,t,n){for(var r=t.split(Zt),i=0;i<r.length;i++)e[0].addEventListener(r[i],n,{passive:!0})}function dr(e,t,n){for(var r=t.split(Zt),i=0;i<r.length;i++)e[0].removeEventListener(r[i],n)}function pr(e){if(e!==n&&T){var t=e.contents()[0];t[pn].unobserve(t)}}function yr(e){if(e!==n&&T){var t=e.contents()[0];t[pn].observe(t)}}function mr(e,t){var n=3333333,r=function(r){e.scrollTop(n),e.scrollLeft(F?p.n?-n:p.i?0:n:n),t()};if(T){var a=s.rO(),l=e.append(Kt+Dn+" observed"+$t).contents()[0];(l[pn]=new a(r)).observe(l)}else{var u="animationstart mozAnimationStart webkitAnimationStart MSAnimationStart";if(m>9||!y){var f="</div>",v="childNodes",d=Kt+Dn+'">';d+=Kt+Rn+'" dir="ltr">',d+=Kt+Rn+'">',d+=Kt+Bn+$t,d+=f,d+=Kt+Rn+'">',d+=Kt+Bn+'" style="width: 200%; height: 200%'+$t,d+=f,d+=f,d+=f,e.prepend(d);var g,w,b,x,C=(e=e[0])[v][0][v][0],O=c(C[v][1]),M=c(C[v][0]),S=c(M[0][v][0]),A=C[o.oW],z=C[o.oH],E=h.nativeScrollbarSize,H=function(){M[rn](n)[on](n),O[rn](n)[on](n)},k=function(){w=0,g&&(A=b,z=x,r())},I=function(e){return b=C[o.oW],x=C[o.oH],g=b!=A||x!=z,e&&g&&!w?(s.cAF()(w),w=s.rAF()(k)):e||k(),H(),e&&(s.prvD(e),s.stpP(e)),!1},W={};W[Pt]=-2*(E.y+1),W[Ft]=-2*E.x,W[Nt]=-2*E.y,W[Dt]=-2*(E.x+1),c(C).css(W),M.on(Vt,I),O.on(Vt,I),c(e).on(u,function(){I(!1)});var L={};L[jt]=n,L[qt]=n,S.css(L),H()}else{var P=Q[0],N=e;e=e[0];var D=P.attachEvent,R=typeof navigator===i.u||(navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/));if(D)N.prepend(Kt+Dn+$t),N.find(Gt+Dn).first()[0].attachEvent("onresize",r);else{var B=P.createElement(i.o);B.setAttribute("tabindex","-1"),B.setAttribute(o.c,Dn),B.onload=function(){var e=this.contentDocument.defaultView;e.addEventListener("resize",r),e.document.documentElement.style.display="none"},B.type="text/html",R&&N.prepend(B),B.data="about:blank",R||N.prepend(B),N.on(u,r)}}}if((e=c(e))[0]===$[0]){var j=function(){var t=J.css("direction");if(t!==Oe){var r={},i=0;return"ltr"===t?(r[Dt]=0,r[Ft]=Qt,i=n):(r[Dt]=Qt,r[Ft]=0,i=p.n?-n:p.i?0:n),$.children().first().css(r),e.scrollLeft(i),e.scrollTop(n),Oe=t,!0}return!1};j(),e.on(Vt,function(e){return j()&&si(),s.prvD(e),s.stpP(e),!1})}}function gr(e){if(T){var t=e.contents()[0];t[pn].disconnect(),delete t[pn]}else e.children(Gt+Dn).first().remove()}function wr(e,t,r){return!0===r?r:t===n||e!==t}function br(e,t,r,i,o){if(!0===o)return o;if(i===n&&o===n){if(!0===r)return r;r=n}return r=r===n?"w":r,i=i===n?"h":i,t===n||(e[r]!==t[r]||e[i]!==t[i])}function xr(e,t){return t===n||(e.t!==t.t||e.r!==t.r||e.b!==t.b||e.l!==t.l)}function Cr(e,t){xt&&e.call(bt,t)}function Or(e,t,r){r===n&&(r=[Ut,Ut,Ut,Ut]),e[t+Pt]=r[0],e[t+Ft]=r[1],e[t+Nt]=r[2],e[t+Dt]=r[3]}function Mr(){rt&&!nt&&(et.observe(J[0],{attributes:!0,attributeOldValue:!0,attributeFilter:[o.i,o.c,o.s]}),tt.observe(Ot?Y[0]:ne[0],{attributes:!0,attributeOldValue:!0,subtree:!Ot,childList:!Ot,characterData:!Ot,attributeFilter:Ot?["wrap","cols","rows"]:[o.i,o.c,o.s]}),nt=!0)}function Sr(){rt&&nt&&(et.disconnect(),tt.disconnect(),nt=!1)}function Ar(e){if(!N){var t=(e.originalEvent||e).touches!==n;(1===s.mBtn(e)||t)&&(nt&&(pt=!0,Sr()),ur=s.page(e),fr.w=J[0][o.oW]-(E?0:H),fr.h=J[0][o.oH]-(E?0:k),Q.on(vn,Dr).on(ln,Tr).on(sn,zr),X.addClass(nr),ie.setCapture&&ie.setCapture(),s.prvD(e),s.stpP(e))}}function Tr(e){e.originalEvent;var t=s.page(e),n={};(gt||mt)&&(n[jt]=fr.w+t.x-ur.x),(wt||mt)&&(n[qt]=fr.h+t.y-ur.y),J.css(n),s.stpP(e)}function zr(e){var t=e!==n;Q.off(vn,Dr).off(ln,Tr).off(sn,zr),X.removeClass(nr),ie.releaseCapture&&ie.releaseCapture(),t&&(pt&&Mr(),bt.update(Qt)),pt=!1}function Er(){if(!N){var e=!Ie,t=Et.w-(E||Me||!pe?0:k+W),n=Et.h-(E||Me||!ye?0:k+W),r={},i=pe||e,a=Y[0];r[Rt+jt]=Ut,r[Rt+qt]=Ut,r[jt]=Qt,Y.css(r);var s=a[o.oW],l=i?Math.max(s,a[o.sW]-1):1;l+=pe?L+(E?0:e?0:H+I):0,r[jt]=pe?l:Xt,r[qt]=Qt,Y.css(r);var c=a[o.oH],u=Math.max(c,a[o.sH]-1);return r[jt]=l,r[qt]=u,re.css(r),r[Rt+jt]=t+(!E&&pe?H+I:0),r[Rt+qt]=n+(!E&&ye?k+W:0),Y.css(r),{ow:s,oh:c,dw:l,dh:u}}}function Hr(e){for(var t=0;t<lr.length;t++)if(e===lr[t])return!0;return!1}function kr(){Er(),bt.update(Qt)}function Ir(e){var t=e.keyCode;if(!Hr(t)){if(0===cr.length){var n=function(){Er(),bt.update(Qt)};n(),it=setInterval(n,1e3/60)}-1===c.inArray(t,cr)&&cr.push(t)}}function Wr(e){var t=e.keyCode;if(!Hr(t)){var n=c.inArray(t,cr);n>-1&&cr.splice(n,1),0===cr.length&&(Er(),bt.update(Qt),clearInterval(it))}}function Lr(){setTimeout(function(){Er(),bt.update(Qt)},50)}function Pr(){ot=!0}function Fr(){ot=!1,clearInterval(it),cr=[],Er(),bt.update(Qt)}function Nr(e){return Y[rn](p.i&&Ye?9999999:0),Y[on](0),s.prvD(e),s.stpP(e),!1}function Dr(e){return s.prvD(e),!1}function Rr(){si()}function Br(){return Ee&&C.x&&C.y}function jr(e,t,n){var r=e?bn:xn,i=e?oe:le;t?J.removeClass(r):J.addClass(r),n?i.removeClass(Xn):i.addClass(Xn)}function qr(e,t){if(clearTimeout(at),e)oe.removeClass(Yn),le.removeClass(Yn);else{var n=function(){if(!dt){var e=se.hasClass("active")||ue.hasClass("active");!e&&(ut||ft||ht)&&oe.addClass(Yn),!e&&(ut||ft||ht)&&le.addClass(Yn)}};lt>0&&!0!==t?at=setTimeout(n,lt):n()}}function _r(e){var t={},n=Xr(e),r=Math.min(1,(fe[n._wh]-(Me?e?H:k:0))/he[n._wh]);t[n.wh]=Math.floor(100*r*1e5)/1e5+"%",Br()||n.h.css(t),n.i.hl=n.h[0]["offset"+n.WH],n.i.hlr=r}function Ur(e,t){var n=F&&e,r={},i=Xr(e),o=ee[0][Vt+i.WH]-ee[0]["client"+i.WH];p.n&&n&&(o*=-1);var a=t/o;a=isNaN(a)?0:Math.min(1,a),i.i.ms=o,i.i.cs=t,i.i.csr=a;var s=i.i.hl,l=i.t[0]["offset"+i.WH],c=(l-s)*a;if(c=isNaN(c)?0:c,n&&(p.n||!p.n&&!p.i)&&(c=l-s-c),c=Math.max(0,c),S){var u;n&&(c=-(l-s-c));var f="translate(",h="transform";u=e?f+c+"px, 0px)":f+"0px, "+c+"px)",r["-webkit-"+h]=u,r["-moz-"+h]=u,r["-ms-"+h]=u,r["-o-"+h]=u,r[h]=u}else r[i.lt]=c;Br()||i.h.css(r),i.i.ho=c,i.i.tl=l}function Qr(e,t){var n=t?"removeClass":"addClass",r=e?ce:ue,i=e?Un:Vn;(e?ae:se)[n](i),r[n](i)}function Vr(e){var t,r,i,o=Xr(e),a=o.xy,l=Vt+o.LT,c="active",u=1,f=function(){u=.5},h=function(){u=1},v=function(n){n.originalEvent;var i=o.i.tl,c=o.i.hl,u=o.i.ms*((c/2+s.page(n)[a]-r-c/2)/(i-c));u=isFinite(u)?u:0,F&&e&&(p.n||!p.n&&!p.i)&&(u*=-1),ee[l](t+u),A||s.prvD(n)},d=function(e){e=e||e.originalEvent,X.removeClass(nr),o.h.removeClass(c),o.t.removeClass(c),o.s.removeClass(c),A?(dr(Q,ln,v),dr(Q,sn,d),dr(Q,fn,y),dr(Q,hn,m)):Q.off(ln,v).off(sn,d).off(fn,y).off(hn,m),Q.off(vn,Dr),h(),t=n,r=n,i!==n&&(bt.scrollStop(),clearTimeout(i),i=n);var a=J[0].getBoundingClientRect();e.clientX>=a.left&&e.clientX<=a.right&&e.clientY>=a.top&&e.clientY<=a.bottom||Jr(),(ut||ft)&&qr(!1)},y=function(e){16==e.keyCode&&f()},m=function(e){16==e.keyCode&&h()};o.h.on(an,function(i){if(!N){var u=(i.originalEvent||i).touches!==n;Br()||!Ve||u&&!vt||(1===s.mBtn(i)||u)&&(t=(t=ee[l]())===n?0:t,(F&&e&&!p.n||!F)&&(t=t<0?0:t),r=s.page(i)[a],X.addClass(nr),o.h.addClass(c),o.s.addClass(c),A?(vr(Q,ln,v),vr(Q,sn,d)):Q.on(ln,v).on(sn,d),Q.on(vn,Dr),s.prvD(i))}}),o.t.on(an,function(t){if(!N){var l=(t.originalEvent||t).touches!==n;if(!Br()&&Qe&&(!l||vt)&&(1===s.mBtn(t)||l)){var h,v=Et[o._wh],g=o.t.offset()[o.lt],w=!0;t.shiftKey&&f();var b=function(){var t=o.i.ho,a=o.i.hl,s=r-g,l=200*u,c=w?Math.max(333,l):l,f={},d=F&&e&&(!p.i&&!p.n||Ye),y=t>s;d&&(y=t<s),y?(h===n&&(h=!0),f[o.xy]="-="+v):(h===n&&(h=!1),f[o.xy]="+="+v),bt.scrollStop(),bt.scroll(f,l,"linear");var m=h?t<=s:t+a>=s;d&&(m=h?t+a>=s:t<=s),m?(clearTimeout(i),bt.scrollStop(),i=n):i=setTimeout(b,c),w=!1};r=s.page(t)[a],X.addClass(nr),o.t.addClass(c),o.s.addClass(c),A?(vr(Q,sn,d),vr(Q,fn,y),vr(Q,hn,m)):Q.on(sn,d).on(fn,y).on(hn,m),Q.on(vn,Dr),b(),s.prvD(t)}}}).hover(function(){(ut||ft)&&(dt=!0,qr(!0))},function(){(ut||ft)&&(dt=!1,qr(!1))}),o.s.on(an,function(e){s.stpP(e)})}function Xr(e){return{wh:e?jt:qt,WH:e?"Width":"Height",lt:e?Dt:Pt,LT:e?"Left":"Top",xy:e?Yt:Jt,XY:e?"X":"Y",_wh:e?"w":"h",_lt:e?"l":"t",t:e?ae:ce,h:e?se:ue,s:e?oe:le,i:e?Tt:zt}}function Yr(){ht&&qr(!0)}function Jr(){ht&&!X.hasClass(nr)&&qr(!1)}function Kr(){ft&&(qr(!0),clearTimeout(st),st=setTimeout(function(){ft&&qr(!1)},100))}function $r(e){if(!N){var t=j.callbacks,r=t.onScrollStart,i=t.onScroll,o=t.onScrollStop;D!==n?clearTimeout(D):((ut||ft)&&qr(!0),Br()||J.addClass(Sn),c.isFunction(r)&&Cr(r,e)),Ur(!0,ee[rn]()),Ur(!1,ee[on]()),c.isFunction(i)&&Cr(i,e),D=setTimeout(function(){!function(){clearTimeout(D),D=n,(ut||ft)&&qr(!1);Br()||J.removeClass(Sn)}(),c.isFunction(o)&&Cr(o,e)},Ht)}}function Gr(e){return typeof HTMLElement===i.o?e instanceof HTMLElement:e&&typeof e===i.o&&null!==e&&1===e.nodeType&&typeof e.nodeName===i.s}function Zr(e,t,r,o){var a,s,l,f,h,v={n:t,s:!1,v:n,p:n},d=i.u,p=u.has(e,t),y=u.get(e,t),m=!1,g=!0!==p,w=!1;for(c.type(r)!==i.a&&(r=[r]),h=r.length,s=0;s<h;s++){var b=r[s];if("*"===b)if(h>1){var x=0;for(f=0;f<h;f++){var C=r[f];if(c.type(C)===i.s&&++x>1)break}1===x&&(w=!0)}else w=!0;b===n&&(m=!0)}if(g&&!1===p&&m&&(g=!1),!g){a=y,d=c.type(a);var O=function(e){var t=c.type(e);return t===d&&(t!==i.s||(!!w||a===e))&&(v.s=!0,v.v=a,v.p=a,!0)};for(s=0;s<h;s++){var M=r[s];if(c.type(M)===i.s){var S=M.split(":"),A=S[0],T=!1;for(l=0;l<S.length;l++)if(O(S[l])){w||(v.p=A),T=!0;break}if(T)break}else if(O(M))break}}if(!v.s){var z='The option "'+t+"\" wasn't set, because";if(g&&!1!==p){var E=u.has(R,t);!0===E?console.warn(z+' "'+p+'" is not from type [ OBJECT ].'):(z='The option "'+t+'" is not a default option',!1===E?console.warn(z+Gt):console.warn(z+" and couldn't be resolved, because \""+E+'" is not from type [ OBJECT ].'))}else{var H=[],k=Ut,I=!1,W=Ut;for(s=0;s<h;s++){var L=r[s],P=c.type(L);if(P===i.s){I=!w;var F=L.split(":");for(l=0;l<F.length;l++)W+='"'+F[l]+'", '}-1===c.inArray(P,H)&&(H.push(P),k=k+P.toUpperCase()+", ")}k=k.slice(0,-2),I&&(W=W.slice(0,-2)),console.warn(z+" it doesn't accept the type [ "+d.toUpperCase()+' ] with the value of "'+a+'".\r\nAccepted types are: [ '+k+" ]."+(I?"\r\nValid strings are: [ "+W+" ].":Ut))}}return(o=o===n||o)&&u.del(e,t),v}function ei(){var e={};return Mt&&te&&(e.w=oi(te.css(Rt+jt)),e.h=oi(te.css(Rt+qt)),e.c=br(e,Ze),e.f=!0),Ze=e,e.c}function ti(e,t){var n,r,i={};for(n=0;n<e.length;n++){var o=e[n],a=[];if(o.s){var s=o.n.split(".");for(r=0;r<s.length;r++)a[r]={},a[r][s[r]]={};for(r=0;r<a.length;r++){var l=!1,u=a[r];r+1===a.length&&(l=!0);for(var f in u)u.hasOwnProperty(f)&&(u[f]=a[r+1],l&&(u[f]=t?o.p:o.v))}c.extend(!0,i,a[0])}}return i}function ni(e,t){var r=t!==n&&null!==t?t.split(Zt):Ut,i=e!==n&&null!==e?e.split(Zt):Ut;if(r===Ut&&i===Ut)return!1;var o=function(e,t){var n,r=[],i=[];for(n=0;n<e.length;n++)r[e[n]]=!0;for(n=0;n<t.length;n++)r[t[n]]?delete r[t[n]]:r[t[n]]=!0;for(var o in r)i.push(o);return i}(i,r),a=!1,s=Ke!==n&&null!==Ke?Ke.split(Zt):[Ut],l=Je!==n&&null!==Je?Je.split(Zt):[Ut],u=c.inArray(rr,o);u>-1&&o.splice(u,1);for(var f=0;f<o.length;f++){var h=o[f];if(0!==h.indexOf(gn)){var v,d=!0,p=!0;for(v=0;v<s.length;v++)if(h===s[v]){d=!1;break}for(v=0;v<l.length;v++)if(h===l[v]){p=!1;break}if(d&&p){a=!0;break}}}return a}function ri(e){var t=e.attributeName,n=e.target,r=e.type;if(n===ne[0])return null===t;if("attributes"===r&&(t===o.c||t===o.s)&&!Ot){if(typeof n.closest!==i.f)return!0;if(null!==n.closest(Gt+Dn)||null!==n.closest(Gt+qn)||null!==n.closest(Gt+Jn))return!1}return!0}function ii(e){e=c.extend(!0,{},B,e);var t=["v-h:visible-hidden","v-s:visible-scroll","s:scroll","h:hidden"],n="callbacks.",r=en+"s.",o="textarea.",a="overflowBehavior.",s="nativeScrollbarsOverlaid.",l=[!0,null],f=[new Function,null],h=[Zr(e,s+"showNativeScrollbars",!0),Zr(e,s+"initialize",!0),Zr(e,a+Yt,t),Zr(e,a+Jt,t),Zr(e,r+"visibility",["v:visible","h:hidden","a:auto"]),Zr(e,r+"autoHide",["n:never","s:scroll","l:leave","m:move"]),Zr(e,r+"autoHideDelay",0),Zr(e,r+"clickScrolling",!0),Zr(e,r+"dragScrolling",!0),Zr(e,r+"touchSupport",!0),Zr(e,o+"dynWidth",!0),Zr(e,o+"dynHeight",!0),Zr(e,"className",["*",null]),Zr(e,"resize",["n:none","b:both","h:horizontal","v:vertical"]),Zr(e,"sizeAutoCapable",!0),Zr(e,"paddingAbsolute",!0),Zr(e,"clipAlways",!0),Zr(e,"normalizeRTL",!0),Zr(e,"autoUpdate",l),Zr(e,"autoUpdateInterval",0),Zr(e,n+"onInitialized",f),Zr(e,n+"onInitializationWithdrawn",f),Zr(e,n+"onDestroyed",f),Zr(e,n+"onScrollStart",f),Zr(e,n+"onScroll",f),Zr(e,n+"onScrollStop",f),Zr(e,n+"onDirectionChanged",f),Zr(e,n+"onContentSizeChanged",f),Zr(e,n+"onHostSizeChanged",f),Zr(e,n+"onOverflowChanged",f),Zr(e,n+"onOverflowAmountChanged",f),Zr(e,n+"onUpdated",f)];for(var v in e)e.hasOwnProperty(v)&&u.has(R,v)&&c.isEmptyObject(e[v])&&delete e[v];if(!c.isEmptyObject(e)){var d=function(e){c.each(e,function(t,n){c.isPlainObject(n)?d(n):c.type(n)===i.f&&(e[t]=c.type(n))})};d(e),console.warn("The following options are discarded due to invalidity:\r\n"+JSON.stringify(e,null,2))}B=c.extend(!0,{},B,ti(h,!1)),j=c.extend(!0,{},j,ti(h,!0))}function oi(t){var n=e.parseInt(t);return isNaN(n)?0:n}function ai(){return Ot?re[0]:ne[0]}function si(e,t,r){var i=s.now(),l=or>0&&xt&&i-q<or&&!ye&&!pe;if(clearTimeout(_),l&&(ir.h=e,ir.c=t,ir.f=r,_=setTimeout(si,or)),!(l||N||xt&&!r&&J.is(":hidden")||"inline"===J.css("display"))){q=i,e=e||ir.h,t=t||ir.c,r=r||ir.f,ir={},e=e!==n&&e,t=t!==n&&t,r=r!==n&&r,!g||C.x&&C.y?b=c.extend(!0,{},h.nativeScrollbarSize):(b.x=0,b.y=0),x={x:3*(b.x+(C.x?0:3)),y:3*(b.y+(C.y?0:3))},pr($),pr(K);var u={l:ee[rn](),t:ee[on]()},f=j.callbacks,d=j.scrollbars,m=j.textarea,M=f.onUpdated,S=f.onOverflowChanged,T=f.onOverflowAmountChanged,D=f.onDirectionChanged,R=f.onContentSizeChanged,B=f.onHostSizeChanged,U=d.visibility,Q=wr(U,_e,r),V=d.autoHide,X=wr(V,Ue,r),te=d.clickScrolling,oe=wr(te,Qe,r),ae=d.dragScrolling,se=wr(ae,Ve,r),le=j.className,ce=wr(le,Je,r),ue=j.resize,Oe=wr(ue,Xe,r)&&!Mt,Le=!!Ot&&"off"!==Y.attr("wrap"),Pe=wr(Le,Ie,r),Fe=j.paddingAbsolute,Ne=wr(Fe,Me,r),De=j.clipAlways,Re=wr(De,Se,r),Be=j.sizeAutoCapable&&!Mt,je=wr(Be,ke,r),qe=j.nativeScrollbarsOverlaid.showNativeScrollbars,et=wr(qe,Ee),tt=j.autoUpdate,rt=wr(tt,He),it=j.overflowBehavior,at=br(it,Te,Yt,Jt,r),st=m.dynWidth,dt=wr(Ge,pt),pt=m.dynHeight,Ct=wr($e,pt);if(ct="n"===V,ut="s"===V,ft="m"===V,ht="l"===V,lt=d.autoHideDelay,vt=d.touchSupport,Ke=Je,yt="n"===ue,mt="b"===ue,gt="h"===ue,wt="v"===ue,Ye=j.normalizeRTL,qe=qe&&C.x&&C.y,_e=U,Ue=V,Qe=te,Ve=ae,Je=le,Xe=ue,Ie=Le,Me=Fe,Se=De,ke=Be,Ee=qe,He=tt,Te=c.extend(!0,{},it),Ge=st,$e=pt,ce&&(J.removeClass(Ke).removeClass(rr),le!==n&&null!==le&&le.length>0?J.addClass(le):J.addClass(rr)),rt&&(!0===tt?(Sr(),v.add(bt)):null===tt&&y?(Sr(),v.add(bt)):(v.remove(bt),Mr())),je)if(Be)if(G===n&&(G=c(Kt+Fn+$t),Z.before(G)),St)K.show();else{K=c(Kt+Nn+$t),G.before(K);var Tt={w:-1,h:-1};mr(K,function(){var e={w:K[0][o.oW],h:K[0][o.oH]};br(e,Tt)&&(xt&&ye&&e.h>0||pe&&e.w>0?si():(xt&&!ye&&0===e.h||!pe&&0===e.w)&&si()),Tt=e}),St=!0,null!==w&&K.css(qt,w+"(100% + 1px)")}else St&&K.hide();r&&($.find("*").trigger(Vt),St&&K.find("*").trigger(Vt));var zt,Ht=J.css("direction"),kt=wr(Ht,Ce,r),Gt=J.css("box-sizing"),Zt=wr(Gt,ge,r),en={c:r,t:oi(J.css(Wt+Pt)),r:oi(J.css(Wt+Ft)),b:oi(J.css(Wt+Nt)),l:oi(J.css(Wt+Dt))};try{zt=St?K[0].getBoundingClientRect():null}catch(e){return}E="border-box"===Gt;var tn=(F="rtl"===Ht)?Dt:Ft,nn=F?Ft:Dt,sn=J[0],fn=Z[0],hn=!1,vn=!(!St||"none"===J.css(_t))&&(0===Math.round(zt.right-zt.left)&&(!!Fe||sn[o.cW]-H>0));if(Be&&!vn){var dn=sn[o.oW],pn=G.css(jt);G.css(jt,Qt);var yn=sn[o.oW];G.css(jt,pn),(hn=dn!==yn)||(G.css(jt,dn+1),yn=sn[o.oW],G.css(jt,pn),hn=dn!==yn)}var mn=(vn||hn)&&Be,gn=wr(mn,pe,r),wn=!mn&&pe,bn=!!St&&0===Math.round(zt.bottom-zt.top),xn=wr(bn,ye,r),Cn=!bn&&ye,En="-"+jt,Hn=mn&&E||!E,kn=bn&&E||!E,In={c:r,t:kn?oi(J.css(Lt+Pt+En)):0,r:Hn?oi(J.css(Lt+Ft+En)):0,b:kn?oi(J.css(Lt+Nt+En)):0,l:Hn?oi(J.css(Lt+Dt+En)):0},Wn={c:r,t:oi(J.css(It+Pt)),r:oi(J.css(It+Ft)),b:oi(J.css(It+Nt)),l:oi(J.css(It+Dt))},Ln={h:String(J.css(Bt+qt)),w:String(J.css(Bt+jt))},Pn={},Dn={};if(H=en.l+en.r,k=en.t+en.b,en.c=xr(en,we),I=In.l+In.r,W=In.t+In.b,In.c=xr(In,be),L=Wn.l+Wn.r,P=Wn.t+Wn.b,Wn.c=xr(Wn,xe),Ln.ih=oi(Ln.h),Ln.iw=oi(Ln.w),Ln.ch=Ln.h.indexOf("px")>-1,Ln.cw=Ln.w.indexOf("px")>-1,Ln.c=br(Ln,me,r),Ce=Ht,ge=Gt,pe=mn,ye=bn,we=en,be=In,xe=Wn,me=Ln,kt&&St&&K.css(_t,nn),en.c||kt||Ne||gn||xn||Zt||je){var Rn={},Bn={};Or(Dn,It,[-en.t,-en.r,-en.b,-en.l]),Fe?(Or(Rn,Ut,[en.t,en.r,en.b,en.l]),Or(Ot?Bn:Pn,Wt)):(Or(Rn,Ut),Or(Ot?Bn:Pn,Wt,[en.t,en.r,en.b,en.l])),Z.css(Rn),Y.css(Bn)}Et={w:fn[o.oW],h:fn[o.oH]};var jn,qn=!!Ot&&Er();if(bn&&(xn||Ne||Zt||Ln.c||en.c||In.c)?(Ln.cw&&(Pn[Bt+qt]=Ln.ch?Ln.ih-(Fe?k:0)+(E?-W:k):Ut),Pn[qt]=Qt):(xn||Ne)&&(Pn[Bt+qt]=Ut,Pn[qt]=Xt),mn&&(gn||Ne||Zt||Ln.c||en.c||In.c||kt)?(Ln.cw&&(Pn[Bt+jt]=Ln.cw?Ln.iw-(Fe?H:0)+(E?-I:H)+(C.y?O.y:0):Ut),Pn[jt]=Qt,Dn[Bt+jt]=Xt):(gn||Ne)&&(Pn[Bt+jt]=Ut,Pn[jt]=Xt,Pn[_t]=Ut,Dn[Bt+jt]=Ut),mn&&(Ln.cw||(Pn[Bt+jt]=Ut),Dn[jt]=Ot&&st?qn.dw:Qt,Pn[jt]=Qt,Pn[_t]=nn),bn&&(Ln.ch||(Pn[Bt+qt]=Ut),Dn[qt]=Ot?pt?qn.dh:Qt:ne[0][o.cH]),Be&&G.css(Dn),ne.css(Pn),Pn={},Dn={},ve=ve||{x:!1,y:!1},e||t||kt||Zt||Ne||gn||mn||xn||bn||Ln.c||et||at||Re||Oe||Q||dt||Ct||Pe||Ne||dt||Ct||r){var _n="overflow",Un=_n+"-x",Qn=_n+"-y",Vn="hidden",Xn="visible",Yn=z&&(C.x||C.y||Et.w<x.y||Et.h<x.x)||bn,Jn={},er=ve.y&&de.ys&&!qe?C.y?ee.css(tn):-b.y:0,tr=ve.x&&de.xs&&!qe?C.x?ee.css(Nt):-b.x:0;Or(Jn,Ut),ee.css(Jn),Yn&&ne.css(_n,Vn);var nr=ai(),ar=z&&!Yn?ee[0]:nr,sr={w:nr[o.cW],h:nr[o.cH]},lr={w:Math.max(nr[o.sW],ar[o.sW]),h:Math.max(nr[o.sH],ar[o.sH])},cr=Ot&&qn&&!st?qn.ow:mn?sr.w:lr.w,ur=Ot&&qn&&!pt?qn.oh:bn?sr.h:lr.h;Jn[Nt]=Cn?Ut:tr,Jn[tn]=wn?Ut:er,ee.css(Jn);var fr={w:sn[o.cW],h:sn[o.cH]},hr={w:Math.max(cr+(Fe?H:0),fr.w-H)-(st&&Ot&&mn?L+(E?0:H+I):0),h:Math.max(ur+(Fe?k:0),fr.h-k)};if(hr.c=br(hr,Ae,r),Ae=hr,Be){(hr.c||bn||mn)&&(Dn[jt]=hr.w,Dn[qt]=hr.h);var gr=Dn[jt]+(E?I:-H),Tr=Dn[qt]+(E?W:-H),zr={};(!mn||!mn&&In.c)&&(Dn[jt]=fr.w-(E?0:H+I)-1-L),(!bn||!bn&&In.c)&&(Dn[qt]=fr.h-(E?0:k+W)-1-P),Ln.cw&&Ln.iw===gr&&(Dn[jt]=gr+(E?0:H)+1),Ln.ch&&Ln.ih===Tr&&(Dn[qt]=Tr+(E?0:k)+1),mn&&(sr.w<Et.w||Ot&&!Le)&&0===H&&(Ot&&(zr[jt]=oi(re.css(jt))-1),Dn[jt]-=1),bn&&(sr.h<Et.h||Ot)&&0===k&&(Ot&&(zr[qt]=oi(re.css(qt))-1),Dn[qt]-=1),ur>0&&(Dn[jt]=Math.max(1,Dn[jt]),Dn[qt]=Math.max(1,Dn[qt])),Ot&&re.css(zr),G.css(Dn)}mn&&(Pn[jt]=Xt),!mn||E||nt||(Pn[_t]="none"),ne.css(Pn),Pn={};var Hr=nr.getBoundingClientRect(),kr={w:Math.max(nr[o.sW],ar[o.sW]),h:Math.max(nr[o.sH],ar[o.sH])};if(Yn&&ne.css(_n,Ut),Hr.width!==n){var Ir=Hr.width,Wr=Hr.height;kr.w+=oi(Ir+.001)-Ir,kr.h+=oi(Wr+.001)-Wr}kr.c=t=br(kr,he,r),he=kr,e=br(fr={w:sn[o.cW],h:sn[o.cH]},fe),fe=fr,Et={w:fn[o.oW],h:fn[o.oH]};var Lr={x:"v-s"===it.x,y:"v-s"===it.y},Pr="v-h"===it.x,Fr="v-h"===it.y,Nr={x:"s"===it.x,y:"s"===it.y},Dr={x:Math.max(0,Math.round(100*(kr.w-fr.w+(Fe?H:0)))/100),y:Math.max(0,Math.round(100*(kr.h-fr.h+(Fe?k:0)))/100)},Rr=Ot&&(0===Et.w||0===Et.h);Rr&&(Dr.x=0,Dr.y=0);var Br={x:Dr.x>0,y:Dr.y>0},Vr={x:Br.x,y:Br.y};(Lr.x||Pr)&&(Vr.x=Br.y&&!Lr.y&&!Fr),(Lr.y||Fr)&&(Vr.y=Br.x&&!Lr.x&&!Pr),Vr.xs=!!Vr.x&&(Nr.x||Lr.x),Vr.ys=!!Vr.y&&(Nr.y||Lr.y);var Xr={x:Br.x&&Vr.xs,y:Br.y&&Vr.ys},$r=ze;Dr.c=br(Dr,ze,Yt,Jt,r),ze=Dr,Br.c=br(Br,ve,Yt,Jt,r),ve=Br,Vr.c=br(Vr,de,Yt,Jt,r),de=Vr;var Gr={};Rn={};if(e||Br.c||Vr.c||kr.c||at||Zt||et||kt||Re||xn){Gr[nn]=Ut;var Zr=function(){Gr[Nt]=Ut,At.h=0},ti=function(){Gr[tn]=Ut,At.w=0};if(Br.x&&Vr.xs?(Gr[Un]=Vt,qe?Zr():At.h=C.x?O.y:0):(Gr[Un]=Ut,Zr()),Br.y&&Vr.ys?(Gr[Qn]=Vt,qe?ti():At.w=C.y?O.x:0):(Gr[Qn]=Ut,ti()),(Et.h<x.x||Et.w<x.y)&&(Br.x&&Vr.x&&!C.x||Br.y&&Vr.y&&!C.y)?(Gr[Wt+Pt]=x.x,Gr[It+Pt]=-x.x,Gr[Wt+nn]=x.y,Gr[It+nn]=-x.y):(Gr[Wt+Pt]=Ut,Gr[It+Pt]=Ut,Gr[Wt+nn]=Ut,Gr[It+nn]=Ut),Gr[Wt+tn]=Ut,Gr[It+tn]=Ut,Br.x&&Vr.x||Br.y&&Vr.y||Rr?Ot&&Rr&&(Rn[Un]=Vn,Rn[Qn]=Vn):(!De||Pr||Lr.x||Fr||Lr.y)&&(Ot&&(Rn[Un]=Ut,Rn[Qn]=Ut),Gr[Un]=Xn,Gr[Qn]=Xn),Z.css(Rn),ee.css(Gr),Gr={},(Br.c||Zt||gn||xn)&&(!C.x||!C.y)){var ni=ne[0],ri=ni.style;ri.webkitTransform="scale(1)",ri.display="run-in";ni[o.oH];ri.display=Ut,ri.webkitTransform=Ut}if(et&&qe){J.hide();sn[o.oH];J.show()}}if(Pn={},kt||gn||xn)if(F&&mn){var ii=ne.css(_t),li=Math.round(ne.css(_t,Ut).css(Dt,Ut).position().left);ne.css(_t,ii),li!==Math.round(ne.position().left)&&(Pn[Dt]=li)}else Pn[Dt]=Ut;ne.css(Pn);var ci="v"===U,ui="h"===U,fi="a"===U,hi=a.bind(jr,0,!0,!0,Xr.x),vi=a.bind(jr,0,!1,!0,Xr.y),di=a.bind(jr,0,!0,!1,Xr.x),pi=a.bind(jr,0,!1,!1,Xr.y);if(kt&&(F?J.addClass(On):J.removeClass(On)),Mt&&J.addClass(Mn),Oe){var yi=function(){ie.off(an,Ar)};yt?(J.addClass(Mn),ie.removeClass(Kn).removeClass($n).removeClass(Gn).removeClass(Zn),yi()):(J.removeClass(Mn),ie.addClass(Kn),mt?ie.addClass($n):gt?ie.addClass(Gn):wt&&ie.addClass(Zn),yi(),ie.on(an,Ar))}if((Q||at||Vr.c||Br.c||et)&&(qe?et&&(J.removeClass(Sn),qe&&(di(),pi())):fi?(Xr.x?hi():di(),Xr.y?vi():pi()):ci?(hi(),vi()):ui&&(di(),pi())),X||et){var mi=function(){A?(dr(J,ln,Kr),dr(J,cn,Yr),dr(J,un,Jr)):J.off(ln,Kr).off(cn,Yr).off(un,Jr)};ht||ft?(mi(),jn=ft,A?jn?vr(J,ln,Kr):(vr(J,cn,Yr),vr(J,un,Jr)):jn?J.on(ln,Kr):J.on(cn,Yr).on(un,Jr)):mi(),ct?qr(!0):qr(!1,!0)}if((e||Dr.c||xn||gn||Oe||Zt||Ne||et||kt)&&(_r(!0),Ur(!0,u.l),_r(!1),Ur(!1,u.t)),oe&&Qr(!0,te),se&&Qr(!1,ae),Vr.x||Vr.y?J.addClass(An):J.removeClass(An),Vr.x?J.addClass(Tn):J.removeClass(Tn),Vr.y?J.addClass(zn):J.removeClass(zn),Ot&&t){var gi=function(){var e=Y.prop("selectionStart");if(e!==n){for(var t=Y.val(),r=t.length,i=t.split("\n"),o=i.length,a=t.substr(0,e).split("\n"),s=0,l=0,c=a.length,u=a[a.length-1].length,f=0;f<i.length;f++){var h=i[f].length;h>l&&(s=f+1,l=h)}return{cursorRow:c,cursorCol:u,rows:o,cols:l,wRow:s,pos:e,max:r}}}();if(gi!==n){var wi=We===n||gi.rows!==We.rows,bi=gi.wRow,xi=gi.cursorRow,Ci=gi.cursorCol,Oi=gi.rows,Mi=gi.cols,Si=gi.pos,Ai=gi.max===Si&&ot,Ti={x:Le||Ci!==Mi||xi!==bi?-1:ze.x,y:(Le?Ai||wi&&$r!==n&&u.t===$r.y:(Ai||wi)&&xi===Oi)?ze.y:-1},zi=Ti.x>-1,Ei=Ti.y>-1;(zi||Ei)&&(Ei&&ee[on](Ti.y),zi&&(F&&Ye&&p.i?ee[rn](0):ee[rn](Ti.x)))}We=gi}else Ot||(F&&p.i&&C.y&&Br.x&&Ye&&(u.l+=At.w),ee[rn](u.l),ee[on](u.t));kt&&c.isFunction(D)&&Cr(D,{isRTL:F,dir:Ht}),e&&c.isFunction(B)&&Cr(B,{width:fe.w,height:fe.h}),t&&c.isFunction(R)&&Cr(R,{width:he.w,height:he.h}),(Br.c||Vr.c)&&c.isFunction(S)&&Cr(S,{x:Br.x,y:Br.y,xScrollable:Vr.xs,yScrollable:Vr.ys,clipped:Vr.x||Vr.y}),Dr.c&&c.isFunction(T)&&Cr(T,{x:Dr.x,y:Dr.y})}Mt&&(Br.c||Ze.c)&&(Ze.f||ei(),C.y&&Br.x&&ne.css(Rt+jt,Ze.w+O.y),C.x&&Br.y&&ne.css(Rt+qt,Ze.h+O.x),Ze.c=!1),yr($),yr(K),c.isFunction(M)&&Cr(M,{forced:r})}}}e[r]=function(e,t){if(0===arguments.length)return this;d();var r,i=[];return c.isPlainObject(t)?e&&e.length?e.length>1?(c.each(e,function(){(r=this)!==n&&i.push(p(r,t,f,h))}),i):p(e[0],t,f,h):p(e,t,f,h):e?e.length&&e.length>0?e.length>1?(c.each(e,function(){r=l.get(this),"!"===t?r!==n&&i.push(r):i.push(r)}),i):l.get(e[0]):l.get(e):void 0},e[r].globals=function(){d();var e=c.extend(!0,{},f);return delete e.msie,e},e[r].defaultOptions=function(e){d();var t=f.defaultOptions;if(e===n)return c.extend(!0,{},t);f.defaultOptions=c.extend(!0,{},t,e)}}(a,l,s,c),e.jQuery);return u&&u.fn&&(u.fn.overlayScrollbars=function(t){return u.isPlainObject(t)?(u.each(this,function(){e[r](this,t)}),this):e[r](this,t)}),e[r]});

$("[data-countdown]").each(function() {
  var $this = $(this),
    finalDate = $(this).data("countdown");
  $this.countdown(finalDate, function(event) {
    $this.html(
      event.strftime(
        "%D <span>Days</span> %H <span>Hours</span> %M <span>Minutes</span> %S <span>Seconds</span>"
      )
    );
  });
});

//--------- POSITIONING ADJUSTMENTS ---------
$("body").addClass("fluid"); //Force fluid layout

$(".container")
  .removeClass("container")
  .addClass("container-fluid"); //Force fluid layout

$("footer .container-fluid")
  .removeClass("container-fluid")
  .addClass("container"); //Force fluid layout

$("#userlisttoggle")
  .removeClass("pull-left")
  .addClass("pull-right");

$("#userlisttoggle")
  .removeClass("glyphicon-chevron-down")
  .addClass("glyphicon-chevron-right");

$("#videowrap")
  .detach()
  .insertBefore($("#chatwrap"));

$("#rightcontrols")
  .detach()
  .insertBefore($("#leftcontrols"));

$("#rightpane")
  .detach()
  .insertBefore($("#leftpane"));

$("#leftcontrols").addClass("col-lg-2 col-md-2");

$("#currenttitle").insertAfter("#plcontrol");
$("#currenttitle").addClass("btn-group");
$("#currenttitle").after("<div class='noticef'></div>");
$(".noticef").after("<div class='noticey'></div>");
$("#addfromurl .checkbox label")
  .contents()
  .filter(function() {
    return this.nodeType === 3;
  })
  .replaceWith("<span>TEMP</span>");

$("#userlist").css("float", "right");

$(".plcontrol-collapse").wrapInner("<div class='plcontrol-inner'></div>");
$("#videowrap").removeClass("col-lg-7 col-md-7");
$("#chatwrap").removeClass("col-lg-5 col-md-5");
$("#videowrap").addClass("col-lg-12 col-md-12");
$("#chatwrap").addClass("col-lg-2 col-md-2");
//$("#footer").addClass("col-lg-10 col-md-10");

$("#mainpage").prepend($("#chatwrap"));
$("#main").append($("#videowrap"));
$("#footer").appendTo(".container-fluid");

$("#rightcontrols").removeClass("col-lg-7 col-md-7");
$("#leftcontrols").removeClass("col-lg-5 col-md-5");

$("#controlsrow").removeClass("row");

$("#rightcontrols").addClass("col-lg-10 col-md-10");
$("#leftcontrols").addClass("col-lg-2 col-md-2");

$("#rightpane").removeClass("col-lg-7 col-md-7");
$("#leftpane").removeClass("col-lg-5 col-md-5");

$("#rightpane").addClass("col-lg-6 col-md-6");
$("#leftpane").addClass("col-lg-2 col-md-2");

//Add scrollbars

/*
$("#maincontain .nano-content").append($("#mainpage > .container"));
$("#mainpage").append("<div class='nano' id='maincontain'></div>");
$("#maincontain").append("<div class='nano-content'></div>");
$("#maincontain .nano-content").append($("#mainpage > .container-fluid"));
$("#maincontain .nano-content").append($("#mainpage > .container"));
$("#messagebuffer").addClass("nano-content");
$("#messagebuffer").after("<div class='nano'></div>");
$("#chatwrap .nano").append($("#messagebuffer"));

*/

$("#mainpage").append("<div class='oss' id='maincontain'></div>");
$("#maincontain").append($("#mainpage > .container"));
$("#maincontain").append($("#mainpage > .container-fluid"));
$("#maincontain").append($("#mainpage > .container"));
$("#maincontain").addClass("col-lg-10 col-md-10");

$("#messagebuffer").after("<div id='mainmsg' class='oss'></div>");
$("#chatwrap .oss").append($("#messagebuffer"));

$("#mainpage").append($("#rightcontrols"));

var scrolledDown = 0;
//Return to top button
$("#mediarefresh").before(
  "<div id='return-to-top'><i class='material-icons'>arrow_drop_up</i> <span>Return to video</span></div>"
);

$("#return-to-top").click(function() {
  // When arrow is clicked
  mainOS.scroll({ y: "0%" }, 250, "swing");
});

var mainOS = $("#maincontain.oss")
  .overlayScrollbars({
    className: "os-theme-thin-light",
    scrollbars: {
      autoHide: "scroll"
    },
    callbacks: {
      onScroll: function() {
        var posVal = mainOS.scroll().y.position;
        if (posVal === 0) {
          scrolledDown = 0;
          $("#rightcontrols .btn-group")
            .stop(true, true)
            .animate({ opacity: 0.4 }, 400);
          $("#return-to-top")
            .stop(true, true)
            .animate({ opacity: 0 }, 25);
        } else {
          scrolledDown = 1;
          $("#rightcontrols .btn-group")
            .stop(true, true)
            .animate({ opacity: 1 }, 400);
          $("#return-to-top").show();
          $("#return-to-top")
            .stop(true, true)
            .animate({ opacity: 1 }, 25);
        }
      }
    }
  })
  .overlayScrollbars();

//Scrolling detection

//Dim bottom bar when scrolled up
$("#maincontain .os-viewport").on("update", function(event, vals) {});

var scroll;
var anim = false;
var setDoScroll = function() {
  if (!anim) {
    scroll = this.scroll().y.ratio === 1;
  } else {
    scroll = true;
  }
};
var performScroll = function() {
  anim = true;
  chatOS.scrollStop();
  chatOS.scroll({ y: "100%" }, 250, "swing", function() {
    anim = false;
  });
};
var atbot;
var chatOS = $("#mainmsg.oss")
  .overlayScrollbars({
    className: "os-theme-thin-light",
    scrollbars: {
      autoHide: "scroll"
    },
    callbacks: {
      onContentSizeChanged: function() {
        if (scroll) performScroll();
      },
      onScroll: setDoScroll,
      onInitialized: setDoScroll,
      onOverflowChanged: function(e) {
        if (e.y) performScroll();
      },
      onScrollStop: function() {
        // console.log("cur "+chatOS.scroll().y.position);
        //console.log("max "+chatOS.scroll().y.max);

        if (chatOS.scroll().y.position == chatOS.scroll().y.max) {
          //console.log('atbot');
          $("#newmsgs").remove();
          atbot = true;
        } else {
          atbot = false;
        }
      }
    }
  })
  .overlayScrollbars();

$(".plcontrol-inner").addClass("clearfix");
$("<div id='infopane'></div>").insertAfter($("#rightpane"));
$("#infopane").addClass("col-lg-6 col-md-6");
$("#infopane").append($("<div class='vertical-spacer'></div>"));
$("#infopane").append($("<div class='row' id='infopane-inner'></div>"));

//TIP
$("#infopane-inner").append(
  '<div class="col-lg-6 col-md-6 nopadding" id="tip"><div class="col-lg-12 col-md-12 nopadding"><div class="well"><h3 style="text-align:center;margin:0;color:#fff;"><span>🔥</span> READ THIS <span>🔥</span></h3><br><p style="font-size:15px;text-align:center;">Install <a target="_blank" style="font-weight:bold;" href="https://github.com/calzoneman/sync/wiki/Google-Drive-Userscript-Installation-Guide">userscript🔗</a> for Google Drive videos</p><br><span style="color:#b5b5b5;"><p style="font-size:12px;">Need help? Consult this <a target="_blank" style="font-weight:bold;" href="https://imgur.com/6K6cfAb"> handy guide 🔖</a><br>Register as a user or guest to add media and chat  💀<br>Paste image links into chat to embed! (.png, .gif, .jpg) 🎨<br>If anything is fucked up, <a style="font-weight:bold;" href="https://cytu.be/r/offlinechat">refresh the page ♻️</a></p></span><p style="font-size:10px;color:#888;"><b>OC.SCRIPT v1.1</b> by <b>Fwup</b><br> <a href="https://drive.google.com/drive/folders/0B0epPEg9xY5JUnNnd1U1SEFIQ2c" target="_blank" style="DISPLAY:NONE;">https://drive.google.com/drive/folders/0B0epPEg9xY5JUnNnd1U1SEFIQ2c</a></p></div></div><div class="clear"></div></div>'
);
//MOTD
$("#motdrow").insertAfter("#tip");
$("#motdrow").removeClass("row");
$("#motdrow").addClass("col-lg-6 col-md-6");
$("#motdrow .col-lg-12, #motdrow .col-md-12").addClass("nopadding");

//Poll
$("#pollwrap").prependTo("body");
$("#pollwrap").removeClass("col-lg-12 col-md-12");
$("#pollwrap").addClass("col-lg-2 col-md-2 nopadding");

$("#library .btn-group").removeClass("pull-left");
$("#emotelistbtn")
  .detach()
  .insertAfter("#chatline");
$("#newpollbtn")
  .detach()
  .insertBefore("#emotelistbtn");

$("#emotelistbtn, #newpollbtn").removeClass("btn btn-sm btn-default");
//Add info below Media URL section
$("#addfromurl .plcontrol-inner").append(
  "<div class='types'>Sources: <a href='https://youtube.com/' target='_blank'>YouTube</a>, <a href='https://twitch.tv/' target='_blank'>Twitch.tv</a> + <a href='https://clips.twitch.tv/' target='_blank'>Clips</a>, <a href='https://vimeo.com/' target='_blank'>Vimeo</a>, <a href='https://dailymotion.com/' target='_blank'>Dailymotion</a>, <a href='https://streamable.com/' target='_blank'>Streamable</a>, <a href='https://soundcloud.com/' target='_blank'>Soundcloud</a>, Google Drive videos, .mp4</div>"
);

//Twitch Button
//$("#usercount").after('<a id="togglechat"><i class="fa fa-twitch"></i></a>');

//Poll Button
$("#usercount").after('<a id="togglenoty"><i class="material-icons">notifications</i></a>');
$("#togglenoty").after('<a id="pollbtn"><i class="material-icons">poll</i><span class="button__badge">NEW</span></a>');




$("#pollbtn, .poll-notify").click(function() {
  if ($("#pollwrap .well:not(.poll-menu)").length) {
    if ($("#pollwrap .well:not(.poll-menu)").is(":visible")) {
      $("#pollwrap .well:not(.poll-menu)").hide();
      
    } else {
      $("#pollwrap .well:not(.poll-menu)").show();
      $(".button__badge").hide();
    }
  }
});

if (localStorage.getItem("noty") !== "no") {
  localStorage.setItem("noty", "yes");
  //$(".noticef").show();
  $("#togglenoty").removeClass("notyDisabled");
  $("#togglenoty i").text("notifications");
} else {
  localStorage.setItem("noty", "no");
  $("#togglenoty").addClass("notyDisabled");
  $("#togglenoty i").text("notifications_off");
  //$(".noticef").hide();
} 

$("#togglenoty").click(function() {
  if (localStorage.getItem("noty") == "no") {
    localStorage.setItem("noty", "yes");
    //$(".noticef").show();
    $("#togglenoty").removeClass("notyDisabled");
    $("#togglenoty i").text("notifications");
    Noty.closeAll("noticef");
    new Noty({
      type: "success",
      text: "Notifications enabled",
      container: ".noticey",
      theme: "mint",
      timeout: 2500,
      progressBar: true,
      closeWith: ["click", "button"],
      animation: {
        open: "noty_effects_open",
        close: "noty_effects_close"
      }
    }).show();
  } else {
    localStorage.setItem("noty", "no");
    $("#togglenoty").addClass("notyDisabled");
    $("#togglenoty i").text("notifications_off");
    //$(".noticef").hide();
    Noty.closeAll("noticef");
    new Noty({
      type: "warning",
      text: "Notifications disabled",
      container: ".noticey",
      theme: "mint",
      timeout: 2500,
      progressBar: true,
      closeWith: ["click", "button"],
      animation: {
        open: "noty_effects_open",
        close: "noty_effects_close"
      }
    }).show();
  }
});

//Poll Button
//$("#pollwrap .well").prepend('<a id="togglepoll"><i class="fa fa-bar-chart"></i></a>');

//--------- TWITCH CHAT POP-OUT ---------
/*
var twitchTitle;
var heightBody = $(window).outerHeight()-67;
var heightval2;

//Generate Twitch Chat
function twitchGen() {
  //Find current channel
  var start_pos =
    $("#currenttitle")
      .text()
      .indexOf(": ") + 1;
  var end_pos = $("#currenttitle")
    .text()
    .indexOf(" -", start_pos);
  var text_to_get = $("#currenttitle")
    .text()
    .substring(start_pos, end_pos);

  if (text_to_get == " Twitch.tv") {
    console.log("yes");
    twitchTitle = $("#currenttitle")
      .text()
      .split("- ")
      .pop();
  } else {
    twitchTitle = "fwup";
  }

  //Add TC
  $("#chatwrap #chatheader").before(
    '<div id="twitchchat"><div class="twhan"><span>Twitch.tv - <strong>' +
      twitchTitle +
      '</strong></span> <div class="reTw"><i class="fa fa-refresh"></i></div> <div class="closeTw"><i class="fa fa-close"></i></div></div><iframe src="https://twitch.tv/' +
      twitchTitle +
      '/chat?popout=" frameborder="0" scrolling="no" width="320" id="emchat" class="threes"></iframe></div>'
  );

  //Adjust height to same as chat
  $("#twitchchat").css("height", "400px");
  //$("#chatwrap .nano").css("height", "calc(100% - 509px)");
  //$("#chatwrap .nano")[0].nanoscroller.reset();

  //TC Drag and snap



  //TC resizeable
  $("#twitchchat").resizable({
    handles: "s",
    iframeFix: true,
    minHeight: 300,
    maxHeight: heightBody,
    resize: function(e, ui) {
      $("iframe").css("pointer-events", "none");
      var parent = ui.element.parent();
      var remainingSpace = parent.height() - ui.element.outerHeight(),
        divTwo = $("#chatwrap .nano"),
        divTwoWidth =
          (remainingSpace - (divTwo.outerHeight() - divTwo.height())) / parent.height() * 100 + "%";
      divTwo.css("height", "calc(" + divTwoWidth + " - 109px)");
      $("#chatwrap .nano").css("height", "calc(" + divTwoWidth + " - 109px)");
    },
    stop: function(event, ui) {
      $("iframe").css("pointer-events", "auto");
      //$("#chatwrap .nano")[0].nanoscroller.reset();
      var parent = ui.element.parent();
      ui.element.css({
        height: ui.element.height() / parent.height() * 100 + "%"
      });
    }
  });

  //Close TC
  $(".closeTw").click(function() {
    $("#togglechat").click();
  });

  //Refresh TC
  $(".reTw").click(function() {
    var heightval = $("#twitchchat").css("height");
    $("#twitchchat").remove();
    twitchGen();

    $("#twitchchat").css("height", heightval);
  });
  //$("#chatwrap .nano")[0].nanoscroller.reset();
}

//Toggle TC
$("#togglechat").clickToggle(
  function() {
    twitchGen();
    //$("#chatwrap .nano")[0].nanoscroller.reset();
  },
  function() {
    $("#twitchchat").remove();
    $("#chatwrap .nano").css("height", "calc(100% - 74px)");
    //$("#chatwrap .nano")[0].nanoscroller.reset();
  }
);
*/

//--------- GENERAL JS ---------
//Add buttons next to chat
$("#newpollbtn").html('<i class="material-icons">poll</i>');
$("#emotelistbtn").html('<i class="material-icons">insert_emoticon</i>');

if (hasPermission("pollctl")) {
  if (USEROPTS.chatbtn) {
    $("#chatline").css("padding-right", "110px");
  } else {
    $("#chatline").css("padding-right", "60px");
  }
} else {
  if (USEROPTS.chatbtn) {
    $("#chatline").css("padding-right", "85px");
  } else {
    $("#chatline").css("padding-right", "35px");
  }
}

//Dim when hovering over navbar and footer
$(".navbar").hover(
  function() {
    $(".navbar")
      .stop(true, true)
      .animate({ opacity: 1 }, 400);
  },
  function() {
    $(".navbar")
      .stop(true, true)
      .animate({ opacity: 0.6 }, 400);
  }
);

/*$('#footer').hover(function() {
  $('#footer').stop(true,true).animate({opacity: 1}, 200);
}, function() {
  $('#footer').stop(true,true).animate({opacity: 0.8}, 200);
});*/

$("#rightcontrols").hover(
  function() {
    $("#rightcontrols .btn-group")
      .stop(true, true)
      .animate({ opacity: 1 }, 400);
  },
  function() {
    if (scrolledDown === 0) {
      $("#rightcontrols .btn-group")
        .stop(true, true)
        .animate({ opacity: 0.4 }, 400);
    } else {
      $("#rightcontrols .btn-group")
        .stop(true, true)
        .animate({ opacity: 1 }, 400);
    }
  }
);

$.w = $(window);
var body = $("#maincontain .nano-content");
//Go to section when button is pressed (needs adjusting, there are better ways of doing this)
var atbotMain;
var tol;
$("#showsearch, #showsearch, #showmediaurl, #showcustomembed, #showplaylistmanager").click(function() {
      mainOS.scroll({ y: "100%" }, 250, "swing", function() {
        atbotMain = true;
      });
      mainOS.update();
});
$("#showmediaurl").click(function() {
  if (tol == false) {
    mainOS.scroll({ y: "100%" }, 250, "swing", function() {
      atbotMain = true;
    });

    mainOS.update();
  }
});


//update scrollbar when chat changes + group up chat messages

$("#messagebuffer div").removeClass("nick-hover");
$("#messagebuffer div").addClass("oldmsg");
$("#messagebuffer div").mouseover(function() {
  $("#messagebuffer div").removeClass("nick-hover");
});
$("#messagebuffer div").unbind("mouseenter mouseleave");



if($("#pollwrap .active").length == 0){
  $(".button__badge").hide();
}else {
  $(".button__badge").show();
}



$('#pollbtn').prop('title', 'Open Polls');
$('#togglenoty').prop('title', 'Toggle Notifications');
$('#emotelistbtn').prop('title', 'Add Emotes');
$('#newpollbtn').prop('title', 'Add Poll');
$('#queue_next').prop('title', 'Add video next in the queue');
$('#queue_end').prop('title', 'Add video to end of the queue');
$('#addfromurl .checkbox').prop('title', 'Remove from queue after playing');


$("#messagebuffer").arrive("div", function(newElem) {
  var currentMsg = newElem;
  var previousSibling = newElem["previousSibling"]["className"].split(" ")[0];
  var cur = chatOS.scroll().y.position;
  var max = chatOS.scroll().y.max - 42;

  $("." + currentMsg["className"])
    .eq(-1)
    .css("display", "block")
    .animate(
      {
        right: "0px"
      },
      800,
      "easeOutExpo"
    );

  if (currentMsg["className"].split(" ")[0] === previousSibling) {
    $("." + currentMsg["className"] + ":last-child")
      .eq(-1)
      .attr("id", "same");
  }
  
  if (currentMsg["className"] == "poll-notify") {
    $(".button__badge").show();
    if ($("#pollwrap .well:not(.poll-menu)").length) {
      if ($("#pollwrap .well:not(.poll-menu)").is(":hidden")) {
        $("#pollwrap .well:not(.poll-menu)").hide();
      } else {
        $(".button__badge").hide();
      }
    }
  }

  $(".poll-notify").click(function() {
    if ($("#pollwrap .well:not(.poll-menu)").length) {
      if ($("#pollwrap .well:not(.poll-menu)").is(":visible")) {
        $("#pollwrap .well:not(.poll-menu)").hide();
      } else {
        $("#pollwrap .well:not(.poll-menu)").show();
        $(".button__badge").hide();
      }
    }
  });

  if (atbot == false) {
    if (chatOS.getState("overflowAmount.y") !== 0) {
      if (cur <= max) {
        if (!$("#newmsgs").length) {
          $("<div id='newmsgscontainer'><div id='newmsgs'>New Messages Below</div></div>")
            .hide()
            .appendTo("#chatwrap")
            .slideDown("fast");
          $("#newmsgs").click(function() {
            $("#chatline").focus();
            $("#newmsgscontainer:last-child").slideUp("slow");

            chatOS.scroll({ y: "100%" }, 250, "swing", function() {
              $("#newmsgscontainer:last-child").remove();
              atbot = true;
            });
          });
        }
      }
    }
  }
});

$("#rightpane-inner").arrive(".col-md-12 .alert-danger", function(newElem) {
  // $("#rightpane-inner .col-md-12 .alert-danger").hide();
  new Noty({
    type: "error",
    text: newElem["innerText"],
    container: ".noticey",
    theme: "mint",
    timeout: 5000,
    progressBar: true,
    closeWith: ["click", "button"],
    animation: {
      open: "noty_effects_open",
      close: "noty_effects_close"
    }
  }).show();
  $("#queuefail .qf-alert-danger").remove();
  $(" #rightpane-inner .alert-danger")
    .parent()
    .remove();
  //console.log(element);
});
/*
insertionQ("#messagebuffer div").every(function(element) {
  var previousSibling = $(element["previousSibling"]).attr("class");

  //console.log($("#mainmsg.oss").overlayScrollbars().getState("contentScrollSize.height"));
  //console.log($("#mainmsg.oss").overlayScrollbars().getState("overflowAmount.y"));

  var cur = chatOS.scroll().y.position;
  var max = chatOS.scroll().y.max - 42;

  if (atbot == false) {
    if (chatOS.getState("overflowAmount.y") !== 0) {
      if (cur <= max) {
        
        if (!$("#newmsgs").length) {
          $("#chatline")
            .delay("100")
            .before("<div id='newmsgs'>New Messages Below</div>");
          $("#newmsgs").click(function() {
            chatOS.scroll({ y: "100%" }, 250, "swing", function() {
              atbot = true;
            });
          });
        }
      }
    }
  }

  if (element["className"].split(" ")[0] === previousSibling.split(" ")[0]) {
    $("." + element["className"] + ":last-child")
      .eq(-1)
      .attr("id", "same");
  }

  $("#messagebuffer div").removeClass("nick-hover");
  $("#messagebuffer div").mouseover(function() {
    $("#messagebuffer div").removeClass("nick-hover");
  });
  $("#messagebuffer div").unbind("mouseenter mouseleave");


  $(".poll-notify").click(function() {
    if ($("#pollwrap .active, #pollwrap .muted").is(":visible")) {
      $("#pollwrap .active, #pollwrap .muted").hide();
    } else {
      $("#pollwrap .active, #pollwrap .muted").show();
    }
  });

  //console.log(element["className"]);
  //console.log(previousSibling.split(" ")[0]);
  //console.log(element);
});

$(".poll-notify").click(function() {
  if ($("#pollwrap .active, #pollwrap .muted").is(":visible")) {
    $("#pollwrap .active, #pollwrap .muted").hide();
  } else {
    $("#pollwrap .active, #pollwrap .muted").show();
  }
});
insertionQ("#rightpane-inner .col-md-12 .alert-danger").every(function(element) {
  // $("#rightpane-inner .col-md-12 .alert-danger").hide();
  new Noty({
    type: "error",
    text: element["innerText"],
    container: ".noticey",
    theme: "mint",
    timeout: 5000,
    progressBar: true,
    callbacks: {
      onClose: function() {
        $("#queuefail .qf-alert-danger").remove();
        $(" #rightpane-inner .alert-danger")
          .parent()
          .remove();
      }
    },
    closeWith: ["click", "button"],
    animation: {
      open: "noty_effects_open",
      close: "noty_effects_close"
    }
  }).show();

  //console.log(element);
});

*/
var isOverPanel;
$(window).ready(function() {
  $("#mediarefresh").click();
  //Keep chat messages grouped up when page is first loaded
  $("div[class^=chat-msg-]").each(function() {
    $("span.shout")
      .parent("div")
      .remove();
    //get the previous div with correct class
    var prev = $(this).prev("div[class^=chat-msg-]");
    //if there's a previous element and it doesn't match the class
    if (prev.length > 0 && $(this).hasClass(prev.prop("class").replace(/^(\S*).*/, "$1"))) {
      //add the margin
      $(this).attr("id", "same");
    }
  });
});

//For some reason none of this will execute unless it's delayed.
// Causes problems if user is tabbed out during this process
setTimeout(function() {
  //$('.oss').overlayScrollbars();

  if (hasPermission("playlistadd")) {
    if ($("#currenttitle").text() === "Nothing Playing") {
      tol = false;
    } else {
      tol = true;
    }
    
  }

  tippy('[title]', {size: 'large', arrow: true, dynamicTitle: true});
    $(" #ytapiplayer").removeAttr( "title" );
  $(".videolist li, #ytapiplayer").removeAttr( "data-original-title" );

}, 1500);