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
    DetailsComponent.prototype.call = function (args) {
        var _this = this;
        console.log("triggered");
        nativescript_phone__WEBPACK_IMPORTED_MODULE_2__["requestCallPermission"]('You should accept the permission to be able to make a direct phone call.')
            .then(function () { return nativescript_phone__WEBPACK_IMPORTED_MODULE_2__["dial"](_this.Building.contacts[args.index], false); })
            .catch(function () { return nativescript_phone__WEBPACK_IMPORTED_MODULE_2__["dial"](_this.Building.contacts[args.index], true); });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ0Q7QUFFSDtBQVE5QztJQUlFLDBCQUEwQixLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUFJLENBQUM7SUFDcEQsbUNBQVEsR0FBUjtRQUFBLGlCQWNLO1FBWEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUV0QyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVuQyxJQUFJLEdBQUcsR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFOUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxDQUFDO0lBQ00sK0JBQUksR0FBWCxVQUFZLElBQUk7UUFBaEIsaUJBTUE7UUFMRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUN4Qix3RUFBOEIsQ0FBQywwRUFBMEUsQ0FBQzthQUN0RyxJQUFJLENBQUMsY0FBTSw4REFBYSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBeEQsQ0FBd0QsQ0FBQzthQUNwRSxLQUFLLENBQUMsY0FBTSw4REFBYSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBdkQsQ0FBdUQsQ0FBQyxDQUFDO0lBRTVFLENBQUM7O2dCQXRCNkIsOERBQWM7O0lBSnBDLGdCQUFnQjtRQU41QiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFFdEIsMEZBQXVDOztTQUV4QyxDQUFDO3lDQUtpQyw4REFBYztPQUpwQyxnQkFBZ0IsQ0EwQnRCO0lBQUQsdUJBQUM7Q0FBQTtBQTFCc0IiLCJmaWxlIjoiYnVuZGxlLmY4YzA0OTZjZTAzNzBhZmYzMDVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBCdWlsZGluZyB9IGZyb20gXCJ+L3NoYXJlZC9idWlsZGluZy9idWlsZGluZy5tb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBUTlNQaG9uZSBmcm9tICduYXRpdmVzY3JpcHQtcGhvbmUnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJnci1kZXRhaWxzXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2RldGFpbHMuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vZGV0YWlscy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBEZXRhaWxzO1xyXG4gIFxyXG4gIEJ1aWxkaW5nOyBcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgdGhpcy5CdWlsZGluZyA9IHBhcmFtc1tcIkRhdGFMaXN0XCJdO1xyXG4gIFxyXG4gICAgICAgICAgbGV0IG9iajogQnVpbGRpbmcgPSBKU09OLnBhcnNlKHRoaXMuQnVpbGRpbmcpO1xyXG4gICAgICAgICAgdGhpcy5EZXRhaWxzID0gb2JqO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJOYW1lXCIsIG9iai5pbWFnZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRldGFpbHNcIiwgdGhpcy5EZXRhaWxzLmltYWdlKVxyXG4gIFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgfVxyXG4gICAgICBwdWJsaWMgY2FsbChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyZWRcIilcclxuICAgICAgICBUTlNQaG9uZS5yZXF1ZXN0Q2FsbFBlcm1pc3Npb24oJ1lvdSBzaG91bGQgYWNjZXB0IHRoZSBwZXJtaXNzaW9uIHRvIGJlIGFibGUgdG8gbWFrZSBhIGRpcmVjdCBwaG9uZSBjYWxsLicpXHJcbiAgICAgICAgICAgLnRoZW4oKCkgPT4gVE5TUGhvbmUuZGlhbCh0aGlzLkJ1aWxkaW5nLmNvbnRhY3RzW2FyZ3MuaW5kZXhdLCBmYWxzZSkpXHJcbiAgICAgICAgICAgLmNhdGNoKCgpID0+IFROU1Bob25lLmRpYWwodGhpcy5CdWlsZGluZy5jb250YWN0c1thcmdzLmluZGV4XSwgdHJ1ZSkpO1xyXG4gICAgICAgICAgIFxyXG4gICAgIH19XHJcbiAgICAgIFxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==