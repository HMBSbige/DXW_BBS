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
/* harmony import */ var _put_post_put_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./put-post/put-post.component */ "./src/app/put-post/put-post.component.ts");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");
/* harmony import */ var _user_center_user_center_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-center/user-center.component */ "./src/app/user-center/user-center.component.ts");













var routes = [
    { path: '', redirectTo: '/homepage', pathMatch: "full" },
    { path: 'homepage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
    { path: 'community', component: _community_community_component__WEBPACK_IMPORTED_MODULE_9__["CommunityComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'community/:community', component: _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"] },
    { path: 'community/:community/pullpost', component: _pull_post_pull_post_component__WEBPACK_IMPORTED_MODULE_7__["PullPostComponent"] },
    { path: 'community/:community/putpost/:id', component: _put_post_put_post_component__WEBPACK_IMPORTED_MODULE_10__["PutPostComponent"] },
    { path: 'community/:community/post/:id', component: _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__["PostDetailComponent"] },
    { path: 'background', component: _background_background_component__WEBPACK_IMPORTED_MODULE_11__["BackgroundComponent"] },
    { path: 'user/:username', component: _user_center_user_center_component__WEBPACK_IMPORTED_MODULE_12__["UserCenterComponent"] }
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

module.exports = "ul\r\n{\r\n  list-style-type: none;\r\n  margin: 10;\r\n  padding: 0;\r\n}\r\nli\r\n{\r\n  display: inline;\r\n  margin: 10;\r\n}\r\nbody\r\n{\r\n  margin:0px;\r\n  height:100%;\r\n}\r\n.drawer_container{\r\n  background:rgb(224, 254, 255);\r\n  width: 100%;\r\n  height:100%;\r\n  border: 0px solid #555;\r\n}\r\n.person_icon{\r\n  font-size: 100px;\r\n}\r\nmat-drawer{\r\n  width: 25%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWxcclxue1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDEwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxubGlcclxue1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBtYXJnaW46IDEwO1xyXG59XHJcbmJvZHlcclxue1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuLmRyYXdlcl9jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZDpyZ2IoMjI0LCAyNTQsIDI1NSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgIzU1NTtcclxufVxyXG4ucGVyc29uX2ljb257XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxufVxyXG5tYXQtZHJhd2Vye1xyXG4gIHdpZHRoOiAyNSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html style=\"background:rgb(224, 254, 255)\">\n\n<head>\n\n</head>\n\n<body style=\"height:100%\">\n  <mat-drawer-container class=\"drawer_container\" [hasBackdrop]=\"False\">\n\n    <mat-drawer #drawer style=\"background:rgb(224, 254, 255)\">\n      <div style=\"text-align:center\">\n        <div class=\"person_icon\">\n          <mat-icon [inline]=\"true\">person</mat-icon>\n        </div>\n        <!--<img src=\"../assets/icon/head.svg\" width=\"50%\" height=\"50%\" />-->\n      </div>\n      <div *ngIf=\"islogin\" style=\"text-align:center\">\n        <p>{{user.username}}</p>\n      </div>\n      <div *ngIf=\"!islogin\" style=\"text-align:center\">\n        <button mat-raised-button color=\"primary\" routerLink=\"/login\" (click)=\"drawer.close()\">登录</button>\n        <button mat-raised-button color=\"primary\" routerLink=\"/register\" (click)=\"drawer.close()\">注册</button>\n      </div>\n      <div *ngIf=\"islogin\" style=\"text-align:center\">\n        <button mat-raised-button color=\"primary\" routerLink=\"/user/{{user.username}}\">用户中心</button>\n        <button mat-raised-button color=\"primary\" (click)=\"drawer.close();logout()\">注销</button>\n      </div>\n      <div *ngIf=\"isAdmin()\" style=\"text-align:center\">\n        <button mat-raised-button color=\"primary\" routerLink=\"/background\" (click)=\"drawer.close()\">管理员后台</button>\n      </div>\n\n      <hr />\n      <!--板块部分-->\n      <p>板块列表：</p>\n      <div *ngFor=\"let community of communities\" (click)=\"drawer.close()\" routerLink=\"/community/{{community.id}}\"\n        style=\"text-align:center\">\n        <a mat-raised-button>{{community.name}}</a>\n      </div>\n      <!--\n      <div *ngIf=\"isAdmin()\">\n        <button mat-raised-button routerLink=\"/community\" (click)=\"drawer.close()\">板块编辑</button>\n      </div>\n      -->\n    </mat-drawer>\n\n    <mat-drawer-content style=\"height: 1080px\">\n      <mat-sidenav-container style=\"background:rgb(224, 254, 255)\">\n        <mat-sidenav>Start</mat-sidenav>\n        <mat-sidenav-content>\n          <button mat-raised-button color=\"primary\" (click)=\"drawer.toggle()\">\n            <mat-icon>menu</mat-icon>\n          </button>\n          <button mat-raised-button color=\"primary\" routerLink=\"/homepage\" style=\"float:right\">\n            <mat-icon>home</mat-icon>\n          </button>\n        </mat-sidenav-content>\n      </mat-sidenav-container>\n      <hr />\n      <router-outlet></router-outlet>\n    </mat-drawer-content>\n  </mat-drawer-container>\n\n</body>\n\n</html>\n"

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
/* harmony import */ var _model_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/UserModel */ "./src/app/model/UserModel.ts");
/* harmony import */ var _model_CommunityModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/CommunityModel */ "./src/app/model/CommunityModel.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.title = 'BBS';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.user = new _model_UserModel__WEBPACK_IMPORTED_MODULE_2__["User"];
        localStorage.clear();
        console.log(this.islogin);
        this.communities = []; //初始化数组
        this.getSSECommunities();
        //console.log("我出生了");
        //setInterval("this.getSSECommunities()", 2000);
    };
    //从服务器接受SSE消息的community
    AppComponent.prototype.getSSECommunities = function () {
        var _this = this;
        var source = new EventSource('/communities');
        var comm = new _model_CommunityModel__WEBPACK_IMPORTED_MODULE_3__["Community"];
        var flag = true;
        source.addEventListener('message', function (response) {
            if (flag == true) {
                _this.communities = [];
                flag = false;
            }
            comm = JSON.parse(response.data);
            _this.communities.push(comm);
        });
        source.addEventListener('error', function (response) {
            if (response.eventPhase == source.CLOSED) {
                flag = true;
            }
        });
    };
    AppComponent.prototype.isAdmin = function () {
        var role = localStorage.getItem('role');
        if (role == "ROLE_ADMIN")
            return true;
        else
            return false;
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.islogin = false;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "./src/app/post-detail/post-detail.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./community/community.component */ "./src/app/community/community.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _pull_post_pull_post_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pull-post/pull-post.component */ "./src/app/pull-post/pull-post.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _put_post_put_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./put-post/put-post.component */ "./src/app/put-post/put-post.component.ts");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");
/* harmony import */ var _user_center_user_center_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-center/user-center.component */ "./src/app/user-center/user-center.component.ts");






