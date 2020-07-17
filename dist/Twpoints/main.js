(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _twapp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./twapp.component */ "./src/app/twapp.component.ts");
/* harmony import */ var _on_off_on_off_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./on-off/on-off.component */ "./src/app/on-off/on-off.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_twapp_component__WEBPACK_IMPORTED_MODULE_4__["TwAppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_twapp_component__WEBPACK_IMPORTED_MODULE_4__["TwAppComponent"], _on_off_on_off_component__WEBPACK_IMPORTED_MODULE_5__["OnOffComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_twapp_component__WEBPACK_IMPORTED_MODULE_4__["TwAppComponent"], _on_off_on_off_component__WEBPACK_IMPORTED_MODULE_5__["OnOffComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]],
                providers: [],
                bootstrap: [_twapp_component__WEBPACK_IMPORTED_MODULE_4__["TwAppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/on-off/on-off.component.ts":
/*!********************************************!*\
  !*** ./src/app/on-off/on-off.component.ts ***!
  \********************************************/
/*! exports provided: OnOffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnOffComponent", function() { return OnOffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _svg_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg-animations */ "./src/app/on-off/svg-animations.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["layer1"];
class OnOffComponent {
    constructor(cdr) {
        this.cdr = cdr;
        // Front Stream
        this.svgSubject$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // States of Smile
        this.feliz = {
            d: 'm 17.712164,11.468389 a 7.6833334,6.5297031 0 0 1 -3.841667,5.654888 7.6833334,6.5297031 0 0 1 -7.6833334,0 7.6833334,6.5297031 0 0 1 -3.8416665,-5.654889 l 7.6833339,1e-6 z',
            t: 'scale(1)',
        };
        this.triste = {
            d: 'm 17.712164,-17.999853 a 7.6833334,6.5297031 0 0 1 -3.841667,5.654889 7.6833334,6.5297031 0 0 1 -7.6833334,0 7.6833334,6.5297031 0 0 1 -3.8416665,-5.654889 l 7.6833339,0 z',
            t: 'scale(1,-1)',
        };
    }
    // Prevent memory leaks
    ngOnDestroy() {
        this.svgState$.unsubscribe();
    }
    // Directives of Subscription starts
    ngAfterViewInit() {
        this.svgClick$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.layer.nativeElement, 'click');
        this.svgState$ = this.svgClick$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])((acc) => {
            this.svgSubject$.emit(acc);
            return !acc;
        }, true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.svgSubject$.asObservable()))
            .subscribe();
        // Expresion changed after it was checked. Solver
        this.cdr.detectChanges();
    }
}
OnOffComponent.ɵfac = function OnOffComponent_Factory(t) { return new (t || OnOffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
OnOffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnOffComponent, selectors: [["app-on-off"]], viewQuery: function OnOffComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.layer = _t.first);
    } }, outputs: { svgSubject$: "svgSubject$" }, decls: 10, vars: 9, consts: [["width", "20mm", "height", "20mm", "version", "1.1", "viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg"], ["layer1", ""], ["stroke", "#0e2839"], ["x", ".41748", "y", ".42078", "width", "19.165", "height", "19.158", "ry", "0", "fill", "none", "stroke-width", ".83833"], ["transform", "matrix(0,-1,-1,0,0,0)", "d", "m-2.3036-8.4756a7.2962 3.2537 0 0 1-7.2962 3.2537l-2e-7 -3.2537z", "fill", "#f6d5ff", "stroke-width", ".88602"], ["transform", "rotate(-90)", "d", "m-2.3036 11.57a7.2962 3.2537 0 0 1-7.2962 3.2537l-2e-7 -3.2537z", "fill", "#f6d5ff", "stroke-width", ".88602"], ["fill", "#5d536c", "stroke-width", ".69567"]], template: function OnOffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@onOffSvg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.svgSubject$) ? "wakeUp" : "sleep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx.svgSubject$) ? ctx.feliz.t : ctx.triste.t)("d", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, ctx.svgSubject$) ? ctx.feliz.d : ctx.triste.d);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["svg[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb24tb2ZmL29uLW9mZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL29uLW9mZi9vbi1vZmYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInN2ZyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"], data: { animation: [_svg_animations__WEBPACK_IMPORTED_MODULE_2__["svgAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnOffComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-on-off',
                animations: [_svg_animations__WEBPACK_IMPORTED_MODULE_2__["svgAnimations"]],
                templateUrl: './on-off.component.svg',
                styleUrls: ['./on-off.component.css'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { svgSubject$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], layer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['layer1']
        }] }); })();


/***/ }),

/***/ "./src/app/on-off/svg-animations.ts":
/*!******************************************!*\
  !*** ./src/app/on-off/svg-animations.ts ***!
  \******************************************/
/*! exports provided: svgAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgAnimations", function() { return svgAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const svgAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('onOffSvg', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('wakeUp', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        stroke: '#0e2839',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('sleep', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        stroke: '#cccccc',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('wakeUp => sleep', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s')]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('sleep => wakeUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')]),
]);


/***/ }),

/***/ "./src/app/twapp.component.ts":
/*!************************************!*\
  !*** ./src/app/twapp.component.ts ***!
  \************************************/
/*! exports provided: TwAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwAppComponent", function() { return TwAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _on_off_on_off_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-off/on-off.component */ "./src/app/on-off/on-off.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class TwAppComponent {
    constructor(cdr) {
        this.cdr = cdr;
        // Object actions
        this.actions = {
            start: 'initAction',
            stop: 'stopAction',
        };
        // Initial Stream
        this.active$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.puntos = 'document.querySelector("[data-test-selector=chat-input-buttons-container]")';
        this.puntos2 = 'document.getElementsByClassName("tw-button tw-button--success tw-interactive")';
        this.puntos3 = 'document.querySelector("[data-test-selector=community-points-summary]")';
    }
    // Check for ExpressionChangedAfterItHasBeenCheckedError
    ngAfterViewInit() {
        this.sub$ = this.active$.asObservable().subscribe({
            next: (val) => {
                if (val) {
                    console.log('init Search');
                    this.initSearch();
                }
                else if (val === false) {
                    this.stopSearch();
                }
                else {
                    throw new Error();
                }
            },
            error: console.error,
            complete: () => console.log('Finalizado'),
        });
        this.cdr.detectChanges();
    }
    // Send Mssg to content.ts
    toggleStrmBtn(svgState) {
        this.active$.next(svgState);
    }
    initSearch() {
        chrome.tabs.query({ active: true, currentWindow: true }, (result) => {
            chrome.tabs.sendMessage(result[0].id, { start: this.actions.start }, (response) => {
                console.log('Enviando initSearch', response);
            });
        });
    }
    stopSearch() {
        chrome.tabs.query({ active: true, currentWindow: true }, (result) => {
            chrome.tabs.sendMessage(result[0].id, { stop: this.actions.stop }, (response) => {
                console.log('Enviando stopSearch', response);
            });
        });
    }
}
TwAppComponent.ɵfac = function TwAppComponent_Factory(t) { return new (t || TwAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
TwAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwAppComponent, selectors: [["app-root"]], decls: 5, vars: 3, consts: [[3, "svgSubject$"]], template: function TwAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-on-off", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("svgSubject$", function TwAppComponent_Template_app_on_off_svgSubject__4_listener($event) { return ctx.toggleStrmBtn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("El buscador se encuentra ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.active$) ? "activo" : "inactivo", " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _on_off_on_off_component__WEBPACK_IMPORTED_MODULE_3__["OnOffComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3YXBwLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './twapp.component.html',
                styleUrls: ['./twapp.component.css'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\drean\source\repos\Twpoints\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map