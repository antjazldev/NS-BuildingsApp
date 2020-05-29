require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-app",
            template: "<page-router-outlet></page-router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"black"},{"type":"declaration","property":"color","value":"white"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/http-client/index.js");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_4__["NativeScriptModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3__["NativeScriptHttpClientModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__["NativeScriptRouterModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__["NativeScriptRouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["routes"]),
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_0__["NativeScriptUIListViewModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ].concat(_app_routing__WEBPACK_IMPORTED_MODULE_7__["navigatableComponents"]),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigatableComponents", function() { return navigatableComponents; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./login/login.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./list/list.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./details/details.component.ts");



var routes = [
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: "list", component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"] },
    { path: "details", component: _details_details_component__WEBPACK_IMPORTED_MODULE_2__["DetailsComponent"] }
];
var navigatableComponents = [
    _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"],
    _details_details_component__WEBPACK_IMPORTED_MODULE_2__["DetailsComponent"]
];


/***/ }),

/***/ "./details/details.component.css":
/***/ (function(module, exports) {

module.exports = ".title { font-size: 25;\r\n         color:#000000}\r\n.bigtitle { font-size: 24 ;color:#750a0a;text-decoration: underline;text-decoration-color: black;}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n  }\r\n  .info {color: white;\r\n      background-color: #2196F3;} /* Blue */\r\n.warning {color: white;\r\n          background-color: #00ccff;\r\n          font-size: 24;\r\n          text-align: center;\r\n          vertical-align: middle;}\r\n\r\n.border2{\r\n    \r\n    border-bottom: double;\r\n   \r\n}\r\n.phone{\r\n    color: rgb(0, 110, 255);\r\n    text-decoration: underline;\r\n    \r\n}\r\n.my-bg {\r\n    background-image: url(\"~/images/bg.jpg\") no-repeat;\r\n    background-size: cover;\r\n}"

/***/ }),

/***/ "./details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\r\n<ActionBar title=\"Building\" >\r\n  <NavigationButton android.systemIcon=\"ic_menu_back\" text=\"Back\" (tap)=\"routerExtensions.back()\"></NavigationButton>\r\n</ActionBar></Page.actionBar>\r\n<StackLayout class=\"my-bg\" >\r\n<StackLayout orientation=\"horizontal\" paddingTop=\"20\" paddingLeft=\"20\" >\r\n<Image src=\"{{Details.image}}\" width=\"300\" height=\"250\" stretch=\"aspectFill\"></Image>\r\n<StackLayout paddingTop=\"20\">\r\n  <!--NAME-->\r\n    <label horizontalAlignment=\"left\" paddingLeft=\"20\">\r\n        <FormattedString>\r\n          <Span text=\"Name:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\" ></Span>\r\n        </FormattedString>\r\n    </label>\r\n<Label text=\"{{Details.name}}\" fontAttributes=\"Bold\"  class=\"title bold\" paddingLeft=\"20\"></Label>\r\n<!--MAIN CONTACT-->\r\n<label horizontalAlignment=\"center\" paddingLeft=\"20\">\r\n        <FormattedString>\r\n          <Span text=\"Main Contact:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\" paddingLeft=\"20\"></Span>\r\n        </FormattedString>\r\n    </label>\r\n<!--<Label text=\"                            {{Details.contacts[0].name}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>-->\r\n<label paddingLeft=\"20\" >\r\n    <FormattedString *ngIf=\"!(Details.contacts.length === 0)\">\r\n      <Span text=\"{{Details.contacts[0].name}}\" foregroundColor=\"#3C5AFD\" class=\"title bold\"></Span>\r\n    </FormattedString>\r\n</label>\r\n</StackLayout>\r\n</StackLayout>\r\n<!--AdDRESS-->\r\n<label paddingTop=\"10\" paddingLeft=\"70\">\r\n    <FormattedString>\r\n      <Span text=\"Adress:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>\r\n<Label text=\"{{Details.address}}\" fontAttributes=\"Bold\"  class=\"title bold\" paddingTop=\"5\" paddingLeft=\"70\"></Label>\r\n<Label paddingTop=\"10\" paddingLeft=\"70\">\r\n    <FormattedString>\r\n     \r\n      <Span text=\"Phone:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\" ></Span>\r\n    </FormattedString>\r\n     \r\n</Label>\r\n<!--PHONE-->\r\n\r\n<Label (tap)=\"callNumber()\"  text=\"{{Details.contacts[0].phone}}\" fontAttributes=\"Bold\"  class=\"title phone\" name=\"currentPhone\"  paddingTop=\"5\" paddingLeft=\"70\"></Label>\r\n<Label (tap)=\"callNumber()\" text=\"{{Details.contacts[0].phone_home}}\" fontAttributes=\"Bold\"  class=\"title phone\"  paddingTop=\"5\" paddingLeft=\"70\"></Label>\r\n<!--EMAIL-->\r\n<label paddingTop=\"10\" paddingLeft=\"70\">\r\n    <FormattedString>\r\n      <Span text=\"Email:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<Label text=\"{{Details.contacts[0].email}}\" fontAttributes=\"Bold\"  class=\"title bold\"  paddingTop=\"5\" paddingLeft=\"70\" ></Label>      \r\n<Label text=\"                      \" fontAttributes=\"Bold\"  class=\"title bold\" horizontalAlignment=\"center\"></Label>  \r\n<label class=\"far my-label border\"  paddingLeft=\"70\">\r\n    <FormattedString>\r\n      <Span text=\"Other Contacts:\"  class=\"bigtitle bold\" horizontalAlignment=\"center\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<!--Other Contacts-->\r\n<StackLayout *ngFor=\"let contact of Details.contacts | slice:1\">\r\n    <Label (tap)=\"makeCall(contact.phone)\" paddingLeft=\"70\">\r\n        <FormattedString>\r\n          <Span [text]=\"contact.name\" foregroundColor=\"#3C5AFD\" class=\"title bold\"></Span>\r\n          <Span text=\"       \" foregroundColor=\"#3C5AFD\" class=\"title border2\"></Span>\r\n          <Span [text]=\"contact.phone\" foregroundColor=\"#3C5AFD\" class=\"title phone\" ></Span>\r\n        </FormattedString>\r\n    </Label> \r\n</StackLayout>\r\n</StackLayout>"

/***/ }),

