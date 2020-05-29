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

module.exports = ".title { font-size: 18 }\r\n.bigtitle { font-size: 30 }\r\n\r\n.bold {\r\n    font-weight: bold;\r\n  }\r\n  .info {color: white;\r\n      background-color: #2196F3;} /* Blue */\r\n.warning {color: white;\r\n          background-color: #ff9800;\r\n          font-size: 24;\r\n          text-align: center;\r\n          vertical-align: middle;}\r\n\r\n.border2{\r\n    border-color: rgb(5, 4, 4);\r\n    border-radius: 5;\r\n    border-width: 2;\r\n}"

/***/ }),

/***/ "./details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Building\"></ActionBar>\r\n<StackLayout >\r\n<StackLayout orientation=\"horizontal\">\r\n<Image src=\"{{Details.image}}\" width=\"300\" height=\"250\" stretch=\"aspectFill\"></Image>\r\n<StackLayout paddingTop=\"50\">\r\n    <label >\r\n        <FormattedString>\r\n          <Span text=\"Name:\" foregroundColor=\"#3C5AFD\" class=\"title bold\"></Span>\r\n        </FormattedString>\r\n    </label>\r\n<Label text=\"           {{Details.name}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n\r\n<label>\r\n        <FormattedString>\r\n          <Span text=\"Main Contact:\" foregroundColor=\"#3C5AFD\" class=\"title bold\"></Span>\r\n        </FormattedString>\r\n    </label>\r\n<!--<Label text=\"                            {{Details.contacts[0].name}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>-->\r\n<label>\r\n    <FormattedString *ngIf=\"!(Details.contacts.length === 0)\">\r\n      <Span text=\"         {{Details.contacts[0].name}}\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n    </FormattedString>\r\n</label>\r\n</StackLayout>\r\n</StackLayout>\r\n<label>\r\n    <FormattedString>\r\n      <Span text=\"       Adress:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>\r\n<Label text=\"        {{Details.address}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n<label>\r\n    <FormattedString>\r\n      <Span text=\"       Phone:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>\r\n<Label text=\"        {{Details.contacts[0].phone}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n<Label text=\"        {{Details.contacts[0].phone_home}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n<label>\r\n    <FormattedString>\r\n      <Span text=\"       Email:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<Label text=\"        {{Details.contacts[0].email}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>      \r\n<label class=\"far my-label border\">\r\n    <FormattedString>\r\n      <Span text=\"       Other Contacts:\"  class=\"warning\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<StackLayout *ngFor=\"let contact of Details.contacts | slice:1\">\r\n    <label>\r\n        <FormattedString>\r\n          <Span text=\"         {{contact.name}}\" foregroundColor=\"#3C5AFD\" class=\"title border2\"></Span>\r\n          <Span text=\"         {{contact.phone}}\" foregroundColor=\"#3C5AFD\" class=\"title border2\"></Span>\r\n        </FormattedString>\r\n    </label> \r\n</StackLayout>\r\n</StackLayout>"

/***/ }),

