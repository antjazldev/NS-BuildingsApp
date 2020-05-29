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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

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
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-ui-listview/angular");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-angular/http-client");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_8__);










var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
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
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            providers: [{ provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-phone/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-angular/router");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_building_building_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/building/building.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_user_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/user/user.model.ts");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./shared/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tns-core-modules/ui/page");
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
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

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
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        


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

/***/ "./shared/building/building.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsService", function() { return BuildingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
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



/***/ }),

/***/ "@angular/common/http":
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/router":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nativescript/core/ui/frame":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/frame");

/***/ }),

/***/ "nativescript-angular/forms":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/forms");

/***/ }),

/***/ "nativescript-angular/http-client":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/http-client");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "nativescript-ui-listview/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-listview/angular");

/***/ }),

/***/ "rxjs":
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3NoYXJlZC9idWlsZGluZy9idWlsZGluZy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3VzZXIvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvb3BlcmF0b3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtB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bXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnci1hcHBcIixcbiAgdGVtcGxhdGU6IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcbiAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50c1xuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iLCJpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImxpc3RcIiwgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiZGV0YWlsc1wiLCBjb21wb25lbnQ6RGV0YWlsc0NvbXBvbmVudH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgPSBbXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIExpc3RDb21wb25lbnQsXHJcbiAgICBEZXRhaWxzQ29tcG9uZW50XHJcbl07IiwibW9kdWxlLmV4cG9ydHMgPSBcIi50aXRsZSB7IGZvbnQtc2l6ZTogMjU7XFxyXFxuICAgICAgICAgY29sb3I6IzAwMDAwMH1cXHJcXG4uYmlndGl0bGUgeyBmb250LXNpemU6IDI0IDtjb2xvcjojNzUwYTBhO3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO3RleHQtZGVjb3JhdGlvbi1jb2xvcjogYmxhY2s7fVxcclxcblxcclxcbi5ib2xkIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICAuaW5mbyB7Y29sb3I6IHdoaXRlO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7fSAvKiBCbHVlICovXFxyXFxuLndhcm5pbmcge2NvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2NmZjtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAyNDtcXHJcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cXHJcXG5cXHJcXG4uYm9yZGVyMntcXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlci1ib3R0b206IGRvdWJsZTtcXHJcXG4gICBcXHJcXG59XFxyXFxuLnBob25le1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDExMCwgMjU1KTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4ubXktYmcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIn4vaW1hZ2VzL2JnLmpwZ1xcXCIpIG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcclxcbjxBY3Rpb25CYXIgdGl0bGU9XFxcIkJ1aWxkaW5nXFxcIiA+XFxyXFxuICA8TmF2aWdhdGlvbkJ1dHRvbiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGV4dD1cXFwiQmFja1xcXCIgKHRhcCk9XFxcInJvdXRlckV4dGVuc2lvbnMuYmFjaygpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuPC9BY3Rpb25CYXI+PC9QYWdlLmFjdGlvbkJhcj5cXHJcXG48U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm15LWJnXFxcIiA+XFxyXFxuPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBwYWRkaW5nVG9wPVxcXCIyMFxcXCIgcGFkZGluZ0xlZnQ9XFxcIjIwXFxcIiA+XFxyXFxuPEltYWdlIHNyYz1cXFwie3tEZXRhaWxzLmltYWdlfX1cXFwiIHdpZHRoPVxcXCIzMDBcXFwiIGhlaWdodD1cXFwiMjUwXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlPlxcclxcbjxTdGFja0xheW91dCBwYWRkaW5nVG9wPVxcXCIyMFxcXCI+XFxyXFxuICA8IS0tTkFNRS0tPlxcclxcbiAgICA8bGFiZWwgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCIgcGFkZGluZ0xlZnQ9XFxcIjIwXFxcIj5cXHJcXG4gICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIk5hbWU6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIiA+PC9TcGFuPlxcclxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgIDwvbGFiZWw+XFxyXFxuPExhYmVsIHRleHQ9XFxcInt7RGV0YWlscy5uYW1lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiIHBhZGRpbmdMZWZ0PVxcXCIyMFxcXCI+PC9MYWJlbD5cXHJcXG48IS0tTUFJTiBDT05UQUNULS0+XFxyXFxuPGxhYmVsIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgcGFkZGluZ0xlZnQ9XFxcIjIwXFxcIj5cXHJcXG4gICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIk1haW4gQ29udGFjdDpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiIHBhZGRpbmdMZWZ0PVxcXCIyMFxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgIDwvbGFiZWw+XFxyXFxuPCEtLTxMYWJlbCB0ZXh0PVxcXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tEZXRhaWxzLmNvbnRhY3RzWzBdLm5hbWV9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+LS0+XFxyXFxuPGxhYmVsIHBhZGRpbmdMZWZ0PVxcXCIyMFxcXCIgPlxcclxcbiAgICA8Rm9ybWF0dGVkU3RyaW5nICpuZ0lmPVxcXCIhKERldGFpbHMuY29udGFjdHMubGVuZ3RoID09PSAwKVxcXCI+XFxyXFxuICAgICAgPFNwYW4gdGV4dD1cXFwie3tEZXRhaWxzLmNvbnRhY3RzWzBdLm5hbWV9fVxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGUgYm9sZFxcXCI+PC9TcGFuPlxcclxcbiAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG48L2xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG48IS0tQWREUkVTUy0tPlxcclxcbjxsYWJlbCBwYWRkaW5nVG9wPVxcXCIxMFxcXCIgcGFkZGluZ0xlZnQ9XFxcIjcwXFxcIj5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCJBZHJlc3M6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+XFxyXFxuPExhYmVsIHRleHQ9XFxcInt7RGV0YWlscy5hZGRyZXNzfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiIHBhZGRpbmdUb3A9XFxcIjVcXFwiIHBhZGRpbmdMZWZ0PVxcXCI3MFxcXCI+PC9MYWJlbD5cXHJcXG48TGFiZWwgcGFkZGluZ1RvcD1cXFwiMTBcXFwiIHBhZGRpbmdMZWZ0PVxcXCI3MFxcXCI+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICBcXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCJQaG9uZTpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiID48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgXFxyXFxuPC9MYWJlbD5cXHJcXG48IS0tUEhPTkUtLT5cXHJcXG5cXHJcXG48TGFiZWwgKHRhcCk9XFxcImNhbGxOdW1iZXIoKVxcXCIgIHRleHQ9XFxcInt7RGV0YWlscy5jb250YWN0c1swXS5waG9uZX19XFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZSBwaG9uZVxcXCIgbmFtZT1cXFwiY3VycmVudFBob25lXFxcIiAgcGFkZGluZ1RvcD1cXFwiNVxcXCIgcGFkZGluZ0xlZnQ9XFxcIjcwXFxcIj48L0xhYmVsPlxcclxcbjxMYWJlbCAodGFwKT1cXFwiY2FsbE51bWJlcigpXFxcIiB0ZXh0PVxcXCJ7e0RldGFpbHMuY29udGFjdHNbMF0ucGhvbmVfaG9tZX19XFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZSBwaG9uZVxcXCIgIHBhZGRpbmdUb3A9XFxcIjVcXFwiIHBhZGRpbmdMZWZ0PVxcXCI3MFxcXCI+PC9MYWJlbD5cXHJcXG48IS0tRU1BSUwtLT5cXHJcXG48bGFiZWwgcGFkZGluZ1RvcD1cXFwiMTBcXFwiIHBhZGRpbmdMZWZ0PVxcXCI3MFxcXCI+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgPFNwYW4gdGV4dD1cXFwiRW1haWw6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+ICBcXHJcXG48TGFiZWwgdGV4dD1cXFwie3tEZXRhaWxzLmNvbnRhY3RzWzBdLmVtYWlsfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiICBwYWRkaW5nVG9wPVxcXCI1XFxcIiBwYWRkaW5nTGVmdD1cXFwiNzBcXFwiID48L0xhYmVsPiAgICAgIFxcclxcbjxMYWJlbCB0ZXh0PVxcXCIgICAgICAgICAgICAgICAgICAgICAgXFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZSBib2xkXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvTGFiZWw+ICBcXHJcXG48bGFiZWwgY2xhc3M9XFxcImZhciBteS1sYWJlbCBib3JkZXJcXFwiICBwYWRkaW5nTGVmdD1cXFwiNzBcXFwiPlxcclxcbiAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgIDxTcGFuIHRleHQ9XFxcIk90aGVyIENvbnRhY3RzOlxcXCIgIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuPC9sYWJlbD4gIFxcclxcbjwhLS1PdGhlciBDb250YWN0cy0tPlxcclxcbjxTdGFja0xheW91dCAqbmdGb3I9XFxcImxldCBjb250YWN0IG9mIERldGFpbHMuY29udGFjdHMgfCBzbGljZToxXFxcIj5cXHJcXG4gICAgPExhYmVsICh0YXApPVxcXCJtYWtlQ2FsbChjb250YWN0LnBob25lKVxcXCIgcGFkZGluZ0xlZnQ9XFxcIjcwXFxcIj5cXHJcXG4gICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgIDxTcGFuIFt0ZXh0XT1cXFwiY29udGFjdC5uYW1lXFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJ0aXRsZSBib2xkXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIiAgICAgICBcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlIGJvcmRlcjJcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgICAgPFNwYW4gW3RleHRdPVxcXCJjb250YWN0LnBob25lXFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJ0aXRsZSBwaG9uZVxcXCIgPjwvU3Bhbj5cXHJcXG4gICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICA8L0xhYmVsPiBcXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBCdWlsZGluZyB9IGZyb20gXCJ+L3NoYXJlZC9idWlsZGluZy9idWlsZGluZy5tb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBwaG9uZSBmcm9tICduYXRpdmVzY3JpcHQtcGhvbmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZ3ItZGV0YWlsc1wiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9kZXRhaWxzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2RldGFpbHMuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY3VycmVudFBob25lPVwiXCI7XHJcbiAgRGV0YWlscztcclxuICBcclxuICBCdWlsZGluZztcclxuICBsYWJlbDsgXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUscHVibGljIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgXHJcblxyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICBcclxuICAgICAgICAgIHRoaXMuQnVpbGRpbmcgPSBwYXJhbXNbXCJEYXRhTGlzdFwiXTtcclxuICBcclxuICAgICAgICAgIGxldCBvYmo6IEJ1aWxkaW5nID0gSlNPTi5wYXJzZSh0aGlzLkJ1aWxkaW5nKTtcclxuICAgICAgICAgIHRoaXMuRGV0YWlscyA9IG9iajtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmFtZVwiLCBvYmouaW1hZ2UpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJEZXRhaWxzXCIsIHRoaXMuRGV0YWlscy5pbWFnZSlcclxuICBcclxuICAgICAgfSk7XHJcbiAgIFxyXG4gICAgICB9XHJcbiAgICAgIGNhbGxOdW1iZXIoKSB7XHJcbiAgICAgIFxyXG4gICAgICAgIHBob25lLmRpYWwoU3RyaW5nKHRoaXMuRGV0YWlscy5jb250YWN0c1swXS5waG9uZSksIHRydWUpXHJcbiAgICAgIH1cclxuICAgICAgbWFrZUNhbGwoaXRlbSl7XHJcbiAgICAgIHZhciBudW1iZXIgPSBpdGVtO1xyXG4gICAgICBjb25zb2xlLmxvZyhudW1iZXIpO1xyXG4gICAgICBwaG9uZS5kaWFsKG51bWJlciwgdHJ1ZSlcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhvbWUtcGFuZWx7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IFxcclxcbiAgICBmb250LXNpemU6IDIwO1xcclxcbiAgICBtYXJnaW46IDE1O1xcclxcbn1cXHJcXG4ub3ZlcmxheSB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTt9XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXHJcXG59XFxyXFxuXFxyXFxuLnQtMzYge1xcclxcbiAgICBmb250LXNpemU6IDM2O1xcclxcbn1cXHJcXG4uZmFzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgXFxcImZhLXNvbGlkLTkwMFxcXCI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcbi5idWlsZGluZ05hbWUge1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBmb250LWZhbWlseTogJ05vcmRpY2EgUGx1cycsICdub3JkaWNhY2xhc3NpY2x0ZXh0JztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzA7XFxyXFxufVxcclxcblxcclxcbi5idWlsZGluZ0FkZHJlc3Mge1xcclxcbiAgICBjb2xvcjogcmdiKDIwNCwgMjA2LCAyMDQpO1xcclxcbiAgICBmb250LWZhbWlseTogJ05vcmRpY2EgUGx1cycsICdub3JkaWNhY2xhc3NpY2x0ZXh0JztcXHJcXG4gICAgZm9udC1zaXplOiAxODtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhcj5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJCdWlsZGluZ3NcXFwiPjwvTGFiZWw+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuPEdyaWRMYXlvdXQgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxyXFxuICA8UmFkTGlzdFZpZXcgW2l0ZW1zXT1cXFwiYnVpbGRpbmdzXFxcIiAgbWFyZ2luUmlnaHQ9XFxcIi0yXFxcIiAgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXAoJGV2ZW50KVxcXCI+XFxyXFxuICA8TGlzdFZpZXdHcmlkTGF5b3V0IHRrTGlzdFZpZXdMYXlvdXQgc2Nyb2xsRGlyZWN0aW9uPVxcXCJWZXJ0aWNhbFxcXCJcXHJcXG4gICAgICAgICAgICBpdGVtSGVpZ2h0PVxcXCIxODBcXFwiIHNwYW5Db3VudD1cXFwiMVxcXCI+XFxyXFxuICAgICAgICA8L0xpc3RWaWV3R3JpZExheW91dD5cXHJcXG4gIFxcclxcbiAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXHJcXG4gICAgICBcXHJcXG4gICAgICA8R3JpZExheW91dCBiYWNrZ3JvdW5kQ29sb3I9XFxcIldoaXRlXFxcIj5cXHJcXG4gICAgICAgIDxHcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDxpb3M+XFxyXFxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInt7IGl0ZW0uaW1hZ2UgfX1cXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgPC9pb3M+XFxyXFxuICAgICAgICAgICAgPGFuZHJvaWQ+XFxyXFxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInt7IGl0ZW0uaW1hZ2UgfX1cXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjE4MFxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9hbmRyb2lkPlxcclxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcGFkZGluZ1RvcD1cXFwiMVxcXCIgcGFkZGluZ0JvdHRvbT1cXFwiMFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0PVxcXCIxNlxcXCIgcGFkZGluZ1JpZ2h0PVxcXCIxNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgaXRlbS5uYW1lIH19XFxcIiBjbGFzcz1cXFwiYnVpbGRpbmdOYW1lIG92ZXJsYXlcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgaXRlbS5hZGRyZXNzIH19XFxcImNsYXNzPVxcXCJidWlsZGluZ0FkZHJlc3Mgb3ZlcmxheVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gIDwvUmFkTGlzdFZpZXc+XFxyXFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEJ1aWxkaW5nc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2J1aWxkaW5nL2J1aWxkaW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJnci1saXN0XCIsXHJcbiBwcm92aWRlcnM6IFtCdWlsZGluZ3NTZXJ2aWNlXSxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9saXN0LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYnVpbGRpbmdzPVtdO1xyXG4gLy8gYnVpbGRpbmdzTGlzdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBidWlsZGluZ3NTZXJ2aWNlOiBCdWlsZGluZ3NTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vdGhpcy5idWlsZGluZ3NMaXN0LnB1c2goeyBuYW1lOiBcIkFwcGxlc1wiIH0pO1xyXG4gICAgLy90aGlzLmJ1aWxkaW5nc0xpc3QucHVzaCh7IG5hbWU6IFwiQmFuYW5hc1wiIH0pO1xyXG4gICAgLy90aGlzLmJ1aWxkaW5nc0xpc3QucHVzaCh7IG5hbWU6IFwiT3Jhbmdlc1wiIH0pO1xyXG4gIHRoaXMuYnVpbGRpbmdzU2VydmljZS5nZXRCdWlsZGluZ3MoKVxyXG4gIC5zdWJzY3JpYmUoKHJlc3VsdCA9PiB0aGlzLmJ1aWxkaW5ncyA9IHJlc3VsdFtcInNpdGVzXCJdKSk7XHJcbiAgY29uc29sZS5sb2codGhpcy5idWlsZGluZ3MpO1xyXG4gICAgICBcclxuICBcclxuICB9XHJcbiAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkOiBcIiArIHRoaXMuYnVpbGRpbmdzW2FyZ3MuaW5kZXhdKTtcclxuICAgIGNvbnN0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICBEYXRhTGlzdDogSlNPTi5zdHJpbmdpZnkodGhpcy5idWlsZGluZ3NbYXJncy5pbmRleF0pXHJcbiAgICAgIH0gICBcclxuICB9O1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RldGFpbHNcIl0sbmF2aWdhdGlvbkV4dHJhcylcclxufVxyXG4gIFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJGbGV4Ym94TGF5b3V0IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIn4vaW1hZ2VzL2J1aWxkLmpwZ1xcXCIpO1xcclxcbn1cXHJcXG5TdGFja0xheW91dCB7XFxyXFxuICB3aWR0aDogMzAwO1xcclxcbiAgcGFkZGluZzogMTAgMTY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbn1cXHJcXG5JbWFnZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMDtcXHJcXG4gIGhlaWdodDogNzA7XFxyXFxufVxcclxcbkJ1dHRvbiwgVGV4dEZpZWxkIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwO1xcclxcbn1cXHJcXG4uYnRuLXByaW1hcnkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NCMUQwMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbn1cXHJcXG5UZXh0RmllbGQge1xcclxcbiAgcGxhY2Vob2xkZXItY29sb3I6ICNDNEFGQjQ7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5kYXJrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDEyMTc7XFxyXFxufVxcclxcbi5kYXJrIFRleHRGaWVsZCB7XFxyXFxuICBjb2xvcjogICNDNEFGQjQ7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcblxcclxcbjxGbGV4Ym94TGF5b3V0PlxcclxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiIFtjbGFzcy5kYXJrXT1cXFwiIWlzTG9nZ2luZ0luXFxcIj5cXHJcXG4gICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW1haWwgQWRkcmVzc1xcXCIga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCJcXHJcXG4gICAgICAgICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxyXFxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiPjwvVGV4dEZpZWxkPlxcclxcbiAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJQYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5wYXNzd29yZFxcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIj48L1RleHRGaWVsZD5cXHJcXG5cXHJcXG4gICAgICAgIDxCdXR0b24gW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdTaWduIGluJyA6ICdTaWduIHVwJ1xcXCJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAodGFwKT1cXFwic3VibWl0KClcXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgPEJ1dHRvbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJ0JhY2sgdG8gbG9naW4nXFxcIlxcclxcbiAgICAgICAgICAgICh0YXApPVxcXCJ0b2dnbGVEaXNwbGF5KClcXFwiPjwvQnV0dG9uPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvRmxleGJveExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ3ItbG9naW5cIixcclxuICAgIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbG9naW4uY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gXHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJhbnRqYXpsQGdtYWlsLmNvbVwiO1xyXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiYW50amF6bFwiXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpe3RoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO31cclxuICAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNpZ25VcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKSxcclxuICAgICAgICAgICAgICAgIChleGNlcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhjZXB0aW9uLmVycm9yICYmIGV4Y2VwdGlvbi5lcnJvci5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChleGNlcHRpb24uZXJyb3IuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGV4Y2VwdGlvbilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnblVwKCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGV4Y2VwdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGNlcHRpb24uZXJyb3IgJiYgZXhjZXB0aW9uLmVycm9yLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGV4Y2VwdGlvbi5lcnJvci5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEaXNwbGF5KCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcblxuZW5hYmxlUHJvZE1vZGUoKTtcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpOyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBCdWlsZGluZyB9IGZyb20gJy4vYnVpbGRpbmcubW9kZWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCdWlsZGluZ3NTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldEJ1aWxkaW5ncygpOk9ic2VydmFibGU8QnVpbGRpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChDb25maWcuYXBpQnVpbGRpbmdzVXJsKTtcclxuICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIENvbmZpZyB7XG4gIHN0YXRpYyBhcGlVcmwgPSBcImh0dHBzOi8vYmFhcy5raW52ZXkuY29tL1wiO1xuICBzdGF0aWMgYXBwS2V5ID0gXCJraWRfSHlIb1RfUkVmXCI7XG4gIHN0YXRpYyBhdXRoSGVhZGVyID0gXCJCYXNpYyBhMmxrWDBoNVNHOVVYMUpGWmpvMU1Ua3hNREpsWldGaE16UTBNek15T0RGak4yTXlPRE0zTUdRNU9USXpNUVwiO1xuICBzdGF0aWMgdG9rZW4gPSBcIlwiO1xuICBzdGF0aWMgYXBpQnVpbGRpbmdzVXJsID1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9kZWNvbV91cGxvYWRzL2V4dGVybmFsL3NpdGVzLmpzb25cIjtcbn0iLCJleHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgaWYgKCF1c2VyLmVtYWlsIHx8ICF1c2VyLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwgKyBcInVzZXIvXCIgKyBDb25maWcuYXBwS2V5LFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxyXG4gICAgICAgICkucGlwZShcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbW1vbkhlYWRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBDb25maWcuYXV0aEhlYWRlclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgICBsb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgXCJ1c2VyL1wiICsgQ29uZmlnLmFwcEtleSArIFwiL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxyXG4gICAgICAgICkucGlwZShcclxuICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSxcclxuICAgICAgICAgICAgdGFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ29uZmlnLnRva2VuID0gKDxhbnk+ZGF0YSkuX2ttZC5hdXRodG9rZW5cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb24vaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL29wZXJhdG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==