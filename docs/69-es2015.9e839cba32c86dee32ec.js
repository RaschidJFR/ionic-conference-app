(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{Gdks:function(e,o,t){"use strict";t.r(o),t.d(o,"ion_popover",function(){return m});var i=t("mLBW"),r=(t("TJLY"),t("9Z7W"),t("vTwt")),s=t("Jbqe"),n=t("1hGh"),p=t("7rGv");const a=(e,o,t)=>{let i="top",r="left";const s=o.querySelector(".popover-content"),n=s.getBoundingClientRect(),p=n.width,a=n.height,c=o.ownerDocument.defaultView.innerWidth,d=o.ownerDocument.defaultView.innerHeight,h=t&&t.target&&t.target.getBoundingClientRect(),v=null!=h&&"top"in h?h.top:d/2-a/2,m=null!=h&&"left"in h?h.left:c/2,u=h&&h.width||0,f=h&&h.height||0,b=o.querySelector(".popover-arrow"),w=b.getBoundingClientRect(),g=w.width,x=w.height;null==h&&(b.style.display="none");const y={top:v+f,left:m+u/2-g/2},k={top:v+f+(x-1),left:m+u/2-p/2};let D=!1,O=!1;k.left<l+25?(D=!0,k.left=l):p+l+k.left+25>c&&(O=!0,k.left=c-p-l,r="right"),v+f+a>d&&v-a>0?(y.top=v-(x+1),k.top=v-a-(x-1),o.className=o.className+" popover-bottom",i="bottom"):v+f+a>d&&(s.style.bottom=l+"%"),b.style.top=y.top+"px",b.style.left=y.left+"px",s.style.top=k.top+"px",s.style.left=k.left+"px",D&&(s.style.left=`calc(${k.left}px + var(--ion-safe-area-left, 0px))`),O&&(s.style.left=`calc(${k.left}px - var(--ion-safe-area-right, 0px))`),s.style.transformOrigin=i+" "+r;const j=new e,E=new e;E.addElement(o.querySelector("ion-backdrop")),E.fromTo("opacity",.01,.08);const P=new e;return P.addElement(o.querySelector(".popover-wrapper")),P.fromTo("opacity",.01,1),Promise.resolve(j.addElement(o).easing("ease").duration(100).add(E).add(P))},l=5,c=(e,o)=>{const t=new e,i=new e;i.addElement(o.querySelector("ion-backdrop"));const r=new e;return r.addElement(o.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),i.fromTo("opacity",.08,0),Promise.resolve(t.addElement(o).easing("ease").duration(500).add(i).add(r))},d=(e,o,t)=>{const i=o.ownerDocument,r="rtl"===i.dir;let s="top",n=r?"right":"left";const p=o.querySelector(".popover-content"),a=p.getBoundingClientRect(),l=a.width,c=a.height,d=i.defaultView.innerWidth,v=i.defaultView.innerHeight,m=t&&t.target&&t.target.getBoundingClientRect(),u=null!=m&&"bottom"in m?m.bottom:v/2-c/2,f=m&&m.height||0,b={top:u,left:null!=m&&"left"in m?r?m.left-l+m.width:m.left:d/2-l/2};b.left<h?(b.left=h,n="left"):l+h+b.left>d&&(b.left=d-l-h,n="right"),u+f+c>v&&u-c>0?(b.top=u-c-f,o.className=o.className+" popover-bottom",s="bottom"):u+f+c>v&&(p.style.bottom=h+"px"),p.style.top=b.top+"px",p.style.left=b.left+"px",p.style.transformOrigin=s+" "+n;const w=new e,g=new e;g.addElement(o.querySelector("ion-backdrop")),g.fromTo("opacity",.01,.32);const x=new e;x.addElement(o.querySelector(".popover-wrapper")),x.fromTo("opacity",.01,1);const y=new e;y.addElement(o.querySelector(".popover-content")),y.fromTo("scale",.001,1);const k=new e;return k.addElement(o.querySelector(".popover-viewport")),k.fromTo("opacity",.01,1),Promise.resolve(w.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(g).add(x).add(y).add(k))},h=12,v=(e,o)=>{const t=new e,i=new e;i.addElement(o.querySelector("ion-backdrop"));const r=new e;return r.addElement(o.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),i.fromTo("opacity",.32,0),Promise.resolve(t.addElement(o).easing("ease").duration(500).add(i).add(r))};class m{constructor(e){Object(i.m)(this,e),this.presented=!1,this.mode=Object(i.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.didPresent=Object(i.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(i.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(i.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(i.d)(this,"ionPopoverDidDismiss",7)}onDismiss(e){e.stopPropagation(),e.preventDefault(),this.dismiss()}onBackdropTap(){this.dismiss(void 0,r.a)}lifecycle(e){const o=this.usersElement,t=u[e.type];if(o&&t){const i=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(i)}}async present(){if(this.presented)return;const e=this.el.querySelector(".popover-content");if(!e)throw new Error("container is undefined");const o=Object.assign({},this.componentProps,{popover:this.el});return this.usersElement=await Object(n.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],o),await Object(p.a)(this.usersElement),Object(r.e)(this,"popoverEnter",a,d,this.event)}async dismiss(e,o){const t=await Object(r.f)(this,e,o,"popoverLeave",c,v,this.event);return t&&await Object(n.b)(this.delegate,this.usersElement),t}onDidDismiss(){return Object(r.g)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return Object(r.g)(this.el,"ionPopoverWillDismiss")}hostData(){const e=Object(i.e)(this);return{"aria-modal":"true","no-router":!0,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(s.b)(this.cssClass),{[e]:!0,"popover-translucent":this.translucent})}}__stencil_render(){return[Object(i.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(i.i)("div",{class:"popover-wrapper"},Object(i.i)("div",{class:"popover-arrow"}),Object(i.i)("div",{class:"popover-content"}))]}get el(){return Object(i.f)(this)}render(){return Object(i.i)(i.a,this.hostData(),this.__stencil_render())}static get style(){return'.sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}'}}const u={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);