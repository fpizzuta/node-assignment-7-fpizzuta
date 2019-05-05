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

/***/ "./src/app/all-posts/all-posts.component.css":
/*!***************************************************!*\
  !*** ./src/app/all-posts/all-posts.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC1wb3N0cy9hbGwtcG9zdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/all-posts/all-posts.component.html":
/*!****************************************************!*\
  !*** ./src/app/all-posts/all-posts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <app-post \n      *ngFor=\"let postObject of postList\" \n      [post]=\"postObject\"\n      [apiURL]=\"apiURL\"\n    >\n  </app-post>\n \n"

/***/ }),

/***/ "./src/app/all-posts/all-posts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/all-posts/all-posts.component.ts ***!
  \**************************************************/
/*! exports provided: AllPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPostsComponent", function() { return AllPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var AllPostsComponent = /** @class */ (function () {
    function AllPostsComponent(postService) {
        this.postService = postService;
        this.title = 'angularStart';
        this.username = "Placeholder";
        this.postList = null;
        this.apiURL = '';
    }
    AllPostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.listPosts().subscribe(function (posts) {
            _this.postList = posts;
        });
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL;
        console.log('apiURL ' + this.apiURL);
    };
    AllPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-posts',
            template: __webpack_require__(/*! ./all-posts.component.html */ "./src/app/all-posts/all-posts.component.html"),
            styles: [__webpack_require__(/*! ./all-posts.component.css */ "./src/app/all-posts/all-posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], AllPostsComponent);
    return AllPostsComponent;
}());



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



var routes = [];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <h2>Push Notifications by placeholder </h2>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <flash-messages class=\"flash\"></flash-messages>\r\n  <div class=\"leftcolumn\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"rightcolumn\">\r\n      <div class=\"card\">\r\n        <h2> <a href=\"/newpost\">New Notification</a></h2>\r\n        <h2>Audience</h2>\r\n        <h2>Users</h2>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div class=\"footer\">\r\n  <h2>Footer stuff here</h2>\r\n</div>\r\n"

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
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.service */ "./src/app/post.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var AppComponent = /** @class */ (function () {
    function AppComponent(postService, flashMessage) {
        this.postService = postService;
        this.flashMessage = flashMessage;
        this.title = 'angularStart';
        this.username = "Placeholder";
        this.postList = null;
        this.apiURL = '';
        //here
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.postList = this.postService.listPosts();
        this.postService.listPosts().subscribe(function (posts) {
            _this.postList = posts;
        });
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL;
        console.log('apiURL ' + this.apiURL);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all-posts/all-posts.component */ "./src/app/all-posts/all-posts.component.ts");
/* harmony import */ var _postdetail_postdetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./postdetail/postdetail.component */ "./src/app/postdetail/postdetail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _editpost_editpost_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editpost/editpost.component */ "./src/app/editpost/editpost.component.ts");
/* harmony import */ var _newpost_newpost_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./newpost/newpost.component */ "./src/app/newpost/newpost.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__);














var routes = [
    { path: '', redirectTo: '/allposts', pathMatch: 'full' },
    { path: 'allposts', component: _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_8__["AllPostsComponent"] },
    { path: 'postdetail/:id', component: _postdetail_postdetail_component__WEBPACK_IMPORTED_MODULE_9__["PostdetailComponent"] },
    { path: 'editpost/:id', component: _editpost_editpost_component__WEBPACK_IMPORTED_MODULE_11__["EditpostComponent"] },
    { path: 'newpost', component: _newpost_newpost_component__WEBPACK_IMPORTED_MODULE_12__["NewpostComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"],
                _all_posts_all_posts_component__WEBPACK_IMPORTED_MODULE_8__["AllPostsComponent"],
                _postdetail_postdetail_component__WEBPACK_IMPORTED_MODULE_9__["PostdetailComponent"],
                _editpost_editpost_component__WEBPACK_IMPORTED_MODULE_11__["EditpostComponent"],
                _newpost_newpost_component__WEBPACK_IMPORTED_MODULE_12__["NewpostComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__["FlashMessagesModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/editpost/editpost.component.css":
/*!*************************************************!*\
  !*** ./src/app/editpost/editpost.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRwb3N0L2VkaXRwb3N0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/editpost/editpost.component.html":
/*!**************************************************!*\
  !*** ./src/app/editpost/editpost.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"box\">\n    <h2>Edit Notification</h2>\n    <form #form=\"ngForm\" (ngSubmit)=\"updatePost(form.value)\">\n      <div class=\"inputBox\">\n        <input type=\"hidden\" id=\"_id\" name=\"_id\" value=\"post._id\" [ngModel]=\"post._id\"/>\n        <input type=\"hidden\" id=\"date\" name=\"date\" value=\"post.date\" [ngModel]=\"post.date\"/>\n        <input type=\"text\" name=\"title\" value=\"post.title\" required=\"\" [ngModel]=\"post.title\"/>\n        <label>Title</label>\n      </div>\n      <div class=\"inputBox\"><input type=\"text\" name=\"audience\" value=\"post.audience\" required=\"\" [ngModel]=\"post.audience\"/>\n        <label>Audience</label>\n      </div>\n      <div class=\"inputBox\"><input type=\"text\" name=\"image\" value=\"post.image\" required=\"\" [ngModel]=\"post.image\"/>\n        <label>Image</label>\n      </div>\n      <div class=\"inputBox\">\n        <input type=\"text\" name=\"message\" value=\"post.message\" required=\"\" [ngModel]=\"post.message\"/>\n        <label>Message</label>\n      </div>\n      <input type=\"submit\" name=\"\" value=\"Submit\"/>\n    </form>\n  </div>\n  <a routerLink=\"/allposts\">back to posts</a>"

/***/ }),

/***/ "./src/app/editpost/editpost.component.ts":
/*!************************************************!*\
  !*** ./src/app/editpost/editpost.component.ts ***!
  \************************************************/
/*! exports provided: EditpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpostComponent", function() { return EditpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var EditpostComponent = /** @class */ (function () {
    function EditpostComponent(postService, route, flashMessage) {
        this.postService = postService;
        this.route = route;
        this.flashMessage = flashMessage;
    }
    EditpostComponent.prototype.ngOnInit = function () {
        this.getPost();
    };
    EditpostComponent.prototype.getPost = function () {
        var _this = this;
        var param = this.route.snapshot.paramMap.get('id');
        this.postService.getPost(param)
            .subscribe(function (post) {
            _this.post = post;
        });
    };
    EditpostComponent.prototype.updatePost = function (obj) {
        var _this = this;
        this.post._id = obj._id;
        this.post.title = obj.title;
        this.post.date = obj.date;
        this.post.audience = obj.audience;
        this.post.image = obj.image;
        this.post.message = obj.message;
        console.log("this.post: " + JSON.stringify(this.post));
        // call the photoService update method
        this.postService.updatePost(this.post._id, this.post)
            .subscribe(function (result) {
            location.reload();
            _this.flashMessage.show('Edit Successful', { cssClass: 'flash', timeout: 3000 });
        });
    };
    EditpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editpost',
            template: __webpack_require__(/*! ./editpost.component.html */ "./src/app/editpost/editpost.component.html"),
            providers: [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]],
            styles: [__webpack_require__(/*! ./editpost.component.css */ "./src/app/editpost/editpost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], EditpostComponent);
    return EditpostComponent;
}());



/***/ }),

/***/ "./src/app/newpost/newpost.component.css":
/*!***********************************************!*\
  !*** ./src/app/newpost/newpost.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3Bvc3QvbmV3cG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/newpost/newpost.component.html":
/*!************************************************!*\
  !*** ./src/app/newpost/newpost.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"box\">\n      <h2>Create New Post</h2>\n      <form #newpostForm=\"ngForm\" (ngSubmit)=\"save(newpostForm)\">\n        <div class=\"inputBox\">\n          <input type=\"text\" name=\"title\" placeholder=\"Title\" [(ngModel)]=\"post.title\" required/>\n          <label>Title</label>\n        </div>\n        <div class=\"inputBox\">\n          <input type=\"date\" name=\"date\" required [(ngModel)]=\"post.date\"/>\n        </div>\n        <div class=\"inputBox\">\n          <input type=\"text\" name=\"audience\" placeholder=\"Audience\" required [(ngModel)]=\"post.audience\"/>\n          <label>Audience</label>\n        </div>\n        <div class=\"inputBox\"><input type=\"text\" name=\"image\" placeholder=\"Image URL\" required [(ngModel)]=\"post.image\" required/>\n          <label>Image</label>\n        </div>\n        <div class=\"inputBox\">\n          <input type=\"text\" name=\"message\" placeholder=\"Message\" required [(ngModel)]=\"post.message\" required/>\n          <label>Message</label>\n        </div>\n        <input type=\"submit\" name=\"\" value=\"Submit\"/>\n      </form>\n  </div>\n  <a routerLink=\"/allposts\">back to posts</a>\n   "

/***/ }),

