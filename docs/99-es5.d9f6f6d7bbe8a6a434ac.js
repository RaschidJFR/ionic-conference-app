(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{W9p6:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_toast",function(){return p});var i=o("9TBO"),r=o("24pd"),n=(o("lSdy"),o("XIrJ")),a=o("aEGo"),s=o("Dgxi"),d=function(t,e,o){var i=new t,r=new t,n=e.host||e,a=e.querySelector(".toast-wrapper");switch(r.addElement(a),o){case"top":r.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var s=Math.floor(n.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",r.fromTo("opacity",.01,1);break;default:r.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(i.addElement(n).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(r))},c=function(t,e,o){var i=new t,r=new t,n=e.host||e,a=e.querySelector(".toast-wrapper");switch(r.addElement(a),o){case"top":r.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(i.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(r))},l=function(t,e,o){var i=new t,r=new t,n=e.host||e,a=e.querySelector(".toast-wrapper");switch(r.addElement(a),o){case"top":a.style.top="calc(8px + var(--ion-safe-area-top, 0px))",r.fromTo("opacity",.01,1);break;case"middle":var s=Math.floor(n.clientHeight/2-a.clientHeight/2);a.style.top=s+"px",r.fromTo("opacity",.01,1);break;default:a.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",r.fromTo("opacity",.01,1)}return Promise.resolve(i.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(r))},u=function(t,e){var o=new t,i=new t,r=e.host||e,n=e.querySelector(".toast-wrapper");return i.addElement(n),i.fromTo("opacity",.99,0),Promise.resolve(o.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))},p=function(){function t(t){Object(r.m)(this,t),this.presented=!1,this.mode=Object(r.e)(this),this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0,this.didPresent=Object(r.d)(this,"ionToastDidPresent",7),this.willPresent=Object(r.d)(this,"ionToastWillPresent",7),this.willDismiss=Object(r.d)(this,"ionToastWillDismiss",7),this.didDismiss=Object(r.d)(this,"ionToastDidDismiss",7)}return t.prototype.present=function(){return i.a(this,void 0,void 0,function(){var t=this;return i.c(this,function(e){switch(e.label){case 0:return[4,Object(n.e)(this,"toastEnter",d,l,this.position)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss(void 0,"timeout")},this.duration)),[2]}})})},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(n.f)(this,t,e,"toastLeave",c,u,this.position)},t.prototype.onDidDismiss=function(){return Object(n.g)(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(n.g)(this.el,"ionToastWillDismiss")},t.prototype.getButtons=function(){var t=this,e=this.buttons?this.buttons.map(function(t){return"string"==typeof t?{text:t}:t}):[];return this.showCloseButton&&e.push({text:this.closeButtonText||"Close",handler:function(){return t.dismiss(void 0,"cancel")}}),e},t.prototype.buttonClick=function(t){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(o){switch(o.label){case 0:return e=t.role,Object(n.j)(e)?[2,this.dismiss(void 0,e)]:[4,this.callButtonHandler(t)];case 1:return o.sent()?[2,this.dismiss(void 0,t.role)]:[2,Promise.resolve()]}})})},t.prototype.callButtonHandler=function(t){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(o){switch(o.label){case 0:if(!t||!t.handler)return[3,4];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,Object(n.o)(t.handler)];case 2:return!1===o.sent()?[2,!1]:[3,4];case 3:return e=o.sent(),console.error(e),[3,4];case 4:return[2,!0]}})})},t.prototype.hostData=function(){var t,e=Object(r.e)(this);return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign((t={},t[e]=!0,t),Object(a.a)(this.color),Object(a.b)(this.cssClass),{"toast-translucent":this.translucent})}},t.prototype.renderButtons=function(t,e){var o,i=this;if(0!==t.length){var n=Object(r.e)(this),a=((o={"toast-button-group":!0})["toast-button-group-"+e]=!0,o);return Object(r.i)("div",{class:a},t.map(function(t){return Object(r.i)("button",{type:"button",class:h(t),tabIndex:0,onClick:function(){return i.buttonClick(t)}},Object(r.i)("div",{class:"toast-button-inner"},t.icon&&Object(r.i)("ion-icon",{name:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===n&&Object(r.i)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))}))}},t.prototype.__stencil_render=function(){var t,e=this.getButtons(),o=e.filter(function(t){return"start"===t.side}),i=e.filter(function(t){return"start"!==t.side}),n=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(r.i)("div",{class:n},Object(r.i)("div",{class:"toast-container"},this.renderButtons(o,"start"),Object(r.i)("div",{class:"toast-content"},void 0!==this.header&&Object(r.i)("div",{class:"toast-header"},this.header),void 0!==this.message&&Object(r.i)("div",{class:"toast-message",innerHTML:Object(s.a)(this.message)})),this.renderButtons(i,"end")))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(r.i)(r.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50,#f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-850,#262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-middle{opacity:.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.activated{opacity:.4}@media (any-hover:hover){.toast-button:hover{opacity:.6}}"},enumerable:!0,configurable:!0}),t}(),h=function(t){var e;return Object.assign(((e={"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text})["toast-button-"+t.role]=void 0!==t.role,e["ion-focusable"]=!0,e["ion-activatable"]=!0,e),Object(a.b)(t.cssClass))}}}]);