//import { InMemoryDataService }  from './in-memory-data.service';















function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_11__["PostDetailComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"],
                _community_community_component__WEBPACK_IMPORTED_MODULE_13__["CommunityComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_14__["HomepageComponent"],
                _pull_post_pull_post_component__WEBPACK_IMPORTED_MODULE_15__["PullPostComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _put_post_put_post_component__WEBPACK_IMPORTED_MODULE_17__["PutPostComponent"],
                _background_background_component__WEBPACK_IMPORTED_MODULE_18__["BackgroundComponent"],
                _user_center_user_center_component__WEBPACK_IMPORTED_MODULE_19__["UserCenterComponent"]
            ],
            imports: [
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:4000'],
                        blacklistedRoutes: ['localhost:4000/api/auth']
                    }
                }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                /*HttpClientInMemoryWebApiModule.forRoot(
                  InMemoryDataService, { dataEncapsulation: false }
                ),*/
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/background/background.component.css":
/*!*****************************************************!*\
  !*** ./src/app/background/background.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1giLCJmaWxlIjoic3JjL2FwcC9iYWNrZ3JvdW5kL2JhY2tncm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/background/background.component.html":
/*!******************************************************!*\
  !*** ./src/app/background/background.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <input #partname/>\n  <button mat-raised-button (click)=\"searchUsers(partname.value)\">搜索</button>\n</div>\n<div>\n    <table mat-table [dataSource]=\"users\" class=\"mat-elevation-z8\">\n\n        <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n      \n      \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"username\">\n          <th mat-header-cell *matHeaderCellDef> 用户名 </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n        </ng-container>\n      \n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"ban\">\n          <th mat-header-cell *matHeaderCellDef> 封禁 </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <button mat-button (click)=\"banUser(element.username)\">封禁/解封</button>\n          </td>\n        </ng-container>\n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n</div>"

/***/ }),