/***/ "./details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route) {
        this.route = route;
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
    DetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-details",
            template: __importDefault(__webpack_require__("./details/details.component.html")).default,
            styles: [__importDefault(__webpack_require__("./details/details.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./list/list.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\r\n    vertical-align: center; \r\n    font-size: 20;\r\n    margin: 15;\r\n}\r\n\r\n.description-label{\r\n    margin-bottom: 15;\r\n}\r\n\r\n.t-36 {\r\n    font-size: 36;\r\n}\r\n.fas {\r\n    font-family: \"Font Awesome 5 Free\", \"fa-solid-900\";\r\n    font-weight: 900;\r\n}\r\n.buildingName {\r\n    color: rgb(255, 255, 255);\r\n    font-family: 'Nordica Plus', 'nordicaclassicltext';\r\n    font-weight: bold;\r\n    font-size: 30;\r\n}\r\n\r\n.buildingAddress {\r\n    color: rgb(81, 216, 115);\r\n    font-family: 'Nordica Plus', 'nordicaclassicltext';\r\n    font-size: 18;\r\n    text-transform: uppercase;\r\n}"

/***/ }),

/***/ "./list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\r\n  <Label text=\"Buildings\"></Label>\r\n</ActionBar>\r\n\r\n<GridLayout tkExampleTitle tkToggleNavButton>\r\n  <RadListView [items]=\"buildings\"  marginRight=\"-2\"  (itemTap)=\"onItemTap($event)\">\r\n  <ListViewGridLayout tkListViewLayout scrollDirection=\"Vertical\"\r\n            itemHeight=\"180\" spanCount=\"1\">\r\n        </ListViewGridLayout>\r\n  \r\n    <ng-template tkListItemTemplate let-item=\"item\">\r\n      \r\n      <GridLayout backgroundColor=\"White\">\r\n        <GridLayout>\r\n            <ios>\r\n                <Image src=\"{{ item.image }}\" stretch=\"aspectFill\"></Image>\r\n            </ios>\r\n            <android>\r\n                <Image src=\"{{ item.image }}\" stretch=\"aspectFill\"\r\n                    height=\"180\"></Image>\r\n                \r\n            </android>\r\n            <GridLayout verticalAlignment=\"bottom\">\r\n                <StackLayout paddingTop=\"1\" paddingBottom=\"0\"\r\n                    paddingLeft=\"16\" paddingRight=\"16\">\r\n                    <Label text=\"{{ item.name }}\" class=\"buildingName\"></Label>\r\n                    <Label text=\"{{ item.address }}\"class=\"buildingAddress\"></Label>\r\n                </StackLayout>\r\n            </GridLayout>\r\n        </GridLayout>\r\n    </GridLayout>\r\n\r\n\r\n\r\n    </ng-template>\r\n  </RadListView>\r\n</GridLayout>"

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

module.exports = "FlexboxLayout {\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-size: contain;\r\n  background-image: url(\"~/images/buildings.jpg\");\r\n}\r\nStackLayout {\r\n  width: 300;\r\n  padding: 10 16;\r\n  background-color: #f0f0f0;\r\n}\r\nImage {\r\n  margin-bottom: 20;\r\n  height: 70;\r\n}\r\nButton, TextField {\r\n  margin-bottom: 10;\r\n}\r\n.btn-primary {\r\n  background-color: #CB1D00;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n}\r\nTextField {\r\n  placeholder-color: #C4AFB4;\r\n  color: black;\r\n}\r\n.dark {\r\n  background-color: #301217;\r\n}\r\n.dark TextField {\r\n  color:  #C4AFB4;\r\n}"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3NoYXJlZC9idWlsZGluZy9idWlsZGluZy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3VzZXIvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFB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QkE5Q3lCLCtEQUFVOztJQUQzQixXQUFXO1FBRHZCLGdFQUFVLEVBQUU7eUNBRWlCLCtEQUFVO09BRDNCLFdBQVcsQ0FnRHZCO0lBQUQsa0JBQUM7Q0FBQTtBQWhEdUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdyLWFwcFwiLFxuICB0ZW1wbGF0ZTogXCI8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH0iLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfSIsImltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2xpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwibGlzdFwiLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJkZXRhaWxzXCIsIGNvbXBvbmVudDpEZXRhaWxzQ29tcG9uZW50fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcclxuICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgTGlzdENvbXBvbmVudCxcclxuICAgIERldGFpbHNDb21wb25lbnRcclxuXTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnRpdGxlIHsgZm9udC1zaXplOiAxOCB9XFxyXFxuLmJpZ3RpdGxlIHsgZm9udC1zaXplOiAzMCB9XFxyXFxuXFxyXFxuLmJvbGQge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIC5pbmZvIHtjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMzt9IC8qIEJsdWUgKi9cXHJcXG4ud2FybmluZyB7Y29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDI0O1xcclxcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxcclxcblxcclxcbi5ib3JkZXIye1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYig1LCA0LCA0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAyO1xcclxcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJCdWlsZGluZ1xcXCI+PC9BY3Rpb25CYXI+XFxyXFxuPFN0YWNrTGF5b3V0ID5cXHJcXG48U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcbjxJbWFnZSBzcmM9XFxcInt7RGV0YWlscy5pbWFnZX19XFxcIiB3aWR0aD1cXFwiMzAwXFxcIiBoZWlnaHQ9XFxcIjI1MFxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXHJcXG48U3RhY2tMYXlvdXQgcGFkZGluZ1RvcD1cXFwiNTBcXFwiPlxcclxcbiAgICA8bGFiZWwgPlxcclxcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiTmFtZTpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICA8L2xhYmVsPlxcclxcbjxMYWJlbCB0ZXh0PVxcXCIgICAgICAgICAgIHt7RGV0YWlscy5uYW1lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlXFxcIj48L0xhYmVsPlxcclxcblxcclxcbjxsYWJlbD5cXHJcXG4gICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIk1haW4gQ29udGFjdDpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICA8L2xhYmVsPlxcclxcbjwhLS08TGFiZWwgdGV4dD1cXFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7RGV0YWlscy5jb250YWN0c1swXS5uYW1lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlXFxcIj48L0xhYmVsPi0tPlxcclxcbjxsYWJlbD5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZyAqbmdJZj1cXFwiIShEZXRhaWxzLmNvbnRhY3RzLmxlbmd0aCA9PT0gMClcXFwiPlxcclxcbiAgICAgIDxTcGFuIHRleHQ9XFxcIiAgICAgICAgIHt7RGV0YWlscy5jb250YWN0c1swXS5uYW1lfX1cXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjxsYWJlbD5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgQWRyZXNzOlxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwiYmlndGl0bGUgYm9sZFxcXCI+PC9TcGFuPlxcclxcbiAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG48L2xhYmVsPlxcclxcbjxMYWJlbCB0ZXh0PVxcXCIgICAgICAgIHt7RGV0YWlscy5hZGRyZXNzfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlXFxcIj48L0xhYmVsPlxcclxcbjxsYWJlbD5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgUGhvbmU6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+XFxyXFxuPExhYmVsIHRleHQ9XFxcIiAgICAgICAge3tEZXRhaWxzLmNvbnRhY3RzWzBdLnBob25lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlXFxcIj48L0xhYmVsPlxcclxcbjxMYWJlbCB0ZXh0PVxcXCIgICAgICAgIHt7RGV0YWlscy5jb250YWN0c1swXS5waG9uZV9ob21lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlXFxcIj48L0xhYmVsPlxcclxcbjxsYWJlbD5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgRW1haWw6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+ICBcXHJcXG48TGFiZWwgdGV4dD1cXFwiICAgICAgICB7e0RldGFpbHMuY29udGFjdHNbMF0uZW1haWx9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+ICAgICAgXFxyXFxuPGxhYmVsIGNsYXNzPVxcXCJmYXIgbXktbGFiZWwgYm9yZGVyXFxcIj5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgT3RoZXIgQ29udGFjdHM6XFxcIiAgY2xhc3M9XFxcIndhcm5pbmdcXFwiPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuPC9sYWJlbD4gIFxcclxcbjxTdGFja0xheW91dCAqbmdGb3I9XFxcImxldCBjb250YWN0IG9mIERldGFpbHMuY29udGFjdHMgfCBzbGljZToxXFxcIj5cXHJcXG4gICAgPGxhYmVsPlxcclxcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAgICAge3tjb250YWN0Lm5hbWV9fVxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGUgYm9yZGVyMlxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgICB7e2NvbnRhY3QucGhvbmV9fVxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGUgYm9yZGVyMlxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgIDwvbGFiZWw+IFxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEJ1aWxkaW5nIH0gZnJvbSBcIn4vc2hhcmVkL2J1aWxkaW5nL2J1aWxkaW5nLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJnci1kZXRhaWxzXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2RldGFpbHMuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vZGV0YWlscy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBEZXRhaWxzO1xyXG4gIFxyXG4gIEJ1aWxkaW5nOyBcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgdGhpcy5CdWlsZGluZyA9IHBhcmFtc1tcIkRhdGFMaXN0XCJdO1xyXG4gIFxyXG4gICAgICAgICAgbGV0IG9iajogQnVpbGRpbmcgPSBKU09OLnBhcnNlKHRoaXMuQnVpbGRpbmcpO1xyXG4gICAgICAgICAgdGhpcy5EZXRhaWxzID0gb2JqO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJOYW1lXCIsIG9iai5pbWFnZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRldGFpbHNcIiwgdGhpcy5EZXRhaWxzLmltYWdlKVxyXG4gIFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgfX1cclxuICAgICAgXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IFxcclxcbiAgICBmb250LXNpemU6IDIwO1xcclxcbiAgICBtYXJnaW46IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24tbGFiZWx7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcclxcbn1cXHJcXG5cXHJcXG4udC0zNiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzY7XFxyXFxufVxcclxcbi5mYXMge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiLCBcXFwiZmEtc29saWQtOTAwXFxcIjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuLmJ1aWxkaW5nTmFtZSB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTm9yZGljYSBQbHVzJywgJ25vcmRpY2FjbGFzc2ljbHRleHQnO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAzMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1aWxkaW5nQWRkcmVzcyB7XFxyXFxuICAgIGNvbG9yOiByZ2IoODEsIDIxNiwgMTE1KTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOb3JkaWNhIFBsdXMnLCAnbm9yZGljYWNsYXNzaWNsdGV4dCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxyXFxuICA8TGFiZWwgdGV4dD1cXFwiQnVpbGRpbmdzXFxcIj48L0xhYmVsPlxcclxcbjwvQWN0aW9uQmFyPlxcclxcblxcclxcbjxHcmlkTGF5b3V0IHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcclxcbiAgPFJhZExpc3RWaWV3IFtpdGVtc109XFxcImJ1aWxkaW5nc1xcXCIgIG1hcmdpblJpZ2h0PVxcXCItMlxcXCIgIChpdGVtVGFwKT1cXFwib25JdGVtVGFwKCRldmVudClcXFwiPlxcclxcbiAgPExpc3RWaWV3R3JpZExheW91dCB0a0xpc3RWaWV3TGF5b3V0IHNjcm9sbERpcmVjdGlvbj1cXFwiVmVydGljYWxcXFwiXFxyXFxuICAgICAgICAgICAgaXRlbUhlaWdodD1cXFwiMTgwXFxcIiBzcGFuQ291bnQ9XFxcIjFcXFwiPlxcclxcbiAgICAgICAgPC9MaXN0Vmlld0dyaWRMYXlvdXQ+XFxyXFxuICBcXHJcXG4gICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxyXFxuICAgICAgXFxyXFxuICAgICAgPEdyaWRMYXlvdXQgYmFja2dyb3VuZENvbG9yPVxcXCJXaGl0ZVxcXCI+XFxyXFxuICAgICAgICA8R3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICA8aW9zPlxcclxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ7eyBpdGVtLmltYWdlIH19XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgIDwvaW9zPlxcclxcbiAgICAgICAgICAgIDxhbmRyb2lkPlxcclxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ7eyBpdGVtLmltYWdlIH19XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVxcXCIxODBcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIDwvYW5kcm9pZD5cXHJcXG4gICAgICAgICAgICA8R3JpZExheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHBhZGRpbmdUb3A9XFxcIjFcXFwiIHBhZGRpbmdCb3R0b209XFxcIjBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdD1cXFwiMTZcXFwiIHBhZGRpbmdSaWdodD1cXFwiMTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGl0ZW0ubmFtZSB9fVxcXCIgY2xhc3M9XFxcImJ1aWxkaW5nTmFtZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLmFkZHJlc3MgfX1cXFwiY2xhc3M9XFxcImJ1aWxkaW5nQWRkcmVzc1xcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gIDwvUmFkTGlzdFZpZXc+XFxyXFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEJ1aWxkaW5nc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2J1aWxkaW5nL2J1aWxkaW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJnci1saXN0XCIsXHJcbiBwcm92aWRlcnM6IFtCdWlsZGluZ3NTZXJ2aWNlXSxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9saXN0LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYnVpbGRpbmdzPVtdO1xyXG4gLy8gYnVpbGRpbmdzTGlzdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBidWlsZGluZ3NTZXJ2aWNlOiBCdWlsZGluZ3NTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vdGhpcy5idWlsZGluZ3NMaXN0LnB1c2goeyBuYW1lOiBcIkFwcGxlc1wiIH0pO1xyXG4gICAgLy90aGlzLmJ1aWxkaW5nc0xpc3QucHVzaCh7IG5hbWU6IFwiQmFuYW5hc1wiIH0pO1xyXG4gICAgLy90aGlzLmJ1aWxkaW5nc0xpc3QucHVzaCh7IG5hbWU6IFwiT3Jhbmdlc1wiIH0pO1xyXG4gIHRoaXMuYnVpbGRpbmdzU2VydmljZS5nZXRCdWlsZGluZ3MoKVxyXG4gIC5zdWJzY3JpYmUoKHJlc3VsdCA9PiB0aGlzLmJ1aWxkaW5ncyA9IHJlc3VsdFtcInNpdGVzXCJdKSk7XHJcbiAgY29uc29sZS5sb2codGhpcy5idWlsZGluZ3MpO1xyXG4gICAgICBcclxuICBcclxuICB9XHJcbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkOiBcIiArIHRoaXMuYnVpbGRpbmdzW2FyZ3MuaW5kZXhdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICBEYXRhTGlzdDogSlNPTi5zdHJpbmdpZnkodGhpcy5idWlsZGluZ3NbYXJncy5pbmRleF0pXHJcbiAgICAgIH0gICBcclxuICB9O1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RldGFpbHNcIl0sbmF2aWdhdGlvbkV4dHJhcylcclxufVxyXG4gIFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJGbGV4Ym94TGF5b3V0IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwifi9pbWFnZXMvYnVpbGRpbmdzLmpwZ1xcXCIpO1xcclxcbn1cXHJcXG5TdGFja0xheW91dCB7XFxyXFxuICB3aWR0aDogMzAwO1xcclxcbiAgcGFkZGluZzogMTAgMTY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbn1cXHJcXG5JbWFnZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMDtcXHJcXG4gIGhlaWdodDogNzA7XFxyXFxufVxcclxcbkJ1dHRvbiwgVGV4dEZpZWxkIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwO1xcclxcbn1cXHJcXG4uYnRuLXByaW1hcnkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NCMUQwMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbn1cXHJcXG5UZXh0RmllbGQge1xcclxcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNDNEFGQjQ7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5kYXJrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDEyMTc7XFxyXFxufVxcclxcbi5kYXJrIFRleHRGaWVsZCB7XFxyXFxuICBjb2xvcjogICNDNEFGQjQ7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcblxcclxcbjxGbGV4Ym94TGF5b3V0PlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiIFtjbGFzcy5kYXJrXT1cXFwiIWlzTG9nZ2luZ0luXFxcIj5cXHJcXG4gICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW1haWwgQWRkcmVzc1xcXCIga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCJcXHJcXG4gICAgICAgICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxyXFxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiPjwvVGV4dEZpZWxkPlxcclxcbiAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJQYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5wYXNzd29yZFxcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIj48L1RleHRGaWVsZD5cXHJcXG5cXHJcXG4gICAgICAgIDxCdXR0b24gW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdTaWduIGluJyA6ICdTaWduIHVwJ1xcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAodGFwKT1cXFwic3VibWl0KClcXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgPEJ1dHRvbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJ0JhY2sgdG8gbG9naW4nXFxcIlxcclxcbiAgICAgICAgICAgICh0YXApPVxcXCJ0b2dnbGVEaXNwbGF5KClcXFwiPjwvQnV0dG9uPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvRmxleGJveExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ItbG9naW5cIixcclxuICAgIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbG9naW4uY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gXHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJhbnRqYXpsQGdtYWlsLmNvbVwiO1xyXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiYW50amF6bFwiXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpe3RoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO31cclxuICAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNpZ25VcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKSxcclxuICAgICAgICAgICAgICAgIChleGNlcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhjZXB0aW9uLmVycm9yICYmIGV4Y2VwdGlvbi5lcnJvci5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChleGNlcHRpb24uZXJyb3IuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGV4Y2VwdGlvbilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnblVwKCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGV4Y2VwdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGNlcHRpb24uZXJyb3IgJiYgZXhjZXB0aW9uLmVycm9yLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGV4Y2VwdGlvbi5lcnJvci5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEaXNwbGF5KCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcblxuZW5hYmxlUHJvZE1vZGUoKTtcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpOyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBCdWlsZGluZyB9IGZyb20gJy4vYnVpbGRpbmcubW9kZWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCdWlsZGluZ3NTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldEJ1aWxkaW5ncygpOk9ic2VydmFibGU8QnVpbGRpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChDb25maWcuYXBpQnVpbGRpbmdzVXJsKTtcclxuICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIENvbmZpZyB7XG4gIHN0YXRpYyBhcGlVcmwgPSBcImh0dHBzOi8vYmFhcy5raW52ZXkuY29tL1wiO1xuICBzdGF0aWMgYXBwS2V5ID0gXCJraWRfSHlIb1RfUkVmXCI7XG4gIHN0YXRpYyBhdXRoSGVhZGVyID0gXCJCYXNpYyBhMmxrWDBoNVNHOVVYMUpGWmpvMU1Ua3hNREpsWldGaE16UTBNek15T0RGak4yTXlPRE0zTUdRNU9USXpNUVwiO1xuICBzdGF0aWMgdG9rZW4gPSBcIlwiO1xuICBzdGF0aWMgYXBpQnVpbGRpbmdzVXJsID1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9kZWNvbV91cGxvYWRzL2V4dGVybmFsL3NpdGVzLmpzb25cIjtcbn0iLCJleHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgaWYgKCF1c2VyLmVtYWlsIHx8ICF1c2VyLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwgKyBcInVzZXIvXCIgKyBDb25maWcuYXBwS2V5LFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxyXG4gICAgICAgICkucGlwZShcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbW1vbkhlYWRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBDb25maWcuYXV0aEhlYWRlclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgICBsb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgXCJ1c2VyL1wiICsgQ29uZmlnLmFwcEtleSArIFwiL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxyXG4gICAgICAgICkucGlwZShcclxuICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSxcclxuICAgICAgICAgICAgdGFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ29uZmlnLnRva2VuID0gKDxhbnk+ZGF0YSkuX2ttZC5hdXRodG9rZW5cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9