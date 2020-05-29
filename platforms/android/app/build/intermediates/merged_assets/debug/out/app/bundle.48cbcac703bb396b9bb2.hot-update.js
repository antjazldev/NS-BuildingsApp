webpackHotUpdate("bundle",{

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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ0Q7QUFTakQ7SUFHRSwwQkFBMEIsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFBSSxDQUFDO0lBQ3BELG1DQUFRLEdBQVI7UUFBQSxpQkFjSztRQVhDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFFdEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFbkMsSUFBSSxHQUFHLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRTlDLENBQUMsQ0FBQyxDQUFDO0lBRUgsQ0FBQzs7Z0JBZjRCLDhEQUFjOztJQUhwQyxnQkFBZ0I7UUFONUIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBRXRCLDBGQUF1Qzs7U0FFeEMsQ0FBQzt5Q0FJaUMsOERBQWM7T0FIcEMsZ0JBQWdCLENBa0JyQjtJQUFELHVCQUFDO0NBQUE7QUFsQnFCIiwiZmlsZSI6ImJ1bmRsZS40OGNiY2FjNzAzYmIzOTZiOWJiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQnVpbGRpbmcgfSBmcm9tIFwifi9zaGFyZWQvYnVpbGRpbmcvYnVpbGRpbmcubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImdyLWRldGFpbHNcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vZGV0YWlscy5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9kZXRhaWxzLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIERldGFpbHM7XHJcbiAgQnVpbGRpbmc7IFxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIFxyXG5cclxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgXHJcbiAgICAgICAgICB0aGlzLkJ1aWxkaW5nID0gcGFyYW1zW1wiRGF0YUxpc3RcIl07XHJcbiAgXHJcbiAgICAgICAgICBsZXQgb2JqOiBCdWlsZGluZyA9IEpTT04ucGFyc2UodGhpcy5CdWlsZGluZyk7XHJcbiAgICAgICAgICB0aGlzLkRldGFpbHMgPSBvYmo7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5hbWVcIiwgb2JqLmltYWdlKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGV0YWlsc1wiLCB0aGlzLkRldGFpbHMuaW1hZ2UpXHJcbiAgXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICB9fVxyXG4gICAgICBcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=