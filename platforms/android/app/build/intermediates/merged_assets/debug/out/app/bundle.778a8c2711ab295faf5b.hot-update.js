webpackHotUpdate("bundle",{

/***/ "./details/details.component.css":
/***/ (function(module, exports) {

module.exports = ".title { font-size: 18 }\r\n.my-label {\r\n    background-color: #bc7474;\r\n    color: whitesmoke;\r\n    font-size: 24;\r\n    padding: 8;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    width: 90%;\r\n}\r\n.border {\r\n    border-color: darkred;\r\n    border-radius: 10;\r\n    border-width: 2;\r\n}\r\n.bold {\r\n    font-weight: bold;\r\n  }"

/***/ }),

/***/ "./details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Building\"></ActionBar>\r\n<StackLayout >\r\n<StackLayout orientation=\"horizontal\">\r\n<Image src=\"{{Details.image}}\" width=\"200\" height=\"200\" stretch=\"aspectFill\"></Image>\r\n<StackLayout paddingTop=\"50\">\r\n    <label >\r\n        <FormattedString>\r\n          <Span text=\"                    Name:\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n        </FormattedString>\r\n    </label>\r\n<Label text=\"                    {{Details.name}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n\r\n<label>\r\n        <FormattedString>\r\n          <Span text=\"                   Main Contact:\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n        </FormattedString>\r\n    </label>\r\n<!--<Label text=\"                            {{Details.contacts[0].name}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>-->\r\n<label>\r\n    <FormattedString *ngIf=\"!(Details.contacts.length === 0)\">\r\n      <Span text=\"                    {{Details.contacts[0].name}}\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n    </FormattedString>\r\n</label>\r\n</StackLayout>\r\n</StackLayout>\r\n<label>\r\n    <FormattedString>\r\n      <Span text=\"       Adress:\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n    </FormattedString>\r\n</label>\r\n<Label text=\"        {{Details.address}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n<label>\r\n    <FormattedString>\r\n      <Span text=\"       Phone:\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n    </FormattedString>\r\n</label>\r\n<Label text=\"        {{Details.contacts[0].phone}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n<Label text=\"        {{Details.contacts[0].phone_home}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n<label>\r\n    <FormattedString>\r\n      <Span text=\"       Email:\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<Label text=\"        {{Details.contacts[0].email}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>      \r\n<label class=\"far my-label border\">\r\n    <FormattedString>\r\n      <Span text=\"       Other Contacts:\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<StackLayout *ngFor=\"let contact of Details.contacts | slice:1\">\r\n    <label>\r\n        <FormattedString>\r\n          <Span text=\"         {{contact.name}}\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n          <Span text=\"         {{contact.phone}}\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n        </FormattedString>\r\n    </label> \r\n</StackLayout>\r\n</StackLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwQkFBMEIsZ0JBQWdCLGVBQWUsa0NBQWtDLDBCQUEwQixzQkFBc0IsbUJBQW1CLDJCQUEyQiwrQkFBK0IsbUJBQW1CLEtBQUssYUFBYSw4QkFBOEIsMEJBQTBCLHdCQUF3QixLQUFLLFdBQVcsMEJBQTBCLE9BQU8sQzs7Ozs7OztBQ0E5WCw2SUFBNkksZUFBZSwrVUFBK1UsY0FBYyxtVEFBbVQsMEJBQTBCLG1MQUFtTCwwQkFBMEIsaVVBQWlVLGlCQUFpQixvUEFBb1AsMkJBQTJCLGdGQUFnRixnQ0FBZ0Msc1BBQXNQLDJCQUEyQiwrWkFBK1osY0FBYyw0RkFBNEYsZUFBZSwwSSIsImZpbGUiOiJidW5kbGUuNzc4YThjMjcxMWFiMjk1ZmFmNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIudGl0bGUgeyBmb250LXNpemU6IDE4IH1cXHJcXG4ubXktbGFiZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmM3NDc0O1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNDtcXHJcXG4gICAgcGFkZGluZzogODtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG4uYm9yZGVyIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrcmVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAyO1xcclxcbn1cXHJcXG4uYm9sZCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkJ1aWxkaW5nXFxcIj48L0FjdGlvbkJhcj5cXHJcXG48U3RhY2tMYXlvdXQgPlxcclxcbjxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuPEltYWdlIHNyYz1cXFwie3tEZXRhaWxzLmltYWdlfX1cXFwiIHdpZHRoPVxcXCIyMDBcXFwiIGhlaWdodD1cXFwiMjAwXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlPlxcclxcbjxTdGFja0xheW91dCBwYWRkaW5nVG9wPVxcXCI1MFxcXCI+XFxyXFxuICAgIDxsYWJlbCA+XFxyXFxuICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgICAgICAgICAgICAgIE5hbWU6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgIDwvbGFiZWw+XFxyXFxuPExhYmVsIHRleHQ9XFxcIiAgICAgICAgICAgICAgICAgICAge3tEZXRhaWxzLm5hbWV9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuPGxhYmVsPlxcclxcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAgICAgICAgICAgICAgIE1haW4gQ29udGFjdDpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgPC9sYWJlbD5cXHJcXG48IS0tPExhYmVsIHRleHQ9XFxcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e0RldGFpbHMuY29udGFjdHNbMF0ubmFtZX19XFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9MYWJlbD4tLT5cXHJcXG48bGFiZWw+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmcgKm5nSWY9XFxcIiEoRGV0YWlscy5jb250YWN0cy5sZW5ndGggPT09IDApXFxcIj5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgICAgICAgICAgICAgIHt7RGV0YWlscy5jb250YWN0c1swXS5uYW1lfX1cXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjxsYWJlbD5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgQWRyZXNzOlxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuPC9sYWJlbD5cXHJcXG48TGFiZWwgdGV4dD1cXFwiICAgICAgICB7e0RldGFpbHMuYWRkcmVzc319XFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9MYWJlbD5cXHJcXG48bGFiZWw+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAgIFBob25lOlxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuPC9sYWJlbD5cXHJcXG48TGFiZWwgdGV4dD1cXFwiICAgICAgICB7e0RldGFpbHMuY29udGFjdHNbMF0ucGhvbmV9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+XFxyXFxuPExhYmVsIHRleHQ9XFxcIiAgICAgICAge3tEZXRhaWxzLmNvbnRhY3RzWzBdLnBob25lX2hvbWV9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+XFxyXFxuPGxhYmVsPlxcclxcbiAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgIDxTcGFuIHRleHQ9XFxcIiAgICAgICBFbWFpbDpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+ICBcXHJcXG48TGFiZWwgdGV4dD1cXFwiICAgICAgICB7e0RldGFpbHMuY29udGFjdHNbMF0uZW1haWx9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+ICAgICAgXFxyXFxuPGxhYmVsIGNsYXNzPVxcXCJmYXIgbXktbGFiZWwgYm9yZGVyXFxcIj5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgT3RoZXIgQ29udGFjdHM6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9TcGFuPlxcclxcbiAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG48L2xhYmVsPiAgXFxyXFxuPFN0YWNrTGF5b3V0ICpuZ0Zvcj1cXFwibGV0IGNvbnRhY3Qgb2YgRGV0YWlscy5jb250YWN0cyB8IHNsaWNlOjFcXFwiPlxcclxcbiAgICA8bGFiZWw+XFxyXFxuICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgICB7e2NvbnRhY3QubmFtZX19XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgICB7e2NvbnRhY3QucGhvbmV9fVxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICA8L2xhYmVsPiBcXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9