(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{0:function(t,e,s){t.exports=s("zUnb")},zUnb:function(t,e,s){"use strict";s.r(e);var o=s("fXoL"),n=s("jhN1"),r=s("R1ws"),c=s("AcyG"),i=s("xuHu"),a=s("/wON"),b=s("tyNb");const u=[];let h=(()=>{class t{}return t.\u0275mod=o.Fb({type:t}),t.\u0275inj=o.Eb({factory:function(e){return new(e||t)},imports:[[b.a.forRoot(u)],b.a]}),t})();var l=s("XNiG"),d=s("iq5f"),p=s("xgIS"),f=s("R0Ic");const w=Object(f.j)("onOffSvg",[Object(f.g)("wakeUp",Object(f.h)({stroke:"#0e2839"})),Object(f.g)("sleep",Object(f.h)({stroke:"#cccccc"})),Object(f.i)("wakeUp => sleep",[Object(f.e)("1s")]),Object(f.i)("sleep => wakeUp",[Object(f.e)("0.5s")])]);var g=s("eIep");let S=(()=>{class t{}return t.type="[Bono] State",t})(),v=(()=>{class t{}return t.type="[Bono] StateChange",t})();var y=s("ofXK");const O=["layer1"];let m=(()=>{class t{constructor(t,e){this.store=t,this.cdref=e,this.svgSubject$=new l.a,this.svgSub$=new d.SubSink,this.feliz={d:"m 17.712164,11.468389 a 7.6833334,6.5297031 0 0 1 -3.841667,5.654888 7.6833334,6.5297031 0 0 1 -7.6833334,0 7.6833334,6.5297031 0 0 1 -3.8416665,-5.654889 l 7.6833339,1e-6 z",t:"scale(1)"},this.triste={d:"m 17.712164,-17.999853 a 7.6833334,6.5297031 0 0 1 -3.841667,5.654889 7.6833334,6.5297031 0 0 1 -7.6833334,0 7.6833334,6.5297031 0 0 1 -3.8416665,-5.654889 l 7.6833339,0 z",t:"scale(1,-1)"}}ngOnDestroy(){this.svgSub$.unsubscribe()}ngAfterViewInit(){this.svgSub$.add(this.bonoInitState(),this.toggleStatus()),this.cdref.detectChanges()}toggleStatus(){return Object(p.a)(this.layer.nativeElement,"click").pipe(Object(g.a)(()=>this.store.dispatch(new v))).subscribe()}bonoInitState(){return this.store.select(t=>t.bono.estado).subscribe(this.svgSubject$)}}return t.\u0275fac=function(e){return new(e||t)(o.Hb(c.e),o.Hb(o.i))},t.\u0275cmp=o.Bb({type:t,selectors:[["app-on-off"]],viewQuery:function(t,e){var s;1&t&&o.cc(O,!0),2&t&&o.Xb(s=o.Sb())&&(e.layer=s.first)},decls:10,vars:9,consts:[["width","20mm","height","20mm","version","1.1","viewBox","0 0 20 20","xmlns","http://www.w3.org/2000/svg"],["layer1",""],["stroke","#0e2839"],["x",".41748","y",".42078","width","19.165","height","19.158","ry","0","fill","none","stroke-width",".83833"],["transform","matrix(0,-1,-1,0,0,0)","d","m-2.3036-8.4756a7.2962 3.2537 0 0 1-7.2962 3.2537l-2e-7 -3.2537z","fill","#f6d5ff","stroke-width",".88602"],["transform","rotate(-90)","d","m-2.3036 11.57a7.2962 3.2537 0 0 1-7.2962 3.2537l-2e-7 -3.2537z","fill","#f6d5ff","stroke-width",".88602"],["fill","#5d536c","stroke-width",".69567"]],template:function(t,e){1&t&&(o.Tb(),o.Kb(0,"svg",0,1),o.Kb(2,"g",2),o.Ub(3,"async"),o.Ib(4,"rect",3),o.Ib(5,"path",4),o.Ib(6,"path",5),o.Ib(7,"path",6),o.Ub(8,"async"),o.Ub(9,"async"),o.Jb(),o.Jb()),2&t&&(o.yb(2),o.Wb("@onOffSvg",o.Vb(3,3,e.svgSubject$)?"wakeUp":"sleep"),o.yb(5),o.zb("transform",o.Vb(8,5,e.svgSubject$)?e.feliz.t:e.triste.t)("d",o.Vb(9,7,e.svgSubject$)?e.feliz.d:e.triste.d))},pipes:[y.b],styles:["svg[_ngcontent-%COMP%]{cursor:pointer}"],data:{animation:[w]}}),t})(),j=(()=>{class t{constructor(t,e){this.cdr=t,this.store=e,this.bono$=new l.a,this.twSub$=new d.SubSink}ngAfterViewInit(){this.twSub$.add(this.toggleStatus()),this.cdr.detectChanges()}ngOnDestroy(){this.twSub$.unsubscribe()}toggleStatus(){return this.store.select(t=>t.bono.estado).subscribe(this.bono$)}}return t.\u0275fac=function(e){return new(e||t)(o.Hb(o.i),o.Hb(c.e))},t.\u0275cmp=o.Bb({type:t,selectors:[["app-root"]],decls:5,vars:3,template:function(t,e){1&t&&(o.Kb(0,"p"),o.ac(1),o.Ub(2,"async"),o.Jb(),o.Ib(3,"app-on-off"),o.Ib(4,"router-outlet")),2&t&&(o.yb(1),o.bc("",o.Vb(2,1,e.bono$)?"Active":"Disabled"," "))},directives:[m,b.b],pipes:[y.b],styles:["p[_ngcontent-%COMP%]{font:700 15px Franklin Gothic Medium;text-align:center}"]}),t})();var k=s("mrSG"),$=s("Cfvw");let I=(()=>{class t{constructor(){this.start="initAction",this.stop="stopAction",this.sub$=new d.SubSink}initSearch(){chrome.tabs.query({url:"https://www.twitch.tv/*"},t=>{this.sub$.sink=Object($.a)(t).subscribe(t=>{chrome.tabs.sendMessage(t.id,{start:this.start})})})}stopSearch(){chrome.tabs.query({url:"https://www.twitch.tv/*"},t=>{this.sub$.sink=Object($.a)(t).subscribe(t=>{chrome.tabs.sendMessage(t.id,{stop:this.stop})})}),this.sub$.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),z=(()=>{let t=class{constructor(t){this.estadoService=t,this.sub$=new d.SubSink}ngxsOnInit(t){const e=t.getState();chrome.storage.sync.get("estado",s=>{t.setState(Object.assign(Object.assign({},e),{estado:!!s.estado&&s.estado}))})}bonoStart({getState:t}){return t().estado}bonoStateChange(t){const e=t.getState();t.setState(Object.assign(Object.assign({},e),{estado:!e.estado})),e.estado?this.estadoService.stopSearch():this.estadoService.initSearch()}};return t.\u0275fac=function(e){return new(e||t)(o.Nb(I))},t.\u0275prov=o.Db({token:t,factory:t.\u0275fac}),Object(k.a)([Object(c.a)(S)],t.prototype,"bonoStart",null),Object(k.a)([Object(c.a)(v)],t.prototype,"bonoStateChange",null),t=Object(k.a)([Object(c.d)({name:"bono",defaults:{estado:!0}})],t),t})(),U=(()=>{class t{}return t.\u0275mod=o.Fb({type:t,bootstrap:[j]}),t.\u0275inj=o.Eb({factory:function(e){return new(e||t)},providers:[],imports:[[n.a,h,r.a,c.c.forRoot([z],{developmentMode:!1}),a.a.forRoot({disabled:!0}),i.a.forRoot({disabled:!0})]]}),t})();Object(o.S)(),n.b().bootstrapModule(U).catch(t=>console.error(t))},zn8P:function(t,e){function s(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}s.keys=function(){return[]},s.resolve=s,t.exports=s,s.id="zn8P"}},[[0,0,1]]]);