/***/ "./details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var nativescript_phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-phone/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, routerExtensions) {
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.currentPhone = "";
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.Building = params["DataList"];
            var obj = JSON.parse(_this.Building);
            _this.Details = obj;
            console.log("Name", obj.image);
            console.log("Details", _this.Details.image);
        });
    };
    DetailsComponent.prototype.callNumber = function () {
        nativescript_phone__WEBPACK_IMPORTED_MODULE_2__["dial"](String(this.Details.contacts[0].phone), true);
    };
    DetailsComponent.prototype.makeCall = function (item) {
        var number = item;
        console.log(number);
        nativescript_phone__WEBPACK_IMPORTED_MODULE_2__["dial"](number, true);
    };
    DetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
    ]; };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-details",
            template: __importDefault(__webpack_require__("./details/details.component.html")).default,
            styles: [__importDefault(__webpack_require__("./details/details.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./list/list.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\r\n    vertical-align: center; \r\n    font-size: 20;\r\n    margin: 15;\r\n}\r\n.overlay { background-color: rgba(0,0,0,0.8);}\r\n\r\n.description-label{\r\n    margin-bottom: 15;\r\n}\r\n\r\n.t-36 {\r\n    font-size: 36;\r\n}\r\n.fas {\r\n    font-family: \"Font Awesome 5 Free\", \"fa-solid-900\";\r\n    font-weight: 900;\r\n}\r\n.buildingName {\r\n    color: rgb(255, 255, 255);\r\n    font-family: 'Nordica Plus', 'nordicaclassicltext';\r\n    font-weight: bold;\r\n    font-size: 30;\r\n}\r\n\r\n.buildingAddress {\r\n    color: rgb(204, 206, 204);\r\n    font-family: 'Nordica Plus', 'nordicaclassicltext';\r\n    font-size: 18;\r\n    text-transform: uppercase;\r\n}"

/***/ }),

/***/ "./list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\r\n  <Label text=\"Buildings\"></Label>\r\n</ActionBar>\r\n\r\n<GridLayout tkExampleTitle tkToggleNavButton>\r\n  <RadListView [items]=\"buildings\"  marginRight=\"-2\"  (itemTap)=\"onItemTap($event)\">\r\n  <ListViewGridLayout tkListViewLayout scrollDirection=\"Vertical\"\r\n            itemHeight=\"180\" spanCount=\"1\">\r\n        </ListViewGridLayout>\r\n  \r\n    <ng-template tkListItemTemplate let-item=\"item\">\r\n      \r\n      <GridLayout backgroundColor=\"White\">\r\n        <GridLayout>\r\n            <ios>\r\n                <Image src=\"{{ item.image }}\" stretch=\"aspectFill\"></Image>\r\n            </ios>\r\n            <android>\r\n                <Image src=\"{{ item.image }}\" stretch=\"aspectFill\"\r\n                    height=\"180\"></Image>\r\n                \r\n            </android>\r\n            <GridLayout verticalAlignment=\"bottom\">\r\n                <StackLayout paddingTop=\"1\" paddingBottom=\"0\"\r\n                    paddingLeft=\"16\" paddingRight=\"16\">\r\n                    <Label text=\"{{ item.name }}\" class=\"buildingName overlay\"></Label>\r\n                    <Label text=\"{{ item.address }}\"class=\"buildingAddress overlay\"></Label>\r\n                </StackLayout>\r\n            </GridLayout>\r\n        </GridLayout>\r\n    </GridLayout>\r\n\r\n\r\n\r\n    </ng-template>\r\n  </RadListView>\r\n</GridLayout>"

/***/ }),

