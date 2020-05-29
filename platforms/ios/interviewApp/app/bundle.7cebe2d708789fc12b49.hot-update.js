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
        console.log('tapped' + this.currentPhone);
        nativescript_phone__WEBPACK_IMPORTED_MODULE_2__["dial"](String(this.Details.contacts[0].phone), true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ0Q7QUFFTDtBQVM1QztJQUtFLDBCQUEwQixLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUFJLENBQUM7SUFDcEQsbUNBQVEsR0FBUjtRQUFBLGlCQWNLO1FBWEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUV0QyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVuQyxJQUFJLEdBQUcsR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFOUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxDQUFDO0lBQ0QscUNBQVUsR0FBVjtRQUVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdkMsdURBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQzFELENBQUM7O2dCQXBCNEIsOERBQWM7O0lBTHBDLGdCQUFnQjtRQU41QiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFFdEIsMEZBQXVDOztTQUV4QyxDQUFDO3lDQU1pQyw4REFBYztPQUxwQyxnQkFBZ0IsQ0EwQnhCO0lBQUQsdUJBQUM7Q0FBQTtBQTFCd0IiLCJmaWxlIjoiYnVuZGxlLjdjZWJlMmQ3MDg3ODlmYzEyYjQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBCdWlsZGluZyB9IGZyb20gXCJ+L3NoYXJlZC9idWlsZGluZy9idWlsZGluZy5tb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBwaG9uZSBmcm9tICduYXRpdmVzY3JpcHQtcGhvbmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImdyLWRldGFpbHNcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vZGV0YWlscy5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9kZXRhaWxzLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGN1cnJlbnRQaG9uZTtcclxuICBEZXRhaWxzO1xyXG4gIFxyXG4gIEJ1aWxkaW5nOyBcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgdGhpcy5CdWlsZGluZyA9IHBhcmFtc1tcIkRhdGFMaXN0XCJdO1xyXG4gIFxyXG4gICAgICAgICAgbGV0IG9iajogQnVpbGRpbmcgPSBKU09OLnBhcnNlKHRoaXMuQnVpbGRpbmcpO1xyXG4gICAgICAgICAgdGhpcy5EZXRhaWxzID0gb2JqO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJOYW1lXCIsIG9iai5pbWFnZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRldGFpbHNcIiwgdGhpcy5EZXRhaWxzLmltYWdlKVxyXG4gIFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgfVxyXG4gICAgICBjYWxsTnVtYmVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0YXBwZWQnK3RoaXMuY3VycmVudFBob25lKVxyXG4gICAgICAgIHBob25lLmRpYWwoU3RyaW5nKHRoaXMuRGV0YWlscy5jb250YWN0c1swXS5waG9uZSksIHRydWUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=