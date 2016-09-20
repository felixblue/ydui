/*! YDUI Touch v1.0.0 by YDCSS (c) 2016 Licensed MIT */ 
!function(t){"use strict";var e=t.$=jQuery,i=t.document,n={};e(t).on("load",function(){"function"==typeof FastClick&&FastClick.attach(i.body)}),n.util={parseOptions:function(t){if(e.isPlainObject(t))return t;var i=t?t.indexOf("{"):-1,n={};if(-1!=i)try{n=new Function("","var json = "+t.substr(i)+"; return JSON.parse(JSON.stringify(json));")()}catch(a){}return n},pageScroll:function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(){e||(e=!0,i.addEventListener("touchmove",t))},unlock:function(){e=!1,i.removeEventListener("touchmove",t)}}}()},e.fn.emulateTransitionEnd=function(t){var i=!1,n=this;e(this).one("webkitTransitionEnd",function(){i=!0});var a=function(){i||e(n).trigger("webkitTransitionEnd")};setTimeout(a,t)},"function"==typeof define?define(n):t.YDUI=n}(window),!function(t){"use strict";function e(t,e){this.$element=n(t),this.closeElement=e,this.toggleClass="actionsheet-toggle"}function i(t){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=n(this),o=a.data("ydui.actionsheet");o||(a.data("ydui.actionsheet",o=new e(this,t.closeElement)),t&&"object"!=n.type(t)||o.open()),"string"==n.type(t)&&o[t]&&o[t].apply(o,i)})}var n=t.$,a=t.document,o=n(a),r=n(a.body),s=n('<div class="mask-black"></div>');e.prototype.open=function(){var t=this;r.append(s),s.on("click.ydui.actionsheet.mask",function(){t.close()}),t.closeElement&&o.on("click.ydui.actionsheet",t.closeElement,function(){t.close()}),t.$element.addClass(t.toggleClass).trigger("open.ydui.actionsheet")},e.prototype.close=function(){var t=this;s.off("click.ydui.actionsheet.mask").remove(),t.$element.removeClass(t.toggleClass).trigger("close.ydui.actionsheet")},o.on("click.ydui.actionsheet.data-api","[data-ydui-actionsheet]",function(e){e.preventDefault();var a=t.YDUI.util.parseOptions(n(this).data("ydui-actionsheet")),o=n(a.target),r=o.data("ydui.actionsheet")?"open":a;i.call(o,r)}),n.fn.actionSheet=i}(window),!function(t){t.document.addEventListener("touchstart",function(t){},!1)}(window),!function(t){var e=t.document,i=t.YDUI,n=t.navigator&&t.navigator.userAgent||"",a=!!n.match(/(iPad).*OS\s([\d_]+)/),o=!!n.match(/(iPod)(.*OS\s([\d_]+))?/),r=!a&&!!n.match(/(iPhone\sOS)\s([\d_]+)/);i.device={isMobile:!!n.match(/AppleWebKit.*Mobile.*/)||"ontouchstart"in e.documentElement,isIOS:!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),isAndroid:!!n.match(/(Android);?[\s\/]+([\d.]+)?/),isIpad:a,isIpod:o,isIphone:r,isWebView:(r||a||o)&&!!n.match(/.*AppleWebKit(?!.*Safari)/i),isWeixin:n.indexOf("MicroMessenger")>-1,pixelRatio:t.devicePixelRatio||1}}(window),!function(t,e){"use strict";var i=t.$,n=e.dialog=e.dialog||{},a=i(t.document.body);n.confirm=function(t,n,o){var r=arguments.length;if(2>r)return void console.error("From YDUI's confirm: Please set two or three parameters!!!");if("function"!=i.type(arguments[1])&&2==r&&!arguments[1]instanceof Array)return void console.error("From YDUI's confirm: The second parameter must be a function or array!!!");2==r&&(o=n,n=t,t="提示");var s=o;"function"===i.type(o)&&(s=[{txt:"取消",color:!1},{txt:"确定",color:!0,callback:function(){o&&o()}}]);var c=i('<div id="YDUI_CONFRIM">   <div class="mask-black"></div>   <div class="m-confirm">       <div class="confirm-hd"><strong class="confirm-title">'+t+'</strong></div>       <div class="confirm-bd">'+n+"</div>   </div></div>").remove(),l=i('<div class="confirm-ft"></div>');i.each(s,function(t,n){var a;"boolean"==i.type(n.color)?a=i('<a href="javascript:;" class="confirm-btn '+(n.color?"primary":"default")+'">'+(n.txt||"")+"</a>"):"string"==i.type(n.color)&&(a=i('<a href="javascript:;" style="color: '+n.color+'">'+(n.txt||"")+"</a>")),function(t){a.on("click",function(){s[t].stay||(e.util.pageScroll.unlock(),c.remove()),s[t].callback&&s[t].callback()})}(t),l.append(a)}),c.find(".m-confirm").append(l),e.util.pageScroll.lock(),a.append(c)},n.alert=function(t,n){var o=i('<div id="YDUI_ALERT">   <div>       <div class="mask-black"></div>       <div class="m-confirm m-alert">           <div class="confirm-bd">'+(t||"YDUI Touch")+'</div>           <div class="confirm-ft">               <a href="javascript:;" class="confirm-btn primary">确定</a>           </div>       </div>   </div></div>').remove();e.util.pageScroll.lock(),a.append(o),o.find("a").on("click",function(){o.remove(),e.util.pageScroll.unlock(),"function"===i.type(n)&&n()})},n.toast=function(t,n,o,r){var s=arguments.length;if(2>s)return void console.error("From YDUI's toast: Please set two or more parameters!!!");var c=i('<div id="YDUI_TOAST">   <div class="mask-white"></div>   <div class="m-toast">       <div class="'+("error"==n?"toast-error-ico":"toast-success-ico")+'"></div>       <p class="toast-content">'+(t||"")+"</p>   </div></div>").remove();e.util.pageScroll.lock(),a.append(c),"function"===i.type(o)&&arguments.length>=3&&(r=o,o=2e3);var l=setTimeout(function(){clearTimeout(l),e.util.pageScroll.unlock(),c.remove(),"function"===i.type(r)&&r()},(~~o||2e3)+100)},n.loading=function(){return{open:function(t){var n=i('<div id="YDUI_LOADING">    <div class="mask-white"></div>    <div class="m-loading">        <div class="loading-hd">            <div class="loading-leaf loading-leaf-0"></div>            <div class="loading-leaf loading-leaf-1"></div>            <div class="loading-leaf loading-leaf-2"></div>            <div class="loading-leaf loading-leaf-3"></div>            <div class="loading-leaf loading-leaf-4"></div>            <div class="loading-leaf loading-leaf-5"></div>            <div class="loading-leaf loading-leaf-6"></div>            <div class="loading-leaf loading-leaf-7"></div>            <div class="loading-leaf loading-leaf-8"></div>            <div class="loading-leaf loading-leaf-9"></div>            <div class="loading-leaf loading-leaf-10"></div>            <div class="loading-leaf loading-leaf-11"></div>        </div>        <p class="loading-txt">'+(t||"数据加载中")+"</p>    </div></div>").remove();e.util.pageScroll.lock(),a.append(n)},close:function(){e.util.pageScroll.unlock(),i("#YDUI_LOADING").remove()}}}()}(window,YDUI),!function(){"use strict";function t(t,e){function i(t,e){return function(){return t.apply(e,arguments)}}var n;e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700;for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],o=this,r=0,s=a.length;s>r;r++)o[a[r]]=i(o[a[r]],o);t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,i,n){var a=Node.prototype.removeEventListener;"click"===e?a.call(t,e,i.hijacked||i,n):a.call(t,e,i,n)},t.addEventListener=function(e,i,n){var a=Node.prototype.addEventListener;"click"===e?a.call(t,e,i.hijacked||(i.hijacked=function(t){t.propagationStopped||i(t)}),n):a.call(t,e,i,n)}),"function"==typeof t.onclick&&(n=t.onclick,t.addEventListener("click",function(t){n(t)},!1),t.onclick=null)}var e=/iP(ad|hone|od)/.test(navigator.userAgent),i=/OS [6-7]_\d/.test(navigator.userAgent);t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if("file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var i,n;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),n=e.changedTouches[0],i=document.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),i.forwardedTouchEvent=!0,t.dispatchEvent(i)},t.prototype.focus=function(t){var e,i=["date","time","month","number","email"];t.setSelectionRange&&-1===i.indexOf(t.type)?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,i;if(e=t.fastClickScrollParent,!e||!e.contains(t)){i=t;do{if(i.scrollHeight>i.offsetHeight){e=i,t.fastClickScrollParent=i;break}i=i.parentElement}while(i)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,i,n;return t.targetTouches.length>1?!0:(e=this.getTargetElementFromEventTarget(t.target),i=t.targetTouches[0],n=window.getSelection(),n.rangeCount&&!n.isCollapsed?!0:(this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=i.pageX,this.touchStartY=i.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0))},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],i=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>i||Math.abs(e.pageY-this.touchStartY)>i},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,n,a,o,r,s=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,i&&(r=t.changedTouches[0],s=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||s,s.fastClickScrollParent=this.targetElement.fastClickScrollParent),a=s.tagName.toLowerCase(),"label"===a)e=this.findControl(s),e&&(this.focus(s),s=e);else if(this.needsFocus(s))return t.timeStamp-n>100||window.top!==window&&"input"===a?(this.targetElement=null,!1):(this.focus(s),this.sendClick(s,t),"select"!==a&&(this.targetElement=null,t.preventDefault()),!1);return o=s.fastClickScrollParent,o&&o.fastClickLastScrollTop!==o.scrollTop?!0:(this.needsClick(s)||(t.preventDefault(),this.sendClick(s,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),!1):!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.attach=function(i,n){return e?new t(i,n):void 0},window.FastClick=t}(),!function(t){"use strict";function e(t,i){this.$element=n(t),this.options=n.extend({},e.DEFAULTS,i||{}),this.init()}function i(t){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=n(this),o=a.data("ydui.keyboard");o||a.data("ydui.keyboard",o=new e(this,t)),"string"==n.type(t)&&o[t]&&o[t].apply(o,i)})}var n=t.$,a=n(t.document.body),o=!!(t.navigator&&t.navigator.userAgent||"").match(/AppleWebKit.*Mobile.*/)||"ontouchstart"in t.document.documentElement,r=o?"touchstart":"click";e.DEFAULTS={disorder:!1,title:"安全键盘"},e.prototype.init=function(){function t(){for(var t="",e=0;6>e;e++)t+="<li><i></i></li>";return t}var e=this;e.inputNums="",e.toggleClass="keyboard-show";var i='<div class="keyboard-head"><strong>输入数字密码</strong></div><div class="keyboard-error"></div><ul class="keyboard-password J_FillPwdBox">'+t()+"</ul>",a='<div class="keyboard-title">'+e.options.title+'</div><ul class="keyboard-numbers"></ul>';e.$element.prepend(i).append(a),e.$numsBox=e.$element.find(".keyboard-numbers"),e.$mask=n('<div class="mask-black"></div>')},e.prototype.open=function(){var t=this,e=t.$element,i=t.$numsBox;e.addClass(t.toggleClass),(t.options.disorder||1!=i.data("loaded-nums"))&&i.data("loaded-nums",1).html(t.createNumsHtml()),a.append(t.$mask),t.bindEvent()},e.prototype.close=function(){var t=this;t.$mask.remove(),t.$element.removeClass(t.toggleClass),t.unbindEvent(),t.inputNums="",t.fillPassword(),t.clearError()},e.prototype.bindEvent=function(){var t=this,e=t.$element;t.$mask.on(r+".ydui.keyboard.mask",function(e){e.preventDefault(),t.close()}),e.on(r+".ydui.keyboard.nums",".J_Nums",function(e){e.preventDefault(),t.inputNums.length>=6||(t.inputNums=t.inputNums+n(this).html(),t.clearError(),t.fillPassword())}),e.on(r+".ydui.keyboard.backspace",".J_Backspace",function(e){e.preventDefault(),t.backspace()}),e.on(r+".ydui.keyboard.cancel",".J_Cancel",function(e){e.preventDefault(),t.close()})},e.prototype.unbindEvent=function(){this.$element.off(r+".ydui.keyboard"),n(t).off("hashchange.ydui.keyboard")},e.prototype.fillPassword=function(){var t=this,e=t.inputNums,i=e.length,a=t.$element.find(".J_FillPwdBox").find("li");a.find("i").hide(),a.filter(":lt("+i+")").find("i").show(),i>=6&&t.$element.trigger(n.Event("done.ydui.keyboard",{password:e}))},e.prototype.clearError=function(){this.$element.find(".keyboard-error").html("")},e.prototype.error=function(t){var e=this;e.$element.find(".keyboard-error").html(t),e.inputNums="",e.fillPassword()},e.prototype.backspace=function(){var t=this,e=t.inputNums;e&&(t.inputNums=e.substr(0,e.length-1)),t.fillPassword()},e.prototype.createNumsHtml=function(){var t=this,e=t.createNums();t.options.disorder&&t.upsetOrder(e);var i=[];return n.each(e,function(t){t%3==0&&(t>=e.length-2?i.push('<li><a href="javascript:;" class="J_Cancel">取消</a>'+e.slice(t,t+3).join("")+'<a href="javascript:;" class="J_Backspace"></a></li>'):i.push("<li>"+e.slice(t,t+3).join("")+"</li>"))}),i.join("")},e.prototype.createNums=function(){var t=this,e=t.options.disorder;if(e&&t.cacheNums)return t.cacheNums;for(var i=[],n=1;10>=n;n++)i.push('<a href="javascript:;" class="J_Nums">'+n%10+"</div>");return e||(t.cacheNums=i),i},e.prototype.upsetOrder=function(t){for(var e,i,n,a=Math.floor,o=Math.random,r=t.length,s=a(r/2)+1;s--;)e=a(o()*r),i=a(o()*r),e!==i&&(n=t[e],t[e]=t[i],t[i]=n);return t},n.fn.keyBoard=i}(window),!function(t,e){"use strict";function i(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n||{}),this.init()}function n(e){var n=t(this),a=n.data("ydui.lazyload");a||n.data("ydui.lazyload",new i(this,e))}i.DEFAULTS={attr:"data-url",$container:t(e),placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"},i.prototype.init=function(){var i=this;i.bindImgEvent(),i.loadImg(),i.options.$container.on("scroll",function(){i.loadImg()}),t(e).on("resize",function(){i.loadImg()})},i.prototype.loadImg=function(){var i=this,n=i.options,a=n.$container.height(),o=n.$container.get(0)===e?t(e).scrollTop():n.$container.offset().top;i.$element.each(function(){var e=t(this),i=e.offset().top-o,n=i+e.height();(i>=0&&a>i||n>0&&a>=n)&&e.trigger("appear.ydui.lazyload")})},i.prototype.bindImgEvent=function(){var e=this,i=e.options;e.$element.each(function(){var e=t(this);e.is("img")&&!e.attr("src")&&e.attr("src",i.placeholder),e.one("appear.ydui.lazyload",function(){e.is("img")&&e.attr("src",e.attr(i.attr))})})},t.fn.lazyLoad=n}(jQuery,window),!function(t){"use strict";function e(t,e){this.pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",n.apply(this,arguments)}function i(t,e){this.pathTemplate="M 0,{center} L 100,{center}",n.apply(this,arguments)}function n(t,e){this.$element=o(t),this.options=o.extend({},n.DEFAULTS,e||{})}function a(t){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=o(this),r=a.data("ydui.progressbar");r||("line"==t.type?a.data("ydui.progressbar",r=new i(this,t)):a.data("ydui.progressbar",r=new e(this,t)),t&&"object"!=o.type(t)||r.appendView()),"string"==o.type(t)&&r[t]&&r[t].apply(r,n)})}var o=t.$,r=t.document,s=t.YDUI.util;e.prototype=new n,e.prototype.getPathString=function(t){var e=this,i=50-t/2;return e.render(e.pathTemplate,{radius:i,"2radius":2*i})},e.prototype.initSvg=function(t){t.setAttribute("viewBox","0 0 100 100"),t.style.display="block",t.style.width="100%"},i.prototype=new n,i.prototype.getPathString=function(t){var e=this;return e.render(e.pathTemplate,{center:t/2})},i.prototype.initSvg=function(t,e){t.setAttribute("viewBox","0 0 100 "+e.strokeWidth),t.setAttribute("preserveAspectRatio","none"),t.style.width="100%",t.style.height="100%"},n.DEFAULTS={type:"circle",strokeWidth:0,strokeColor:"#E5E5E5",trailWidth:0,trailColor:"#646464",fill:"",progress:0,delay:!0,container:t},n.prototype.set=function(t){var e=this,i=e.trailPath.getTotalLength();t||(t=e.options.progress),t>1&&(t=1),e.trailPath.style.strokeDashoffset=i-t*i},n.prototype.appendView=function(){var e=this,i=e.options,n=i.progress,a=e.createSvgView(),r=e.$element;e.$container=o(i.container===t||"window"==i.container?t:i.container);var s=a.trailPath,c=s.getTotalLength();s.style.strokeDasharray=c+" "+c;var l=o(a.svg);return l.one("appear.ydui.progressbar",function(){e.set(n)}),r.append(l),i.delay?(e.checkInView(l),e.$container.on("scroll",function(){e.checkInView(l)}),o(t).on("resize",function(){e.checkInView(l)})):l.trigger("appear.ydui.progressbar"),this},n.prototype.checkInView=function(e){var i=this,n=i.$container,a=n.height(),r=n.get(0)===t?o(t).scrollTop():n.offset().top,s=e.offset().top-r,c=s+e.height();(s>=0&&a>s||c>0&&a>=c)&&e.trigger("appear.ydui.progressbar")},n.prototype.createSvgView=function(){var t=this,e=t.options,i=r.createElementNS("http://www.w3.org/2000/svg","svg");t.initSvg(i,e);var n=t.createPath(e);i.appendChild(n);var a=null;return(e.trailColor||e.trailWidth)&&(a=t.createTrailPath(e),a.style.strokeDashoffset=a.getTotalLength(),i.appendChild(a)),t.svg=i,t.trailPath=a,{svg:i,trailPath:a}},n.prototype.createTrailPath=function(t){var e=this;0==t.trailWidth&&(t.trailWidth=t.strokeWidth);var i=e.getPathString(t.trailWidth);return e.createPathElement(i,t.trailColor,t.trailWidth)},n.prototype.createPath=function(t){var e=this,i=t.strokeWidth;t.trailWidth&&t.trailWidth>t.strokeWidth&&(i=t.trailWidth);var n=e.getPathString(i);return e.createPathElement(n,t.strokeColor,t.strokeWidth,t.fill)},n.prototype.createPathElement=function(t,e,i,n){var a=r.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("d",t),a.setAttribute("stroke",e),a.setAttribute("stroke-width",i),n?a.setAttribute("fill",n):a.setAttribute("fill-opacity","0"),a},n.prototype.render=function(t,e){var i=t;for(var n in e)if(e.hasOwnProperty(n)){var a=e[n],o="\\{"+n+"\\}",r=new RegExp(o,"g");i=i.replace(r,a)}return i},o("[data-ydui-progressbar]").each(function(){var t=o(this);a.call(t,s.parseOptions(t.data("ydui-progressbar")))}),o.fn.progressBar=a}(window),!function(t){"use strict";function e(t,i){this.$btn=n(t),this.options=n.extend({},e.DEFAULTS,i||{})}function i(t){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=n(this),o=a.data("ydui.sendcode");o||(a.data("ydui.sendcode",o=new e(this,t)),"object"==n.type(t)&&t.run&&o.start()),"string"==n.type(t)&&o[t]&&o[t].apply(o,i)})}var n=t.$;e.DEFAULTS={run:!1,secs:60,disClass:"",runStr:"{%s}秒后重新获取",resetStr:"重新获取验证码"},e.timer=null,e.prototype.start=function(){var t=this,e=t.options,i=e.secs;t.$btn.html(t.getStr(i)).css("pointer-events","none").addClass(e.disClass),t.timer=setInterval(function(){i--,t.$btn.html(t.getStr(i)),0>=i&&(t.resetBtn(),clearInterval(t.timer))},1e3)},e.prototype.getStr=function(t){return this.options.runStr.replace(/\{([^{]*?)%s(.*?)\}/g,t)},e.prototype.resetBtn=function(){var t=this,e=t.options;t.$btn.html(e.resetStr).css("pointer-events","auto").removeClass(e.disClass)},n.fn.sendCode=i}(window),!function(t){"use strict";function e(t,i){this.$element=n(t),this.options=n.extend({},e.DEFAULTS,i||{}),this.init()}function i(t){return this.each(function(){var i=n(this),a=i.data("ydui.slider");a||i.data("ydui.slider",new e(this,t))})}var n=t.$;e.DEFAULTS={speed:300,autoplay:3e3,lazyLoad:!1,pagination:".slider-pagination",wrapperClass:"slider-wrapper",slideClass:"slider-item",bulletClass:"slider-pagination-item",bulletActiveClass:"slider-pagination-item-active"},e.prototype.init=function(){var t=this,e=t.options,i=t.$element;t.index=1,t.autoPlayTimer=null,t.$pagination=i.find(e.pagination),t.$wrapper=i.find("."+e.wrapperClass),t.itemNums=t.$wrapper.find("."+e.slideClass).length,e.lazyLoad&&t.loadImage(0),t.createBullet(),t.cloneItem().bindEvent()},e.prototype.bindEvent=function(){var e=this,i=e.touchEvents();e.$wrapper.find("."+e.options.slideClass).on(i.start,function(t){e.onTouchStart(t)}).on(i.move,function(t){e.onTouchMove(t)}).on(i.end,function(t){e.onTouchEnd(t)}),n(t).on("resize",function(){e.setSlidesSize()}),~~e.options.autoplay>0&&e.autoPlay(),e.$wrapper.on("click",function(t){e.touches.allowClick||t.preventDefault()})},e.prototype.cloneItem=function(){var t=this,e=t.$wrapper,i=t.$wrapper.find("."+t.options.slideClass),n=i.filter(":first-child").clone(),a=i.filter(":last-child").clone();return e.prepend(a),e.append(n),t.setSlidesSize(),t},e.prototype.createBullet=function(){var t=this;if(t.$pagination[0]){var e='<span class="'+(t.options.bulletClass+" "+t.options.bulletActiveClass)+'"></span>';t.$pagination.append(e+new Array(t.itemNums).join('<span class="'+t.options.bulletClass+'"></span>'))}},e.prototype.activeBullet=function(){var t=this;if(t.$pagination[0]){var e=t.itemNums,i=t.index%e>=e?0:t.index%e-1,n=t.options.bulletActiveClass;!!t.$pagination[0]&&t.$pagination.find("."+t.options.bulletClass).removeClass(n).eq(i).addClass(n)}},e.prototype.setSlidesSize=function(){var t=this,e=t.$wrapper.width();t.$wrapper.css("transform","translate3d(-"+e+"px,0,0)"),t.$wrapper.find("."+t.options.slideClass).css({width:e})},e.prototype.autoPlay=function(){var t=this;t.autoPlayTimer=setInterval(function(){t.index>t.itemNums&&(t.index=1,t.setTranslate(0,-t.$wrapper.width())),t.setTranslate(t.options.speed,-(++t.index*t.$wrapper.width()))},t.options.autoplay)},e.prototype.stopAutoplay=function(){var t=this;return clearInterval(t.autoPlayTimer),t},e.prototype.loadImage=function(t){var e=this,i=e.$wrapper.find("."+e.options.slideClass).eq(t).find("img"),n=i.data("src");1!=i.data("load")&&!!n&&i.attr("src",n).data("load",1)},e.prototype.setTranslate=function(t,e){var i=this;i.options.lazyLoad&&i.loadImage(i.index),i.activeBullet(),i.$wrapper.css({transitionDuration:t+"ms",transform:"translate3d("+e+"px,0,0)"})},e.prototype.touches={moveTag:0,startClientX:0,moveOffset:0,touchStartTime:0,isTouchEvent:!1,allowClick:!1},e.prototype.onTouchStart=function(t){t.originalEvent.touches&&(t=t.originalEvent.touches[0]);var e=this,i=e.touches;if(i.allowClick=!0,i.isTouchEvent="touchstart"===t.type,(i.isTouchEvent||!("which"in t)||3!==t.which)&&0==i.moveTag){i.moveTag=1,i.startClientX=t.clientX,i.touchStartTime=Date.now();var n=e.itemNums;if(0==e.index)return e.index=n,void e.setTranslate(0,-n*e.$wrapper.width());e.index>n&&(e.index=1,e.setTranslate(0,-e.$wrapper.width()))}},e.prototype.onTouchMove=function(t){t.preventDefault(),t.originalEvent.touches&&(t=t.originalEvent.touches[0]);var e=this,i=e.touches;if(i.allowClick=!1,!i.isTouchEvent||"mousemove"!==t.type){var n=i.moveOffset=t.clientX-i.startClientX;0!=n&&0!=i.moveTag&&(1==i.moveTag&&(e.stopAutoplay(),i.moveTag=2),2==i.moveTag&&e.setTranslate(0,-e.index*e.$wrapper.width()+n))}},e.prototype.onTouchEnd=function(){var t=this,e=t.options.speed,i=t.$wrapper.width(),n=t.touches,a=n.moveOffset;if(setTimeout(function(){n.allowClick=!0},0),1==n.moveTag&&(n.moveTag=0),2==n.moveTag){n.moveTag=0;var o=Date.now()-n.touchStartTime;o>300&&Math.abs(a)<=.5*t.$wrapper.width()?t.setTranslate(e,-t.index*t.$wrapper.width()):t.setTranslate(e,-((a>0?--t.index:++t.index)*i))}},e.prototype.touchEvents=function(){var e=t.Modernizr&&!!t.Modernizr.touch||function(){return!!("ontouchstart"in t||t.DocumentTouch&&document instanceof DocumentTouch)}();return{start:e?"touchstart":"mousedown",move:e?"touchmove":"mousemove",end:e?"touchend":"mouseup"}},n(t).on("load",function(){n("[data-ydui-slider]").each(function(){var e=n(this);e.slider(t.YDUI.util.parseOptions(e.data("ydui-slider")))})}),n.fn.slider=i}(window),!function(t){"use strict";function e(t,i){this.$element=n(t),this.options=n.extend({},e.DEFAULTS,i||{}),this.init(),this.bindEvent(),this.transitioning=!1}function i(t){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=n(this),o=a.data("ydui.tab");o||a.data("ydui.tab",o=new e(n(this),t)),"string"==n.type(t)&&o[t]&&o[t].apply(o,i)})}var n=t.$;e.TRANSITION_DURATION=150,e.DEFAULTS={nav:".tab-nav-item",panel:".tab-panel-item",activeClass:"tab-active"},e.prototype.init=function(){var t=this,e=t.$element;t.$nav=e.find(t.options.nav),t.$panel=e.find(t.options.panel)},e.prototype.bindEvent=function(){var t=this;t.$nav.each(function(e){n(this).on("click.ydui.tab",function(){t.open(e)})})},e.prototype.open=function(t){var e=this;t="number"==n.type(t)?t:e.$nav.filter(t).index();var i=e.$nav.eq(t);e.transitioning||i.hasClass(e.options.activeClass)||(e.transitioning=!0,i.trigger(n.Event("open.ydui.tab",{index:t})),e.active(i,e.$nav),e.active(e.$panel.eq(t),e.$panel,function(){i.trigger({type:"opened.ydui.tab",index:t}),e.transitioning=!1}))},e.prototype.active=function(t,i,a){function o(){"function"==n.type(a)&&a()}var r=this,s=r.options.activeClass,c=i.filter("."+s);t.one("webkitTransitionEnd",o).emulateTransitionEnd(e.TRANSITION_DURATION),c.removeClass(s),t.addClass(s)},n(t).on("load",function(){n("[data-ydui-tab]").each(function(){var e=n(this);e.tab(t.YDUI.util.parseOptions(e.data("ydui-tab")))})}),n.fn.tab=i}(window),!function(win){"use strict";function storage(t){var e=util;return{set:function(i,n){t.setItem(i,e.serialize(n))},get:function(i){return e.deserialize(t.getItem(i))},remove:function(e){t.removeItem(e)},clear:function(){t.clear()}}}var $=win.$,util=win.YDUI.util=win.YDUI.util||{},doc=win.document;util.timestampTotime=function(t,e){var i={},n=Math.floor,a=function(t){return 10>t?"0"+t:t};i.f=e%1e3,e=n(e/1e3),i.s=e%60,e=n(e/60),i.m=e%60,e=n(e/60),i.h=e%24,i.d=n(e/24);var o=function(t){return"$1"+a(t)+"$2"};return t=t.replace(/\{([^{]*?)%d(.*?)\}/g,o(i.d)),t=t.replace(/\{([^{]*?)%h(.*?)\}/g,o(i.h)),t=t.replace(/\{([^{]*?)%m(.*?)\}/g,o(i.m)),t=t.replace(/\{([^{]*?)%s(.*?)\}/g,o(i.s)),t=t.replace(/\{([^{]*?)%f(.*?)\}/g,o(i.f))},util.countdown=function(t,e,i){var n=this,a=(new Date).getTime(),o=setInterval(function(){var r=(new Date).getTime(),s=e-r+a;s>0?i(n.timestampTotime(t,s)):(clearInterval(o),"function"==$.type(i)&&i(""))},50)},util.calc=function(arg1,arg2,op){var ra=1,rb=1,m;try{ra=arg1.toString().split(".")[1].length}catch(e){}try{rb=arg2.toString().split(".")[1].length}catch(e){}switch(m=Math.pow(10,Math.max(ra,rb)),op){case"+":case"-":arg1=Math.round(arg1*m),arg2=Math.round(arg2*m);break;case"*":ra=Math.pow(10,ra),rb=Math.pow(10,rb),m=ra*rb,arg1=Math.round(arg1*ra),arg2=Math.round(arg2*rb);break;case"/":arg1=Math.round(arg1*m),arg2=Math.round(arg2*m),m=1}try{var result=eval("(("+arg1+")"+op+"("+arg2+"))/"+m)}catch(e){}return result},util.getImgBase64=function(t,e){var i=this,n="",a=t.files[0];if(a){if(!/image\/\w+/.test(a.type))return void i.tipMes("请上传图片文件","error");var o=new FileReader;o.readAsDataURL(a),o.onload=function(){n=this.result,"function"===$.type(e)&&e(n)}}},util.getQueryString=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=win.location.search.substr(1).match(e),n="";return null!=i&&(n=decodeURIComponent(i[2])),n},util.serialize=function(t){return"string"===$.type(t)?t:JSON.stringify(t)},util.deserialize=function(t){if("string"===$.type(t))try{return JSON.parse(t)}catch(e){return t||void 0}},util.localStorage=function(){return storage(win.localStorage)}(),util.sessionStorage=function(){return storage(win.sessionStorage)}(),util.cookie=function(){return{get:function(t){var e=doc.cookie.match("(?:^|;)\\s*"+t+"=([^;]*)");return e&&e[1]?decodeURIComponent(e[1]):""},set:function(t,e,i,n,a,o){var r=String(encodeURIComponent(e)),s=i;"number"===$.type(s)&&(s=new Date,s.setTime(s.getTime()+1e3*i)),s instanceof Date&&(r+="; expires="+s.toUTCString()),!!n&&(r+="; domain="+n),r+="; path="+(a||"/"),o&&(r+="; secure"),doc.cookie=t+"="+r}}}()}(window);