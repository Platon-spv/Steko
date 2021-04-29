(self["webpackChunkdev_online_steko"] = self["webpackChunkdev_online_steko"] || []).push([["bottom-src_c"],{

/***/ 904:
/*!**********************************!*\
  !*** ./src/css/allinone.min.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 905:
/*!*************************!*\
  !*** ./src/css/aos.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 806:
/*!*****************************************!*\
  !*** ./src/css/jquery.fancybox.min.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 163:
/*!*****************************************!*\
  !*** ./src/css/jquery.flipster.min.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 644:
/*!********************************!*\
  !*** ./src/css/new-styles.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5:
/*!***************************!*\
  !*** ./src/css/slick.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 768:
/*!********************************!*\
  !*** ./src/css/sweetalert.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 572:
/*!***************************!*\
  !*** ./src/js/Partner.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Partner)
/* harmony export */ });
class Partner {
  constructor(url, cookie) {
    url = url.slice(1, url.length).split("&");
    const life_time = 2592000000;

    const { _ga } = Object.fromEntries(
      document.cookie.split("; ").map((x) => x.split("="))
    );

    const {
      partner_id,
      utm_campaign,
      utm_content,
      utm_medium,
      utm_source,
      utm_term,
    } = Object.fromEntries(url.map((el) => el.split("=")));

    const remember_browser = (exist_id) => {
      if (exist_id) {
        sessionStorage.setItem("partner_id", exist_id);
        sessionStorage.setItem("time_stamp", Date.now());
      } else if (
        Date.now() - sessionStorage.getItem("time_stamp") >=
        life_time
      ) {
        sessionStorage.removeItem("partner_id");
        sessionStorage.removeItem("time_stamp");
      }
    };

    remember_browser(partner_id);

    this.get_cookie = () => ({
      _ga,
    });

    this.get_utm = () => ({
      utm_campaign,
      utm_content,
      utm_medium,
      utm_source,
      utm_term,
    });

    this.get_partner_id = () => ({
      partner_id,
    });

    this.get_all_data = () => {
      const data = {
        utm_campaign,
        utm_content,
        utm_medium,
        utm_source,
        utm_term,
        partner_id: sessionStorage.getItem("partner_id"),
        _ga,
      };
      for (const key in data) {
        !data[key] && delete data[key];
      }
      return data;
    };
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvLy4vc3JjL2Nzcy9hbGxpbm9uZS5taW4uY3NzPzk2M2QiLCJ3ZWJwYWNrOi8vZGV2LW9ubGluZS1zdGVrby8uL3NyYy9jc3MvYW9zLmNzcz8wZjA3Iiwid2VicGFjazovL2Rldi1vbmxpbmUtc3Rla28vLi9zcmMvY3NzL2pxdWVyeS5mYW5jeWJveC5taW4uY3NzP2Y0NmYiLCJ3ZWJwYWNrOi8vZGV2LW9ubGluZS1zdGVrby8uL3NyYy9jc3MvanF1ZXJ5LmZsaXBzdGVyLm1pbi5jc3M/NDFiZSIsIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvLy4vc3JjL2Nzcy9uZXctc3R5bGVzLmNzcz8xZmI1Iiwid2VicGFjazovL2Rldi1vbmxpbmUtc3Rla28vLi9zcmMvY3NzL3NsaWNrLmNzcz8zNzg4Iiwid2VicGFjazovL2Rldi1vbmxpbmUtc3Rla28vLi9zcmMvY3NzL3N3ZWV0YWxlcnQuY3NzPzY1YWIiLCJ3ZWJwYWNrOi8vZGV2LW9ubGluZS1zdGVrby8uL3NyYy9qcy9QYXJ0bmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBLFdBQVcsTUFBTTtBQUNqQiw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJib3R0b20tc3JjX2MuYnVuZGxlLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0bmVyIHtcclxuICBjb25zdHJ1Y3Rvcih1cmwsIGNvb2tpZSkge1xyXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIHVybC5sZW5ndGgpLnNwbGl0KFwiJlwiKTtcclxuICAgIGNvbnN0IGxpZmVfdGltZSA9IDI1OTIwMDAwMDA7XHJcblxyXG4gICAgY29uc3QgeyBfZ2EgfSA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIikubWFwKCh4KSA9PiB4LnNwbGl0KFwiPVwiKSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICBwYXJ0bmVyX2lkLFxyXG4gICAgICB1dG1fY2FtcGFpZ24sXHJcbiAgICAgIHV0bV9jb250ZW50LFxyXG4gICAgICB1dG1fbWVkaXVtLFxyXG4gICAgICB1dG1fc291cmNlLFxyXG4gICAgICB1dG1fdGVybSxcclxuICAgIH0gPSBPYmplY3QuZnJvbUVudHJpZXModXJsLm1hcCgoZWwpID0+IGVsLnNwbGl0KFwiPVwiKSkpO1xyXG5cclxuICAgIGNvbnN0IHJlbWVtYmVyX2Jyb3dzZXIgPSAoZXhpc3RfaWQpID0+IHtcclxuICAgICAgaWYgKGV4aXN0X2lkKSB7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInBhcnRuZXJfaWRcIiwgZXhpc3RfaWQpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ0aW1lX3N0YW1wXCIsIERhdGUubm93KCkpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIERhdGUubm93KCkgLSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidGltZV9zdGFtcFwiKSA+PVxyXG4gICAgICAgIGxpZmVfdGltZVxyXG4gICAgICApIHtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwicGFydG5lcl9pZFwiKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidGltZV9zdGFtcFwiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW1lbWJlcl9icm93c2VyKHBhcnRuZXJfaWQpO1xyXG5cclxuICAgIHRoaXMuZ2V0X2Nvb2tpZSA9ICgpID0+ICh7XHJcbiAgICAgIF9nYSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZ2V0X3V0bSA9ICgpID0+ICh7XHJcbiAgICAgIHV0bV9jYW1wYWlnbixcclxuICAgICAgdXRtX2NvbnRlbnQsXHJcbiAgICAgIHV0bV9tZWRpdW0sXHJcbiAgICAgIHV0bV9zb3VyY2UsXHJcbiAgICAgIHV0bV90ZXJtLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5nZXRfcGFydG5lcl9pZCA9ICgpID0+ICh7XHJcbiAgICAgIHBhcnRuZXJfaWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmdldF9hbGxfZGF0YSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICB1dG1fY2FtcGFpZ24sXHJcbiAgICAgICAgdXRtX2NvbnRlbnQsXHJcbiAgICAgICAgdXRtX21lZGl1bSxcclxuICAgICAgICB1dG1fc291cmNlLFxyXG4gICAgICAgIHV0bV90ZXJtLFxyXG4gICAgICAgIHBhcnRuZXJfaWQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJwYXJ0bmVyX2lkXCIpLFxyXG4gICAgICAgIF9nYSxcclxuICAgICAgfTtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICFkYXRhW2tleV0gJiYgZGVsZXRlIGRhdGFba2V5XTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=