/***/ "./src/app/background/background.component.ts":
/*!****************************************************!*\
  !*** ./src/app/background/background.component.ts ***!
  \****************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/UserModel */ "./src/app/model/UserModel.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent(httpService) {
        this.httpService = httpService;
        this.displayedColumns = ['username', 'ban'];
    }
    BackgroundComponent.prototype.ngOnInit = function () {
    };
    //搜索用户
    BackgroundComponent.prototype.searchUsers = function (name) {
        var _this = this;
        name = name.trim();
        var searchUserSource = new EventSource('/search/users/' + name);
        var user = new _model_UserModel__WEBPACK_IMPORTED_MODULE_2__["User"];
        var flag = true;
        searchUserSource.addEventListener('message', function (response) {
            if (flag == true) {
                _this.users = [];
                flag = false;
            }
            user = JSON.parse(response.data);
            _this.users.push(user);
        });
        searchUserSource.addEventListener('error', function (response) {
            if (response.eventPhase == searchUserSource.CLOSED) {
                flag = true;
            }
        });
    };
    BackgroundComponent.prototype.banUser = function (name) {
        var _this = this;
        this.httpService.deleteUser(name).subscribe(function () { return _this.users.filter(function (user) { return user.username != name; }); });
    };
    BackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-background',
            template: __webpack_require__(/*! ./background.component.html */ "./src/app/background/background.component.html"),
            styles: [__webpack_require__(/*! ./background.component.css */ "./src/app/background/background.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], BackgroundComponent);
    return BackgroundComponent;
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

module.exports = "<div>\n  <p>板块一览</p>\n</div>\n<div class=\"top\">\n  <!--\n  <mat-grid-list cols='3' rowHeight=\"2:1\" role=\"list\">\n    <div class=\"grid\" role=\"listitem\">\n      <mat-grid-tile *ngFor=\"let community of communities\" routerLink=\"/community/{{community.id}}\">\n        {{community.name}}\n      </mat-grid-tile>\n    </div>\n  </mat-grid-list>\n  -->\n  <ul>\n    <li>\n      <mat-card style=\"background:rgb(27, 158, 240)\">\n        <mat-card-content>\n          <span>板块名称</span>\n        </mat-card-content>\n      </mat-card>\n    </li>\n    <li *ngFor=\"let community of communities\">\n      <mat-card tabindex=\"0\" routerLink=\"/community/{{community.id}}\" style=\"background:rgb(120, 196, 243)\">\n        <mat-card-content>\n          <span>{{community.name}}</span>\n          <button mat-raised-button style=\"float:right\">编辑板块</button>\n        </mat-card-content>\n      </mat-card>\n    </li>\n  </ul>\n</div>\n"

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
/* harmony import */ var _model_CommunityModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/CommunityModel */ "./src/app/model/CommunityModel.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");





var CommunityComponent = /** @class */ (function () {
    function CommunityComponent(httpService, app) {
        this.httpService = httpService;
        this.app = app;
    }
    CommunityComponent.prototype.ngOnInit = function () {
        //this.getCommunities();
        this.getSSECommunities();
    };
    CommunityComponent.prototype.getCommunities = function () {
        this.communities = this.app.communities;
    };
    CommunityComponent.prototype.getCommunitiesText = function () {
        //this.communities.push(this.httpService.getUpdated());
    };
    //从服务器接受SSE消息的community
    CommunityComponent.prototype.getSSECommunities = function () {
        var _this = this;
        var comm2Source = new EventSource('/communities');
        var comm = new _model_CommunityModel__WEBPACK_IMPORTED_MODULE_2__["Community"];
        var flag = true;
        comm2Source.addEventListener('message', function (response) {
            if (flag == true) {
                _this.communities = [];
                flag = false;
            }
            comm = JSON.parse(response.data);
            _this.communities.push(comm);
        });
        comm2Source.addEventListener('error', function (response) {
            if (response.eventPhase == comm2Source.CLOSED) {
                flag = true;
            }
        });
    };
    CommunityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-community',
            template: __webpack_require__(/*! ./community.component.html */ "./src/app/community/community.component.html"),
            styles: [__webpack_require__(/*! ./community.component.css */ "./src/app/community/community.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]])
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

module.exports = "p\r\n{\r\n    text-align: center;\r\n    background-color: skyblue;\r\n}\r\nul\r\n{\r\n    list-style-type: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7O0lBRUkscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInBcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxufVxyXG51bFxyXG57XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 style=\"text-align:center\">\n    欢迎来到开花论坛\n  </h2>\n  <ul>\n    <li>\n      <mat-card style=\"background:rgb(27, 158, 240)\">\n        <mat-card-content>\n          <span>热帖列表</span>\n          <span style=\"float:right\">开贴时间</span>\n        </mat-card-content>\n      </mat-card>\n    </li>\n    <li *ngFor=\"let hotPost of hotPosts\">\n      <mat-card tabindex=\"0\" routerLink=\"/community/{{hotPost.community}}/post/{{hotPost.id}}\"\n        style=\"background:rgb(120, 196, 243)\">\n        <mat-card-content>\n          <span>{{hotPost.title}}</span>\n          <span style=\"float:right\">{{hotPost.initTime}}</span>\n        </mat-card-content>\n      </mat-card>\n    </li>\n  </ul>\n</div>\n"

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
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(postService) {
        this.postService = postService;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.getHotPost();
    };
    HomepageComponent.prototype.getHotPost = function () {
        var _this = this;
        this.postService.getHotPost().subscribe(function (post) { return _this.hotPosts = post; });
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
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
        'Authorzation': "Bearer " + localStorage.getItem('jwt')
    })
};
var httpOptionsForTextEvent = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Accept': 'text/event-stream',
        'Authorzation': 'my-auth-token'
    })
};
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.communityUrl = '/communities';
        this.loginUrl = '/login';
    }
    HttpService.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
    //登录
    HttpService.prototype.sendLogin = function (user) {
        return this.http.post(this.loginUrl, user, httpOptions);
    };
    HttpService.prototype.sendRegister = function (user) {
        var url = '/signup';
        return this.http.post(url, user, httpOptions);
    };
    //请求user
    HttpService.prototype.getUser = function (username) {
        var url = '/users/' + username;
        return this.http.get(url);
    };
    HttpService.prototype.deleteUser = function (id) {
        var url = 'users/' + id;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('jwt')
            })
        };
        return this.http.delete(url, httpOptions);
    };
    //请求板块列表
    HttpService.prototype.getCommunities = function () {
        return this.http.get(this.communityUrl, httpOptionsForTextEvent);
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _model_UserModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/UserModel */ "./src/app/model/UserModel.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(myhttp, location, app) {
        this.myhttp = myhttp;
        this.location = location;
        this.app = app;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function (username, password) {
        var _this = this;
        username = username.trim();
        password = password.trim();
        if (!username) {
            return;
        }
        this.myhttp.sendLogin({ username: username, password: password }).subscribe(function (token) {
            console.log(token); //test
            localStorage.setItem('jwt', token.token);
            _this.app.islogin = true;
            _this.myhttp.getUser(username).subscribe(function (user) {
                _this.app.user = user;
                console.log(_this.app.user.roles);
                console.log(_this.app.user.roles[0]);
                localStorage.setItem('role', _this.app.user.roles[0]);
            });
            alert("登录成功");
            _this.goBack();
        });
    };
    LoginComponent.prototype.goBack = function () {
        this.location.back();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_UserModel__WEBPACK_IMPORTED_MODULE_3__["User"])
    ], LoginComponent.prototype, "app2", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/CommunityModel.ts":
/*!*****************************************!*\
  !*** ./src/app/model/CommunityModel.ts ***!
  \*****************************************/
/*! exports provided: Community */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Community", function() { return Community; });
var Community = /** @class */ (function () {
    function Community() {
    }
    return Community;
}());



/***/ }),

/***/ "./src/app/model/PostModel.ts":
/*!************************************!*\
  !*** ./src/app/model/PostModel.ts ***!
  \************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/model/UserModel.ts":
/*!************************************!*\
  !*** ./src/app/model/UserModel.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());



/***/ }),

