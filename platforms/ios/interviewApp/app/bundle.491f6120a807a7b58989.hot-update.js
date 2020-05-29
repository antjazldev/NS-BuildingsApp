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
/* harmony import */ var tns_core_modules_ui_action_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tns-core-modules/ui/action-bar");
/* harmony import */ var tns_core_modules_ui_action_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_action_bar__WEBPACK_IMPORTED_MODULE_3__);




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
    DetailsComponent.prototype.onLoaded = function (args) {
        var page = args.object;
        var newActionBar = new tns_core_modules_ui_action_bar__WEBPACK_IMPORTED_MODULE_3__["ActionBar"]();
        newActionBar.title = "Code-Behind ActionBar";
        var newNavigaitonButton = new tns_core_modules_ui_action_bar__WEBPACK_IMPORTED_MODULE_3__["NavigationButton"]();
        newNavigaitonButton.text = "Go Back";
        newActionBar.navigationButton = newNavigaitonButton;
        page.actionBar = newActionBar;
        page.actionBarHidden = false;
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

/***/ "tns-core-modules/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/action-bar");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNEO0FBRUw7QUFFaUM7QUFXN0U7SUFPRSwwQkFBMEIsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFOL0MsaUJBQVksR0FBQyxFQUFFLENBQUM7SUFNbUMsQ0FBQztJQUNwRCxtQ0FBUSxHQUFSO1FBQUEsaUJBZUs7UUFYQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBRXRDLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRW5DLElBQUksR0FBRyxHQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUU5QyxDQUFDLENBQUMsQ0FBQztJQUVILENBQUM7SUFDRCxxQ0FBVSxHQUFWO1FBRUUsdURBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQzFELENBQUM7SUFDRCxtQ0FBUSxHQUFSLFVBQVMsSUFBZTtRQUN0QixJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRS9CLElBQU0sWUFBWSxHQUFHLElBQUksd0VBQVMsRUFBRSxDQUFDO1FBQ3JDLFlBQVksQ0FBQyxLQUFLLEdBQUcsdUJBQXVCLENBQUM7UUFDN0MsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLCtFQUFnQixFQUFFLENBQUM7UUFDbkQsbUJBQW1CLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUNyQyxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUM7UUFFcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7Z0JBaEM4Qiw4REFBYzs7SUFQcEMsZ0JBQWdCO1FBTjVCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUV0QiwwRkFBdUM7O1NBRXhDLENBQUM7eUNBUWlDLDhEQUFjO09BUHBDLGdCQUFnQixDQXdDeEI7SUFBRCx1QkFBQztDQUFBO0FBeEN3Qjs7Ozs7Ozs7QUNoQjdCLDJEIiwiZmlsZSI6ImJ1bmRsZS40OTFmNjEyMGE4MDdhN2I1ODk4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQnVpbGRpbmcgfSBmcm9tIFwifi9zaGFyZWQvYnVpbGRpbmcvYnVpbGRpbmcubW9kZWxcIjtcclxuaW1wb3J0ICogYXMgcGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbkJhciwgTmF2aWdhdGlvbkJ1dHRvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZ3ItZGV0YWlsc1wiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9kZXRhaWxzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2RldGFpbHMuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY3VycmVudFBob25lPVwiXCI7XHJcbiAgRGV0YWlscztcclxuICBcclxuICBCdWlsZGluZztcclxuICBsYWJlbDsgXHJcbiAgXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gIFxyXG4gICAgICAgICAgdGhpcy5CdWlsZGluZyA9IHBhcmFtc1tcIkRhdGFMaXN0XCJdO1xyXG4gIFxyXG4gICAgICAgICAgbGV0IG9iajogQnVpbGRpbmcgPSBKU09OLnBhcnNlKHRoaXMuQnVpbGRpbmcpO1xyXG4gICAgICAgICAgdGhpcy5EZXRhaWxzID0gb2JqO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJOYW1lXCIsIG9iai5pbWFnZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRldGFpbHNcIiwgdGhpcy5EZXRhaWxzLmltYWdlKVxyXG4gIFxyXG4gICAgICB9KTtcclxuICAgXHJcbiAgICAgIH1cclxuICAgICAgY2FsbE51bWJlcigpIHtcclxuICAgICAgXHJcbiAgICAgICAgcGhvbmUuZGlhbChTdHJpbmcodGhpcy5EZXRhaWxzLmNvbnRhY3RzWzBdLnBob25lKSwgdHJ1ZSlcclxuICAgICAgfVxyXG4gICAgICBvbkxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcclxuICAgICAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBuZXdBY3Rpb25CYXIgPSBuZXcgQWN0aW9uQmFyKCk7XHJcbiAgICAgICAgbmV3QWN0aW9uQmFyLnRpdGxlID0gXCJDb2RlLUJlaGluZCBBY3Rpb25CYXJcIjtcclxuICAgICAgICBjb25zdCBuZXdOYXZpZ2FpdG9uQnV0dG9uID0gbmV3IE5hdmlnYXRpb25CdXR0b24oKTtcclxuICAgICAgICBuZXdOYXZpZ2FpdG9uQnV0dG9uLnRleHQgPSBcIkdvIEJhY2tcIjtcclxuICAgICAgICBuZXdBY3Rpb25CYXIubmF2aWdhdGlvbkJ1dHRvbiA9IG5ld05hdmlnYWl0b25CdXR0b247XHJcbiAgICBcclxuICAgICAgICBwYWdlLmFjdGlvbkJhciA9IG5ld0FjdGlvbkJhcjtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=