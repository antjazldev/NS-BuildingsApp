webpackHotUpdate("bundle",{

/***/ "./details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<Page.actionBar>\r\n<ActionBar title=\"Building\" >\r\n  <NavigationButton android.systemIcon=\"ic_menu_back\" text=\"Back\" (tap)=\"routerExtensions.back()\"></NavigationButton>\r\n</ActionBar></Page.actionBar>\r\n<StackLayout >\r\n<StackLayout orientation=\"horizontal\" paddingTop=\"20\" paddingLeft=\"20\" >\r\n<Image src=\"{{Details.image}}\" width=\"300\" height=\"250\" stretch=\"aspectFill\"></Image>\r\n<StackLayout paddingTop=\"20\">\r\n  <!--NAME-->\r\n    <label horizontalAlignment=\"left\">\r\n        <FormattedString>\r\n          <Span text=\"    Name:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\" ></Span>\r\n        </FormattedString>\r\n    </label>\r\n<Label text=\"      {{Details.name}}\" fontAttributes=\"Bold\"  class=\"title bold\"></Label>\r\n<!--MAIN CONTACT-->\r\n<label horizontalAlignment=\"center\">\r\n        <FormattedString>\r\n          <Span text=\"    Main Contact:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n        </FormattedString>\r\n    </label>\r\n<!--<Label text=\"                            {{Details.contacts[0].name}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>-->\r\n<label horizontalAlignment=\"center\">\r\n    <FormattedString *ngIf=\"!(Details.contacts.length === 0)\">\r\n      <Span text=\"      {{Details.contacts[0].name}}\" foregroundColor=\"#3C5AFD\" class=\"title bold\"></Span>\r\n    </FormattedString>\r\n</label>\r\n</StackLayout>\r\n</StackLayout>\r\n<!--AdDRESS-->\r\n<label>\r\n    <FormattedString>\r\n      <Span text=\"       Adress:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>\r\n<Label text=\"          {{Details.address}}\" fontAttributes=\"Bold\"  class=\"title bold\" horizontalAlignment=\"center\"></Label>\r\n<Label >\r\n    <FormattedString>\r\n     \r\n      <Span text=\"       Phone:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\" ></Span>\r\n    </FormattedString>\r\n     \r\n</Label>\r\n<!--PHONE-->\r\n\r\n<Label (tap)=\"callNumber()\"  text=\"{{Details.contacts[0].phone}}\" fontAttributes=\"Bold\"  class=\"title phone\" name=\"currentPhone\" horizontalAlignment=\"center\"></Label>\r\n<Label (tap)=\"callNumber()\" text=\"{{Details.contacts[0].phone_home}}\" fontAttributes=\"Bold\"  class=\"title phone\" horizontalAlignment=\"center\"></Label>\r\n<!--EMAIL-->\r\n<label>\r\n    <FormattedString>\r\n      <Span text=\"       Email:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<Label text=\"{{Details.contacts[0].email}}\" fontAttributes=\"Bold\"  class=\"title bold\" horizontalAlignment=\"center\"></Label>      \r\n<Label text=\"                      \" fontAttributes=\"Bold\"  class=\"title bold\" horizontalAlignment=\"center\"></Label>  \r\n<label class=\"far my-label border\" horizontalAlignment=\"center\">\r\n    <FormattedString>\r\n      <Span text=\"Other Contacts:\"  class=\"warning\" horizontalAlignment=\"center\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<!--Other Contacts-->\r\n<StackLayout *ngFor=\"let contact of Details.contacts | slice:1\">\r\n    <Label (tap)=\"makeCall(contact.phone)\">\r\n        <FormattedString>\r\n          <Span [text]=\"contact.name\" foregroundColor=\"#3C5AFD\" class=\"title border2\"></Span>\r\n          <Span text=\"       \" foregroundColor=\"#3C5AFD\" class=\"title border2\"></Span>\r\n          <Span [text]=\"contact.phone\" foregroundColor=\"#3C5AFD\" class=\"title phone\" ></Span>\r\n        </FormattedString>\r\n    </Label> \r\n</StackLayout>\r\n</StackLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0VkFBNFYsZUFBZSx1V0FBdVcsY0FBYyxtV0FBbVcsMEJBQTBCLG9NQUFvTSwwQkFBMEIsa1dBQWtXLGlCQUFpQix3VkFBd1YsMkJBQTJCLDBKQUEwSixnQ0FBZ0MsMlNBQTJTLDJCQUEyQiwwL0IiLCJmaWxlIjoiYnVuZGxlLjI3OGFhMTkzMmJkZDE5YWNlMjc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UuYWN0aW9uQmFyPlxcclxcbjxBY3Rpb25CYXIgdGl0bGU9XFxcIkJ1aWxkaW5nXFxcIiA+XFxyXFxuICA8TmF2aWdhdGlvbkJ1dHRvbiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGV4dD1cXFwiQmFja1xcXCIgKHRhcCk9XFxcInJvdXRlckV4dGVuc2lvbnMuYmFjaygpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuPC9BY3Rpb25CYXI+PC9QYWdlLmFjdGlvbkJhcj5cXHJcXG48U3RhY2tMYXlvdXQgPlxcclxcbjxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgcGFkZGluZ1RvcD1cXFwiMjBcXFwiIHBhZGRpbmdMZWZ0PVxcXCIyMFxcXCIgPlxcclxcbjxJbWFnZSBzcmM9XFxcInt7RGV0YWlscy5pbWFnZX19XFxcIiB3aWR0aD1cXFwiMzAwXFxcIiBoZWlnaHQ9XFxcIjI1MFxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXHJcXG48U3RhY2tMYXlvdXQgcGFkZGluZ1RvcD1cXFwiMjBcXFwiPlxcclxcbiAgPCEtLU5BTUUtLT5cXHJcXG4gICAgPGxhYmVsIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImxlZnRcXFwiPlxcclxcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiICAgIE5hbWU6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIiA+PC9TcGFuPlxcclxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgIDwvbGFiZWw+XFxyXFxuPExhYmVsIHRleHQ9XFxcIiAgICAgIHt7RGV0YWlscy5uYW1lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiPjwvTGFiZWw+XFxyXFxuPCEtLU1BSU4gQ09OVEFDVC0tPlxcclxcbjxsYWJlbCBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiICAgIE1haW4gQ29udGFjdDpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICA8L2xhYmVsPlxcclxcbjwhLS08TGFiZWwgdGV4dD1cXFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7RGV0YWlscy5jb250YWN0c1swXS5uYW1lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlXFxcIj48L0xhYmVsPi0tPlxcclxcbjxsYWJlbCBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICA8Rm9ybWF0dGVkU3RyaW5nICpuZ0lmPVxcXCIhKERldGFpbHMuY29udGFjdHMubGVuZ3RoID09PSAwKVxcXCI+XFxyXFxuICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAge3tEZXRhaWxzLmNvbnRhY3RzWzBdLm5hbWV9fVxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGUgYm9sZFxcXCI+PC9TcGFuPlxcclxcbiAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG48L2xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG48IS0tQWREUkVTUy0tPlxcclxcbjxsYWJlbD5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgQWRyZXNzOlxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwiYmlndGl0bGUgYm9sZFxcXCI+PC9TcGFuPlxcclxcbiAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG48L2xhYmVsPlxcclxcbjxMYWJlbCB0ZXh0PVxcXCIgICAgICAgICAge3tEZXRhaWxzLmFkZHJlc3N9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGUgYm9sZFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0xhYmVsPlxcclxcbjxMYWJlbCA+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICBcXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgUGhvbmU6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIiA+PC9TcGFuPlxcclxcbiAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgIFxcclxcbjwvTGFiZWw+XFxyXFxuPCEtLVBIT05FLS0+XFxyXFxuXFxyXFxuPExhYmVsICh0YXApPVxcXCJjYWxsTnVtYmVyKClcXFwiICB0ZXh0PVxcXCJ7e0RldGFpbHMuY29udGFjdHNbMF0ucGhvbmV9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGUgcGhvbmVcXFwiIG5hbWU9XFxcImN1cnJlbnRQaG9uZVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0xhYmVsPlxcclxcbjxMYWJlbCAodGFwKT1cXFwiY2FsbE51bWJlcigpXFxcIiB0ZXh0PVxcXCJ7e0RldGFpbHMuY29udGFjdHNbMF0ucGhvbmVfaG9tZX19XFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZSBwaG9uZVxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0xhYmVsPlxcclxcbjwhLS1FTUFJTC0tPlxcclxcbjxsYWJlbD5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgRW1haWw6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+ICBcXHJcXG48TGFiZWwgdGV4dD1cXFwie3tEZXRhaWxzLmNvbnRhY3RzWzBdLmVtYWlsfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlIGJvbGRcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9MYWJlbD4gICAgICBcXHJcXG48TGFiZWwgdGV4dD1cXFwiICAgICAgICAgICAgICAgICAgICAgIFxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGUgYm9sZFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0xhYmVsPiAgXFxyXFxuPGxhYmVsIGNsYXNzPVxcXCJmYXIgbXktbGFiZWwgYm9yZGVyXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgIDxTcGFuIHRleHQ9XFxcIk90aGVyIENvbnRhY3RzOlxcXCIgIGNsYXNzPVxcXCJ3YXJuaW5nXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuPC9sYWJlbD4gIFxcclxcbjwhLS1PdGhlciBDb250YWN0cy0tPlxcclxcbjxTdGFja0xheW91dCAqbmdGb3I9XFxcImxldCBjb250YWN0IG9mIERldGFpbHMuY29udGFjdHMgfCBzbGljZToxXFxcIj5cXHJcXG4gICAgPExhYmVsICh0YXApPVxcXCJtYWtlQ2FsbChjb250YWN0LnBob25lKVxcXCI+XFxyXFxuICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICA8U3BhbiBbdGV4dF09XFxcImNvbnRhY3QubmFtZVxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGUgYm9yZGVyMlxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgXFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJ0aXRsZSBib3JkZXIyXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICAgIDxTcGFuIFt0ZXh0XT1cXFwiY29udGFjdC5waG9uZVxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGUgcGhvbmVcXFwiID48L1NwYW4+XFxyXFxuICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgPC9MYWJlbD4gXFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG48L1N0YWNrTGF5b3V0PlwiIl0sInNvdXJjZVJvb3QiOiIifQ==