/***/ "./src/app/post-detail/post-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/post-detail/post-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    border-color: gray;\r\n    border-collapse: separate;\r\n    border-spacing: 2px;\r\n}\r\n\r\ntr{\r\n    height:200px;\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\ntd{\r\n    position: relative;\r\n    vertical-align:top;\r\n    line-height: 1.83em;\r\n    word-wrap: break-word;\r\n    word-break: break-all;\r\n}\r\n\r\n.edit{\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n.left{\r\n    /*width: 180px;*/\r\n    width: 25%;\r\n    background-color: rgb(97, 159, 252);\r\n}\r\n\r\n.right{\r\n    padding-top:1px;\r\n    /*width:500px*/\r\n    width:75%;\r\n    background-color: rgb(172, 201, 255);\r\n}\r\n\r\n.title{\r\n    font-size:30px;\r\n}\r\n\r\n.time{\r\n    font-size: 15px;\r\n    float: right;\r\n}\r\n\r\ntbody{\r\n    display:table-row-group;\r\n    vertical-align: center;\r\n}\r\n\r\nh3{\r\n    margin-top: 0%;\r\n}\r\n\r\n.responseTitle{\r\n    font-size: 20px;\r\n    padding-left: 5px;\r\n}\r\n\r\ntextarea\r\n{\r\n    font-family: Verdana, Tahoma, Arial, \"Microsoft YaHei\", \"Hiragino Sans GB\", \"WenQuanYi Micro Hei\", sans-serif;\r\n    width: 98%;\r\n    height: 25em;\r\n    line-height: 1.583em;\r\n    background-color: rgb(221, 241, 247);\r\n}\r\n\r\n.mat-card{\r\n    width:50%;\r\n}\r\n\r\n.comment_icon{\r\n    font-size: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixtQ0FBbUM7QUFDdkM7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFNBQVM7SUFDVCxvQ0FBb0M7QUFDeEM7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBQ0E7O0lBRUksNkdBQTZHO0lBQzdHLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG9DQUFvQztBQUN4Qzs7QUFDQTtJQUNJLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWRldGFpbC9wb3N0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICBib3JkZXItY29sb3I6IGdyYXk7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxudHJ7XHJcbiAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcclxuICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxufVxyXG50ZHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjgzZW07XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuLmVkaXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLmxlZnR7XHJcbiAgICAvKndpZHRoOiAxODBweDsqL1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMTU5LCAyNTIpO1xyXG59XHJcbi5yaWdodHtcclxuICAgIHBhZGRpbmctdG9wOjFweDtcclxuICAgIC8qd2lkdGg6NTAwcHgqL1xyXG4gICAgd2lkdGg6NzUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MiwgMjAxLCAyNTUpO1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG59XHJcbi50aW1le1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG50Ym9keXtcclxuICAgIGRpc3BsYXk6dGFibGUtcm93LWdyb3VwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oM3tcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG59XHJcbi5yZXNwb25zZVRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxudGV4dGFyZWFcclxue1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIFRhaG9tYSwgQXJpYWwsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIldlblF1YW5ZaSBNaWNybyBIZWlcIiwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDI1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ODNlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDI0MSwgMjQ3KTtcclxufVxyXG4ubWF0LWNhcmR7XHJcbiAgICB3aWR0aDo1MCU7XHJcbn1cclxuLmNvbW1lbnRfaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/post-detail/post-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/post-detail/post-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<b class=\"title\">{{post.title}}</b>\r\n<button mat-raised-button color=\"primary\" (click)=\"goBack()\" style=\"float:right\">返回</button>\r\n<table style=\"width:100%\">\r\n  <tbody>\r\n    <!--主题帖模块-->\r\n    <div>\r\n      <tr>\r\n        <td style=\"vertical-align:top\" class=\"left\">\r\n          <span>\r\n            <div>\r\n              <span>楼主:</span>\r\n            </div>\r\n            <div style=\"text-align:center\">\r\n              <span>{{post.author}}</span>\r\n            </div>\r\n          </span>\r\n        </td>\r\n        <mat-divider [vertical]=\"true\">\r\n        </mat-divider>\r\n        <td class=\"right\">\r\n          <div style=\"text-align:right\">\r\n            <span style=\"font-size:15px\">{{post.initTime}}</span>\r\n          </div>\r\n          <span>{{post.content}}</span>\r\n          <button class=\"edit\" mat-raised-button *ngIf='this.app.user.name==post.author||isAdmin()'\r\n            routerLink=\"/community/{{community}}/putpost/{{post.id}}\" (click)=\"editParentPost()\">修改主题帖\r\n          </button>\r\n        </td>\r\n      </tr>\r\n      <mat-divider style=\"width:100%\"></mat-divider>\r\n    </div>\r\n\r\n    <!--回帖模块-->\r\n    <div *ngFor=\"let posts of responsePosts\">\r\n      <tr>\r\n        <td style=\"vertical-align:top\" class=\"left\">\r\n          <span>\r\n            <div style=\"text-align:center\">\r\n              <span>{{posts.author}}</span>\r\n            </div>\r\n          </span>\r\n        </td>\r\n        <mat-divider [vertical]=\"true\">\r\n        </mat-divider>\r\n        <td class=\"right\">\r\n          <div *ngIf=\"isAdmin()||this.app.user.username==posts.author\">\r\n            <button mat-button (click)=\"startEditMode(posts)\"><a href=\"#res\">修改</a></button>\r\n          </div>\r\n          <div style=\"text-align:right\">\r\n            <span style=\"font-size:15px\">{{posts.initTime}}</span>\r\n          </div>\r\n          <span>{{posts.content}}</span>\r\n        </td>\r\n      </tr>\r\n      <mat-divider></mat-divider>\r\n    </div>\r\n  </tbody>\r\n</table>\r\n<hr />\r\n<div><a name=\"res\" id=\"res\"></a>\r\n  <div style=\"padding-top:40px\">\r\n    <mat-card tabindex=\"0\" style=\"background:rgb(120, 196, 243)\" class=\"mat-card\">\r\n      <mat-card-content>\r\n        <div class=\"comment_icon\">\r\n          <mat-icon [inline]=\"true\">add_comment</mat-icon>\r\n        </div>\r\n        <span class=\"responseTitle\" *ngIf=\"!this.resMode\">发表回复</span>\r\n        <span class=\"responseTitle\" *ngIf=\"this.resMode\">修改回复</span>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <textarea #content></textarea>\r\n  <div style=\"text-align:center\" *ngIf=\"!this.resMode\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"commit(content.value)\">提交</button>\r\n  </div>\r\n  <div style=\"text-align:center\" *ngIf=\"this.resMode\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"edit(content.value)\">确认修改</button>\r\n  </div>\r\n\r\n</div>\r\n"

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
/* harmony import */ var _model_PostModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/PostModel */ "./src/app/model/PostModel.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");







