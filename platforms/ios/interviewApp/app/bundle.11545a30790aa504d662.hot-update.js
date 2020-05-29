webpackHotUpdate("bundle",{

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



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route) {
        this.route = route;
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
    DetailsComponent.prototype.onNavBtnTap = function () {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ0Q7QUFFTDtBQVM1QztJQU1FLDBCQUEwQixLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUwvQyxpQkFBWSxHQUFDLEVBQUUsQ0FBQztJQUttQyxDQUFDO0lBQ3BELG1DQUFRLEdBQVI7UUFBQSxpQkFjSztRQVhDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFFdEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFbkMsSUFBSSxHQUFHLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRTlDLENBQUMsQ0FBQyxDQUFDO0lBRUgsQ0FBQztJQUNELHFDQUFVLEdBQVY7UUFFRSx1REFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDMUQsQ0FBQztJQUNELHNDQUFXLEdBQVg7UUFDRSw0Q0FBNEM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dCQXZCOEIsOERBQWM7O0lBTnBDLGdCQUFnQjtRQU41QiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFFdEIsMEZBQXVDOztTQUV4QyxDQUFDO3lDQU9pQyw4REFBYztPQU5wQyxnQkFBZ0IsQ0E4QnhCO0lBQUQsdUJBQUM7Q0FBQTtBQTlCd0IiLCJmaWxlIjoiYnVuZGxlLjExNTQ1YTMwNzkwYWE1MDRkNjYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBCdWlsZGluZyB9IGZyb20gXCJ+L3NoYXJlZC9idWlsZGluZy9idWlsZGluZy5tb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBwaG9uZSBmcm9tICduYXRpdmVzY3JpcHQtcGhvbmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImdyLWRldGFpbHNcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vZGV0YWlscy5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9kZXRhaWxzLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGN1cnJlbnRQaG9uZT1cIlwiO1xyXG4gIERldGFpbHM7XHJcbiAgXHJcbiAgQnVpbGRpbmc7XHJcbiAgbGFiZWw7IFxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIFxyXG5cclxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgXHJcbiAgICAgICAgICB0aGlzLkJ1aWxkaW5nID0gcGFyYW1zW1wiRGF0YUxpc3RcIl07XHJcbiAgXHJcbiAgICAgICAgICBsZXQgb2JqOiBCdWlsZGluZyA9IEpTT04ucGFyc2UodGhpcy5CdWlsZGluZyk7XHJcbiAgICAgICAgICB0aGlzLkRldGFpbHMgPSBvYmo7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5hbWVcIiwgb2JqLmltYWdlKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGV0YWlsc1wiLCB0aGlzLkRldGFpbHMuaW1hZ2UpXHJcbiAgXHJcbiAgICAgIH0pO1xyXG4gICBcclxuICAgICAgfVxyXG4gICAgICBjYWxsTnVtYmVyKCkge1xyXG4gICAgICBcclxuICAgICAgICBwaG9uZS5kaWFsKFN0cmluZyh0aGlzLkRldGFpbHMuY29udGFjdHNbMF0ucGhvbmUpLCB0cnVlKVxyXG4gICAgICB9XHJcbiAgICAgIG9uTmF2QnRuVGFwKCl7XHJcbiAgICAgICAgLy8gVGhpcyBjb2RlIHdpbGwgYmUgY2FsbGVkIG9ubHkgaW4gQW5kcm9pZC5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpb24gYnV0dG9uIHRhcHBlZCFcIik7XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gIl0sInNvdXJjZVJvb3QiOiIifQ==