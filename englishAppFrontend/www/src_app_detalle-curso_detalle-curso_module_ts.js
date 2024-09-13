"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_detalle-curso_detalle-curso_module_ts"],{

/***/ 1542:
/*!***************************************************************!*\
  !*** ./src/app/detalle-curso/detalle-curso-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetalleCursoPageRoutingModule: () => (/* binding */ DetalleCursoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _detalle_curso_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-curso.page */ 9243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _detalle_curso_page__WEBPACK_IMPORTED_MODULE_0__.DetalleCursoPage
}];
let DetalleCursoPageRoutingModule = /*#__PURE__*/(() => {
  var _DetalleCursoPageRoutingModule;
  class DetalleCursoPageRoutingModule {}
  _DetalleCursoPageRoutingModule = DetalleCursoPageRoutingModule;
  _DetalleCursoPageRoutingModule.ɵfac = function DetalleCursoPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetalleCursoPageRoutingModule)();
  };
  _DetalleCursoPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: _DetalleCursoPageRoutingModule
  });
  _DetalleCursoPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return DetalleCursoPageRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DetalleCursoPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5391:
/*!*******************************************************!*\
  !*** ./src/app/detalle-curso/detalle-curso.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetalleCursoPageModule: () => (/* binding */ DetalleCursoPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _detalle_curso_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle-curso-routing.module */ 1542);
/* harmony import */ var _detalle_curso_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle-curso.page */ 9243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);






let DetalleCursoPageModule = /*#__PURE__*/(() => {
  var _DetalleCursoPageModule;
  class DetalleCursoPageModule {}
  _DetalleCursoPageModule = DetalleCursoPageModule;
  _DetalleCursoPageModule.ɵfac = function DetalleCursoPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetalleCursoPageModule)();
  };
  _DetalleCursoPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: _DetalleCursoPageModule
  });
  _DetalleCursoPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _detalle_curso_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetalleCursoPageRoutingModule]
  });
  return DetalleCursoPageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DetalleCursoPageModule, {
    declarations: [_detalle_curso_page__WEBPACK_IMPORTED_MODULE_1__.DetalleCursoPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _detalle_curso_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetalleCursoPageRoutingModule]
  });
})();

/***/ }),

/***/ 9243:
/*!*****************************************************!*\
  !*** ./src/app/detalle-curso/detalle-curso.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetalleCursoPage: () => (/* binding */ DetalleCursoPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);




function DetalleCursoPage_ion_card_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card")(1, "ion-item")(2, "ion-thumbnail", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label")(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r0.course.name, " Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.course.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.course.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.course.description);
  }
}
let DetalleCursoPage = /*#__PURE__*/(() => {
  var _DetalleCursoPage;
  class DetalleCursoPage {
    constructor(route, router) {
      this.route = route;
      this.router = router;
    }
    ngOnInit() {
      // Parse the course data from the query parameters
      const courseData = this.route.snapshot.queryParamMap.get('course');
      if (courseData) {
        try {
          this.course = JSON.parse(courseData);
        } catch (error) {
          console.error('Failed to parse course data:', error);
          this.course = null;
        }
      }
    }
    goBack() {
      // Navigate back to the previous page
      this.router.navigate(['/courses']);
    }
    goToSettings() {
      // Navigate to the settings page
      this.router.navigate(['/settings']);
    }
    enrollInCourse() {
      // Logic for enrolling in the course
      console.log('Enrolling in course:', this.course);
      // You may navigate to a different page or perform additional actions here
    }
  }
  _DetalleCursoPage = DetalleCursoPage;
  _DetalleCursoPage.ɵfac = function DetalleCursoPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetalleCursoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  _DetalleCursoPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _DetalleCursoPage,
    selectors: [["app-detalle-curso"]],
    decls: 11,
    vars: 2,
    consts: [["slot", "start"], ["defaultHref", "/courses"], ["slot", "end"], [3, "click"], ["name", "settings-outline"], [1, "ion-padding"], [4, "ngIf"], [3, "src", "alt"]],
    template: function DetalleCursoPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-buttons", 2)(7, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalleCursoPage_Template_ion_button_click_7_listener() {
          return ctx.goToSettings();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DetalleCursoPage_ion_card_10_Template, 9, 5, "ion-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course == null ? null : ctx.course.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButton],
    styles: ["\n\n.lessons-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n\n.lesson-card[_ngcontent-%COMP%] {\n  --background: #4e74f9; \n\n  border-radius: 12px;\n  text-align: center;\n}\n\n.lesson-number[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #fff;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGV0YWxsZS1jdXJzby9kZXRhbGxlLWN1cnNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUEsRUFBQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBkZXRhbGxlLWN1cnNvLnBhZ2Uuc2NzcyAqL1xuLmxlc3NvbnMtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMTBweDtcbiAgfVxuICBcbiAgLmxlc3Nvbi1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQ6ICM0ZTc0Zjk7IC8qIEN1c3RvbWl6ZSBjYXJkIGNvbG9ycyBhcyBuZWVkZWQgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmxlc3Nvbi1udW1iZXIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
  return DetalleCursoPage;
})();

/***/ })

}]);
//# sourceMappingURL=src_app_detalle-curso_detalle-curso_module_ts.js.map