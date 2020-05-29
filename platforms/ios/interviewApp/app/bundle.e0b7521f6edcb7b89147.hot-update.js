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
    DetailsComponent.prototype.callNumber = function (args) {
        var label = args.Object;
        console.log('tapped ' + label.text);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ0Q7QUFFTDtBQVM1QztJQU1FLDBCQUEwQixLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUwvQyxpQkFBWSxHQUFDLEVBQUUsQ0FBQztJQUttQyxDQUFDO0lBQ3BELG1DQUFRLEdBQVI7UUFBQSxpQkFjSztRQVhDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFFdEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFbkMsSUFBSSxHQUFHLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRTlDLENBQUMsQ0FBQyxDQUFDO0lBRUgsQ0FBQztJQUNELHFDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ2IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNqQyx1REFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDMUQsQ0FBQzs7Z0JBcEI0Qiw4REFBYzs7SUFOcEMsZ0JBQWdCO1FBTjVCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUV0QiwwRkFBdUM7O1NBRXhDLENBQUM7eUNBT2lDLDhEQUFjO09BTnBDLGdCQUFnQixDQTJCeEI7SUFBRCx1QkFBQztDQUFBO0FBM0J3QiIsImZpbGUiOiJidW5kbGUuZTBiNzUyMWY2ZWRjYjdiODkxNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEJ1aWxkaW5nIH0gZnJvbSBcIn4vc2hhcmVkL2J1aWxkaW5nL2J1aWxkaW5nLm1vZGVsXCI7XHJcbmltcG9ydCAqIGFzIHBob25lIGZyb20gJ25hdGl2ZXNjcmlwdC1waG9uZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZ3ItZGV0YWlsc1wiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9kZXRhaWxzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2RldGFpbHMuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY3VycmVudFBob25lPVwiXCI7XHJcbiAgRGV0YWlscztcclxuICBcclxuICBCdWlsZGluZztcclxuICBsYWJlbDsgXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgXHJcblxyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcclxuICBcclxuICAgICAgICAgIHRoaXMuQnVpbGRpbmcgPSBwYXJhbXNbXCJEYXRhTGlzdFwiXTtcclxuICBcclxuICAgICAgICAgIGxldCBvYmo6IEJ1aWxkaW5nID0gSlNPTi5wYXJzZSh0aGlzLkJ1aWxkaW5nKTtcclxuICAgICAgICAgIHRoaXMuRGV0YWlscyA9IG9iajtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmFtZVwiLCBvYmouaW1hZ2UpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJEZXRhaWxzXCIsIHRoaXMuRGV0YWlscy5pbWFnZSlcclxuICBcclxuICAgICAgfSk7XHJcbiAgIFxyXG4gICAgICB9XHJcbiAgICAgIGNhbGxOdW1iZXIoYXJncykge1xyXG4gICAgICAgIHZhciBsYWJlbCA9IGFyZ3MuT2JqZWN0XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RhcHBlZCAnK2xhYmVsLnRleHQpXHJcbiAgICAgICAgcGhvbmUuZGlhbChTdHJpbmcodGhpcy5EZXRhaWxzLmNvbnRhY3RzWzBdLnBob25lKSwgdHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICJdLCJzb3VyY2VSb290IjoiIn0=