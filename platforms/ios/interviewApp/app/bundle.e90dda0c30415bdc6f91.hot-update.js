webpackHotUpdate("bundle",{

/***/ "./details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\r\n<ActionBar title=\"Building\" >\r\n  <NavigationButton android.systemIcon=\"ic_menu_back\" text=\"Back\" (tap)=\"routerExtensions.back()\"></NavigationButton>\r\n</ActionBar></Page.actionBar>\r\n<StackLayout class=\"my-bg\" >\r\n<StackLayout orientation=\"horizontal\" paddingTop=\"20\" paddingLeft=\"20\" >\r\n<Image src=\"{{Details.image}}\" width=\"300\" height=\"220\" stretch=\"aspectFill\"></Image>\r\n<StackLayout paddingTop=\"20\">\r\n  <!--NAME-->\r\n    <label horizontalAlignment=\"left\" paddingLeft=\"20\">\r\n        <FormattedString>\r\n          <Span text=\"Name:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\" ></Span>\r\n        </FormattedString>\r\n    </label>\r\n<Label text=\"{{Details.name}}\" fontAttributes=\"Bold\"  class=\"title bold\" paddingLeft=\"20\"></Label>\r\n<!--MAIN CONTACT-->\r\n<label horizontalAlignment=\"center\" paddingLeft=\"20\">\r\n        <FormattedString>\r\n          <Span text=\"Main Contact:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\" paddingLeft=\"20\"></Span>\r\n        </FormattedString>\r\n    </label>\r\n<!--<Label text=\"                            {{Details.contacts[0].name}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>-->\r\n<label paddingLeft=\"20\" >\r\n    <FormattedString *ngIf=\"!(Details.contacts.length === 0)\">\r\n      <Span text=\"{{Details.contacts[0].name}}\" foregroundColor=\"#3C5AFD\" class=\"title bold\"></Span>\r\n    </FormattedString>\r\n</label>\r\n</StackLayout>\r\n</StackLayout>\r\n<!--AdDRESS-->\r\n<label paddingTop=\"10\" paddingLeft=\"50\">\r\n    <FormattedString>\r\n      <Span text=\"Adress:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>\r\n<Label text=\"{{Details.address}}\" fontAttributes=\"Bold\"  class=\"title bold\" paddingTop=\"5\" paddingLeft=\"20\"></Label>\r\n<Label paddingTop=\"10\" paddingLeft=\"20\">\r\n    <FormattedString>\r\n     \r\n      <Span text=\"Phone:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\" ></Span>\r\n    </FormattedString>\r\n     \r\n</Label>\r\n<!--PHONE-->\r\n\r\n<Label (tap)=\"callNumber()\"  text=\"{{Details.contacts[0].phone}}\" fontAttributes=\"Bold\"  class=\"title phone\" name=\"currentPhone\"  paddingTop=\"5\" paddingLeft=\"20\"></Label>\r\n<Label (tap)=\"callNumber()\" text=\"{{Details.contacts[0].phone_home}}\" fontAttributes=\"Bold\"  class=\"title phone\"  paddingTop=\"5\" paddingLeft=\"20\"></Label>\r\n<!--EMAIL-->\r\n<label paddingTop=\"10\" paddingLeft=\"20\">\r\n    <FormattedString>\r\n      <Span text=\"Email:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<Label text=\"{{Details.contacts[0].email}}\" fontAttributes=\"Bold\"  class=\"title bold\"  paddingTop=\"5\" paddingLeft=\"20\" ></Label>      \r\n<Label text=\"                      \" fontAttributes=\"Bold\"  class=\"title bold\" horizontalAlignment=\"center\"></Label>  \r\n<label class=\"far my-label border\"  paddingLeft=\"20\">\r\n    <FormattedString>\r\n      <Span text=\"Other Contacts:\"  class=\"bigtitle bold\" horizontalAlignment=\"center\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<!--Other Contacts-->\r\n<StackLayout *ngFor=\"let contact of Details.contacts | slice:1\">\r\n    <Label (tap)=\"makeCall(contact.phone)\" paddingLeft=\"20\">\r\n        <FormattedString>\r\n          <Span [text]=\"contact.name\" foregroundColor=\"#3C5AFD\" class=\"title bold\"></Span>\r\n          <Span text=\"       \" foregroundColor=\"#3C5AFD\" class=\"title border2\"></Span>\r\n          <Span [text]=\"contact.phone\" foregroundColor=\"#3C5AFD\" class=\"title phone\" ></Span>\r\n        </FormattedString>\r\n    </Label> \r\n</StackLayout>\r\n</StackLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0V0FBNFcsZUFBZSxnWEFBZ1gsY0FBYyx3WkFBd1osMEJBQTBCLG1MQUFtTCwwQkFBMEIsc1hBQXNYLGlCQUFpQiwwWEFBMFgsMkJBQTJCLGdLQUFnSyxnQ0FBZ0MsK1VBQStVLDJCQUEyQiw0Z0MiLCJmaWxlIjoiYnVuZGxlLmU5MGRkYTBjMzA0MTViZGM2ZjkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcclxcbjxBY3Rpb25CYXIgdGl0bGU9XFxcIkJ1aWxkaW5nXFxcIiA+XFxyXFxuICA8TmF2aWdhdGlvbkJ1dHRvbiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGV4dD1cXFwiQmFja1xcXCIgKHRhcCk9XFxcInJvdXRlckV4dGVuc2lvbnMuYmFjaygpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuPC9BY3Rpb25CYXI+PC9QYWdlLmFjdGlvbkJhcj5cXHJcXG48U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm15LWJnXFxcIiA+XFxyXFxuPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBwYWRkaW5nVG9wPVxcXCIyMFxcXCIgcGFkZGluZ0xlZnQ9XFxcIjIwXFxcIiA+XFxyXFxuPEltYWdlIHNyYz1cXFwie3tEZXRhaWxzLmltYWdlfX1cXFwiIHdpZHRoPVxcXCIzMDBcXFwiIGhlaWdodD1cXFwiMjIwXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlPlxcclxcbjxTdGFja0xheW91dCBwYWRkaW5nVG9wPVxcXCIyMFxcXCI+XFxyXFxuICA8IS0tTkFNRS0tPlxcclxcbiAgICA8bGFiZWwgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCIgcGFkZGluZ0xlZnQ9XFxcIjIwXFxcIj5cXHJcXG4gICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIk5hbWU6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIiA+PC9TcGFuPlxcclxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgIDwvbGFiZWw+XFxyXFxuPExhYmVsIHRleHQ9XFxcInt7RGV0YWlscy5uYW1lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiIHBhZGRpbmdMZWZ0PVxcXCIyMFxcXCI+PC9MYWJlbD5cXHJcXG48IS0tTUFJTiBDT05UQUNULS0+XFxyXFxuPGxhYmVsIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgcGFkZGluZ0xlZnQ9XFxcIjIwXFxcIj5cXHJcXG4gICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIk1haW4gQ29udGFjdDpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiIHBhZGRpbmdMZWZ0PVxcXCIyMFxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgIDwvbGFiZWw+XFxyXFxuPCEtLTxMYWJlbCB0ZXh0PVxcXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tEZXRhaWxzLmNvbnRhY3RzWzBdLm5hbWV9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+LS0+XFxyXFxuPGxhYmVsIHBhZGRpbmdMZWZ0PVxcXCIyMFxcXCIgPlxcclxcbiAgICA8Rm9ybWF0dGVkU3RyaW5nICpuZ0lmPVxcXCIhKERldGFpbHMuY29udGFjdHMubGVuZ3RoID09PSAwKVxcXCI+XFxyXFxuICAgICAgPFNwYW4gdGV4dD1cXFwie3tEZXRhaWxzLmNvbnRhY3RzWzBdLm5hbWV9fVxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGUgYm9sZFxcXCI+PC9TcGFuPlxcclxcbiAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG48L2xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG48IS0tQWREUkVTUy0tPlxcclxcbjxsYWJlbCBwYWRkaW5nVG9wPVxcXCIxMFxcXCIgcGFkZGluZ0xlZnQ9XFxcIjUwXFxcIj5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCJBZHJlc3M6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+XFxyXFxuPExhYmVsIHRleHQ9XFxcInt7RGV0YWlscy5hZGRyZXNzfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiIHBhZGRpbmdUb3A9XFxcIjVcXFwiIHBhZGRpbmdMZWZ0PVxcXCIyMFxcXCI+PC9MYWJlbD5cXHJcXG48TGFiZWwgcGFkZGluZ1RvcD1cXFwiMTBcXFwiIHBhZGRpbmdMZWZ0PVxcXCIyMFxcXCI+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICBcXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCJQaG9uZTpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiID48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgXFxyXFxuPC9MYWJlbD5cXHJcXG48IS0tUEhPTkUtLT5cXHJcXG5cXHJcXG48TGFiZWwgKHRhcCk9XFxcImNhbGxOdW1iZXIoKVxcXCIgIHRleHQ9XFxcInt7RGV0YWlscy5jb250YWN0c1swXS5waG9uZX19XFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZSBwaG9uZVxcXCIgbmFtZT1cXFwiY3VycmVudFBob25lXFxcIiAgcGFkZGluZ1RvcD1cXFwiNVxcXCIgcGFkZGluZ0xlZnQ9XFxcIjIwXFxcIj48L0xhYmVsPlxcclxcbjxMYWJlbCAodGFwKT1cXFwiY2FsbE51bWJlcigpXFxcIiB0ZXh0PVxcXCJ7e0RldGFpbHMuY29udGFjdHNbMF0ucGhvbmVfaG9tZX19XFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZSBwaG9uZVxcXCIgIHBhZGRpbmdUb3A9XFxcIjVcXFwiIHBhZGRpbmdMZWZ0PVxcXCIyMFxcXCI+PC9MYWJlbD5cXHJcXG48IS0tRU1BSUwtLT5cXHJcXG48bGFiZWwgcGFkZGluZ1RvcD1cXFwiMTBcXFwiIHBhZGRpbmdMZWZ0PVxcXCIyMFxcXCI+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgPFNwYW4gdGV4dD1cXFwiRW1haWw6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+ICBcXHJcXG48TGFiZWwgdGV4dD1cXFwie3tEZXRhaWxzLmNvbnRhY3RzWzBdLmVtYWlsfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiICBwYWRkaW5nVG9wPVxcXCI1XFxcIiBwYWRkaW5nTGVmdD1cXFwiMjBcXFwiID48L0xhYmVsPiAgICAgIFxcclxcbjxMYWJlbCB0ZXh0PVxcXCIgICAgICAgICAgICAgICAgICAgICAgXFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZSBib2xkXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvTGFiZWw+ICBcXHJcXG48bGFiZWwgY2xhc3M9XFxcImZhciBteS1sYWJlbCBib3JkZXJcXFwiICBwYWRkaW5nTGVmdD1cXFwiMjBcXFwiPlxcclxcbiAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgIDxTcGFuIHRleHQ9XFxcIk90aGVyIENvbnRhY3RzOlxcXCIgIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuPC9sYWJlbD4gIFxcclxcbjwhLS1PdGhlciBDb250YWN0cy0tPlxcclxcbjxTdGFja0xheW91dCAqbmdGb3I9XFxcImxldCBjb250YWN0IG9mIERldGFpbHMuY29udGFjdHMgfCBzbGljZToxXFxcIj5cXHJcXG4gICAgPExhYmVsICh0YXApPVxcXCJtYWtlQ2FsbChjb250YWN0LnBob25lKVxcXCIgcGFkZGluZ0xlZnQ9XFxcIjIwXFxcIj5cXHJcXG4gICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgIDxTcGFuIFt0ZXh0XT1cXFwiY29udGFjdC5uYW1lXFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJ0aXRsZSBib2xkXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIiAgICAgICBcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlIGJvcmRlcjJcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgICAgPFNwYW4gW3RleHRdPVxcXCJjb250YWN0LnBob25lXFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJ0aXRsZSBwaG9uZVxcXCIgPjwvU3Bhbj5cXHJcXG4gICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICA8L0xhYmVsPiBcXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9