/*!
 * 
 * availity-uikit v3.0.0-beta.13 (07/27/2017)
 * (c) Availity, LLC
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("availity-uikit", [], factory);
	else if(typeof exports === 'object')
		exports["availity-uikit"] = factory();
	else
		root["availity-uikit"] = factory();
})(this, function() {
return webpackJsonpavaility_uikit([1],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_holderjs__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_holderjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_holderjs__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_docs_scss__ = __webpack_require__(6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_docs_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_docs_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animate_css_animate_css__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animate_css_animate_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_animate_css_animate_css__);\n\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-toggle=\"popover\"]').popover({\n  html: true\n});\n\n__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-toggle=\"tooltip\"]').tooltip();\n\n__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.docs-example').each(function () {\n\n  const btn = `\n    <hr class=\"divider-lg\"/>\n    <div class=\"btn-toolbar\">\n      <button class=\"btn btn-ghost btn-sm\" role=\"button\" data-toggle=\"code\">\n        View Code <i class=\"icon icon-code\"></i>\n      </button>\n    </div>`;\n\n  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).append(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(btn));\n});\n\n__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-toggle=\"code\"]').click(function (e) {\n\n  e.preventDefault();\n\n  const target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).parents('.docs-example').next('.language-markup');\n\n  if (target.is(':visible')) {\n    target.velocity('slideUp', { duration: 200 });\n  } else {\n    target.velocity('fadeIn', {\n      duration: 300,\n      display: 'block'\n    });\n  }\n});\n\n// filter popover\n__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-toggle=\"filter\"]').popover({\n  html: true,\n  placement: __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('data-placement'),\n  trigger: 'click',\n  content() {\n    const target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).attr('data-target');\n    const $target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(target);\n    return $target.html();\n  }\n});\n\n__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.dropdown-menu a[data-toggle=\"tab\"]').click(function (e) {\n  e.stopPropagation();\n  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).tab('show');\n});\n\n// DO NOT USE THIS IN PRODUCTION. DEMO PURPOSES ONLY.\nsetInterval(() => {\n  const indicators = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.loading-indicator');\n  for (let i = 0; i < indicators.length; i++) {\n    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(indicators[i]).find('.loading-bullet').velocity('transition.slideRightIn', { stagger: 250 }).delay(750).velocity({ opacity: 0 }, 500);\n  }\n}, 2000);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZG9jcy9qcy9pbmRleC5qcz85ZTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ2hvbGRlcmpzJztcblxuaW1wb3J0ICcuLi9zY3NzL2RvY3Muc2Nzcyc7XG5pbXBvcnQgJ2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzJztcblxuJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoe1xuICBodG1sOiB0cnVlXG59KTtcblxuJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcblxuJCgnLmRvY3MtZXhhbXBsZScpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgYnRuID0gYFxuICAgIDxociBjbGFzcz1cImRpdmlkZXItbGdcIi8+XG4gICAgPGRpdiBjbGFzcz1cImJ0bi10b29sYmFyXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1naG9zdCBidG4tc21cIiByb2xlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2RlXCI+XG4gICAgICAgIFZpZXcgQ29kZSA8aSBjbGFzcz1cImljb24gaWNvbi1jb2RlXCI+PC9pPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+YDtcblxuICAkKHRoaXMpLmFwcGVuZCgkKGJ0bikpO1xuXG59KTtcblxuJCgnW2RhdGEtdG9nZ2xlPVwiY29kZVwiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgdGFyZ2V0ID0gJCh0aGlzKS5wYXJlbnRzKCcuZG9jcy1leGFtcGxlJykubmV4dCgnLmxhbmd1YWdlLW1hcmt1cCcpO1xuXG4gIGlmICh0YXJnZXQuaXMoJzp2aXNpYmxlJykpIHtcbiAgICB0YXJnZXQudmVsb2NpdHkoJ3NsaWRlVXAnLCB7IGR1cmF0aW9uOiAyMDAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LnZlbG9jaXR5KCdmYWRlSW4nLCB7XG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0pO1xuICB9XG5cbn0pO1xuXG4vLyBmaWx0ZXIgcG9wb3ZlclxuJCgnW2RhdGEtdG9nZ2xlPVwiZmlsdGVyXCJdJykucG9wb3Zlcih7XG4gIGh0bWw6IHRydWUsXG4gIHBsYWNlbWVudDogJCh0aGlzKS5hdHRyKCdkYXRhLXBsYWNlbWVudCcpLFxuICB0cmlnZ2VyOiAnY2xpY2snLFxuICBjb250ZW50KCkge1xuICAgIGNvbnN0IHRhcmdldCA9ICQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKTtcbiAgICBjb25zdCAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xuICAgIHJldHVybiAkdGFyZ2V0Lmh0bWwoKTtcbiAgfVxufSk7XG5cbiQoJy5kcm9wZG93bi1tZW51IGFbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICQodGhpcykudGFiKCdzaG93Jyk7XG59KTtcblxuLy8gRE8gTk9UIFVTRSBUSElTIElOIFBST0RVQ1RJT04uIERFTU8gUFVSUE9TRVMgT05MWS5cbnNldEludGVydmFsKCgpID0+IHtcbiAgY29uc3QgaW5kaWNhdG9ycyA9ICQoJy5sb2FkaW5nLWluZGljYXRvcicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAkKGluZGljYXRvcnNbaV0pLmZpbmQoJy5sb2FkaW5nLWJ1bGxldCcpXG4gICAgICAudmVsb2NpdHkoJ3RyYW5zaXRpb24uc2xpZGVSaWdodEluJywgeyBzdGFnZ2VyOiAyNTAgfSlcbiAgICAgIC5kZWxheSg3NTApXG4gICAgICAudmVsb2NpdHkoeyBvcGFjaXR5OiAwIH0sIDUwMCk7XG4gIH1cbn0sIDIwMDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRvY3MvanMvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3M/MjQ0NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbmltYXRlLmNzcy9hbmltYXRlLmNzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RvY3Mvc2Nzcy9kb2NzLnNjc3M/OTUxYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZG9jcy9zY3NzL2RvY3Muc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

},[11]);
});