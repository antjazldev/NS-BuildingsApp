webpackHotUpdate("bundle",{

/***/ "./details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Building\"></ActionBar>\r\n<StackLayout >\r\n<StackLayout orientation=\"horizontal\">\r\n<Image src=\"{{Details.image}}\" width=\"300\" height=\"250\" stretch=\"aspectFill\"></Image>\r\n<StackLayout paddingTop=\"20\">\r\n  <!--NAME-->\r\n    <label horizontalAlignment=\"left\">\r\n        <FormattedString>\r\n          <Span text=\"    Name:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\" ></Span>\r\n        </FormattedString>\r\n    </label>\r\n<Label text=\"      {{Details.name}}\" fontAttributes=\"Bold\"  class=\"title bold\"></Label>\r\n<!--MAIN CONTACT-->\r\n<label horizontalAlignment=\"center\">\r\n        <FormattedString>\r\n          <Span text=\"    Main Contact:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n        </FormattedString>\r\n    </label>\r\n<!--<Label text=\"                            {{Details.contacts[0].name}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>-->\r\n<label>\r\n    <FormattedString *ngIf=\"!(Details.contacts.length === 0)\">\r\n      <Span text=\"      {{Details.contacts[0].name}}\" foregroundColor=\"#3C5AFD\" class=\"title bold\"></Span>\r\n    </FormattedString>\r\n</label>\r\n</StackLayout>\r\n</StackLayout>\r\n<!--AdDRESS-->\r\n<label>\r\n    <FormattedString>\r\n      <Span text=\"       Adress:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>\r\n<Label text=\"          {{Details.address}}\" fontAttributes=\"Bold\"  class=\"title bold\"></Label>\r\n<Label >\r\n    <FormattedString>\r\n     \r\n      <Span text=\"       Phone:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\" ></Span>\r\n    </FormattedString>\r\n     \r\n</Label>\r\n<!--PHONE-->\r\n\r\n<Label (tap)=\"callNumber()\"  text=\"{{Details.contacts[0].phone}}\" phone=\"{{Details.contacts[0].phone}}\" fontAttributes=\"Bold\"  class=\"title\" name=\"currentPhone\" ngDefaultControl></Label>\r\n\r\n<Label text=\"        {{Details.contacts[0].phone_home}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n<label>\r\n    <FormattedString>\r\n      <Span text=\"       Email:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<Label text=\"        {{Details.contacts[0].email}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>      \r\n<label class=\"far my-label border\">\r\n    <FormattedString>\r\n      <Span text=\"       Other Contacts:\"  class=\"warning\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<StackLayout *ngFor=\"let contact of Details.contacts | slice:1\">\r\n    <label>\r\n        <FormattedString>\r\n          <Span text=\"         {{contact.name}}\" foregroundColor=\"#3C5AFD\" class=\"title border2\"></Span>\r\n          <Span text=\"         {{contact.phone}}\" foregroundColor=\"#3C5AFD\" class=\"title border2\"></Span>\r\n        </FormattedString>\r\n    </label> \r\n</StackLayout>\r\n</StackLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2SUFBNkksZUFBZSx1V0FBdVcsY0FBYyxtV0FBbVcsMEJBQTBCLHFLQUFxSywwQkFBMEIsa1dBQWtXLGlCQUFpQix5VEFBeVQsMkJBQTJCLGFBQWEsMkJBQTJCLDJIQUEySCxnQ0FBZ0MsOFBBQThQLDJCQUEyQixzWUFBc1ksY0FBYyxvR0FBb0csZUFBZSxrSiIsImZpbGUiOiJidW5kbGUuMjE1ZjBkOWJhNzYzYzZiNDBhODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJCdWlsZGluZ1xcXCI+PC9BY3Rpb25CYXI+XFxyXFxuPFN0YWNrTGF5b3V0ID5cXHJcXG48U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcbjxJbWFnZSBzcmM9XFxcInt7RGV0YWlscy5pbWFnZX19XFxcIiB3aWR0aD1cXFwiMzAwXFxcIiBoZWlnaHQ9XFxcIjI1MFxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXHJcXG48U3RhY2tMYXlvdXQgcGFkZGluZ1RvcD1cXFwiMjBcXFwiPlxcclxcbiAgPCEtLU5BTUUtLT5cXHJcXG4gICAgPGxhYmVsIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImxlZnRcXFwiPlxcclxcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiICAgIE5hbWU6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIiA+PC9TcGFuPlxcclxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgIDwvbGFiZWw+XFxyXFxuPExhYmVsIHRleHQ9XFxcIiAgICAgIHt7RGV0YWlscy5uYW1lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiPjwvTGFiZWw+XFxyXFxuPCEtLU1BSU4gQ09OVEFDVC0tPlxcclxcbjxsYWJlbCBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiICAgIE1haW4gQ29udGFjdDpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICA8L2xhYmVsPlxcclxcbjwhLS08TGFiZWwgdGV4dD1cXFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7RGV0YWlscy5jb250YWN0c1swXS5uYW1lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlXFxcIj48L0xhYmVsPi0tPlxcclxcbjxsYWJlbD5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZyAqbmdJZj1cXFwiIShEZXRhaWxzLmNvbnRhY3RzLmxlbmd0aCA9PT0gMClcXFwiPlxcclxcbiAgICAgIDxTcGFuIHRleHQ9XFxcIiAgICAgIHt7RGV0YWlscy5jb250YWN0c1swXS5uYW1lfX1cXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuPC9sYWJlbD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuPCEtLUFkRFJFU1MtLT5cXHJcXG48bGFiZWw+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAgIEFkcmVzczpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuPC9sYWJlbD5cXHJcXG48TGFiZWwgdGV4dD1cXFwiICAgICAgICAgIHt7RGV0YWlscy5hZGRyZXNzfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiPjwvTGFiZWw+XFxyXFxuPExhYmVsID5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgIFxcclxcbiAgICAgIDxTcGFuIHRleHQ9XFxcIiAgICAgICBQaG9uZTpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiID48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgXFxyXFxuPC9MYWJlbD5cXHJcXG48IS0tUEhPTkUtLT5cXHJcXG5cXHJcXG48TGFiZWwgKHRhcCk9XFxcImNhbGxOdW1iZXIoKVxcXCIgIHRleHQ9XFxcInt7RGV0YWlscy5jb250YWN0c1swXS5waG9uZX19XFxcIiBwaG9uZT1cXFwie3tEZXRhaWxzLmNvbnRhY3RzWzBdLnBob25lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlXFxcIiBuYW1lPVxcXCJjdXJyZW50UGhvbmVcXFwiIG5nRGVmYXVsdENvbnRyb2w+PC9MYWJlbD5cXHJcXG5cXHJcXG48TGFiZWwgdGV4dD1cXFwiICAgICAgICB7e0RldGFpbHMuY29udGFjdHNbMF0ucGhvbmVfaG9tZX19XFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9MYWJlbD5cXHJcXG48bGFiZWw+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAgIEVtYWlsOlxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwiYmlndGl0bGUgYm9sZFxcXCI+PC9TcGFuPlxcclxcbiAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG48L2xhYmVsPiAgXFxyXFxuPExhYmVsIHRleHQ9XFxcIiAgICAgICAge3tEZXRhaWxzLmNvbnRhY3RzWzBdLmVtYWlsfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlXFxcIj48L0xhYmVsPiAgICAgIFxcclxcbjxsYWJlbCBjbGFzcz1cXFwiZmFyIG15LWxhYmVsIGJvcmRlclxcXCI+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAgIE90aGVyIENvbnRhY3RzOlxcXCIgIGNsYXNzPVxcXCJ3YXJuaW5nXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+ICBcXHJcXG48U3RhY2tMYXlvdXQgKm5nRm9yPVxcXCJsZXQgY29udGFjdCBvZiBEZXRhaWxzLmNvbnRhY3RzIHwgc2xpY2U6MVxcXCI+XFxyXFxuICAgIDxsYWJlbD5cXHJcXG4gICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIiAgICAgICAgIHt7Y29udGFjdC5uYW1lfX1cXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlIGJvcmRlcjJcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAgICAge3tjb250YWN0LnBob25lfX1cXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcInRpdGxlIGJvcmRlcjJcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICA8L2xhYmVsPiBcXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9