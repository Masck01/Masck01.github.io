(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{EF3e:function(t,e,s){"use strict";s.r(e),s.d(e,"Content",(function(){return u}));var n=s("XNiG"),i=s("3E0/"),o=s("pLZG"),r=s("lJxs"),c=s("Cfvw"),a=s("iq5f");class u{constructor(){this.start="initAction",this.stop="stopAction",this.svgSubject$=new n.a,this.contentSub$=new a.SubSink,this.touchPuntos=t=>t.click(),this.checkTwpoints(),this.addListeners(),this.mutationObserver=new MutationObserver(this.callback),this.contentSub$.sink=this.svgSubject$.pipe(Object(i.a)(3e3)).subscribe(t=>{!0===t&&this.startMutationObserver()})}callback(t){Object(c.a)(t).pipe(Object(o.a)(t=>null!==t.target.querySelector("button.tw-button.tw-button--success.tw-interactive")),Object(r.a)(t=>t.target.querySelector("button.tw-button.tw-button--success.tw-interactive"))).subscribe(t=>t.click())}checkTwpoints(){chrome.storage.sync.get("estado",t=>{this.svgSubject$.next(!0===t.estado&&t.estado)})}stopMutationObserver(){this.mutationObserver.disconnect(),this.contentSub$.unsubscribe(),chrome.runtime.sendMessage({stop:this.stop}),chrome.storage.sync.remove("estado")}startMutationObserver(){chrome.storage.sync.set({estado:!0}),chrome.runtime.sendMessage({start:this.start});const t=document.querySelector("[data-test-selector=chat-input-buttons-container]");this.mutationObserver.observe(t,{childList:!0,subtree:!0,attributes:!0})}addListeners(){chrome.runtime.onMessage.addListener((t,e,s)=>{t.start===this.start&&this.startMutationObserver(),t.stop===this.stop&&this.stopMutationObserver()})}}new u}},[["EF3e",0,1]]]);