(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "./src/app/post-detail/post-detail.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _pull_post_pull_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pull-post/pull-post.component */ "./src/app/pull-post/pull-post.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./community/community.component */ "./src/app/community/community.component.ts");










var routes = [
    { path: '', redirectTo: '/homepage', pathMatch: "full" },
    { path: 'homepage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
    { path: 'community', component: _community_community_component__WEBPACK_IMPORTED_MODULE_9__["CommunityComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'community/:community', component: _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"] },
    { path: 'community/:community/pullpost', component: _pull_post_pull_post_component__WEBPACK_IMPORTED_MODULE_7__["PullPostComponent"] },
    { path: 'community/:community/post/:id', component: _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__["PostDetailComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul\r\n{\r\n  list-style-type: none;\r\n  margin: 10;\r\n  padding: 0;\r\n}\r\nli\r\n{\r\n  display: inline;\r\n  margin: 10;\r\n}\r\nbody\r\n{\r\n  margin:0px;\r\n  height:100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWxcclxue1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDEwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxubGlcclxue1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBtYXJnaW46IDEwO1xyXG59XHJcbmJvZHlcclxue1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html style=\"background:rgb(224, 254, 255)\">\n  <head>\n\n  </head>\n  <body>\n    <div>\n        <ul>\n          <li><button mat-raised-button color=\"primary\" routerLink=\"/homepage\">开花论坛</button></li>\n          <li><button mat-raised-button color=\"primary\" routerLink=\"/community\">板块</button></li>\n          <li style=\"float:right\" *ngIf=\"!islogin\">\n            <button mat-raised-button color=\"primary\" routerLink=\"/register\">注册</button>\n          </li>\n          <li style=\"float:right\" *ngIf=\"!islogin\">\n            <button mat-raised-button color=\"primary\" routerLink=\"/login\">登录</button>\n          </li>\n        </ul>\n    </div>\n    <hr />\n\n    <router-outlet></router-outlet>\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.islogin = false;
        this.title = 'BBS';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "./src/app/post-detail/post-detail.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./community/community.component */ "./src/app/community/community.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _pull_post_pull_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pull-post/pull-post.component */ "./src/app/pull-post/pull-post.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");




















function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_13__["PostDetailComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_14__["PostComponent"],
                _community_community_component__WEBPACK_IMPORTED_MODULE_15__["CommunityComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_16__["HomepageComponent"],
                _pull_post_pull_post_component__WEBPACK_IMPORTED_MODULE_17__["PullPostComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"]
            ],
            imports: [
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:4000'],
                        blacklistedRoutes: ['localhost:4000/api/auth']
                    }
                }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_6__["InMemoryDataService"], { dataEncapsulation: false }),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/community/community.component.css":
/*!***************************************************!*\
  !*** ./src/app/community/community.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\r\n  background: rgb(132, 168, 245);\r\n}\r\n/*\r\nmat-card{\r\n    width:25%;\r\n    float:left;\r\n    background: rgb(27, 162, 240);\r\n    height: 100px;\r\n}*/\r\nbutton{\r\n    text-align: center;\r\n    padding: 30px;\r\n    font-size: 40px;\r\n}\r\nul\r\n{\r\n    list-style-type: none;\r\n}\r\n.top{\r\n    text-align: center;\r\n}\r\n.grid{\r\n    width: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbXVuaXR5L2NvbW11bml0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7Ozs7OztFQU1FO0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bml0eS9jb21tdW5pdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLXRpbGUge1xyXG4gIGJhY2tncm91bmQ6IHJnYigxMzIsIDE2OCwgMjQ1KTtcclxufVxyXG4vKlxyXG5tYXQtY2FyZHtcclxuICAgIHdpZHRoOjI1JTtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjcsIDE2MiwgMjQwKTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn0qL1xyXG5idXR0b257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbnVsXHJcbntcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4udG9we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ncmlke1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/community/community.component.html":
/*!****************************************************!*\
  !*** ./src/app/community/community.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>板块一览</p>\n</div>\n<div class=\"top\">\n  <mat-grid-list cols='3' rowHeight=\"2:1\" role=\"list\">\n    <div class=\"grid\" role=\"listitem\">\n      <mat-grid-tile *ngFor=\"let community of communities\" routerLink=\"/community/{{community.id}}\">\n        {{community.name}}\n      </mat-grid-tile>\n    </div>\n  </mat-grid-list>\n  <!--\n  <ul>\n    <li>\n      <mat-card style=\"background:rgb(27, 158, 240)\">\n        <mat-card-content>\n          <span>板块名称</span>\n          <span style=\"float:right\">开贴时间</span>\n        </mat-card-content>\n      </mat-card>\n    </li>\n    <li *ngFor=\"let community of communities\">\n      <mat-card tabindex=\"0\" routerLink=\"/community/{{community.id}}\" style=\"background:rgb(120, 196, 243)\">\n        <mat-card-content>\n          <span>{{community.name}}</span>\n        </mat-card-content>\n      </mat-card>\n    </li>\n  </ul>\n    -->\n</div>\n"

/***/ }),

/***/ "./src/app/community/community.component.ts":
/*!**************************************************!*\
  !*** ./src/app/community/community.component.ts ***!
  \**************************************************/
/*! exports provided: CommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityComponent", function() { return CommunityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var CommunityComponent = /** @class */ (function () {
    function CommunityComponent(httpService) {
        this.httpService = httpService;
    }
    CommunityComponent.prototype.ngOnInit = function () {
        this.getCommunities();
    };
    CommunityComponent.prototype.getCommunities = function () {
        var _this = this;
        this.httpService.getCommunities().subscribe(function (communities) { return _this.communities = communities; });
    };
    CommunityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-community',
            template: __webpack_require__(/*! ./community.component.html */ "./src/app/community/community.component.html"),
            styles: [__webpack_require__(/*! ./community.component.css */ "./src/app/community/community.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], CommunityComponent);
    return CommunityComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p\r\n{\r\n    text-align: center;\r\n    background-color: skyblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInBcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 style=\"text-align:center\">\n    欢迎来到开花论坛\n  </h2>\n  <div style=\"text-align:center\">\n    <img src=\"../../assets/bg1.jpg\" alt=\"poi~poi~\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorzation': 'my-auth-token'
    })
};
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.communityUrl = '/communities';
        this.userUrl = '/users';
    }
    //登录
    HttpService.prototype.sendLogin = function (user) {
        return this.http.post(this.userUrl, user, httpOptions);
    };
    //请求板块列表
    HttpService.prototype.getCommunities = function () {
        return this.http.get(this.communityUrl);
    };
    //请求某一板块
    HttpService.prototype.getCommunity = function (id) {
        var url = this.communityUrl + "/" + id;
        return this.http.get(url);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    //date1:Date;
    InMemoryDataService.prototype.createDb = function () {
        /*
        this.date1=new Date();
        this.date1.setDate(19);
        this.date1.setFullYear(2019);
        this.date1.setMonth(3);
        */
        var posts = [
            { id: 1, title: '特大消息，特大消息！！！', author: 'gty', initTime: '2019-03-19', content: "最近A市发生特大地震" },
            { id: 2, title: '第二个帖子', author: 'yym', initTime: '2019-03-20', content: "我是正文" },
            { id: 3, author: 'yym', initTime: '2019-04-11', content: "那我们要当心哦", parentId: 1 },
            { id: 4, author: '犹豫，就会败北', initTime: '2019-04-12', content: "什么？我就在A市我怎么不知道", parentId: 1 }
        ];
        var communities = [
            { name: "java", id: "123123" },
            { name: "js", id: "12331243" },
            { name: "ts", id: "12331" },
            { name: "C", id: "123313" },
            { name: "C++", id: "121243" },
            { name: "C#", id: "1233" }
        ];
        return { communities: communities };
    };
    InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n}\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n.title{\r\n  font-size: 38px;\r\n  text-align: center;\r\n  height: 56px;\r\n  line-height: 56px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n}\r\n.login{\r\n  float: left;\r\n  margin-left: 60px;\r\n}\r\n.register{\r\n  float: right;\r\n  margin-right: 400px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG4ubG9naW57XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuLnJlZ2lzdGVye1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <span class=\"title\">登录</span>\n</div>\n<form class=\"example-form\">\n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"用户名\" #username />\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"password\" placeholder=\"密码\" #password />\n    </mat-form-field>\n  </div>\n</form>\n\n<button mat-raised-button color=\"primary\" class=\"login\"\n  (click)=\"submit(username.value,password.value);password.value=''\">\n  登录\n</button>\n<button mat-raised-button color=\"primary\" routerLink=\"/register\" class=\"register\">注册</button>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(myhttp, app) {
        this.myhttp = myhttp;
        this.app = app;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function (username, password) {
        username = username.trim();
        password = password.trim();
        if (!username) {
            return;
        }
        this.myhttp.sendLogin({ username: username, password: password }).subscribe(function (result) { return console.log(); });
        this.app.islogin = true;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/post-detail/post-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/post-detail/post-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    border-color: gray;\r\n    border-collapse: separate;\r\n    border-spacing: 2px;\r\n}\r\n\r\ntr{\r\n    height:200px;\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\ntd{\r\n    vertical-align:top;\r\n    line-height: 1.83em;\r\n    word-wrap: break-word;\r\n    word-break: break-all;\r\n}\r\n\r\n.left{\r\n    /*width: 180px;*/\r\n    width: 25%;\r\n    background-color: rgb(97, 159, 252);\r\n}\r\n\r\n.right{\r\n    padding-top:1px;\r\n    /*width:500px*/\r\n    width:75%;\r\n    background-color: rgb(172, 201, 255);\r\n}\r\n\r\n.title{\r\n    font-size:30px;\r\n}\r\n\r\n.time{\r\n    font-size: 15px;\r\n    float: right;\r\n}\r\n\r\ntbody{\r\n    display:table-row-group;\r\n    vertical-align: center;\r\n}\r\n\r\nh3{\r\n    margin-top: 0%;\r\n}\r\n\r\n.responseTitle{\r\n    font-size: 20px;\r\n    padding-left: 5px;\r\n}\r\n\r\ntextarea\r\n{\r\n    font-family: Verdana, Tahoma, Arial, \"Microsoft YaHei\", \"Hiragino Sans GB\", \"WenQuanYi Micro Hei\", sans-serif;\r\n    width: 98%;\r\n    height: 25em;\r\n    line-height: 1.583em;\r\n    background-color: rgb(221, 241, 247);\r\n}\r\n\r\n.mat-card{\r\n    width:50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixtQ0FBbUM7QUFDdkM7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFNBQVM7SUFDVCxvQ0FBb0M7QUFDeEM7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBQ0E7O0lBRUksNkdBQTZHO0lBQzdHLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG9DQUFvQztBQUN4Qzs7QUFDQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtZGV0YWlsL3Bvc3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JheTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG50cntcclxuICAgIGhlaWdodDoyMDBweDtcclxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcbnRke1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODNlbTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxuLmxlZnR7XHJcbiAgICAvKndpZHRoOiAxODBweDsqL1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMTU5LCAyNTIpO1xyXG59XHJcbi5yaWdodHtcclxuICAgIHBhZGRpbmctdG9wOjFweDtcclxuICAgIC8qd2lkdGg6NTAwcHgqL1xyXG4gICAgd2lkdGg6NzUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MiwgMjAxLCAyNTUpO1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG59XHJcbi50aW1le1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG50Ym9keXtcclxuICAgIGRpc3BsYXk6dGFibGUtcm93LWdyb3VwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oM3tcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG59XHJcbi5yZXNwb25zZVRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxudGV4dGFyZWFcclxue1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIFRhaG9tYSwgQXJpYWwsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIldlblF1YW5ZaSBNaWNybyBIZWlcIiwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDI1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ODNlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDI0MSwgMjQ3KTtcclxufVxyXG4ubWF0LWNhcmR7XHJcbiAgICB3aWR0aDo1MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/post-detail/post-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/post-detail/post-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<b class=\"title\">{{post.title}}</b>\r\n<button mat-raised-button color=\"primary\" (click)=\"goBack()\" style=\"float:right\">返回</button>\r\n<table style=\"width:100%\">\r\n  <tbody>\r\n    <div>\r\n      <tr>\r\n        <td style=\"vertical-align:top\" class=\"left\">\r\n          <span>\r\n            <div>\r\n              <span>楼主:</span>\r\n            </div>\r\n            <div style=\"text-align:center\">\r\n              <span>{{post.author}}</span>\r\n            </div>\r\n          </span>\r\n        </td>\r\n        <mat-divider [vertical]=\"true\">\r\n        </mat-divider>\r\n        <td class=\"right\">\r\n          <div style=\"text-align:right\">\r\n            <span style=\"font-size:15px\">{{post.initTime}}</span>\r\n          </div>\r\n          <span>{{post.content}}</span>\r\n        </td>\r\n      </tr>\r\n      <mat-divider style=\"width:100%\"></mat-divider>\r\n    </div>\r\n    <div *ngFor=\"let posts of responsePosts\">\r\n      <tr>\r\n        <td style=\"vertical-align:top\" class=\"left\">\r\n          <span>\r\n            <div style=\"text-align:center\">\r\n              <span>{{posts.author}}</span>\r\n            </div>\r\n          </span>\r\n        </td>\r\n        <mat-divider [vertical]=\"true\">\r\n        </mat-divider>\r\n        <td class=\"right\">\r\n          <div style=\"text-align:right\">\r\n            <span style=\"font-size:15px\">{{posts.initTime}}</span>\r\n          </div>\r\n          <span>{{posts.content}}</span>\r\n        </td>\r\n      </tr>\r\n      <mat-divider></mat-divider>\r\n    </div>\r\n  </tbody>\r\n</table>\r\n<hr />\r\n<div name=\"res\" id=\"res\">\r\n  <div style=\"padding-top:40px\">\r\n    <mat-card tabindex=\"0\" style=\"background:rgb(120, 196, 243)\" class=\"mat-card\">\r\n      <mat-card-content >\r\n        <img src=\"../../assets/icon/pen.png\" width=\"20\" height=\"20\"/>\r\n        <span class=\"responseTitle\">发表回复</span>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <textarea #content></textarea>\r\n  <div style=\"text-align:center\">  \r\n    <button mat-raised-button color=\"primary\" (click)=\"commit(content.value,content.value)\">提交</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/post-detail/post-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/post-detail/post-detail.component.ts ***!
  \******************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");





var PostDetailComponent = /** @class */ (function () {
    function PostDetailComponent(postService, router, location) {
        this.postService = postService;
        this.router = router;
        this.location = location;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        this.parentId = this.router.snapshot.paramMap.get('id');
        this.getPost();
        this.getResponse();
        this.community = this.router.snapshot.paramMap.get('community');
        console.log(this.community);
    };
    //请求当前的第一个帖子
    PostDetailComponent.prototype.getPost = function () {
        var _this = this;
        this.postService.getPosts(this.parentId).subscribe(function (post) { return _this.post = post.find(function (post) { return post.id == _this.parentId; }); });
    };
    //请求当前第一个帖子的所有回帖
    PostDetailComponent.prototype.getResponse = function () {
        var _this = this;
        this.postService.getResPosts(this.parentId).subscribe(function (posts) { return _this.responsePosts = posts; });
        console.log("我请求了，鬼知道有没有拿到");
    };
    //回帖
    PostDetailComponent.prototype.commit = function (content) {
        var _this = this;
        content = content.trim();
        var parentId = this.parentId;
        var community = this.community;
        this.postService.addPost({ content: content, parentId: parentId, community: community }).subscribe(function (post) { return _this.responsePosts.push(post); });
        alert("回帖成功 ");
    };
    PostDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PostDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-detail',
            template: __webpack_require__(/*! ./post-detail.component.html */ "./src/app/post-detail/post-detail.component.html"),
            styles: [__webpack_require__(/*! ./post-detail.component.css */ "./src/app/post-detail/post-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], PostDetailComponent);
    return PostDetailComponent;
}());



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorzation': 'my-auth-token'
    })
};
var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.postsUrl = '/posts';
    }
    //请求板块id为community的帖子
    PostService.prototype.getPosts = function (community) {
        var url = this.postsUrl + "?community=" + community;
        return this.http.get(url);
    };
    //请求帖子id为id的所有回帖
    PostService.prototype.getResPosts = function (id) {
        var url = this.postsUrl + "/" + id;
        return this.http.get(url);
    };
    //请求板块id为community的所有置顶帖
    PostService.prototype.getTopposts = function (community) {
        var topurl = this.postsUrl + "/top?community=" + community;
        return this.http.get(topurl);
    };
    //向服务器发帖
    PostService.prototype.addPost = function (post) {
        return this.http.post(this.postsUrl, post, httpOptions);
    };
    //回帖
    PostService.prototype.replyPost = function (post) {
        var replyUrl = this.postsUrl + "/" + post.parentId;
        return this.http.post(replyUrl, post, httpOptions);
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul\r\n{\r\n    list-style-type: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUkscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bFxyXG57XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 style=\"text-align:center\">欢迎来到开花论坛</h2>\n  <ul>\n    <li>\n      <mat-card style=\"background:rgb(27, 158, 240)\">\n        <mat-card-content>\n          <span>标题</span>\n          <span style=\"float:right\">开贴时间</span>\n        </mat-card-content>\n      </mat-card>\n    </li>\n    <li *ngFor=\"let toppost of topposts\">\n      <mat-card tabindex=\"0\" routerLink=\"/post/{{toppost.id}}\" style=\"background:rgb(120, 196, 243)\">\n        <mat-card-content>\n          <span>{{toppost.title}}</span>\n          <span style=\"float:right\">{{toppost.initTime}}</span>\n        </mat-card-content>\n      </mat-card>\n    </li>\n    <mat-divider></mat-divider>\n    <li *ngFor=\"let post of posts\">\n      <mat-card tabindex=\"0\" routerLink=\"/post/{{post.id}}\" style=\"background:rgb(120, 196, 243)\">\n        <mat-card-content>\n          <span>{{post.title}}</span>\n          <span style=\"float:right\">{{post.initTime}}</span>\n        </mat-card-content>\n      </mat-card>\n    </li>\n  </ul>\n  <div>\n    <button mat-raised-button color=\"primary\" routerLink=\"/community/{{community}}/pullpost\">发帖</button>\n  </div>\n  <hr />\n  <div>\n    <p>标题</p>\n    <input #postTitle />\n    <p>正文</p>\n    <textarea #postContent></textarea>\n    <button mat-raised-button color=\"primary\"\n      (click)=\"pullPost(postTitle.value,postContent.value);postTitle.value='';postContent.value=''\">发表新帖</button>\n    <button mat-raised-button color=\"primary\" (click)=\"goBack()\">返回</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");




var PostComponent = /** @class */ (function () {
    function PostComponent(postService, router) {
        this.postService = postService;
        this.router = router;
    }
    PostComponent.prototype.ngOnInit = function () {
        this.community = this.router.snapshot.paramMap.get('community');
        this.getPosted();
        this.getTopposts();
        //this.now=new Date;
        //console.log(this.now.getMonth());
        console.log("我出生了");
    };
    //请求当前板块内所有帖子
    PostComponent.prototype.getPosted = function () {
        var _this = this;
        this.postService.getPosts(this.community).subscribe(function (posts) { return _this.posts = posts; });
    };
    //请求当前板块内置顶帖子
    PostComponent.prototype.getTopposts = function () {
        var _this = this;
        this.postService.getTopposts(this.community).subscribe(function (posts) { return _this.topposts = posts; });
    };
    //发帖
    PostComponent.prototype.pullPost = function (title, content) {
        var _this = this;
        title = title.trim();
        content = content.trim();
        var community = this.community;
        if (!title) {
            return;
        }
        this.postService.addPost({ title: title, content: content, community: community }).subscribe(function (post) { _this.posts.push(post); });
        alert("发帖成功 ");
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/pull-post/pull-post.component.css":
/*!***************************************************!*\
  !*** ./src/app/pull-post/pull-post.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body\r\n{\r\n    height: 100%;\r\n}\r\np\r\n{\r\n    font-family: Verdana, Tahoma, Arial, \"Microsoft YaHei\", \"Hiragino Sans GB\", \"WenQuanYi Micro Hei\", sans-serif;\r\n}\r\ninput\r\n{\r\n    width: 98%;\r\n    background-color: rgb(221, 241, 247);\r\n}\r\ntextarea\r\n{\r\n    font-family: Verdana, Tahoma, Arial, \"Microsoft YaHei\", \"Hiragino Sans GB\", \"WenQuanYi Micro Hei\", sans-serif;\r\n    width: 98%;\r\n    height: 25em;\r\n    line-height: 1.583em;\r\n    background-color: rgb(221, 241, 247);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVsbC1wb3N0L3B1bGwtcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSw2R0FBNkc7QUFDakg7QUFDQTs7SUFFSSxVQUFVO0lBQ1Ysb0NBQW9DO0FBQ3hDO0FBQ0E7O0lBRUksNkdBQTZHO0lBQzdHLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3B1bGwtcG9zdC9wdWxsLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHlcclxue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbnBcclxue1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIFRhaG9tYSwgQXJpYWwsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIldlblF1YW5ZaSBNaWNybyBIZWlcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5pbnB1dFxyXG57XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjQxLCAyNDcpO1xyXG59XHJcbnRleHRhcmVhXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBUYWhvbWEsIEFyaWFsLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJXZW5RdWFuWWkgTWljcm8gSGVpXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgaGVpZ2h0OiAyNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTgzZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyNDEsIDI0Nyk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pull-post/pull-post.component.html":
/*!****************************************************!*\
  !*** ./src/app/pull-post/pull-post.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>标题</p>\n  <input #postTitle />\n  <p>正文</p>\n  <textarea #postContent></textarea>\n  <button mat-raised-button color=\"primary\"\n    (click)=\"pullPost(postTitle.value,postContent.value,postContent.value)\">发表新帖</button>\n  <button mat-raised-button color=\"primary\" (click)=\"goBack()\">返回</button>\n</div>"

/***/ }),

/***/ "./src/app/pull-post/pull-post.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pull-post/pull-post.component.ts ***!
  \**************************************************/
/*! exports provided: PullPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PullPostComponent", function() { return PullPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");





var PullPostComponent = /** @class */ (function () {
    function PullPostComponent(postService, location, router) {
        this.postService = postService;
        this.location = location;
        this.router = router;
    }
    PullPostComponent.prototype.ngOnInit = function () {
        this.community = this.router.snapshot.paramMap.get('community');
        //this.community=this.postComponent.community;
        console.log(this.community);
    };
    PullPostComponent.prototype.pullPost = function (title, content) {
        var _this = this;
        title = title.trim();
        content = content.trim();
        var community = this.community;
        if (!title) {
            return;
        }
        this.postService.addPost({ title: title, content: content, community: community }).subscribe(function () { _this.location.back(); });
        alert("发帖成功 ");
        this.goBack();
    };
    PullPostComponent.prototype.goBack = function () {
        this.location.back();
    };
    PullPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pull-post',
            template: __webpack_require__(/*! ./pull-post.component.html */ "./src/app/pull-post/pull-post.component.html"),
            styles: [__webpack_require__(/*! ./pull-post.component.css */ "./src/app/pull-post/pull-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PullPostComponent);
    return PullPostComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  /*width: 100%;*/\r\n}\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n.title{\r\n  font-size: 38px;\r\n  text-align: center;\r\n  height: 56px;\r\n  line-height: 56px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n}\r\n.register{\r\n  float: left;\r\n  margin-left: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIC8qd2lkdGg6IDEwMCU7Ki9cclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udGl0bGV7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcbi5yZWdpc3RlcntcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <span class=\"title\">注册</span>\n</div>\n<div style=\"text-align:center\">\n  <form class=\"example-form\">\n    <div>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" placeholder=\"用户名\" />\n      </mat-form-field>\n    </div>\n    <div>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"password\" placeholder=\"密码\" />\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n<button mat-raised-button color=\"primary\" (click)=\"register()\" class=\"register\">注册</button>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yy\bbs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map