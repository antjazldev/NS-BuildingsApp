webpackHotUpdate("vendor",{

/***/ "../node_modules/nativescript-phone/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dial", function() { return dial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sms", function() { return sms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestCallPermission", function() { return requestCallPermission; });
// @ts-check
/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />

var frameModule = __webpack_require__("@nativescript/core/ui/frame");
// @ts-ignore
var CustomMFMessageComposeViewControllerDelegate = NSObject.extend(
  {
    initWithResolveReject: function (resolve, reject) {
      var self = this.super.init();
      if (self) {
        this.resolve = resolve;
        this.reject = reject;
      }
      return self;
    },
    messageComposeViewControllerDidFinishWithResult: function (
      controller,
      result
    ) {
      controller.dismissModalViewControllerAnimated(true);

      if (result === MessageComposeResult.Cancelled) {
        this.resolve({
          response: 'cancelled',
        });
      } else if (result === MessageComposeResult.Sent) {
        this.resolve({
          response: 'success',
        });
      } else {
        this.resolve({
          response: 'failed',
        });
      }
      CFRelease(controller.messageComposeDelegate);
    },
  },
  {
    name: 'CustomMFMessageComposeViewControllerDelegate',
    protocols: [MFMessageComposeViewControllerDelegate],
  }
);

function dial(telNum, prompt) {
  var sURL = 'tel://';

  if (prompt) {
    sURL = 'telprompt:';
  }

  var url = NSURL.URLWithString(sURL + telNum);

  if (UIApplication.sharedApplication.canOpenURL(url)) {
    UIApplication.sharedApplication.openURL(url);
    return true;
  } else {
    //alert("Unable to dial");
    return false;
  }
}

function sms(smsNum, messageText) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(smsNum)) {
      smsNum = [smsNum];
    }

    var page = frameModule.topmost().ios.controller;
    var controller = MFMessageComposeViewController.alloc().init();
    var delegate = CustomMFMessageComposeViewControllerDelegate.alloc().initWithResolveReject(
      resolve,
      reject
    );

    CFRetain(delegate);
    controller.messageComposeDelegate = delegate;

    if (MFMessageComposeViewController.canSendText()) {
      controller.body = messageText;
      controller.recipients = smsNum;
      page.presentModalViewControllerAnimated(controller, true);
    } else {
      reject('Cannot Send SMS!');
    }
  });
}

function requestCallPermission(explanation) {
  return new Promise(function (resolve) {
    resolve('N/A');
  });
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1waG9uZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsa0JBQWtCLG1CQUFPLENBQUMsNkJBQTZCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoidmVuZG9yLjA2ODkzYWVkN2JjMTkwYjliYzAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtY2hlY2tcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL25vZGVfbW9kdWxlcy90bnMtcGxhdGZvcm0tZGVjbGFyYXRpb25zL2lvcy5kLnRzXCIgLz5cblxudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZSgnQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lJyk7XG4vLyBAdHMtaWdub3JlXG52YXIgQ3VzdG9tTUZNZXNzYWdlQ29tcG9zZVZpZXdDb250cm9sbGVyRGVsZWdhdGUgPSBOU09iamVjdC5leHRlbmQoXG4gIHtcbiAgICBpbml0V2l0aFJlc29sdmVSZWplY3Q6IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcy5zdXBlci5pbml0KCk7XG4gICAgICBpZiAoc2VsZikge1xuICAgICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG4gICAgbWVzc2FnZUNvbXBvc2VWaWV3Q29udHJvbGxlckRpZEZpbmlzaFdpdGhSZXN1bHQ6IGZ1bmN0aW9uIChcbiAgICAgIGNvbnRyb2xsZXIsXG4gICAgICByZXN1bHRcbiAgICApIHtcbiAgICAgIGNvbnRyb2xsZXIuZGlzbWlzc01vZGFsVmlld0NvbnRyb2xsZXJBbmltYXRlZCh0cnVlKTtcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gTWVzc2FnZUNvbXBvc2VSZXN1bHQuQ2FuY2VsbGVkKSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZSh7XG4gICAgICAgICAgcmVzcG9uc2U6ICdjYW5jZWxsZWQnLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBNZXNzYWdlQ29tcG9zZVJlc3VsdC5TZW50KSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZSh7XG4gICAgICAgICAgcmVzcG9uc2U6ICdzdWNjZXNzJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlc29sdmUoe1xuICAgICAgICAgIHJlc3BvbnNlOiAnZmFpbGVkJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBDRlJlbGVhc2UoY29udHJvbGxlci5tZXNzYWdlQ29tcG9zZURlbGVnYXRlKTtcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0N1c3RvbU1GTWVzc2FnZUNvbXBvc2VWaWV3Q29udHJvbGxlckRlbGVnYXRlJyxcbiAgICBwcm90b2NvbHM6IFtNRk1lc3NhZ2VDb21wb3NlVmlld0NvbnRyb2xsZXJEZWxlZ2F0ZV0sXG4gIH1cbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWFsKHRlbE51bSwgcHJvbXB0KSB7XG4gIHZhciBzVVJMID0gJ3RlbDovLyc7XG5cbiAgaWYgKHByb21wdCkge1xuICAgIHNVUkwgPSAndGVscHJvbXB0Oic7XG4gIH1cblxuICB2YXIgdXJsID0gTlNVUkwuVVJMV2l0aFN0cmluZyhzVVJMICsgdGVsTnVtKTtcblxuICBpZiAoVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbi5jYW5PcGVuVVJMKHVybCkpIHtcbiAgICBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uLm9wZW5VUkwodXJsKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICAvL2FsZXJ0KFwiVW5hYmxlIHRvIGRpYWxcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbXMoc21zTnVtLCBtZXNzYWdlVGV4dCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzbXNOdW0pKSB7XG4gICAgICBzbXNOdW0gPSBbc21zTnVtXTtcbiAgICB9XG5cbiAgICB2YXIgcGFnZSA9IGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5pb3MuY29udHJvbGxlcjtcbiAgICB2YXIgY29udHJvbGxlciA9IE1GTWVzc2FnZUNvbXBvc2VWaWV3Q29udHJvbGxlci5hbGxvYygpLmluaXQoKTtcbiAgICB2YXIgZGVsZWdhdGUgPSBDdXN0b21NRk1lc3NhZ2VDb21wb3NlVmlld0NvbnRyb2xsZXJEZWxlZ2F0ZS5hbGxvYygpLmluaXRXaXRoUmVzb2x2ZVJlamVjdChcbiAgICAgIHJlc29sdmUsXG4gICAgICByZWplY3RcbiAgICApO1xuXG4gICAgQ0ZSZXRhaW4oZGVsZWdhdGUpO1xuICAgIGNvbnRyb2xsZXIubWVzc2FnZUNvbXBvc2VEZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuXG4gICAgaWYgKE1GTWVzc2FnZUNvbXBvc2VWaWV3Q29udHJvbGxlci5jYW5TZW5kVGV4dCgpKSB7XG4gICAgICBjb250cm9sbGVyLmJvZHkgPSBtZXNzYWdlVGV4dDtcbiAgICAgIGNvbnRyb2xsZXIucmVjaXBpZW50cyA9IHNtc051bTtcbiAgICAgIHBhZ2UucHJlc2VudE1vZGFsVmlld0NvbnRyb2xsZXJBbmltYXRlZChjb250cm9sbGVyLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVqZWN0KCdDYW5ub3QgU2VuZCBTTVMhJyk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RDYWxsUGVybWlzc2lvbihleHBsYW5hdGlvbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICByZXNvbHZlKCdOL0EnKTtcbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9