(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n/*from https://www.w3schools.com/howto/howto_css_blog_layout.asp*/\r\n* {\r\n    box-sizing: border-box;\r\n  }\r\n/* Add a gray background color with some padding */\r\nbody {\r\n    font-family: Arial;\r\n    padding: 20px;\r\n    background: #f1f1f1;\r\n  }\r\n/* Header/Blog Title */\r\n.header {\r\n    padding: 30px;\r\n    font-size: 40px;\r\n    text-align: center;\r\n    background: white;\r\n  }\r\n/* Create two unequal columns that floats next to each other */\r\n/* Left column */\r\n.leftcolumn {   \r\n    float: left;\r\n    width: 75%;\r\n  }\r\n/* Right column */\r\n.rightcolumn {\r\n    float: left;\r\n    width: 25%;\r\n    padding-left: 20px;\r\n  }\r\n/* Fake image */\r\n.fakeimg {\r\n    background-color: #aaa;\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n/* Add a card effect for articles */\r\n.card {\r\n     background-color: white;\r\n     padding: 20px;\r\n     margin-top: 20px;\r\n  }\r\n.edit {\r\n    float:right;\r\n  }\r\n.edit a {\r\n    padding-right: 10px;\r\n  }\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n/* Footer */\r\n.footer {\r\n    padding: 20px;\r\n    text-align: center;\r\n    background: #ddd;\r\n    margin-top: 20px;\r\n  }\r\n.alert {\r\n    padding: 20px;\r\n    background-color: #f44336;\r\n    color: white;\r\n    margin-bottom: 15px;\r\n    font-size: .5em;\r\n    /*opacity: 0;\r\n    visibility: hidden;\r\n    transition: visibility 0s 2s, opacity 2s linear; */\r\n     -webkit-animation: fadeout 5s linear 1 normal forwards;\r\n  }\r\n/* Form look and feel */\r\n.box\r\n{\r\n\tposition: relative;\r\n\t/* top: 50%; */\r\n\tleft: 50%;\r\n\t/* transform: translate(-50%, -50%); */\r\n\twidth: 400px;\r\n\tpadding: 40px;\r\n\tbackground: rgba(0,0,0,.7);\r\n\tbox-sizing: border-box;\r\n\tbox-shadow: 0 15px 25px rgba(0,0,0,.5);\r\n\tborder-radius: 10px;\r\n}\r\n.box h2\r\n{\r\n\tmargin: 0 0 30px;\r\n\tpadding: 0;\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n}\r\n.box .inputBox\r\n{\r\n\tposition: relative;\r\n}\r\n.box .inputBox input\r\n{\r\n\twidth: 100%;\r\n\tpadding: 10px 0;\r\n\tfont-size: 16px;\r\n\tcolor: #fff;\r\n\tletter-spacing: 1px;\r\n\tmargin-bottom: 30px;\r\n\tborder: none;\r\n\tborder-bottom: 1px solid #fff;\r\n\toutline: none;\r\n\tbackground: transparent;\r\n}\r\n.box .inputBox label\r\n{\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tpadding: 10px 0;\r\n\tfont-size: 16px;\r\n\tcolor: #fff;\r\n\tletter-spacing: 1px;\r\n\tpointer-events: none;\r\n\ttransition: .5s\r\n}\r\n.box .inputBox input:focus ~ label,\r\n.box .inputBox input:valid ~ label\r\n{\r\n\ttop: -18px;\r\n\tleft: 0;\r\n\tcolor: #03a9f4;\r\n\tfont-size: 12px;\r\n}\r\n.box input[type=\"submit\"]\r\n{\r\n\tbackground: transparent;\r\n\tborder:none;\r\n\toutline: none;\r\n\tcolor: #fff;\r\n\tbackground: #03a9f4;\r\n\tpadding: 10px 20px;\r\n\tcursor: pointer;\r\n\tborder-radius: 5px;\r\n}\r\n.flash {\r\n    text-align: center;\r\n    font-size: 1em;\r\n  }\r\n@-webkit-keyframes fadeout{\r\n      from{\r\n         opacity: 1;\r\n      }\r\n      to{\r\n          opacity: 0;\r\n      }\r\n  }\r\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width: 800px) {\r\n    .leftcolumn, .rightcolumn {   \r\n      width: 100%;\r\n      padding: 0;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RSxpRUFBaUU7QUFFakU7SUFDSSxzQkFBc0I7RUFDeEI7QUFFQSxrREFBa0Q7QUFDbEQ7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtBQUVBLDhEQUE4RDtBQUM5RCxnQkFBZ0I7QUFDaEI7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7QUFFQSxlQUFlO0FBQ2Y7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUVBLG1DQUFtQztBQUNuQztLQUNHLHVCQUF1QjtLQUN2QixhQUFhO0tBQ2IsZ0JBQWdCO0VBQ25CO0FBRUE7SUFDRSxXQUFXO0VBQ2I7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUVBLG1DQUFtQztBQUNuQztJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztFQUNiO0FBRUEsV0FBVztBQUNYO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmOztzREFFa0Q7S0FDakQsc0RBQXNEO0VBQ3pEO0FBRUEsdUJBQXVCO0FBQ3pCOztDQUVDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsU0FBUztDQUNULHNDQUFzQztDQUN0QyxZQUFZO0NBQ1osYUFBYTtDQUNiLDBCQUEwQjtDQUMxQixzQkFBc0I7Q0FDdEIsc0NBQXNDO0NBQ3RDLG1CQUFtQjtBQUNwQjtBQUVBOztDQUVDLGdCQUFnQjtDQUNoQixVQUFVO0NBQ1YsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjtBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjtBQUVBOztDQUVDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZUFBZTtDQUNmLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWiw2QkFBNkI7Q0FDN0IsYUFBYTtDQUNiLHVCQUF1QjtBQUN4QjtBQUVBOztDQUVDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sT0FBTztDQUNQLGVBQWU7Q0FDZixlQUFlO0NBQ2YsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEI7QUFDRDtBQUVBOzs7Q0FHQyxVQUFVO0NBQ1YsT0FBTztDQUNQLGNBQWM7Q0FDZCxlQUFlO0FBQ2hCO0FBRUE7O0NBRUMsdUJBQXVCO0NBQ3ZCLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjtBQUVFO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7QUFFQTtNQUNJO1NBQ0csVUFBVTtNQUNiO01BQ0E7VUFDSSxVQUFVO01BQ2Q7RUFDSjtBQUVBLCtJQUErSTtBQUMvSTtJQUNFO01BQ0UsV0FBVztNQUNYLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG4vKmZyb20gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19jc3NfYmxvZ19sYXlvdXQuYXNwKi9cclxuXHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIGEgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggc29tZSBwYWRkaW5nICovXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgLyogSGVhZGVyL0Jsb2cgVGl0bGUgKi9cclxuICAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogQ3JlYXRlIHR3byB1bmVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbiAgLyogTGVmdCBjb2x1bW4gKi9cclxuICAubGVmdGNvbHVtbiB7ICAgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJpZ2h0IGNvbHVtbiAqL1xyXG4gIC5yaWdodGNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZha2UgaW1hZ2UgKi9cclxuICAuZmFrZWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSBjYXJkIGVmZmVjdCBmb3IgYXJ0aWNsZXMgKi9cclxuICAuY2FyZCB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgcGFkZGluZzogMjBweDtcclxuICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZWRpdCB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLmVkaXQgYSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuICAucm93OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAvKiBGb290ZXIgKi9cclxuICAuZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmFsZXJ0IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogLjVlbTtcclxuICAgIC8qb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgMnMsIG9wYWNpdHkgMnMgbGluZWFyOyAqL1xyXG4gICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlb3V0IDVzIGxpbmVhciAxIG5vcm1hbCBmb3J3YXJkcztcclxuICB9XHJcblxyXG4gIC8qIEZvcm0gbG9vayBhbmQgZmVlbCAqL1xyXG4uYm94XHJcbntcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LyogdG9wOiA1MCU7ICovXHJcblx0bGVmdDogNTAlO1xyXG5cdC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xyXG5cdHdpZHRoOiA0MDBweDtcclxuXHRwYWRkaW5nOiA0MHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjcpO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym94LXNoYWRvdzogMCAxNXB4IDI1cHggcmdiYSgwLDAsMCwuNSk7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmJveCBoMlxyXG57XHJcblx0bWFyZ2luOiAwIDAgMzBweDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJveCAuaW5wdXRCb3hcclxue1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJveCAuaW5wdXRCb3ggaW5wdXRcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDEwcHggMDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYm94IC5pbnB1dEJveCBsYWJlbFxyXG57XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHBhZGRpbmc6IDEwcHggMDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHR0cmFuc2l0aW9uOiAuNXNcclxufVxyXG5cclxuLmJveCAuaW5wdXRCb3ggaW5wdXQ6Zm9jdXMgfiBsYWJlbCxcclxuLmJveCAuaW5wdXRCb3ggaW5wdXQ6dmFsaWQgfiBsYWJlbFxyXG57XHJcblx0dG9wOiAtMThweDtcclxuXHRsZWZ0OiAwO1xyXG5cdGNvbG9yOiAjMDNhOWY0O1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJveCBpbnB1dFt0eXBlPVwic3VibWl0XCJdXHJcbntcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6bm9uZTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6ICMwM2E5ZjQ7XHJcblx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiAgLmZsYXNoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dHtcclxuICAgICAgZnJvbXtcclxuICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgICB0b3tcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDgwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5sZWZ0Y29sdW1uLCAucmlnaHRjb2x1bW4geyAgIFxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\documents\harvard\node\assignment-7-fpizzuta\client\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map