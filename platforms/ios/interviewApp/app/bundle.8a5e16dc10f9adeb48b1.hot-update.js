webpackHotUpdate("bundle",{

/***/ "./details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Building\"></ActionBar>\r\n<StackLayout >\r\n<StackLayout orientation=\"horizontal\">\r\n<Image src=\"{{Details.image}}\" width=\"300\" height=\"250\" stretch=\"aspectFill\"></Image>\r\n<StackLayout paddingTop=\"50\">\r\n    <label >\r\n        <FormattedString>\r\n          <Span text=\"Name:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n        </FormattedString>\r\n    </label>\r\n<Label text=\"           {{Details.name}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n\r\n<label>\r\n        <FormattedString>\r\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Span text=\"Main Contact:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n        </FormattedString>\r\n    </label>\r\n<!--<Label text=\"                            {{Details.contacts[0].name}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>-->\r\n<label>\r\n    <FormattedString *ngIf=\"!(Details.contacts.length === 0)\">\r\n      <Span text=\"         {{Details.contacts[0].name}}\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n    </FormattedString>\r\n</label>\r\n</StackLayout>\r\n</StackLayout>\r\n<label>\r\n    <FormattedString>\r\n      <Span text=\"       Adress:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>\r\n<Label text=\"        {{Details.address}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n<Label >\r\n    <FormattedString>\r\n      <Span text=\"       Phone:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\" ></Span>\r\n    </FormattedString>\r\n</Label>\r\n<GridLayout (tap)=\"callNumber()\" class=\"bg-primary p-15 m-15\" width=\"200\" height=\"50\">\r\n\r\n<Label tap=\"onItemTap\" text=\"    {{Details.contacts[0].phone}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n</GridLayout>\r\n<Label text=\"        {{Details.contacts[0].phone_home}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n<label>\r\n    <FormattedString>\r\n      <Span text=\"       Email:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<Label text=\"        {{Details.contacts[0].email}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>      \r\n<label class=\"far my-label border\">\r\n    <FormattedString>\r\n      <Span text=\"       Other Contacts:\"  class=\"warning\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<StackLayout *ngFor=\"let contact of Details.contacts | slice:1\">\r\n    <label>\r\n        <FormattedString>\r\n          <Span text=\"         {{contact.name}}\" foregroundColor=\"#3C5AFD\" class=\"title border2\"></Span>\r\n          <Span text=\"         {{contact.phone}}\" foregroundColor=\"#3C5AFD\" class=\"title border2\"></Span>\r\n        </FormattedString>\r\n    </label> \r\n</StackLayout>\r\n</StackLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2SUFBNkksZUFBZSwwVEFBMFQsY0FBYyxvSEFBb0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLDBMQUEwTCwwQkFBMEIsd0tBQXdLLDBCQUEwQix5VUFBeVUsaUJBQWlCLGtYQUFrWCwyQkFBMkIsaUdBQWlHLGdDQUFnQyw4UEFBOFAsMkJBQTJCLHNZQUFzWSxjQUFjLG9HQUFvRyxlQUFlLGtKIiwiZmlsZSI6ImJ1bmRsZS44YTVlMTZkYzEwZjlhZGViNDhiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkJ1aWxkaW5nXFxcIj48L0FjdGlvbkJhcj5cXHJcXG48U3RhY2tMYXlvdXQgPlxcclxcbjxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuPEltYWdlIHNyYz1cXFwie3tEZXRhaWxzLmltYWdlfX1cXFwiIHdpZHRoPVxcXCIzMDBcXFwiIGhlaWdodD1cXFwiMjUwXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlPlxcclxcbjxTdGFja0xheW91dCBwYWRkaW5nVG9wPVxcXCI1MFxcXCI+XFxyXFxuICAgIDxsYWJlbCA+XFxyXFxuICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJOYW1lOlxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwiYmlndGl0bGUgYm9sZFxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgIDwvbGFiZWw+XFxyXFxuPExhYmVsIHRleHQ9XFxcIiAgICAgICAgICAge3tEZXRhaWxzLm5hbWV9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuPGxhYmVsPlxcclxcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PFNwYW4gdGV4dD1cXFwiTWFpbiBDb250YWN0OlxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwiYmlndGl0bGUgYm9sZFxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgIDwvbGFiZWw+XFxyXFxuPCEtLTxMYWJlbCB0ZXh0PVxcXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tEZXRhaWxzLmNvbnRhY3RzWzBdLm5hbWV9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+LS0+XFxyXFxuPGxhYmVsPlxcclxcbiAgICA8Rm9ybWF0dGVkU3RyaW5nICpuZ0lmPVxcXCIhKERldGFpbHMuY29udGFjdHMubGVuZ3RoID09PSAwKVxcXCI+XFxyXFxuICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAgICAge3tEZXRhaWxzLmNvbnRhY3RzWzBdLm5hbWV9fVxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGVcXFwiPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuPC9sYWJlbD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuPGxhYmVsPlxcclxcbiAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgIDxTcGFuIHRleHQ9XFxcIiAgICAgICBBZHJlc3M6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+XFxyXFxuPExhYmVsIHRleHQ9XFxcIiAgICAgICAge3tEZXRhaWxzLmFkZHJlc3N9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+XFxyXFxuPExhYmVsID5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgUGhvbmU6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIiA+PC9TcGFuPlxcclxcbiAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG48L0xhYmVsPlxcclxcbjxHcmlkTGF5b3V0ICh0YXApPVxcXCJjYWxsTnVtYmVyKClcXFwiIGNsYXNzPVxcXCJiZy1wcmltYXJ5IHAtMTUgbS0xNVxcXCIgd2lkdGg9XFxcIjIwMFxcXCIgaGVpZ2h0PVxcXCI1MFxcXCI+XFxyXFxuXFxyXFxuPExhYmVsIHRhcD1cXFwib25JdGVtVGFwXFxcIiB0ZXh0PVxcXCIgICAge3tEZXRhaWxzLmNvbnRhY3RzWzBdLnBob25lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlXFxcIj48L0xhYmVsPlxcclxcbjwvR3JpZExheW91dD5cXHJcXG48TGFiZWwgdGV4dD1cXFwiICAgICAgICB7e0RldGFpbHMuY29udGFjdHNbMF0ucGhvbmVfaG9tZX19XFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9MYWJlbD5cXHJcXG48bGFiZWw+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAgIEVtYWlsOlxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwiYmlndGl0bGUgYm9sZFxcXCI+PC9TcGFuPlxcclxcbiAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG48L2xhYmVsPiAgXFxyXFxuPExhYmVsIHRleHQ9XFxcIiAgICAgICAge3tEZXRhaWxzLmNvbnRhY3RzWzBdLmVtYWlsfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlXFxcIj48L0xhYmVsPiAgICAgIFxcclxcbjxsYWJlbCBjbGFzcz1cXFwiZmFyIG15LWxhYmVsIGJvcmRlclxcXCI+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAgIE90aGVyIENvbnRhY3RzOlxcXCIgIGNsYXNzPVxcXCJ3YXJuaW5nXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+ICBcXHJcXG48U3RhY2tMYXlvdXQgKm5nRm9yPVxcXCJsZXQgY29udGFjdCBvZiBEZXRhaWxzLmNvbnRhY3RzIHwgc2xpY2U6MVxcXCI+XFxyXFxuICAgIDxsYWJlbD5cXHJcXG4gICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIiAgICAgICAgIHt7Y29udGFjdC5uYW1lfX1cXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlIGJvcmRlcjJcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAgICAge3tjb250YWN0LnBob25lfX1cXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlIGJvcmRlcjJcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICA8L2xhYmVsPiBcXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9