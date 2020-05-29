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
    DetailsComponent.prototype.callNumber = function (args) {
        console.log('tapped' + args.currentPhone);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ0Q7QUFFTDtBQVM1QztJQUtFLDBCQUEwQixLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUFJLENBQUM7SUFDcEQsbUNBQVEsR0FBUjtRQUFBLGlCQWNLO1FBWEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUV0QyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVuQyxJQUFJLEdBQUcsR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFOUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxDQUFDO0lBQ0QscUNBQVUsR0FBVixVQUFXLElBQUk7UUFFYixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLHVEQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQztJQUMxRCxDQUFDOztnQkFwQjRCLDhEQUFjOztJQUxwQyxnQkFBZ0I7UUFONUIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBRXRCLDBGQUF1Qzs7U0FFeEMsQ0FBQzt5Q0FNaUMsOERBQWM7T0FMcEMsZ0JBQWdCLENBMEJ4QjtJQUFELHVCQUFDO0NBQUE7QUExQndCIiwiZmlsZSI6ImJ1bmRsZS5mOGMxZmRkOTJhMmQyOWU3MzYwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQnVpbGRpbmcgfSBmcm9tIFwifi9zaGFyZWQvYnVpbGRpbmcvYnVpbGRpbmcubW9kZWxcIjtcclxuaW1wb3J0ICogYXMgcGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJnci1kZXRhaWxzXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2RldGFpbHMuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vZGV0YWlscy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjdXJyZW50UGhvbmU7XHJcbiAgRGV0YWlscztcclxuICBcclxuICBCdWlsZGluZzsgXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgXHJcblxyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICBcclxuICAgICAgICAgIHRoaXMuQnVpbGRpbmcgPSBwYXJhbXNbXCJEYXRhTGlzdFwiXTtcclxuICBcclxuICAgICAgICAgIGxldCBvYmo6IEJ1aWxkaW5nID0gSlNPTi5wYXJzZSh0aGlzLkJ1aWxkaW5nKTtcclxuICAgICAgICAgIHRoaXMuRGV0YWlscyA9IG9iajtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmFtZVwiLCBvYmouaW1hZ2UpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJEZXRhaWxzXCIsIHRoaXMuRGV0YWlscy5pbWFnZSlcclxuICBcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIH1cclxuICAgICAgY2FsbE51bWJlcihhcmdzKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RhcHBlZCcrYXJncy5jdXJyZW50UGhvbmUpXHJcbiAgICAgICAgcGhvbmUuZGlhbChTdHJpbmcodGhpcy5EZXRhaWxzLmNvbnRhY3RzWzBdLnBob25lKSwgdHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==