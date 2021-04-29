/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 882:
/*!*********************************!*\
  !*** ./src/js/bottomInclude.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 755);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bootstrap_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap.min.js */ 932);



jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
    url: "https://b2c.steko.com.ua/api/getregions",
    type: "GET",
    crossDomain: true,
    dataType: "json",
    success: function (data) {
      var cur_ques_details = data;

      cur_ques_details.sort((a, b) => a.name.localeCompare(b.name));
      cur_ques_details.unshift(...cur_ques_details.splice(6, 1));

      var array = jquery__WEBPACK_IMPORTED_MODULE_0___default().map(cur_ques_details, function (value, index) {
        return (
          "<option value=" + value["id"] + ">" + value["name"] + "</option>"
        );
      });

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("form")
        .find("[name=region_id]")
        .html("<option value='not_set' id='not_set'>Город</option>" + array);
    },
  });
});

(function (a, s, y, n, c, h, i, d, e) {
  s.className += " " + y;
  h.start = 1 * new Date();
  h.end = i = function () {
    s.className = s.className.replace(RegExp(" ?" + y), "");
  };
  (a[n] = a[n] || []).hide = h;
  setTimeout(function () {
    i();
    h.end = null;
  }, c);
  h.timeout = c;
})(window, document.documentElement, "async-hide", "dataLayer", 4000, {
  "GTM-N9NGKTT": true,
});

//  Google Tag Manager
// (function (w, d, s, l, i) {
//   w[l] = w[l] || [];
//   w[l].push({
//     "gtm.start": new Date().getTime(),
//     event: "gtm.js",
//   });
//   var f = d.getElementsByTagName(s)[0],
//     j = d.createElement(s),
//     dl = l != "dataLayer" ? "&l=" + l : "";
//   j.async = true;
//   j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
//   f.parentNode.insertBefore(j, f);
// })(window, document, "script", "dataLayer", "GTM-N9NGKTT");
//  End Google Tag Manager
//
document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM is Ready!");


  setTimeout(function () {
    setTextOverlay ()
  var loading_el = document.querySelector("#loading");
    loading_el.style.display = "none";
  }, 1000);
});
// window.onload = function () {
//   var loading_el = document.querySelector("#loading");
//   console.log("The DOM is Ready!");
//   setTimeout(function () {
//     loading_el.style.display = "none";
//   }, 1000);
// };
//  Facebook Pixel Code

// !(function (f, b, e, v, n, t, s) {
//   if (f.fbq) return;
//   n = f.fbq = function () {
//     n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
//   };
//   if (!f._fbq) f._fbq = n;
//   n.push = n;
//   n.loaded = !0;
//   n.version = "2.0";
//   n.queue = [];
//   t = b.createElement(e);
//   t.async = !0;
//   t.src = v;
//   s = b.getElementsByTagName(e)[0];
//   s.parentNode.insertBefore(t, s);
// })(
//   window,
//   document,
//   "script",
//   "https://connect.facebook.net/en_US/fbevents.js"
// );
// fbq("init", "345200342575475"); // Insert your pixel ID here.

// if ("serviceWorker" in navigator) {
//   // Регистрация service worker-а, расположенного в корне сайта
//   // с указанием более строгого scope
//   navigator.serviceWorker
//     .register("/sw.js", { scope: "./" })
//     .then(function (registration) {
//       console.log("Service worker зарегистрирован:", registration);
//     })
//     .catch(function (error) {
//       console.log("Ошибка при регистрации service worker-а:", error);
//     });
// } else {
//   console.log("Текущий браузер не поддерживает service worker-ы.");
// }

// ANALYTICS script includes START

// (function (i, s, o, g, r, a, m) {
//   i["GoogleAnalyticsObject"] = r;
//   (i[r] =
//     i[r] ||
//     function () {
//       (i[r].q = i[r].q || []).push(arguments);
//     }),
//     (i[r].l = 1 * new Date());
//   (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
//   a.async = 1;
//   a.src = g;
//   m.parentNode.insertBefore(a, m);
// })(
//   window,
//   document,
//   "script",
//   "https://www.google-analytics.com/analytics.js",
//   "ga"
// );