var PostDetailComponent = /** @class */ (function () {
    function PostDetailComponent(postService, router, location, app
    //不要妄图添加PostComponent了，用不了的
    ) {
        this.postService = postService;
        this.router = router;
        this.location = location;
        this.app = app;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        this.resMode = false;
        this.content = "";
        this.responsePosts = [];
        this.parentId = this.router.snapshot.paramMap.get('id');
        this.community = this.router.snapshot.paramMap.get('community');
        this.getSSEResponsePosts();
        this.getSSEPMainosts();
    };
    //从服务器接受SSE消息的所有回帖
    PostDetailComponent.prototype.getSSEResponsePosts = function () {
        var _this = this;
        var sourceResponsePost = new EventSource("/posts/" + this.parentId);
        var post = new _model_PostModel__WEBPACK_IMPORTED_MODULE_4__["Post"];
        var flag = true;
        sourceResponsePost.addEventListener('message', function (response) {
            if (flag == true) {
                _this.responsePosts = [];
                flag = false;
            }
            post = JSON.parse(response.data);
            _this.responsePosts.push(post);
        });
        sourceResponsePost.addEventListener('error', function (response) {
            if (response.eventPhase == sourceResponsePost.CLOSED) {
                flag = true;
            }
        });
    };
    PostDetailComponent.prototype.getSSEPMainosts = function () {
        var _this = this;
        var findPost = new EventSource("/posts?community=" + this.community);
        var post = new _model_PostModel__WEBPACK_IMPORTED_MODULE_4__["Post"];
        findPost.addEventListener('message', function (response) {
            post = JSON.parse(response.data);
            if (post.id == _this.parentId) {
                _this.post = post;
                findPost.close();
            }
        });
    };
    //http请求当前的第一个帖子
    PostDetailComponent.prototype.getPost = function () {
        var _this = this;
        this.postService.getPosts(this.parentId).subscribe(function (post) { return _this.post = post.find(function (post) { return post.id == _this.parentId; }); });
    };
    //http请求当前第一个帖子的所有回帖
    PostDetailComponent.prototype.getResponse = function () {
        var _this = this;
        this.postService.getResPosts(this.parentId).subscribe(function (posts) { return _this.responsePosts = posts; });
        console.log("我请求了，鬼知道有没有拿到");
    };
    //http回帖
    PostDetailComponent.prototype.commit = function (content) {
        var _this = this;
        content = content.trim();
        var parentId = this.parentId;
        var community = this.community;
        this.postService.replyPost({ content: content, parentId: parentId, community: community }).subscribe(function (post) {
            _this.responsePosts.push(post);
            alert("回帖成功 ");
        });
    };
    //http修改帖子
    PostDetailComponent.prototype.edit = function (content) {
        var _this = this;
        this.editedPost.content = content.trim();
        this.postService.editPost(this.editedPost).subscribe(function () {
            alert("修改成功");
            _this.resMode = false;
            _this.content = null;
        });
    };
    //修改回复帖内容
    PostDetailComponent.prototype.startEditMode = function (posts) {
        this.editedPost = posts;
        this.content = posts.content;
        this.resMode = true;
    };
    PostDetailComponent.prototype.IsAuthor = function (post) {
    };
    PostDetailComponent.prototype.isAdmin = function () {
        var role = localStorage.getItem('role');
        if (role == "ROLE_ADMIN")
            return true;
        else
            return false;
    };
    //返回上一菜单
    PostDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PostDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-detail',
            template: __webpack_require__(/*! ./post-detail.component.html */ "./src/app/post-detail/post-detail.component.html"),
            styles: [__webpack_require__(/*! ./post-detail.component.css */ "./src/app/post-detail/post-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            //不要妄图添加PostComponent了，用不了的
        ])
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
        'Authorization': "Bearer " + localStorage.getItem('jwt')
    })
};
var httpOptionsForTextEvent = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'text/event-stream',
        'Authorization': 'my-auth-token'
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
        return this.http.get(url, httpOptionsForTextEvent);
    };
    //请求帖子id为id的所有回帖
    PostService.prototype.getResPosts = function (id) {
        var url = this.postsUrl + "/" + id;
        return this.http.get(url, httpOptionsForTextEvent);
    };
    //请求板块id为community的所有置顶帖
    PostService.prototype.getTopposts = function (community) {
        var topurl = this.postsUrl + "/top?community=" + community;
        return this.http.get(topurl, httpOptionsForTextEvent);
    };
    //向服务器发帖
    PostService.prototype.addPost = function (post) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('jwt')
            })
        };
        return this.http.post(this.postsUrl, post, httpOptions);
    };
    //设置置顶
    PostService.prototype.setTopPost = function (post) {
        var url = "/posts/top/" + post.id;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('jwt')
            })
        };
        return this.http.post(url, post, httpOptions);
    };
    //删帖
    PostService.prototype.deletePost = function (post) {
        var url = this.postsUrl + "/" + post.id;
        return this.http.delete(url, httpOptions);
    };
    //回帖
    PostService.prototype.replyPost = function (post) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('jwt')
            })
        };
        var replyUrl = this.postsUrl + "/" + post.parentId;
        return this.http.post(replyUrl, post, httpOptions);
    };
    //http修改帖子
    PostService.prototype.editPost = function (post) {
        var url = this.postsUrl + "/" + post.id;
        return this.http.put(url, post, httpOptions);
    };
    //请求热帖
    PostService.prototype.getHotPost = function () {
        var url = "posts/hot";
        return this.http.get(url);
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

module.exports = "<div>\n  <h2 style=\"text-align:center\">欢迎来到开花论坛</h2>\n  <ul>\n    <li>\n      <mat-card style=\"background:rgb(27, 158, 240)\">\n        <mat-card-content>\n          <span>标题</span>\n          <span style=\"float:right\">开贴时间</span>\n        </mat-card-content>\n      </mat-card>\n    </li>\n    <li *ngFor=\"let toppost of topposts\">\n      <mat-card tabindex=\"0\" routerLink=\"/community/{{community}}/post/{{toppost.id}}\" style=\"background:rgb(99, 193, 252)\">\n        <mat-card-content>\n          <span>{{toppost.title}}</span>\n          <span style=\"float:right\">{{toppost.initTime}}</span>\n        </mat-card-content>\n      </mat-card>\n    </li>\n    <mat-divider></mat-divider>\n    <li *ngFor=\"let post of nowposts\">\n      <mat-card tabindex=\"0\" routerLink=\"/community/{{community}}/post/{{post.id}}\" style=\"background:rgb(120, 196, 243)\">\n        <mat-card-content>\n          <span>{{post.title}}</span>\n          <span style=\"float:right\">{{post.initTime}}</span>\n          <button mat-button *ngIf=\"isAdmin()\" (click)=\"topThePost(post)\">置顶</button>\n          <button mat-button *ngIf=\"this.editMode\" (click)=\"deletePost(post)\">删除</button>\n        </mat-card-content>\n      </mat-card>\n    </li>\n  </ul>\n  <mat-paginator color=\"primary\" [length]=\"totalPost\" [pageSize]=\"10\" (page)=\"pageEvent =changePage($event)\">\n    \n  </mat-paginator>\n  <div>\n    <button mat-raised-button color=\"primary\" routerLink=\"/community/{{community}}/pullpost\">发帖</button>\n    <button mat-raised-button color=\"primary\" (click)=\"startEditMode()\" *ngIf=\"isAdmin()\">删帖</button>\n  </div>\n  <hr />\n  <!--\n  <div>\n    <p>标题</p>\n    <input #postTitle />\n    <p>正文</p>\n    <textarea #postContent></textarea>\n    <button mat-raised-button color=\"primary\"\n      (click)=\"pullPost(postTitle.value,postContent.value);postTitle.value='';postContent.value=''\">发表新帖</button>\n    <button mat-raised-button color=\"primary\" (click)=\"goBack()\">返回</button>\n  </div>\n  -->\n</div>\n"

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
/* harmony import */ var _model_PostModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/PostModel */ "./src/app/model/PostModel.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");






