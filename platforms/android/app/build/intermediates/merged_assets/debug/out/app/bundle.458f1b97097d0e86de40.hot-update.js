webpackHotUpdate("bundle",{

/***/ "./details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Building\"></ActionBar>\r\n<StackLayout >\r\n<StackLayout orientation=\"horizontal\">\r\n<Image src=\"{{Details.image}}\" width=\"200\" height=\"200\" stretch=\"aspectFill\"></Image>\r\n<StackLayout paddingTop=\"50\">\r\n    <TextField>\r\n        <FormattedString>\r\n          <Span text=\"                    NAME:\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n        </FormattedString>\r\n    </TextField>\r\n<Label text=\"                            {{Details.name}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n\r\n<TextField>\r\n        <FormattedString>\r\n          <Span text=\"                     Main Contact:\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n        </FormattedString>\r\n    </TextField>\r\n<Label text=\"                            {{Details.contacts[0].name}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n</StackLayout>\r\n</StackLayout>\r\n<TextField>\r\n    <FormattedString>\r\n      <Span text=\"       Adress:\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n    </FormattedString>\r\n</TextField>\r\n<Label text=\"        {{Details.address}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n<TextField>\r\n    <FormattedString>\r\n      <Span text=\"       Phone:\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n    </FormattedString>\r\n</TextField>\r\n<Label text=\"        {{Details.contacts[0].phone}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n<Label text=\"        {{Details.contacts[0].phone_home}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n<TextField>\r\n    <FormattedString>\r\n      <Span text=\"       Email:\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n    </FormattedString>\r\n</TextField>  \r\n<Label text=\"        {{Details.contacts[0].email}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>      \r\n<TextField>\r\n    <FormattedString>\r\n      <Span text=\"       Other Contacts:\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n    </FormattedString>\r\n</TextField>  \r\n<StackLayout *ngFor=\"let contact of Details.contacts._array\">\r\n    <TextField>\r\n        <FormattedString>\r\n          <Span text=\"contact.name\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n        </FormattedString>\r\n    </TextField> \r\n</StackLayout>\r\n</StackLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2SUFBNkksZUFBZSw4VkFBOFYsY0FBYyx5VEFBeVQsMEJBQTBCLGlTQUFpUyxpQkFBaUIsNFBBQTRQLDJCQUEyQixnRkFBZ0YsZ0NBQWdDLDhQQUE4UCwyQkFBMkIseWhCIiwiZmlsZSI6ImJ1bmRsZS40NThmMWI5NzA5N2QwZTg2ZGU0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkJ1aWxkaW5nXFxcIj48L0FjdGlvbkJhcj5cXHJcXG48U3RhY2tMYXlvdXQgPlxcclxcbjxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuPEltYWdlIHNyYz1cXFwie3tEZXRhaWxzLmltYWdlfX1cXFwiIHdpZHRoPVxcXCIyMDBcXFwiIGhlaWdodD1cXFwiMjAwXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlPlxcclxcbjxTdGFja0xheW91dCBwYWRkaW5nVG9wPVxcXCI1MFxcXCI+XFxyXFxuICAgIDxUZXh0RmllbGQ+XFxyXFxuICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgICAgICAgICAgICAgIE5BTUU6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgIDwvVGV4dEZpZWxkPlxcclxcbjxMYWJlbCB0ZXh0PVxcXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tEZXRhaWxzLm5hbWV9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuPFRleHRGaWVsZD5cXHJcXG4gICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIiAgICAgICAgICAgICAgICAgICAgIE1haW4gQ29udGFjdDpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgPC9UZXh0RmllbGQ+XFxyXFxuPExhYmVsIHRleHQ9XFxcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e0RldGFpbHMuY29udGFjdHNbMF0ubmFtZX19XFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9MYWJlbD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuPFRleHRGaWVsZD5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgQWRyZXNzOlxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuPC9UZXh0RmllbGQ+XFxyXFxuPExhYmVsIHRleHQ9XFxcIiAgICAgICAge3tEZXRhaWxzLmFkZHJlc3N9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+XFxyXFxuPFRleHRGaWVsZD5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgUGhvbmU6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9TcGFuPlxcclxcbiAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG48L1RleHRGaWVsZD5cXHJcXG48TGFiZWwgdGV4dD1cXFwiICAgICAgICB7e0RldGFpbHMuY29udGFjdHNbMF0ucGhvbmV9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+XFxyXFxuPExhYmVsIHRleHQ9XFxcIiAgICAgICAge3tEZXRhaWxzLmNvbnRhY3RzWzBdLnBob25lX2hvbWV9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+XFxyXFxuPFRleHRGaWVsZD5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgRW1haWw6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9TcGFuPlxcclxcbiAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG48L1RleHRGaWVsZD4gIFxcclxcbjxMYWJlbCB0ZXh0PVxcXCIgICAgICAgIHt7RGV0YWlscy5jb250YWN0c1swXS5lbWFpbH19XFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9MYWJlbD4gICAgICBcXHJcXG48VGV4dEZpZWxkPlxcclxcbiAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgIDxTcGFuIHRleHQ9XFxcIiAgICAgICBPdGhlciBDb250YWN0czpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvVGV4dEZpZWxkPiAgXFxyXFxuPFN0YWNrTGF5b3V0ICpuZ0Zvcj1cXFwibGV0IGNvbnRhY3Qgb2YgRGV0YWlscy5jb250YWN0cy5fYXJyYXlcXFwiPlxcclxcbiAgICA8VGV4dEZpZWxkPlxcclxcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiY29udGFjdC5uYW1lXFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgIDwvVGV4dEZpZWxkPiBcXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9