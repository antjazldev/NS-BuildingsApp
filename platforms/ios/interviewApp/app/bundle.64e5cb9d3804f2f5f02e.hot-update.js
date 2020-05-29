webpackHotUpdate("bundle",{

/***/ "./details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Building\"></ActionBar>\r\n<StackLayout >\r\n<StackLayout orientation=\"horizontal\">\r\n<Image src=\"{{Details.image}}\" width=\"300\" height=\"250\" stretch=\"aspectFill\"></Image>\r\n<StackLayout paddingTop=\"20\">\r\n    <label horizontalAlignment=\"left\">\r\n        <FormattedString>\r\n          <Span text=\"    Name:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\" ></Span>\r\n        </FormattedString>\r\n    </label>\r\n<Label text=\"         {{Details.name}}\" fontAttributes=\"Bold\"  class=\"title border2\"></Label>\r\n\r\n<label horizontalAlignment=\"center\">\r\n        <FormattedString>\r\n          <Span text=\"    Main Contact:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n        </FormattedString>\r\n    </label>\r\n<!--<Label text=\"                            {{Details.contacts[0].name}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>-->\r\n<label>\r\n    <FormattedString *ngIf=\"!(Details.contacts.length === 0)\">\r\n      <Span text=\"         {{Details.contacts[0].name}}\" foregroundColor=\"#3C5AFD\" class=\"title\"></Span>\r\n    </FormattedString>\r\n</label>\r\n</StackLayout>\r\n</StackLayout>\r\n<label>\r\n    <FormattedString>\r\n      <Span text=\"       Adress:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>\r\n<Label text=\"        {{Details.address}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n<Label >\r\n    <FormattedString>\r\n      <Span text=\"       Phone:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\" ></Span>\r\n    </FormattedString>\r\n</Label>\r\n<GridLayout (tap)=\"callNumber()\" class=\"bg-primary p-15 m-15\" width=\"200\" height=\"50\">\r\n\r\n<Label tap=\"onItemTap\" text=\"    {{Details.contacts[0].phone}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n</GridLayout>\r\n<Label text=\"        {{Details.contacts[0].phone_home}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>\r\n<label>\r\n    <FormattedString>\r\n      <Span text=\"       Email:\" foregroundColor=\"#3C5AFD\" class=\"bigtitle bold\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<Label text=\"        {{Details.contacts[0].email}}\" fontAttributes=\"Bold\"  class=\"title\"></Label>      \r\n<label class=\"far my-label border\">\r\n    <FormattedString>\r\n      <Span text=\"       Other Contacts:\"  class=\"warning\"></Span>\r\n    </FormattedString>\r\n</label>  \r\n<StackLayout *ngFor=\"let contact of Details.contacts | slice:1\">\r\n    <label>\r\n        <FormattedString>\r\n          <Span text=\"         {{contact.name}}\" foregroundColor=\"#3C5AFD\" class=\"title border2\"></Span>\r\n          <Span text=\"         {{contact.phone}}\" foregroundColor=\"#3C5AFD\" class=\"title border2\"></Span>\r\n        </FormattedString>\r\n    </label> \r\n</StackLayout>\r\n</StackLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2SUFBNkksZUFBZSx5VkFBeVYsY0FBYyxtVkFBbVYsMEJBQTBCLHdLQUF3SywwQkFBMEIseVVBQXlVLGlCQUFpQixrWEFBa1gsMkJBQTJCLGlHQUFpRyxnQ0FBZ0MsOFBBQThQLDJCQUEyQixzWUFBc1ksY0FBYyxvR0FBb0csZUFBZSxrSiIsImZpbGUiOiJidW5kbGUuNjRlNWNiOWQzODA0ZjJmNWYwMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIHRpdGxlPVxcXCJCdWlsZGluZ1xcXCI+PC9BY3Rpb25CYXI+XFxyXFxuPFN0YWNrTGF5b3V0ID5cXHJcXG48U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcbjxJbWFnZSBzcmM9XFxcInt7RGV0YWlscy5pbWFnZX19XFxcIiB3aWR0aD1cXFwiMzAwXFxcIiBoZWlnaHQ9XFxcIjI1MFxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9JbWFnZT5cXHJcXG48U3RhY2tMYXlvdXQgcGFkZGluZ1RvcD1cXFwiMjBcXFwiPlxcclxcbiAgICA8bGFiZWwgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCI+XFxyXFxuICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgTmFtZTpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiID48L1NwYW4+XFxyXFxuICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgPC9sYWJlbD5cXHJcXG48TGFiZWwgdGV4dD1cXFwiICAgICAgICAge3tEZXRhaWxzLm5hbWV9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGUgYm9yZGVyMlxcXCI+PC9MYWJlbD5cXHJcXG5cXHJcXG48bGFiZWwgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXHJcXG4gICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIiAgICBNYWluIENvbnRhY3Q6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgPC9sYWJlbD5cXHJcXG48IS0tPExhYmVsIHRleHQ9XFxcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e0RldGFpbHMuY29udGFjdHNbMF0ubmFtZX19XFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9MYWJlbD4tLT5cXHJcXG48bGFiZWw+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmcgKm5nSWY9XFxcIiEoRGV0YWlscy5jb250YWN0cy5sZW5ndGggPT09IDApXFxcIj5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgICB7e0RldGFpbHMuY29udGFjdHNbMF0ubmFtZX19XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9TcGFuPlxcclxcbiAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG48L2xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG48bGFiZWw+XFxyXFxuICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAgIEFkcmVzczpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuPC9sYWJlbD5cXHJcXG48TGFiZWwgdGV4dD1cXFwiICAgICAgICB7e0RldGFpbHMuYWRkcmVzc319XFxcIiBmb250QXR0cmlidXRlcz1cXFwiQm9sZFxcXCIgIGNsYXNzPVxcXCJ0aXRsZVxcXCI+PC9MYWJlbD5cXHJcXG48TGFiZWwgPlxcclxcbiAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgIDxTcGFuIHRleHQ9XFxcIiAgICAgICBQaG9uZTpcXFwiIGZvcmVncm91bmRDb2xvcj1cXFwiIzNDNUFGRFxcXCIgY2xhc3M9XFxcImJpZ3RpdGxlIGJvbGRcXFwiID48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvTGFiZWw+XFxyXFxuPEdyaWRMYXlvdXQgKHRhcCk9XFxcImNhbGxOdW1iZXIoKVxcXCIgY2xhc3M9XFxcImJnLXByaW1hcnkgcC0xNSBtLTE1XFxcIiB3aWR0aD1cXFwiMjAwXFxcIiBoZWlnaHQ9XFxcIjUwXFxcIj5cXHJcXG5cXHJcXG48TGFiZWwgdGFwPVxcXCJvbkl0ZW1UYXBcXFwiIHRleHQ9XFxcIiAgICB7e0RldGFpbHMuY29udGFjdHNbMF0ucGhvbmV9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+XFxyXFxuPC9HcmlkTGF5b3V0PlxcclxcbjxMYWJlbCB0ZXh0PVxcXCIgICAgICAgIHt7RGV0YWlscy5jb250YWN0c1swXS5waG9uZV9ob21lfX1cXFwiIGZvbnRBdHRyaWJ1dGVzPVxcXCJCb2xkXFxcIiAgY2xhc3M9XFxcInRpdGxlXFxcIj48L0xhYmVsPlxcclxcbjxsYWJlbD5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgRW1haWw6XFxcIiBmb3JlZ3JvdW5kQ29sb3I9XFxcIiMzQzVBRkRcXFwiIGNsYXNzPVxcXCJiaWd0aXRsZSBib2xkXFxcIj48L1NwYW4+XFxyXFxuICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbjwvbGFiZWw+ICBcXHJcXG48TGFiZWwgdGV4dD1cXFwiICAgICAgICB7e0RldGFpbHMuY29udGFjdHNbMF0uZW1haWx9fVxcXCIgZm9udEF0dHJpYnV0ZXM9XFxcIkJvbGRcXFwiICBjbGFzcz1cXFwidGl0bGVcXFwiPjwvTGFiZWw+ICAgICAgXFxyXFxuPGxhYmVsIGNsYXNzPVxcXCJmYXIgbXktbGFiZWwgYm9yZGVyXFxcIj5cXHJcXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgT3RoZXIgQ29udGFjdHM6XFxcIiAgY2xhc3M9XFxcIndhcm5pbmdcXFwiPjwvU3Bhbj5cXHJcXG4gICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuPC9sYWJlbD4gIFxcclxcbjxTdGFja0xheW91dCAqbmdGb3I9XFxcImxldCBjb250YWN0IG9mIERldGFpbHMuY29udGFjdHMgfCBzbGljZToxXFxcIj5cXHJcXG4gICAgPGxhYmVsPlxcclxcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgPFNwYW4gdGV4dD1cXFwiICAgICAgICAge3tjb250YWN0Lm5hbWV9fVxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGUgYm9yZGVyMlxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCIgICAgICAgICB7e2NvbnRhY3QucGhvbmV9fVxcXCIgZm9yZWdyb3VuZENvbG9yPVxcXCIjM0M1QUZEXFxcIiBjbGFzcz1cXFwidGl0bGUgYm9yZGVyMlxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgIDwvbGFiZWw+IFxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuPC9TdGFja0xheW91dD5cIiJdLCJzb3VyY2VSb290IjoiIn0=