// ANALYTICS script includes END

//  BEGIN JIVOSITE CODE {literal}
// (function () {
//   var widget_id = "kZlAeLEezc";
//   var d = document;
//   var w = window;

//   function l() {
//     var s = document.createElement("script");
//     s.type = "text/javascript";
//     s.async = true;
//     s.src = "//code.jivosite.com/script/widget/" + widget_id;
//     var ss = document.getElementsByTagName("script")[0];
//     ss.parentNode.insertBefore(s, ss);
//   }

//   if (d.readyState == "complete") {
//     l();
//   } else {
//     if (w.attachEvent) {
//       w.attachEvent("onload", l);
//     } else {
//       w.addEventListener("load", l, false);
//     }
//   }
// })();

//  {/literal} END JIVOSITE CODE

// (function (w, d, u) {
//   var s = d.createElement("script");
//   s.async = true;
//   s.src = u + "?" + ((Date.now() / 60000) | 0);
//   var h = d.getElementsByTagName("script")[0];
//   h.parentNode.insertBefore(s, h);
// })(
//   window,
//   document,
//   "https://cdn.bitrix24.ua/b16908279/crm/tag/call.tracker.js"
// );

const tachIframe = () => {
  let display = document.getElementById("calc");
  console.log(display);
  if (display.style.display === "none") {
    display.style.display = "block";
  } else {
    display.style.display = "none";
  }
};
window.tachIframe = tachIframe;

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#myBtn").click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#myModal").modal();
  });
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"importScript": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			[882,"vendors-node_modules_jquery_dist_jquery_js-11576706","vendors-node_modules_js-cookie_src_js_cookie_js-a78eb07a","chunks"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdev_online_steko"] = self["webpackChunkdev_online_steko"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvLy4vc3JjL2pzL2JvdHRvbUluY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vZGV2LW9ubGluZS1zdGVrby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Rldi1vbmxpbmUtc3Rla28vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rldi1vbmxpbmUtc3Rla28vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGV2LW9ubGluZS1zdGVrby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNLO0FBQ1c7QUFDdkMsNkNBQUM7QUFDRCxFQUFFLGtEQUFNO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLGlEQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsTUFBTSw2Q0FBQztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsS0FBSyxTQUFTOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUFDO0FBQ0QsRUFBRSw2Q0FBQztBQUNILElBQUksNkNBQUM7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7Ozs7OztVQ25NRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQztXQUNBO1dBQ0EsZ0JBQWdCLDJCQUEyQjtXQUMzQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsNENBQTRDO1dBQzVDO1dBQ0EsRTs7OztVQ3BGQTtVQUNBIiwiZmlsZSI6ImltcG9ydFNjcmlwdC5idW5kbGUubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9ib290c3RyYXAubWluLmpzXCI7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdXJsOiBcImh0dHBzOi8vYjJjLnN0ZWtvLmNvbS51YS9hcGkvZ2V0cmVnaW9uc1wiLFxyXG4gICAgdHlwZTogXCJHRVRcIixcclxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxyXG4gICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgdmFyIGN1cl9xdWVzX2RldGFpbHMgPSBkYXRhO1xyXG5cclxuICAgICAgY3VyX3F1ZXNfZGV0YWlscy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcclxuICAgICAgY3VyX3F1ZXNfZGV0YWlscy51bnNoaWZ0KC4uLmN1cl9xdWVzX2RldGFpbHMuc3BsaWNlKDYsIDEpKTtcclxuXHJcbiAgICAgIHZhciBhcnJheSA9ICQubWFwKGN1cl9xdWVzX2RldGFpbHMsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgXCI8b3B0aW9uIHZhbHVlPVwiICsgdmFsdWVbXCJpZFwiXSArIFwiPlwiICsgdmFsdWVbXCJuYW1lXCJdICsgXCI8L29wdGlvbj5cIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJChcImZvcm1cIilcclxuICAgICAgICAuZmluZChcIltuYW1lPXJlZ2lvbl9pZF1cIilcclxuICAgICAgICAuaHRtbChcIjxvcHRpb24gdmFsdWU9J25vdF9zZXQnIGlkPSdub3Rfc2V0Jz7Qk9C+0YDQvtC0PC9vcHRpb24+XCIgKyBhcnJheSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59KTtcclxuXHJcbihmdW5jdGlvbiAoYSwgcywgeSwgbiwgYywgaCwgaSwgZCwgZSkge1xyXG4gIHMuY2xhc3NOYW1lICs9IFwiIFwiICsgeTtcclxuICBoLnN0YXJ0ID0gMSAqIG5ldyBEYXRlKCk7XHJcbiAgaC5lbmQgPSBpID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcy5jbGFzc05hbWUgPSBzLmNsYXNzTmFtZS5yZXBsYWNlKFJlZ0V4cChcIiA/XCIgKyB5KSwgXCJcIik7XHJcbiAgfTtcclxuICAoYVtuXSA9IGFbbl0gfHwgW10pLmhpZGUgPSBoO1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgaSgpO1xyXG4gICAgaC5lbmQgPSBudWxsO1xyXG4gIH0sIGMpO1xyXG4gIGgudGltZW91dCA9IGM7XHJcbn0pKHdpbmRvdywgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBcImFzeW5jLWhpZGVcIiwgXCJkYXRhTGF5ZXJcIiwgNDAwMCwge1xyXG4gIFwiR1RNLU45TkdLVFRcIjogdHJ1ZSxcclxufSk7XHJcblxyXG4vLyAgR29vZ2xlIFRhZyBNYW5hZ2VyXHJcbihmdW5jdGlvbiAodywgZCwgcywgbCwgaSkge1xyXG4gIHdbbF0gPSB3W2xdIHx8IFtdO1xyXG4gIHdbbF0ucHVzaCh7XHJcbiAgICBcImd0bS5zdGFydFwiOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgIGV2ZW50OiBcImd0bS5qc1wiLFxyXG4gIH0pO1xyXG4gIHZhciBmID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXSxcclxuICAgIGogPSBkLmNyZWF0ZUVsZW1lbnQocyksXHJcbiAgICBkbCA9IGwgIT0gXCJkYXRhTGF5ZXJcIiA/IFwiJmw9XCIgKyBsIDogXCJcIjtcclxuICBqLmFzeW5jID0gdHJ1ZTtcclxuICBqLnNyYyA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RtLmpzP2lkPVwiICsgaSArIGRsO1xyXG4gIGYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaiwgZik7XHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIFwic2NyaXB0XCIsIFwiZGF0YUxheWVyXCIsIFwiR1RNLU45TkdLVFRcIik7XHJcbi8vICBFbmQgR29vZ2xlIFRhZyBNYW5hZ2VyXHJcbi8vXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zb2xlLmxvZyhcIlRoZSBET00gaXMgUmVhZHkhXCIpO1xyXG5cclxuICB2YXIgbG9hZGluZ19lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZGluZ1wiKTtcclxuXHJcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICBsb2FkaW5nX2VsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9LCAxMDAwKTtcclxufSk7XHJcbi8vIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbi8vICAgdmFyIGxvYWRpbmdfZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmdcIik7XHJcbi8vICAgY29uc29sZS5sb2coXCJUaGUgRE9NIGlzIFJlYWR5IVwiKTtcclxuLy8gICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIGxvYWRpbmdfZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4vLyAgIH0sIDEwMDApO1xyXG4vLyB9O1xyXG4vLyAgRmFjZWJvb2sgUGl4ZWwgQ29kZVxyXG5cclxuIShmdW5jdGlvbiAoZiwgYiwgZSwgdiwgbiwgdCwgcykge1xyXG4gIGlmIChmLmZicSkgcmV0dXJuO1xyXG4gIG4gPSBmLmZicSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG4uY2FsbE1ldGhvZCA/IG4uY2FsbE1ldGhvZC5hcHBseShuLCBhcmd1bWVudHMpIDogbi5xdWV1ZS5wdXNoKGFyZ3VtZW50cyk7XHJcbiAgfTtcclxuICBpZiAoIWYuX2ZicSkgZi5fZmJxID0gbjtcclxuICBuLnB1c2ggPSBuO1xyXG4gIG4ubG9hZGVkID0gITA7XHJcbiAgbi52ZXJzaW9uID0gXCIyLjBcIjtcclxuICBuLnF1ZXVlID0gW107XHJcbiAgdCA9IGIuY3JlYXRlRWxlbWVudChlKTtcclxuICB0LmFzeW5jID0gITA7XHJcbiAgdC5zcmMgPSB2O1xyXG4gIHMgPSBiLmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpWzBdO1xyXG4gIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCwgcyk7XHJcbn0pKFxyXG4gIHdpbmRvdyxcclxuICBkb2N1bWVudCxcclxuICBcInNjcmlwdFwiLFxyXG4gIFwiaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9mYmV2ZW50cy5qc1wiXHJcbik7XHJcbmZicShcImluaXRcIiwgXCIzNDUyMDAzNDI1NzU0NzVcIik7IC8vIEluc2VydCB5b3VyIHBpeGVsIElEIGhlcmUuXHJcblxyXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XHJcbiAgLy8g0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyBzZXJ2aWNlIHdvcmtlci3QsCwg0YDQsNGB0L/QvtC70L7QttC10L3QvdC+0LPQviDQsiDQutC+0YDQvdC1INGB0LDQudGC0LBcclxuICAvLyDRgSDRg9C60LDQt9Cw0L3QuNC10Lwg0LHQvtC70LXQtSDRgdGC0YDQvtCz0L7Qs9C+IHNjb3BlXHJcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcclxuICAgIC5yZWdpc3RlcihcIi9zdy5qc1wiLCB7IHNjb3BlOiBcIi4vXCIgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIHdvcmtlciDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L06XCIsIHJlZ2lzdHJhdGlvbik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcItCe0YjQuNCx0LrQsCDQv9GA0Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCBzZXJ2aWNlIHdvcmtlci3QsDpcIiwgZXJyb3IpO1xyXG4gICAgfSk7XHJcbn0gZWxzZSB7XHJcbiAgY29uc29sZS5sb2coXCLQotC10LrRg9GJ0LjQuSDQsdGA0LDRg9C30LXRgCDQvdC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgiBzZXJ2aWNlIHdvcmtlci3Riy5cIik7XHJcbn1cclxuXHJcbi8vIEFOQUxZVElDUyBzY3JpcHQgaW5jbHVkZXMgU1RBUlRcclxuXHJcbihmdW5jdGlvbiAoaSwgcywgbywgZywgciwgYSwgbSkge1xyXG4gIGlbXCJHb29nbGVBbmFseXRpY3NPYmplY3RcIl0gPSByO1xyXG4gIChpW3JdID1cclxuICAgIGlbcl0gfHxcclxuICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgKGlbcl0ucSA9IGlbcl0ucSB8fCBbXSkucHVzaChhcmd1bWVudHMpO1xyXG4gICAgfSksXHJcbiAgICAoaVtyXS5sID0gMSAqIG5ldyBEYXRlKCkpO1xyXG4gIChhID0gcy5jcmVhdGVFbGVtZW50KG8pKSwgKG0gPSBzLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdKTtcclxuICBhLmFzeW5jID0gMTtcclxuICBhLnNyYyA9IGc7XHJcbiAgbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBtKTtcclxufSkoXHJcbiAgd2luZG93LFxyXG4gIGRvY3VtZW50LFxyXG4gIFwic2NyaXB0XCIsXHJcbiAgXCJodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanNcIixcclxuICBcImdhXCJcclxuKTtcclxuXHJcbi8vIEFOQUxZVElDUyBzY3JpcHQgaW5jbHVkZXMgRU5EXHJcblxyXG4vLyAgQkVHSU4gSklWT1NJVEUgQ09ERSB7bGl0ZXJhbH1cclxuKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgd2lkZ2V0X2lkID0gXCJrWmxBZUxFZXpjXCI7XHJcbiAgdmFyIGQgPSBkb2N1bWVudDtcclxuICB2YXIgdyA9IHdpbmRvdztcclxuXHJcbiAgZnVuY3Rpb24gbCgpIHtcclxuICAgIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgIHMudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiAgICBzLmFzeW5jID0gdHJ1ZTtcclxuICAgIHMuc3JjID0gXCIvL2NvZGUuaml2b3NpdGUuY29tL3NjcmlwdC93aWRnZXQvXCIgKyB3aWRnZXRfaWQ7XHJcbiAgICB2YXIgc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcclxuICAgIHNzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHMsIHNzKTtcclxuICB9XHJcblxyXG4gIGlmIChkLnJlYWR5U3RhdGUgPT0gXCJjb21wbGV0ZVwiKSB7XHJcbiAgICBsKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh3LmF0dGFjaEV2ZW50KSB7XHJcbiAgICAgIHcuYXR0YWNoRXZlbnQoXCJvbmxvYWRcIiwgbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGwsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn0pKCk7XHJcblxyXG4vLyAgey9saXRlcmFsfSBFTkQgSklWT1NJVEUgQ09ERVxyXG5cclxuKGZ1bmN0aW9uICh3LCBkLCB1KSB7XHJcbiAgdmFyIHMgPSBkLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgcy5hc3luYyA9IHRydWU7XHJcbiAgcy5zcmMgPSB1ICsgXCI/XCIgKyAoKERhdGUubm93KCkgLyA2MDAwMCkgfCAwKTtcclxuICB2YXIgaCA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XHJcbiAgaC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzLCBoKTtcclxufSkoXHJcbiAgd2luZG93LFxyXG4gIGRvY3VtZW50LFxyXG4gIFwiaHR0cHM6Ly9jZG4uYml0cml4MjQudWEvYjE2OTA4Mjc5L2NybS90YWcvY2FsbC50cmFja2VyLmpzXCJcclxuKTtcclxuXHJcbmNvbnN0IHRhY2hJZnJhbWUgPSAoKSA9PiB7XHJcbiAgbGV0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGNcIik7XHJcbiAgY29uc29sZS5sb2coZGlzcGxheSk7XHJcbiAgaWYgKGRpc3BsYXkuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAgIGRpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgZGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG59O1xyXG53aW5kb3cudGFjaElmcmFtZSA9IHRhY2hJZnJhbWU7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgJChcIiNteUJ0blwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI215TW9kYWxcIikubW9kYWwoKTtcclxuICB9KTtcclxufSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG4vLyBJdCdzIGVtcHR5IGFzIHNvbWUgcnVudGltZSBtb2R1bGUgaGFuZGxlcyB0aGUgZGVmYXVsdCBiZWhhdmlvclxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0geCA9PiB7fTtcbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW1wb3J0U2NyaXB0XCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFs4ODIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19qcXVlcnlfZGlzdF9qcXVlcnlfanMtMTE1NzY3MDZcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2pzLWNvb2tpZV9zcmNfanNfY29va2llX2pzLWE3OGViMDdhXCIsXCJjaHVua3NcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSB4ID0+IHt9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZSwgZXhlY3V0ZU1vZHVsZXNdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZGV2X29ubGluZV9zdGVrb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtkZXZfb25saW5lX3N0ZWtvXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTtcblxuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge307XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbnZhciBzdGFydHVwID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSBzdGFydHVwIHx8ICh4ID0+IHt9KTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07IiwiLy8gcnVuIHN0YXJ0dXBcbl9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==