/***/ "./list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_building_building_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/building/building.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");



var ListComponent = /** @class */ (function () {
    // buildingsList: Array<Object> = [];
    function ListComponent(router, buildingsService) {
        this.router = router;
        this.buildingsService = buildingsService;
        this.buildings = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.buildingsList.push({ name: "Apples" });
        //this.buildingsList.push({ name: "Bananas" });
        //this.buildingsList.push({ name: "Oranges" });
        this.buildingsService.getBuildings()
            .subscribe((function (result) { return _this.buildings = result["sites"]; }));
        console.log(this.buildings);
    };
    ListComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped: " + this.buildings[args.index]);
        var navigationExtras = {
            queryParams: {
                DataList: JSON.stringify(this.buildings[args.index])
            }
        };
        this.router.navigate(["/details"], navigationExtras);
    };
    ListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_building_building_service__WEBPACK_IMPORTED_MODULE_1__["BuildingsService"] }
    ]; };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-list",
            providers: [_shared_building_building_service__WEBPACK_IMPORTED_MODULE_1__["BuildingsService"]],
            template: __importDefault(__webpack_require__("./list/list.component.html")).default,
            styles: [__importDefault(__webpack_require__("./list/list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_building_building_service__WEBPACK_IMPORTED_MODULE_1__["BuildingsService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./login/login.component.css":
/***/ (function(module, exports) {

module.exports = "FlexboxLayout {\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-size: cover;\r\n  background-image: url(\"~/images/build.jpg\");\r\n}\r\nStackLayout {\r\n  width: 300;\r\n  padding: 10 16;\r\n  background-color: #f0f0f0;\r\n}\r\nImage {\r\n  margin-bottom: 20;\r\n  height: 70;\r\n}\r\nButton, TextField {\r\n  margin-bottom: 10;\r\n}\r\n.btn-primary {\r\n  background-color: #CB1D00;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n}\r\nTextField {\r\n  placeholder-color: #C4AFB4;\r\n  color: black;\r\n}\r\n.dark {\r\n  background-color: #301217;\r\n}\r\n.dark TextField {\r\n  color:  #C4AFB4;\r\n}"

/***/ }),

/***/ "./login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<FlexboxLayout>\r\n    <StackLayout class=\"form\" [class.dark]=\"!isLoggingIn\">\r\n        <TextField hint=\"Email Address\" keyboardType=\"email\"\r\n            autocorrect=\"false\" autocapitalizationType=\"none\"\r\n            [(ngModel)]=\"user.email\" class=\"input input-border\"></TextField>\r\n        <TextField hint=\"Password\" secure=\"true\" [(ngModel)]=\"user.password\"\r\n            class=\"input input-border\"></TextField>\r\n\r\n        <Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\"\r\n            class=\"btn btn-primary\" (tap)=\"submit()\"></Button>\r\n        <Button [text]=\"isLoggingIn ? 'Sign up' : 'Back to login'\"\r\n            (tap)=\"toggleDisplay()\"></Button>\r\n    </StackLayout>\r\n</FlexboxLayout>"

/***/ }),

/***/ "./login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/user/user.model.ts");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./shared/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new _shared_user_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.user.email = "antjazl@gmail.com";
        this.user.password = "antjazl";
    }
    LoginComponent.prototype.ngOnInit = function () { this.page.actionBarHidden = true; };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (exception) {
            if (exception.error && exception.error.description) {
                alert(exception.error.description);
            }
            else {
                alert(exception);
            }
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function (exception) {
            if (exception.error && exception.error.description) {
                alert(exception.error.description);
            }
            else {
                alert(exception);
            }
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__["Page"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-login",
            providers: [_shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            template: __importDefault(__webpack_require__("./login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__("./login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__["Page"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"name":"nativescript-template-ng-groceries","version":"3.3.0","main":"main.js"};

/***/ }),

/***/ "./shared/building/building.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsService", function() { return BuildingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./shared/config.ts");



var BuildingsService = /** @class */ (function () {
    function BuildingsService(httpService) {
        this.httpService = httpService;
    }
    BuildingsService.prototype.getBuildings = function () {
        return this.httpService.get(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].apiBuildingsUrl);
    };
    BuildingsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BuildingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BuildingsService);
    return BuildingsService;
}());



/***/ }),

/***/ "./shared/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.apiUrl = "https://baas.kinvey.com/";
    Config.appKey = "kid_HyHoT_REf";
    Config.authHeader = "Basic a2lkX0h5SG9UX1JFZjo1MTkxMDJlZWFhMzQ0MzMyODFjN2MyODM3MGQ5OTIzMQ";
    Config.token = "";
    Config.apiBuildingsUrl = "https://s3.amazonaws.com/decom_uploads/external/sites.json";
    return Config;
}());