var PostComponent = /** @class */ (function () {
    function PostComponent(postService, router, app) {
        this.postService = postService;
        this.router = router;
        this.app = app;
    }
    PostComponent.prototype.ngOnInit = function () {
        this.editMode = false;
        this.community = this.router.snapshot.paramMap.get('community');
        this.posts = [];
        this.topposts = [];
        this.getSSEPosts();
        this.getSSETopPosts();
        this.getSSENowPosts(0);
        //this.getPosted();
        //this.getTopposts();
        //console.log("我出生了");
    };
    PostComponent.prototype.changePage = function (event) {
        this.sourceNowPost.close();
        this.getSSENowPosts(event.pageIndex);
    };
    //从服务器接受SSE消息的某一页post
    PostComponent.prototype.getSSENowPosts = function (pagenum) {
        var _this = this;
        this.sourceNowPost = new EventSource("/posts?community=" + this.community + "&page=" + pagenum);
        var post = new _model_PostModel__WEBPACK_IMPORTED_MODULE_3__["Post"];
        var flag = true;
        this.sourceNowPost.addEventListener('message', function (response) {
            if (flag == true) {
                _this.nowposts = [];
                flag = false;
            }
            post = JSON.parse(response.data);
            _this.nowposts.push(post);
        });
        this.sourceNowPost.addEventListener('error', function (response) {
            if (response.eventPhase == _this.sourceNowPost.CLOSED) {
                flag = true;
            }
        });
    };
    //从服务器接受SSE消息的post
    PostComponent.prototype.getSSEPosts = function () {
        var _this = this;
        var sourcePost = new EventSource("/posts?community=" + this.community);
        var post = new _model_PostModel__WEBPACK_IMPORTED_MODULE_3__["Post"];
        var flag = true;
        sourcePost.addEventListener('message', function (response) {
            if (flag == true) {
                _this.posts = [];
                flag = false;
            }
            post = JSON.parse(response.data);
            _this.posts.push(post);
        });
        sourcePost.addEventListener('error', function (response) {
            if (response.eventPhase == sourcePost.CLOSED) {
                _this.totalPost = _this.posts.length;
                flag = true;
            }
        });
    };
    //从服务器接受SSE消息的toppost
    PostComponent.prototype.getSSETopPosts = function () {
        var _this = this;
        var sourceTopPost = new EventSource("/posts/top?community=" + this.community);
        var toppost = new _model_PostModel__WEBPACK_IMPORTED_MODULE_3__["Post"];
        var flag = true;
        sourceTopPost.addEventListener('message', function (response) {
            if (flag == true) {
                _this.topposts = [];
                flag = false;
            }
            toppost = JSON.parse(response.data);
            _this.topposts.push(toppost);
        });
        sourceTopPost.addEventListener('error', function (response) {
            if (response.eventPhase == sourceTopPost.CLOSED) {
                flag = true;
            }
        });
    };
    PostComponent.prototype.topThePost = function (post) {
        this.postService.setTopPost(post).subscribe(function () { return alert("置顶成功"); });
    };
    //http请求当前板块内所有帖子    //暂时不用
    PostComponent.prototype.getPosted = function () {
        var _this = this;
        this.postService.getPosts(this.community).subscribe(function (posts) { return _this.posts = posts; });
    };
    //http请求当前板块内置顶帖子    //暂时不用
    PostComponent.prototype.getTopposts = function () {
        var _this = this;
        this.postService.getTopposts(this.community).subscribe(function (posts) { return _this.topposts = posts; });
    };
    //http删帖
    PostComponent.prototype.deletePost = function (post) {
        var _this = this;
        this.postService.deletePost(post).subscribe(function () {
            alert("删帖成功");
            _this.posts = _this.posts.filter(function (p) { return p.id !== post.id; });
        });
    };
    //http发帖
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
    //开关编辑模式
    PostComponent.prototype.startEditMode = function () {
        if (this.editMode)
            this.editMode = false;
        else
            this.editMode = true;
    };
    PostComponent.prototype.isAdmin = function () {
        var role = localStorage.getItem('role');
        if (role == "ROLE_ADMIN")
            return true;
        else
            return false;
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");






var PullPostComponent = /** @class */ (function () {
    function PullPostComponent(postService, location, router, app) {
        this.postService = postService;
        this.location = location;
        this.router = router;
        this.app = app;
    }
    PullPostComponent.prototype.ngOnInit = function () {
        this.community = this.router.snapshot.paramMap.get('community');
        //this.community=this.postComponent.community;
        console.log(this.community);
    };
    //http发帖
    PullPostComponent.prototype.pullPost = function (title, content) {
        var _this = this;
        title = title.trim();
        content = content.trim();
        var community = this.community;
        var author = this.app.user.username;
        if (!title) {
            return;
        }
        this.postService.addPost({ title: title, content: content, community: community, author: author }).subscribe(function () {
            _this.location.back();
            alert("发帖成功 ");
        });
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
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
    ], PullPostComponent);
    return PullPostComponent;
}());



/***/ }),

