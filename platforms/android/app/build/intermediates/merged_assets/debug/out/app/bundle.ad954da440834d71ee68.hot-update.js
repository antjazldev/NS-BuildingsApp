webpackHotUpdate("bundle",{

/***/ "./details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Building\"></ActionBar>\r\n<StackLayout  [item]=\"Details\"orientation=\"horizontal\">\r\n<Image src=\"{{item.image}}\" stretch=\"none\"></Image>\r\n<Label text=\"Hello world\"></Label>\r\n</StackLayout>"

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
        var _this = this;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            _this.Building = params["DataList"];
            var obj = JSON.parse(_this.Building);
            _this.Details = obj;
            console.log("Name", obj.address);
        });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhJQUE4SSxZQUFZLHVGOzs7Ozs7OztBQ0ExSjtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNPO0FBU2pEO0lBR0ksMEJBQTBCLEtBQXFCO1FBQS9DLGlCQVlHO1FBWnVCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRTNDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFFdEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFbkMsSUFBSSxHQUFHLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLENBQUMsQ0FBQyxDQUFDO0lBRUgsQ0FBQzs7Z0JBWjhCLDhEQUFjOztJQUh0QyxnQkFBZ0I7UUFONUIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBRXRCLDBGQUF1Qzs7U0FFeEMsQ0FBQzt5Q0FJbUMsOERBQWM7T0FIdEMsZ0JBQWdCLENBaUI1QjtJQUFELHVCQUFDO0NBQUE7QUFqQjRCIiwiZmlsZSI6ImJ1bmRsZS5hZDk1NGRhNDQwODM0ZDcxZWU2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkJ1aWxkaW5nXFxcIj48L0FjdGlvbkJhcj5cXHJcXG48U3RhY2tMYXlvdXQgIFtpdGVtXT1cXFwiRGV0YWlsc1xcXCJvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuPEltYWdlIHNyYz1cXFwie3tpdGVtLmltYWdlfX1cXFwiIHN0cmV0Y2g9XFxcIm5vbmVcXFwiPjwvSW1hZ2U+XFxyXFxuPExhYmVsIHRleHQ9XFxcIkhlbGxvIHdvcmxkXFxcIj48L0xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQnVpbGRpbmcgfSBmcm9tIFwifi9zaGFyZWQvYnVpbGRpbmcvYnVpbGRpbmcubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImdyLWRldGFpbHNcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vZGV0YWlscy5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9kZXRhaWxzLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIERldGFpbHNDb21wb25lbnQge1xyXG4gICAgQnVpbGRpbmc7XHJcbiAgICBEZXRhaWxzO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgICAgXHJcblxyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICBcclxuICAgICAgICAgIHRoaXMuQnVpbGRpbmcgPSBwYXJhbXNbXCJEYXRhTGlzdFwiXTtcclxuICBcclxuICAgICAgICAgIGxldCBvYmo6IEJ1aWxkaW5nID0gSlNPTi5wYXJzZSh0aGlzLkJ1aWxkaW5nKTtcclxuICAgICAgICAgIHRoaXMuRGV0YWlscyA9IG9iajtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmFtZVwiLCBvYmouYWRkcmVzcyk7XHJcbiAgXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICB9ICAgXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==