/***/ }),

/***/ "./shared/user/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./shared/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/config.ts");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        if (!user.email || !user.password) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Please provide both an email address and password.");
        }
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "user/" + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey, JSON.stringify({
            username: user.email,
            email: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    UserService.prototype.getCommonHeaders = function () {
        return {
            "Content-Type": "application/json",
            "Authorization": _config__WEBPACK_IMPORTED_MODULE_4__["Config"].authHeader
        };
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    UserService.prototype.login = function (user) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "user/" + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey + "/login", JSON.stringify({
            username: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _config__WEBPACK_IMPORTED_MODULE_4__["Config"].token = data._kmd.authtoken;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3NoYXJlZC9idWlsZGluZy9idWlsZGluZy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3VzZXIvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFB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SSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLDhDQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyw4Q0FBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQ2xELElBQUksQ0FBQyxTQUFTLENBQUM7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUMsRUFDRixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUN2QyxDQUFDLElBQUksQ0FDRiwwREFBRyxDQUFDLGtCQUFRLElBQUksZUFBUSxFQUFSLENBQVEsQ0FBQyxFQUN6QiwwREFBRyxDQUFDLGNBQUk7WUFDSiw4Q0FBTSxDQUFDLEtBQUssR0FBUyxJQUFLLENBQUMsSUFBSSxDQUFDLFNBQVM7UUFDN0MsQ0FBQyxDQUFDLEVBQ0YsaUVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2hDLENBQUM7SUFDTixDQUFDOztnQkE5Q3lCLCtEQUFVOztJQUQzQixXQUFXO1FBRHZCLGdFQUFVLEVBQUU7eUNBRWlCLCtEQUFVO09BRDNCLFdBQVcsQ0FnRHZCO0lBQUQsa0JBQUM7Q0FBQTtBQWhEdUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdyLWFwcFwiLFxuICB0ZW1wbGF0ZTogXCI8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH0iLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfSIsImltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2xpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibGlzdFwiLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJkZXRhaWxzXCIsIGNvbXBvbmVudDpEZXRhaWxzQ29tcG9uZW50fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcclxuICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgTGlzdENvbXBvbmVudCxcclxuICAgIERldGFpbHNDb21wb25lbnRcclxuXTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnRpdGxlIHsgZm9udC1zaXplOiAyNTtcXHJcXG4gICAgICAgICBjb2xvcjojMDAwMDAwfVxcclxcbi5iaWd0aXRsZSB7IGZvbnQtc2l6ZTogMjQgO2NvbG9yOiM3NTBhMGE7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBibGFjazt9XFxyXFxuXFxyXFxuLmJvbGQge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIC5pbmZvIHtjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMzt9IC8qIEJsdWUgKi9cXHJcXG4ud2FybmluZyB7Y29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjY2ZmO1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDI0O1xcclxcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxcclxcblxcclxcbi5ib3JkZXIye1xcclxcbiAgICBcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogZG91YmxlO1xcclxcbiAgIFxcclxcbn1cXHJcXG4ucGhvbmV7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMTEwLCAyNTUpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5teS1iZyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwifi9pbWFnZXMvYmcuanBnXFxcIikgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZS5hY3Rpb25CYXI+XFxyXFxuPEFjdGlvbkJhciB0aXRsZT1cXFwiQnVpbGRpbmdcXFwiID5cXHJcXG4gIDxOYXZpZ2F0aW9uQnV0dG9uIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0ZXh0PVxcXCJCYWNrXFxcIiAodGFwKT1cXFwicm91dGVyRXh0ZW5zaW9ucy5iYWNrKClcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXHJcXG48L0FjdGlvbkJhcj48L1BhZ2UuYWN0aW9uQmFyPlxcclxcbjxTdGFja0xheW91dCBjbGFzcz1cXFwibXktYmdcXFwiID5cXHJcXG48U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIHBhZGRpbmdUb3A9XFxcIjIwXFxcIiBwYWRkaW5nTGVmdD1cXFwiMjBcXFwiID5cXHJcXG48SW1hZ2Ugc3JjPVxcXCJ7e0RldGFpbHMuaW1hZ2V9fVxcXCIgd2lkdGg9XFxcIjMwMFxcXCIgaGVpZ2h0PVxcXCIyNTBcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiPjwvSW1hZ2U+XFxyXFxuPFN0YWNrTGF5b3V0IHBhZGRpbmdUb3A9XFxcIjIwXFxcIj5cXHJcXG4gIDwhLS1OQU1FLS0+XFxyXFxuICAgIDxsYWJlbCBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJsZWZ0XFxcIiBwYWRkaW5nTGVmdD1cXFwiMjBcXFwiPlxcclxcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiTmFtZTpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiID48L1NwYW4+XFxyXFxuICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgPC9sYWJlbD5cXHJcXG48TGFiZWwgdGV4dD1cXFwie3tEZXRhaWxzLm5hbWV9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGUgYm9sZFxcXCIgcGFkZGluZ0xlZnQ9XFxcIjIwXFxcIj48L0xhYmVsPlxcclxcbjwhLS1NQUlOIENPTlRBQ1QtLT5cXHJcXG48bGFiZWwgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBwYWRkaW5nTGVmdD1cXFwiMjBcXFwiPlxcclxcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiTWFpbiBDb250YWN0OlxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwiYmlndGl0bGUgYm9sZFxcXCIgcGFkZGluZ0xlZnQ9XFxcIjIwXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgPC9sYWJlbD5cXHJcXG48IS0tPExhYmVsIHRleHQ9XFxcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e0RldGFpbHMuY29udGFjdHNbMF0ubmFtZX19XFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9MYWJlbD4tLT5cXHJcXG48bGFiZWwgcGFkZGluZ0xlZnQ9XFxcIjIwXFxcIiA+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmcgKm5nSWY9XFxcIiEoRGV0YWlscy5jb250YWN0cy5sZW5ndGggPT09IDApXFxcIj5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCJ7e0RldGFpbHMuY29udGFjdHNbMF0ubmFtZX19XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJ0aXRsZSBib2xkXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwhLS1BZERSRVNTLS0+XFxyXFxuPGxhYmVsIHBhZGRpbmdUb3A9XFxcIjEwXFxcIiBwYWRkaW5nTGVmdD1cXFwiNzBcXFwiPlxcclxcbiAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgIDxTcGFuIHRleHQ9XFxcIkFkcmVzczpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuPC9sYWJlbD5cXHJcXG48TGFiZWwgdGV4dD1cXFwie3tEZXRhaWxzLmFkZHJlc3N9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGUgYm9sZFxcXCIgcGFkZGluZ1RvcD1cXFwiNVxcXCIgcGFkZGluZ0xlZnQ9XFxcIjcwXFxcIj48L0xhYmVsPlxcclxcbjxMYWJlbCBwYWRkaW5nVG9wPVxcXCIxMFxcXCIgcGFkZGluZ0xlZnQ9XFxcIjcwXFxcIj5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgIFxcclxcbiAgICAgIDxTcGFuIHRleHQ9XFxcIlBob25lOlxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwiYmlndGl0bGUgYm9sZFxcXCIgPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICBcXHJcXG48L0xhYmVsPlxcclxcbjwhLS1QSE9ORS0tPlxcclxcblxcclxcbjxMYWJlbCAodGFwKT1cXFwiY2FsbE51bWJlcigpXFxcIiAgdGV4dD1cXFwie3tEZXRhaWxzLmNvbnRhY3RzWzBdLnBob25lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlIHBob25lXFxcIiBuYW1lPVxcXCJjdXJyZW50UGhvbmVcXFwiICBwYWRkaW5nVG9wPVxcXCI1XFxcIiBwYWRkaW5nTGVmdD1cXFwiNzBcXFwiPjwvTGFiZWw+XFxyXFxuPExhYmVsICh0YXApPVxcXCJjYWxsTnVtYmVyKClcXFwiIHRleHQ9XFxcInt7RGV0YWlscy5jb250YWN0c1swXS5waG9uZV9ob21lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlIHBob25lXFxcIiAgcGFkZGluZ1RvcD1cXFwiNVxcXCIgcGFkZGluZ0xlZnQ9XFxcIjcwXFxcIj48L0xhYmVsPlxcclxcbjwhLS1FTUFJTC0tPlxcclxcbjxsYWJlbCBwYWRkaW5nVG9wPVxcXCIxMFxcXCIgcGFkZGluZ0xlZnQ9XFxcIjcwXFxcIj5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCJFbWFpbDpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuPC9sYWJlbD4gIFxcclxcbjxMYWJlbCB0ZXh0PVxcXCJ7e0RldGFpbHMuY29udGFjdHNbMF0uZW1haWx9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGUgYm9sZFxcXCIgIHBhZGRpbmdUb3A9XFxcIjVcXFwiIHBhZGRpbmdMZWZ0PVxcXCI3MFxcXCIgPjwvTGFiZWw+ICAgICAgXFxyXFxuPExhYmVsIHRleHQ9XFxcIiAgICAgICAgICAgICAgICAgICAgICBcXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9MYWJlbD4gIFxcclxcbjxsYWJlbCBjbGFzcz1cXFwiZmFyIG15LWxhYmVsIGJvcmRlclxcXCIgIHBhZGRpbmdMZWZ0PVxcXCI3MFxcXCI+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgPFNwYW4gdGV4dD1cXFwiT3RoZXIgQ29udGFjdHM6XFxcIiAgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9TcGFuPlxcclxcbiAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG48L2xhYmVsPiAgXFxyXFxuPCEtLU90aGVyIENvbnRhY3RzLS0+XFxyXFxuPFN0YWNrTGF5b3V0ICpuZ0Zvcj1cXFwibGV0IGNvbnRhY3Qgb2YgRGV0YWlscy5jb250YWN0cyB8IHNsaWNlOjFcXFwiPlxcclxcbiAgICA8TGFiZWwgKHRhcCk9XFxcIm1ha2VDYWxsKGNvbnRhY3QucGhvbmUpXFxcIiBwYWRkaW5nTGVmdD1cXFwiNzBcXFwiPlxcclxcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgPFNwYW4gW3RleHRdPVxcXCJjb250YWN0Lm5hbWVcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAgIFxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGUgYm9yZGVyMlxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgICA8U3BhbiBbdGV4dF09XFxcImNvbnRhY3QucGhvbmVcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlIHBob25lXFxcIiA+PC9TcGFuPlxcclxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgIDwvTGFiZWw+IFxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEJ1aWxkaW5nIH0gZnJvbSBcIn4vc2hhcmVkL2J1aWxkaW5nL2J1aWxkaW5nLm1vZGVsXCI7XHJcbmltcG9ydCAqIGFzIHBob25lIGZyb20gJ25hdGl2ZXNjcmlwdC1waG9uZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJnci1kZXRhaWxzXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2RldGFpbHMuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vZGV0YWlscy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjdXJyZW50UGhvbmU9XCJcIjtcclxuICBEZXRhaWxzO1xyXG4gIFxyXG4gIEJ1aWxkaW5nO1xyXG4gIGxhYmVsOyBcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxwdWJsaWMgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgdGhpcy5CdWlsZGluZyA9IHBhcmFtc1tcIkRhdGFMaXN0XCJdO1xyXG4gIFxyXG4gICAgICAgICAgbGV0IG9iajogQnVpbGRpbmcgPSBKU09OLnBhcnNlKHRoaXMuQnVpbGRpbmcpO1xyXG4gICAgICAgICAgdGhpcy5EZXRhaWxzID0gb2JqO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJOYW1lXCIsIG9iai5pbWFnZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRldGFpbHNcIiwgdGhpcy5EZXRhaWxzLmltYWdlKVxyXG4gIFxyXG4gICAgICB9KTtcclxuICAgXHJcbiAgICAgIH1cclxuICAgICAgY2FsbE51bWJlcigpIHtcclxuICAgICAgXHJcbiAgICAgICAgcGhvbmUuZGlhbChTdHJpbmcodGhpcy5EZXRhaWxzLmNvbnRhY3RzWzBdLnBob25lKSwgdHJ1ZSlcclxuICAgICAgfVxyXG4gICAgICBtYWtlQ2FsbChpdGVtKXtcclxuICAgICAgdmFyIG51bWJlciA9IGl0ZW07XHJcbiAgICAgIGNvbnNvbGUubG9nKG51bWJlcik7XHJcbiAgICAgIHBob25lLmRpYWwobnVtYmVyLCB0cnVlKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgXFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIG1hcmdpbjogMTU7XFxyXFxufVxcclxcbi5vdmVybGF5IHsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO31cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24tbGFiZWx7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4udC0zNiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzY7XFxyXFxufVxcclxcbi5mYXMge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiLCBcXFwiZmEtc29saWQtOTAwXFxcIjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuLmJ1aWxkaW5nTmFtZSB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTm9yZGljYSBQbHVzJywgJ25vcmRpY2FjbGFzc2ljbHRleHQnO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAzMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1aWxkaW5nQWRkcmVzcyB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjA0LCAyMDYsIDIwNCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTm9yZGljYSBQbHVzJywgJ25vcmRpY2FjbGFzc2ljbHRleHQnO1xcclxcbiAgICBmb250LXNpemU6IDE4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyPlxcclxcbiAgPExhYmVsIHRleHQ9XFxcIkJ1aWxkaW5nc1xcXCI+PC9MYWJlbD5cXHJcXG48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48R3JpZExheW91dCB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXHJcXG4gIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJidWlsZGluZ3NcXFwiICBtYXJnaW5SaWdodD1cXFwiLTJcXFwiICAoaXRlbVRhcCk9XFxcIm9uSXRlbVRhcCgkZXZlbnQpXFxcIj5cXHJcXG4gIDxMaXN0Vmlld0dyaWRMYXlvdXQgdGtMaXN0Vmlld0xheW91dCBzY3JvbGxEaXJlY3Rpb249XFxcIlZlcnRpY2FsXFxcIlxcclxcbiAgICAgICAgICAgIGl0ZW1IZWlnaHQ9XFxcIjE4MFxcXCIgc3BhbkNvdW50PVxcXCIxXFxcIj5cXHJcXG4gICAgICAgIDwvTGlzdFZpZXdHcmlkTGF5b3V0PlxcclxcbiAgXFxyXFxuICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcclxcbiAgICAgIFxcclxcbiAgICAgIDxHcmlkTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cXFwiV2hpdGVcXFwiPlxcclxcbiAgICAgICAgPEdyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPGlvcz5cXHJcXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwie3sgaXRlbS5pbWFnZSB9fVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICA8L2lvcz5cXHJcXG4gICAgICAgICAgICA8YW5kcm9pZD5cXHJcXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwie3sgaXRlbS5pbWFnZSB9fVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cXFwiMTgwXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2FuZHJvaWQ+XFxyXFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBwYWRkaW5nVG9wPVxcXCIxXFxcIiBwYWRkaW5nQm90dG9tPVxcXCIwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ9XFxcIjE2XFxcIiBwYWRkaW5nUmlnaHQ9XFxcIjE2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLm5hbWUgfX1cXFwiIGNsYXNzPVxcXCJidWlsZGluZ05hbWUgb3ZlcmxheVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLmFkZHJlc3MgfX1cXFwiY2xhc3M9XFxcImJ1aWxkaW5nQWRkcmVzcyBvdmVybGF5XFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcblxcclxcblxcclxcbiAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgPC9SYWRMaXN0Vmlldz5cXHJcXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQnVpbGRpbmdzU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvYnVpbGRpbmcvYnVpbGRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImdyLWxpc3RcIixcclxuIHByb3ZpZGVyczogW0J1aWxkaW5nc1NlcnZpY2VdLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9saXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2xpc3QuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBidWlsZGluZ3M9W107XHJcbiAvLyBidWlsZGluZ3NMaXN0OiBBcnJheTxPYmplY3Q+ID0gW107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIGJ1aWxkaW5nc1NlcnZpY2U6IEJ1aWxkaW5nc1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy90aGlzLmJ1aWxkaW5nc0xpc3QucHVzaCh7IG5hbWU6IFwiQXBwbGVzXCIgfSk7XHJcbiAgICAvL3RoaXMuYnVpbGRpbmdzTGlzdC5wdXNoKHsgbmFtZTogXCJCYW5hbmFzXCIgfSk7XHJcbiAgICAvL3RoaXMuYnVpbGRpbmdzTGlzdC5wdXNoKHsgbmFtZTogXCJPcmFuZ2VzXCIgfSk7XHJcbiAgdGhpcy5idWlsZGluZ3NTZXJ2aWNlLmdldEJ1aWxkaW5ncygpXHJcbiAgLnN1YnNjcmliZSgocmVzdWx0ID0+IHRoaXMuYnVpbGRpbmdzID0gcmVzdWx0W1wic2l0ZXNcIl0pKTtcclxuICBjb25zb2xlLmxvZyh0aGlzLmJ1aWxkaW5ncyk7XHJcbiAgICAgIFxyXG4gIFxyXG4gIH1cclxuICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQ6IFwiICsgdGhpcy5idWlsZGluZ3NbYXJncy5pbmRleF0pO1xyXG4gICAgY29uc3QgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgIERhdGFMaXN0OiBKU09OLnN0cmluZ2lmeSh0aGlzLmJ1aWxkaW5nc1thcmdzLmluZGV4XSlcclxuICAgICAgfSAgIFxyXG4gIH07XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvZGV0YWlsc1wiXSxuYXZpZ2F0aW9uRXh0cmFzKVxyXG59XHJcbiAgXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIkZsZXhib3hMYXlvdXQge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwifi9pbWFnZXMvYnVpbGQuanBnXFxcIik7XFxyXFxufVxcclxcblN0YWNrTGF5b3V0IHtcXHJcXG4gIHdpZHRoOiAzMDA7XFxyXFxuICBwYWRkaW5nOiAxMCAxNjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxyXFxufVxcclxcbkltYWdlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwO1xcclxcbiAgaGVpZ2h0OiA3MDtcXHJcXG59XFxyXFxuQnV0dG9uLCBUZXh0RmllbGQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTA7XFxyXFxufVxcclxcbi5idG4tcHJpbWFyeSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0IxRDAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxufVxcclxcblRleHRGaWVsZCB7XFxyXFxuICBwbGFjZWhvbGRlci1jb2xvcjogI0M0QUZCNDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLmRhcmsge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMTIxNztcXHJcXG59XFxyXFxuLmRhcmsgVGV4dEZpZWxkIHtcXHJcXG4gIGNvbG9yOiAgI0M0QUZCNDtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuXFxyXFxuPEZsZXhib3hMYXlvdXQ+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCIgW2NsYXNzLmRhcmtdPVxcXCIhaXNMb2dnaW5nSW5cXFwiPlxcclxcbiAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbWFpbCBBZGRyZXNzXFxcIiBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIlxcclxcbiAgICAgICAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXHJcXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwidXNlci5lbWFpbFxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIlBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLnBhc3N3b3JkXFxcIlxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiPjwvVGV4dEZpZWxkPlxcclxcblxcclxcbiAgICAgICAgPEJ1dHRvbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ1NpZ24gaW4nIDogJ1NpZ24gdXAnXFxcIlxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICh0YXApPVxcXCJzdWJtaXQoKVxcXCI+PC9CdXR0b24+XFxyXFxuICAgICAgICA8QnV0dG9uIFt0ZXh0XT1cXFwiaXNMb2dnaW5nSW4gPyAnU2lnbiB1cCcgOiAnQmFjayB0byBsb2dpbidcXFwiXFxyXFxuICAgICAgICAgICAgKHRhcCk9XFxcInRvZ2dsZURpc3BsYXkoKVxcXCI+PC9CdXR0b24+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9GbGV4Ym94TGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJnci1sb2dpblwiLFxyXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiBcclxuICAgIHVzZXI6IFVzZXI7XHJcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcImFudGphemxAZ21haWwuY29tXCI7XHJcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJhbnRqYXpsXCJcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCl7dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7fVxyXG4gICAgICAgXHJcblxyXG5cclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnblVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pLFxyXG4gICAgICAgICAgICAgICAgKGV4Y2VwdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGNlcHRpb24uZXJyb3IgJiYgZXhjZXB0aW9uLmVycm9yLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGV4Y2VwdGlvbi5lcnJvci5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduVXAoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXhjZXB0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2VwdGlvbi5lcnJvciAmJiBleGNlcHRpb24uZXJyb3IuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXhjZXB0aW9uLmVycm9yLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChleGNlcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZURpc3BsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJpbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEJ1aWxkaW5nIH0gZnJvbSAnLi9idWlsZGluZy5tb2RlbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJ1aWxkaW5nc1NlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0QnVpbGRpbmdzKCk6T2JzZXJ2YWJsZTxCdWlsZGluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KENvbmZpZy5hcGlCdWlsZGluZ3NVcmwpO1xyXG4gIH1cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgQ29uZmlnIHtcbiAgc3RhdGljIGFwaVVybCA9IFwiaHR0cHM6Ly9iYWFzLmtpbnZleS5jb20vXCI7XG4gIHN0YXRpYyBhcHBLZXkgPSBcImtpZF9IeUhvVF9SRWZcIjtcbiAgc3RhdGljIGF1dGhIZWFkZXIgPSBcIkJhc2ljIGEybGtYMGg1U0c5VVgxSkZaam8xTVRreE1ESmxaV0ZoTXpRME16TXlPREZqTjJNeU9ETTNNR1E1T1RJek1RXCI7XG4gIHN0YXRpYyB0b2tlbiA9IFwiXCI7XG4gIHN0YXRpYyBhcGlCdWlsZGluZ3NVcmwgPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2RlY29tX3VwbG9hZHMvZXh0ZXJuYWwvc2l0ZXMuanNvblwiO1xufSIsImV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICBpZiAoIXVzZXIuZW1haWwgfHwgIXVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgICAgICAgQ29uZmlnLmFwaVVybCArIFwidXNlci9cIiArIENvbmZpZy5hcHBLZXksXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XHJcbiAgICAgICAgKS5waXBlKFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tbW9uSGVhZGVycygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IENvbmZpZy5hdXRoSGVhZGVyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcclxuICAgIH1cclxuICAgIGxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwgKyBcInVzZXIvXCIgKyBDb25maWcuYXBwS2V5ICsgXCIvbG9naW5cIixcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XHJcbiAgICAgICAgKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpLFxyXG4gICAgICAgICAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBDb25maWcudG9rZW4gPSAoPGFueT5kYXRhKS5fa21kLmF1dGh0b2tlblxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=