/***/ "./src/app/newpost/newpost.component.ts":
/*!**********************************************!*\
  !*** ./src/app/newpost/newpost.component.ts ***!
  \**********************************************/
/*! exports provided: NewpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpostComponent", function() { return NewpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);




var NewpostComponent = /** @class */ (function () {
    function NewpostComponent(postService, flashMessage) {
        this.postService = postService;
        this.flashMessage = flashMessage;
        this.post = {};
    }
    NewpostComponent.prototype.ngOnInit = function () {
    };
    NewpostComponent.prototype.save = function (obj) {
        var _this = this;
        console.log('form values ', this.post);
        this.postService.newPost(this.post)
            .subscribe(function (post) {
            location.reload();
            _this.flashMessage.show('Post Created', { cssClass: 'flash', timeout: 5000 });
        });
    };
    NewpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newpost',
            template: __webpack_require__(/*! ./newpost.component.html */ "./src/app/newpost/newpost.component.html"),
            styles: [__webpack_require__(/*! ./newpost.component.css */ "./src/app/newpost/newpost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NewpostComponent);
    return NewpostComponent;
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL;
    }
    PostService.prototype.listPosts = function () {
        return this.http.get(this.apiURL + '/api/posts');
    };
    PostService.prototype.deletePost = function (id) {
        return this.http.delete(this.apiURL + '/api/posts/' + id);
    };
    PostService.prototype.getPost = function (id) {
        return this.http.get(this.apiURL + '/api/posts/' + id);
    };
    PostService.prototype.updatePost = function (id, post) {
        return this.http.put(this.apiURL + '/api/posts/' + id, post);
    };
    PostService.prototype.newPost = function (post) {
        return this.http.post(this.apiURL + '/api/posts/', post);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <h2>{{ post.title }}\r\n        <div class=\"edit\">\r\n          <a routerLink=\"/editpost/{{post._id}}\">Edit</a>\r\n          <!-- <button type=\"button\" (click)=\"deletePost()\">Delete</button> -->\r\n          <a href='#' (click)=\"deletePost()\">Delete</a>\r\n        </div>\r\n    </h2>\r\n    <h5>{{ post.date }}</h5>\r\n    <div class=\"fakeimg\" style=\"height:200px\">{{ post.image }}</div>\r\n    <p>{{ post.message }}</p>\r\n   \r\n \r\n"

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
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PostComponent = /** @class */ (function () {
    function PostComponent(postService, router) {
        this.postService = postService;
        this.router = router;
    }
    PostComponent.prototype.ngOnInit = function () {
        console.log(this.apiURL);
    };
    PostComponent.prototype.deletePost = function () {
        var _this = this;
        if (confirm("Are you sure you want to delete " + this.post.title + "?")) {
            console.log("deleting " + this.post._id);
            this.postService.deletePost(this.post._id)
                .subscribe(function (result) {
                // alert(`Post ${this.post.title} has been deleted`);
                _this.router.navigate(['/allposts']);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "apiURL", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            providers: [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]],
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/postdetail/postdetail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/postdetail/postdetail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RkZXRhaWwvcG9zdGRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/postdetail/postdetail.component.html":
/*!******************************************************!*\
  !*** ./src/app/postdetail/postdetail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ post.title }}</h2>\n<h5>{{ post.date }}</h5>\n<div class=\"fakeimg\" style=\"height:200px\">{{ post.image }}</div>\n<p>{{ post.message }}</p>\n<a routerLink=\"/allposts\">back to posts</a>\n\n<div class=\"box\">\n    <h2>New Notification</h2>\n    <form #form=\"ngForm\" (ngSubmit)=\"updatePost(form.value)\">\n      <div class=\"inputBox\">\n        <input type=\"hidden\" id=\"_id\" name=\"_id\" value=\"post._id\" [ngModel]=\"post._id\"/>\n        <input type=\"hidden\" id=\"date\" name=\"date\" value=\"post.date\" [ngModel]=\"post.date\"/>\n        <input type=\"text\" name=\"title\" value=\"post.title\" required=\"\" [ngModel]=\"post.title\"/>\n        <label>Title</label>\n      </div>\n      <div class=\"inputBox\"><input type=\"text\" name=\"audience\" value=\"post.audience\" required=\"\" [ngModel]=\"post.audience\"/>\n        <label>Audience</label>\n      </div>\n      <div class=\"inputBox\"><input type=\"text\" name=\"image\" value=\"post.image\" required=\"\" [ngModel]=\"post.image\"/>\n        <label>Image</label>\n      </div>\n      <div class=\"inputBox\">\n        <input type=\"text\" name=\"message\" value=\"post.message\" required=\"\" [ngModel]=\"post.message\"/>\n        <label>Message</label>\n      </div>\n      <input type=\"submit\" name=\"\" value=\"Submit\"/>\n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/postdetail/postdetail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/postdetail/postdetail.component.ts ***!
  \****************************************************/
/*! exports provided: PostdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdetailComponent", function() { return PostdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PostdetailComponent = /** @class */ (function () {
    function PostdetailComponent(postService, route) {
        this.postService = postService;
        this.route = route;
    }
    PostdetailComponent.prototype.ngOnInit = function () {
        this.getPost();
    };
    PostdetailComponent.prototype.getPost = function () {
        var _this = this;
        var param = this.route.snapshot.paramMap.get('id');
        this.postService.getPost(param)
            .subscribe(function (post) {
            _this.post = post;
        });
    };
    PostdetailComponent.prototype.updatePost = function (obj) {
        this.post._id = obj._id;
        this.post.title = obj.title;
        this.post.date = obj.date;
        this.post.audience = obj.audience;
        this.post.image = obj.image;
        this.post.message = obj.message;
        console.log("this.post: " + JSON.stringify(this.post));
        // call the photoService update method
        this.postService.updatePost(this.post._id, this.post)
            .subscribe(function (result) {
            location.reload();
        });
    };
    PostdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postdetail',
            template: __webpack_require__(/*! ./postdetail.component.html */ "./src/app/postdetail/postdetail.component.html"),
            providers: [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]],
            styles: [__webpack_require__(/*! ./postdetail.component.css */ "./src/app/postdetail/postdetail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PostdetailComponent);
    return PostdetailComponent;
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
    production: false,
    apiURL: ''
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

module.exports = __webpack_require__(/*! C:\documents\harvard\node\assignment-7-fpizzuta\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map