/***/ "./src/app/put-post/put-post.component.css":
/*!*************************************************!*\
  !*** ./src/app/put-post/put-post.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body\r\n{\r\n    height: 100%;\r\n}\r\np\r\n{\r\n    font-family: Verdana, Tahoma, Arial, \"Microsoft YaHei\", \"Hiragino Sans GB\", \"WenQuanYi Micro Hei\", sans-serif;\r\n}\r\ninput\r\n{\r\n    width: 98%;\r\n    background-color: rgb(221, 241, 247);\r\n}\r\ntextarea\r\n{\r\n    font-family: Verdana, Tahoma, Arial, \"Microsoft YaHei\", \"Hiragino Sans GB\", \"WenQuanYi Micro Hei\", sans-serif;\r\n    width: 98%;\r\n    height: 25em;\r\n    line-height: 1.583em;\r\n    background-color: rgb(221, 241, 247);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHV0LXBvc3QvcHV0LXBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksNkdBQTZHO0FBQ2pIO0FBQ0E7O0lBRUksVUFBVTtJQUNWLG9DQUFvQztBQUN4QztBQUNBOztJQUVJLDZHQUE2RztJQUM3RyxVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9wdXQtcG9zdC9wdXQtcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keVxyXG57XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxucFxyXG57XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgVGFob21hLCBBcmlhbCwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiV2VuUXVhbllpIE1pY3JvIEhlaVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbmlucHV0XHJcbntcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyNDEsIDI0Nyk7XHJcbn1cclxudGV4dGFyZWFcclxue1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIFRhaG9tYSwgQXJpYWwsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIldlblF1YW5ZaSBNaWNybyBIZWlcIiwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDI1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ODNlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDI0MSwgMjQ3KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/put-post/put-post.component.html":
/*!**************************************************!*\
  !*** ./src/app/put-post/put-post.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <p>标题</p>\n    <input #postTitle [(ngModel)]=\"post.title\"/>\n    <p>正文</p>\n    <textarea #postContent>{{post.content}}</textarea>\n    <button mat-raised-button color=\"primary\"\n      (click)=\"putPost(postTitle.value,postContent.value,postContent.value)\">确定修改</button>\n    <button mat-raised-button color=\"primary\" (click)=\"goBack()\">返回</button>\n  </div>"

/***/ }),

/***/ "./src/app/put-post/put-post.component.ts":
/*!************************************************!*\
  !*** ./src/app/put-post/put-post.component.ts ***!
  \************************************************/
/*! exports provided: PutPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutPostComponent", function() { return PutPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _model_PostModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/PostModel */ "./src/app/model/PostModel.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");






