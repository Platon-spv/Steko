(self["webpackChunkdev_online_steko"] = self["webpackChunkdev_online_steko"] || []).push([["bottom-src_js_captcha_js-fbb7c19d"],{

/***/ 470:
/*!***************************!*\
  !*** ./src/js/captcha.js ***!
  \***************************/
/***/ (() => {

// добавляем несколько капч на страницу

const sitekeyMY = "6LckpDIaAAAAAL5j14lze_doqdVRxHOpwl1ZnZpk";

var onloadCallback = function () {
  grecaptcha.render("RecaptchaField1", {
    sitekey: sitekeyMY,
  });
  grecaptcha.render("RecaptchaField2", {
    sitekey: sitekeyMY,
  });
};

window.onloadCallback = onloadCallback;

// const getToken = async () => {
//   let response = null;
//   for (let i = 0; i < 2; i++) {
//     response = grecaptcha.getResponse(i);
//     if (response != 0) break;
//   }
//   return response;
// };

// export async function validCaptcha(reCaptcha = "") {
//   // console.log(reCaptcha);
//   return $.ajax({
//     url: "/controller/CreateLead.php",
//     method: "POST",
//     data: {
//       "g-recaptcha-response": reCaptcha,
//     },
//   });
// }

// // export const validateReCaptcha = async () => {
// //   return getToken().then((token) =>
// //     validCaptcha(token).then().catch("token validation not found")
// //   );
// // };

// export const validateReCaptcha = async () => {
//   return getToken().then((token) =>
//     validCaptcha(token).then().catch("token validation not found")
//   );
// };


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvLy4vc3JjL2pzL2NhcHRjaGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJvdHRvbS1zcmNfanNfY2FwdGNoYV9qcy1mYmI3YzE5ZC5idW5kbGUubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vINC00L7QsdCw0LLQu9GP0LXQvCDQvdC10YHQutC+0LvRjNC60L4g0LrQsNC/0Ycg0L3QsCDRgdGC0YDQsNC90LjRhtGDXHJcblxyXG5jb25zdCBzaXRla2V5TVkgPSBcIjZMY2twRElhQUFBQUFMNWoxNGx6ZV9kb3FkVlJ4SE9wd2wxWm5acGtcIjtcclxuXHJcbnZhciBvbmxvYWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICBncmVjYXB0Y2hhLnJlbmRlcihcIlJlY2FwdGNoYUZpZWxkMVwiLCB7XHJcbiAgICBzaXRla2V5OiBzaXRla2V5TVksXHJcbiAgfSk7XHJcbiAgZ3JlY2FwdGNoYS5yZW5kZXIoXCJSZWNhcHRjaGFGaWVsZDJcIiwge1xyXG4gICAgc2l0ZWtleTogc2l0ZWtleU1ZLFxyXG4gIH0pO1xyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZENhbGxiYWNrID0gb25sb2FkQ2FsbGJhY2s7XHJcblxyXG4vLyBjb25zdCBnZXRUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuLy8gICBsZXQgcmVzcG9uc2UgPSBudWxsO1xyXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbi8vICAgICByZXNwb25zZSA9IGdyZWNhcHRjaGEuZ2V0UmVzcG9uc2UoaSk7XHJcbi8vICAgICBpZiAocmVzcG9uc2UgIT0gMCkgYnJlYWs7XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiByZXNwb25zZTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZENhcHRjaGEocmVDYXB0Y2hhID0gXCJcIikge1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHJlQ2FwdGNoYSk7XHJcbi8vICAgcmV0dXJuICQuYWpheCh7XHJcbi8vICAgICB1cmw6IFwiL2NvbnRyb2xsZXIvQ3JlYXRlTGVhZC5waHBcIixcclxuLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbi8vICAgICBkYXRhOiB7XHJcbi8vICAgICAgIFwiZy1yZWNhcHRjaGEtcmVzcG9uc2VcIjogcmVDYXB0Y2hhLFxyXG4vLyAgICAgfSxcclxuLy8gICB9KTtcclxuLy8gfVxyXG5cclxuLy8gLy8gZXhwb3J0IGNvbnN0IHZhbGlkYXRlUmVDYXB0Y2hhID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAvLyAgIHJldHVybiBnZXRUb2tlbigpLnRoZW4oKHRva2VuKSA9PlxyXG4vLyAvLyAgICAgdmFsaWRDYXB0Y2hhKHRva2VuKS50aGVuKCkuY2F0Y2goXCJ0b2tlbiB2YWxpZGF0aW9uIG5vdCBmb3VuZFwiKVxyXG4vLyAvLyAgICk7XHJcbi8vIC8vIH07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgdmFsaWRhdGVSZUNhcHRjaGEgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgcmV0dXJuIGdldFRva2VuKCkudGhlbigodG9rZW4pID0+XHJcbi8vICAgICB2YWxpZENhcHRjaGEodG9rZW4pLnRoZW4oKS5jYXRjaChcInRva2VuIHZhbGlkYXRpb24gbm90IGZvdW5kXCIpXHJcbi8vICAgKTtcclxuLy8gfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==