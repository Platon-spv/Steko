(self["webpackChunkdev_online_steko"] = self["webpackChunkdev_online_steko"] || []).push([["bottom-src_js_crateLeads_js-0431fd81"],{

/***/ 319:
/*!******************************!*\
  !*** ./src/js/crateLeads.js ***!
  \******************************/
/***/ (() => {

// export const createLeads = (dataInput, is_forms_was_touched, a) => {
//   $.ajax({
//     url: "https://b2c.steko.com.ua/api/takedata",
//     method: "POST",
//     data: dataInput,
//     success: function (data) {
//       parent.$.fancybox.close();
//       is_forms_was_touched = false;
//       _fbq.push("track", "Lead");
//       var timeOne = new Date();
//       var curetime = timeOne.getHours();
//       var cureday = timeOne.getDay();
//       var curemin = timeOne.getMinutes();
//       var day = new Array(7);
//       day[0] = "Восскресенье";
//       day[1] = "Понедельник";
//       day[2] = "Вторник";
//       day[3] = "Среда";
//       day[4] = "Четверг";
//       day[5] = "Пятница";
//       day[6] = "Суббота";
//       curemin = curemin > 9 ? curemin : "0" + curemin;
//       if (day[cureday] == day[0]) {
//         swal(
//           "Спасибо за заявку!",
//           "Извините сегодня у нас выходной день, наши менеджеры свяжуться с вами в " +
//             day[1],
//           "success"
//         );
//       } else if (
//         (day[cureday] == day[6] && curetime <= 9 && curemin <= 59) ||
//         (curetime >= 16 && curemin <= 59 && day[cureday] == day[6])
//       ) {
//         swal(
//           "Спасибо за заявку!",
//           "Извините, наш офис уже не работает. График работы в субботу с 9 до 16:00, наши менеджеры свяжутся с вами в " +
//             day[1],
//           "success"
//         );
//       } else if (
//         ((curetime >= 18 && curemin >= 0) ||
//           (curetime <= 7 && curemin <= 59)) &&
//         day[cureday] != day[6]
//       ) {
//         swal(
//           "Спасибо за заявку!",
//           "К сожалению, сегодня мы уже не работаем! Наш график работы: Пн-Пт с 8:00-18:00, в Сб: с 9:00 до 16:00! Мы свяжемся с вами в рабочее время",
//           "success"
//         );
//       } else {
//         swal(
//           "Спасибо за заявку!",
//           "Наши специалисты свяжутся с Вами в ближайшее время",
//           "success"
//         ),
//           (a.value = ""),
//           (phone.value = "");
//       }
//       jQuery(
//         "#popup_main_form, #zamer_slideform, #first_slide_form, #komplekts_form, #footer_contact_form, #first_mobile_form"
//       )[0].reset();
//     },
//   });
// };


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtb25saW5lLXN0ZWtvLy4vc3JjL2pzL2NyYXRlTGVhZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ04iLCJmaWxlIjoiYm90dG9tLXNyY19qc19jcmF0ZUxlYWRzX2pzLTA0MzFmZDgxLmJ1bmRsZS5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGNvbnN0IGNyZWF0ZUxlYWRzID0gKGRhdGFJbnB1dCwgaXNfZm9ybXNfd2FzX3RvdWNoZWQsIGEpID0+IHtcclxuLy8gICAkLmFqYXgoe1xyXG4vLyAgICAgdXJsOiBcImh0dHBzOi8vYjJjLnN0ZWtvLmNvbS51YS9hcGkvdGFrZWRhdGFcIixcclxuLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbi8vICAgICBkYXRhOiBkYXRhSW5wdXQsXHJcbi8vICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4vLyAgICAgICBwYXJlbnQuJC5mYW5jeWJveC5jbG9zZSgpO1xyXG4vLyAgICAgICBpc19mb3Jtc193YXNfdG91Y2hlZCA9IGZhbHNlO1xyXG4vLyAgICAgICBfZmJxLnB1c2goXCJ0cmFja1wiLCBcIkxlYWRcIik7XHJcbi8vICAgICAgIHZhciB0aW1lT25lID0gbmV3IERhdGUoKTtcclxuLy8gICAgICAgdmFyIGN1cmV0aW1lID0gdGltZU9uZS5nZXRIb3VycygpO1xyXG4vLyAgICAgICB2YXIgY3VyZWRheSA9IHRpbWVPbmUuZ2V0RGF5KCk7XHJcbi8vICAgICAgIHZhciBjdXJlbWluID0gdGltZU9uZS5nZXRNaW51dGVzKCk7XHJcbi8vICAgICAgIHZhciBkYXkgPSBuZXcgQXJyYXkoNyk7XHJcbi8vICAgICAgIGRheVswXSA9IFwi0JLQvtGB0YHQutGA0LXRgdC10L3RjNC1XCI7XHJcbi8vICAgICAgIGRheVsxXSA9IFwi0J/QvtC90LXQtNC10LvRjNC90LjQulwiO1xyXG4vLyAgICAgICBkYXlbMl0gPSBcItCS0YLQvtGA0L3QuNC6XCI7XHJcbi8vICAgICAgIGRheVszXSA9IFwi0KHRgNC10LTQsFwiO1xyXG4vLyAgICAgICBkYXlbNF0gPSBcItCn0LXRgtCy0LXRgNCzXCI7XHJcbi8vICAgICAgIGRheVs1XSA9IFwi0J/Rj9GC0L3QuNGG0LBcIjtcclxuLy8gICAgICAgZGF5WzZdID0gXCLQodGD0LHQsdC+0YLQsFwiO1xyXG4vLyAgICAgICBjdXJlbWluID0gY3VyZW1pbiA+IDkgPyBjdXJlbWluIDogXCIwXCIgKyBjdXJlbWluO1xyXG4vLyAgICAgICBpZiAoZGF5W2N1cmVkYXldID09IGRheVswXSkge1xyXG4vLyAgICAgICAgIHN3YWwoXHJcbi8vICAgICAgICAgICBcItCh0L/QsNGB0LjQsdC+INC30LAg0LfQsNGP0LLQutGDIVwiLFxyXG4vLyAgICAgICAgICAgXCLQmNC30LLQuNC90LjRgtC1INGB0LXQs9C+0LTQvdGPINGDINC90LDRgSDQstGL0YXQvtC00L3QvtC5INC00LXQvdGMLCDQvdCw0YjQuCDQvNC10L3QtdC00LbQtdGA0Ysg0YHQstGP0LbRg9GC0YzRgdGPINGBINCy0LDQvNC4INCyIFwiICtcclxuLy8gICAgICAgICAgICAgZGF5WzFdLFxyXG4vLyAgICAgICAgICAgXCJzdWNjZXNzXCJcclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICB9IGVsc2UgaWYgKFxyXG4vLyAgICAgICAgIChkYXlbY3VyZWRheV0gPT0gZGF5WzZdICYmIGN1cmV0aW1lIDw9IDkgJiYgY3VyZW1pbiA8PSA1OSkgfHxcclxuLy8gICAgICAgICAoY3VyZXRpbWUgPj0gMTYgJiYgY3VyZW1pbiA8PSA1OSAmJiBkYXlbY3VyZWRheV0gPT0gZGF5WzZdKVxyXG4vLyAgICAgICApIHtcclxuLy8gICAgICAgICBzd2FsKFxyXG4vLyAgICAgICAgICAgXCLQodC/0LDRgdC40LHQviDQt9CwINC30LDRj9Cy0LrRgyFcIixcclxuLy8gICAgICAgICAgIFwi0JjQt9Cy0LjQvdC40YLQtSwg0L3QsNGIINC+0YTQuNGBINGD0LbQtSDQvdC1INGA0LDQsdC+0YLQsNC10YIuINCT0YDQsNGE0LjQuiDRgNCw0LHQvtGC0Ysg0LIg0YHRg9Cx0LHQvtGC0YMg0YEgOSDQtNC+IDE2OjAwLCDQvdCw0YjQuCDQvNC10L3QtdC00LbQtdGA0Ysg0YHQstGP0LbRg9GC0YHRjyDRgSDQstCw0LzQuCDQsiBcIiArXHJcbi8vICAgICAgICAgICAgIGRheVsxXSxcclxuLy8gICAgICAgICAgIFwic3VjY2Vzc1wiXHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgICAgfSBlbHNlIGlmIChcclxuLy8gICAgICAgICAoKGN1cmV0aW1lID49IDE4ICYmIGN1cmVtaW4gPj0gMCkgfHxcclxuLy8gICAgICAgICAgIChjdXJldGltZSA8PSA3ICYmIGN1cmVtaW4gPD0gNTkpKSAmJlxyXG4vLyAgICAgICAgIGRheVtjdXJlZGF5XSAhPSBkYXlbNl1cclxuLy8gICAgICAgKSB7XHJcbi8vICAgICAgICAgc3dhbChcclxuLy8gICAgICAgICAgIFwi0KHQv9Cw0YHQuNCx0L4g0LfQsCDQt9Cw0Y/QstC60YMhXCIsXHJcbi8vICAgICAgICAgICBcItCaINGB0L7QttCw0LvQtdC90LjRjiwg0YHQtdCz0L7QtNC90Y8g0LzRiyDRg9C20LUg0L3QtSDRgNCw0LHQvtGC0LDQtdC8ISDQndCw0Ygg0LPRgNCw0YTQuNC6INGA0LDQsdC+0YLRizog0J/QvS3Qn9GCINGBIDg6MDAtMTg6MDAsINCyINCh0LE6INGBIDk6MDAg0LTQviAxNjowMCEg0JzRiyDRgdCy0Y/QttC10LzRgdGPINGBINCy0LDQvNC4INCyINGA0LDQsdC+0YfQtdC1INCy0YDQtdC80Y9cIixcclxuLy8gICAgICAgICAgIFwic3VjY2Vzc1wiXHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBzd2FsKFxyXG4vLyAgICAgICAgICAgXCLQodC/0LDRgdC40LHQviDQt9CwINC30LDRj9Cy0LrRgyFcIixcclxuLy8gICAgICAgICAgIFwi0J3QsNGI0Lgg0YHQv9C10YbQuNCw0LvQuNGB0YLRiyDRgdCy0Y/QttGD0YLRgdGPINGBINCS0LDQvNC4INCyINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPXCIsXHJcbi8vICAgICAgICAgICBcInN1Y2Nlc3NcIlxyXG4vLyAgICAgICAgICksXHJcbi8vICAgICAgICAgICAoYS52YWx1ZSA9IFwiXCIpLFxyXG4vLyAgICAgICAgICAgKHBob25lLnZhbHVlID0gXCJcIik7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgalF1ZXJ5KFxyXG4vLyAgICAgICAgIFwiI3BvcHVwX21haW5fZm9ybSwgI3phbWVyX3NsaWRlZm9ybSwgI2ZpcnN0X3NsaWRlX2Zvcm0sICNrb21wbGVrdHNfZm9ybSwgI2Zvb3Rlcl9jb250YWN0X2Zvcm0sICNmaXJzdF9tb2JpbGVfZm9ybVwiXHJcbi8vICAgICAgIClbMF0ucmVzZXQoKTtcclxuLy8gICAgIH0sXHJcbi8vICAgfSk7XHJcbi8vIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=