var PutPostComponent = /** @class */ (function () {
    function PutPostComponent(postService, location, router) {
        this.postService = postService;
        this.location = location;
        this.router = router;
    }
    PutPostComponent.prototype.ngOnInit = function () {
        this.post.id = this.router.snapshot.paramMap.get('id');
        this.post.community = this.router.snapshot.paramMap.get('community');
        this.getSSEPosts();
    };
    //从服务器接受SSE消息的post
    PutPostComponent.prototype.getSSEPosts = function () {
        var _this = this;
        var sourcePost = new EventSource("/posts?community=" + this.post.community);
        var post = new _model_PostModel__WEBPACK_IMPORTED_MODULE_4__["Post"];
        var flag = true;
        sourcePost.addEventListener('message', function (response) {
            if (flag == true) {
                _this.tempPosts = [];
                flag = false;
            }
            post = JSON.parse(response.data);
            _this.tempPosts.push(post);
        });
        sourcePost.addEventListener('error', function (response) {
            if (response.eventPhase == sourcePost.CLOSED) {
                flag = true;
                sourcePost.close();
                _this.post = _this.tempPosts.find(function (post) { return post.id == _this.post.id; });
            }
        });
    };
    //修改主题帖
    PutPostComponent.prototype.putPost = function (title, content) {
        var _this = this;
        this.post.title = title.trim();
        this.post.content = content.trim();
        if (!title) {
            return;
        }
        this.postService.editPost(this.post).subscribe(function () {
            alert("修改成功");
            _this.goBack();
        });
    };
    PutPostComponent.prototype.goBack = function () {
        this.location.back();
    };
    PutPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-put-post',
            template: __webpack_require__(/*! ./put-post.component.html */ "./src/app/put-post/put-post.component.html"),
            styles: [__webpack_require__(/*! ./put-post.component.css */ "./src/app/put-post/put-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PutPostComponent);
    return PutPostComponent;
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

module.exports = "<div style=\"text-align:center\">\n  <span class=\"title\">注册</span>\n</div>\n<div style=\"text-align:center\">\n  <form class=\"example-form\">\n    <div>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"text\" placeholder=\"用户名\" #username />\n      </mat-form-field>\n    </div>\n    <div>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"password\" placeholder=\"密码\" #password />\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n<button mat-raised-button color=\"primary\" (click)=\"register(username.value,password.value)\" class=\"register\">注册</button>\n"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(myhttp, location, app) {
        this.myhttp = myhttp;
        this.location = location;
        this.app = app;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (username, password) {
        var _this = this;
        username = username.trim();
        password = password.trim();
        if (!username) {
            return;
        }
        this.myhttp.sendRegister({ username: username, password: password }).subscribe(function () {
            alert("注册成功");
            _this.goBack();
        });
    };
    RegisterComponent.prototype.goBack = function () {
        this.location.back();
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user-center/user-center.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-center/user-center.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul\r\n{\r\n    list-style-type: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1jZW50ZXIvdXNlci1jZW50ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWNlbnRlci91c2VyLWNlbnRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWxcclxue1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-center/user-center.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-center/user-center.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <p>用户名：{{user.username}}</p>\n    <hr />\n    <p>个性签名：{{user.signature}}</p>\n  </div>\n  <hr />\n  <button mat-raised-button (click)=\"showMain()\">显示历史发帖</button>\n  <button mat-raised-button (click)=\"showComment()\">显示历史回帖</button>\n\n  <ul *ngIf=\"showWhat\">\n    <li>\n      <mat-card style=\"background:rgb(27, 158, 240)\">\n        <mat-card-content>\n          <span>标题</span>\n          <span style=\"float:right\">开贴时间</span>\n        </mat-card-content>\n      </mat-card>\n    </li>\n    <li *ngFor=\"let userPost of userCommentPosts\">\n      <mat-card tabindex=\"0\" routerLink=\"/community/{{userPost.community}}/post/{{userPost.parentid}}\"\n        style=\"background:rgb(120, 196, 243)\">\n        <mat-card-content>\n          <span>{{userPost.title}}</span>\n          <span style=\"float:right\">{{userPost.initTime}}</span>\n        </mat-card-content>\n      </mat-card>\n    </li>\n  </ul>\n\n  <ul *ngIf=\"!showWhat\">\n    <li>\n      <mat-card style=\"background:rgb(27, 158, 240)\">\n        <mat-card-content>\n          <span>标题</span>\n          <span style=\"float:right\">开贴时间</span>\n        </mat-card-content>\n      </mat-card>\n    </li>\n    <li *ngFor=\"let userPost of userMainPosts\">\n      <mat-card tabindex=\"0\" routerLink=\"/community/{{userPost.community}}/post/{{userPost.id}}\"\n        style=\"background:rgb(120, 196, 243)\">\n        <mat-card-content>\n          <span>{{userPost.title}}</span>\n          <span style=\"float:right\">{{userPost.initTime}}</span>\n        </mat-card-content>\n      </mat-card>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/user-center/user-center.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-center/user-center.component.ts ***!
  \******************************************************/
/*! exports provided: UserCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCenterComponent", function() { return UserCenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_PostModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/PostModel */ "./src/app/model/PostModel.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");






var UserCenterComponent = /** @class */ (function () {
    function UserCenterComponent(route, myhttp, app) {
        this.route = route;
        this.myhttp = myhttp;
        this.app = app;
    }
    UserCenterComponent.prototype.ngOnInit = function () {
        this.user = this.app.user;
        this.showWhat = false;
        this.getUser();
        this.getSSEUserMainPosts();
        this.getSSEUserCommentPosts();
    };
    UserCenterComponent.prototype.getUser = function () {
        var _this = this;
        this.myhttp.getUser(this.route.snapshot.paramMap.get("username")).subscribe(function (user) { return _this.user = user; });
    };
    //从服务器接受SSE消息的用户发帖post
    UserCenterComponent.prototype.getSSEUserMainPosts = function () {
        var _this = this;
        console.log(this.user.username);
        var url = "/search/posts/" + this.user.username;
        var sourceUserMainPost = new EventSource(url);
        var post = new _model_PostModel__WEBPACK_IMPORTED_MODULE_3__["Post"];
        var flag = true;
        sourceUserMainPost.addEventListener('message', function (response) {
            if (flag == true) {
                _this.userMainPosts = [];
                flag = false;
            }
            post = JSON.parse(response.data);
            _this.userMainPosts.push(post);
        });
        sourceUserMainPost.addEventListener('error', function (response) {
            if (response.eventPhase == sourceUserMainPost.CLOSED) {
                flag = true;
            }
        });
    };
    //从服务器接受SSE消息的用户回帖post
    UserCenterComponent.prototype.getSSEUserCommentPosts = function () {
        var _this = this;
        var url = "/search/comments/" + this.user.username;
        var sourceUserCommentPost = new EventSource(url);
        var post = new _model_PostModel__WEBPACK_IMPORTED_MODULE_3__["Post"];
        var flag = true;
        sourceUserCommentPost.addEventListener('message', function (response) {
            if (flag == true) {
                _this.userCommentPosts = [];
                flag = false;
            }
            post = JSON.parse(response.data);
            _this.userCommentPosts.push(post);
        });
        sourceUserCommentPost.addEventListener('error', function (response) {
            if (response.eventPhase == sourceUserCommentPost.CLOSED) {
                flag = true;
            }
        });
    };
    UserCenterComponent.prototype.showMain = function () {
        this.showWhat = false;
    };
    UserCenterComponent.prototype.showComment = function () {
        this.showWhat = true;
    };
    UserCenterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-center',
            template: __webpack_require__(/*! ./user-center.component.html */ "./src/app/user-center/user-center.component.html"),
            styles: [__webpack_require__(/*! ./user-center.component.css */ "./src/app/user-center/user-center.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
    ], UserCenterComponent);
    return UserCenterComponent;
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