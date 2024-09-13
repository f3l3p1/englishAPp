"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_current-course_current-course_module_ts"],{

/***/ 6958:
/*!*****************************************************************!*\
  !*** ./src/app/current-course/current-course-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentCoursePageRoutingModule: () => (/* binding */ CurrentCoursePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _current_course_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-course.page */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _current_course_page__WEBPACK_IMPORTED_MODULE_0__.CurrentCoursePage
}];
let CurrentCoursePageRoutingModule = /*#__PURE__*/(() => {
  var _CurrentCoursePageRoutingModule;
  class CurrentCoursePageRoutingModule {}
  _CurrentCoursePageRoutingModule = CurrentCoursePageRoutingModule;
  _CurrentCoursePageRoutingModule.ɵfac = function CurrentCoursePageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CurrentCoursePageRoutingModule)();
  };
  _CurrentCoursePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: _CurrentCoursePageRoutingModule
  });
  _CurrentCoursePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return CurrentCoursePageRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CurrentCoursePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7159:
/*!*********************************************************!*\
  !*** ./src/app/current-course/current-course.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentCoursePageModule: () => (/* binding */ CurrentCoursePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _current_course_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-course-routing.module */ 6958);
/* harmony import */ var _current_course_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-course.page */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);






let CurrentCoursePageModule = /*#__PURE__*/(() => {
  var _CurrentCoursePageModule;
  class CurrentCoursePageModule {}
  _CurrentCoursePageModule = CurrentCoursePageModule;
  _CurrentCoursePageModule.ɵfac = function CurrentCoursePageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CurrentCoursePageModule)();
  };
  _CurrentCoursePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: _CurrentCoursePageModule
  });
  _CurrentCoursePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _current_course_routing_module__WEBPACK_IMPORTED_MODULE_0__.CurrentCoursePageRoutingModule]
  });
  return CurrentCoursePageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CurrentCoursePageModule, {
    declarations: [_current_course_page__WEBPACK_IMPORTED_MODULE_1__.CurrentCoursePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _current_course_routing_module__WEBPACK_IMPORTED_MODULE_0__.CurrentCoursePageRoutingModule]
  });
})();

/***/ }),

/***/ 2816:
/*!*******************************************************!*\
  !*** ./src/app/current-course/current-course.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentCoursePage: () => (/* binding */ CurrentCoursePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);




function CurrentCoursePage_ion_card_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 11)(1, "ion-item", 12)(2, "ion-thumbnail", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label")(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15)(10, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentCoursePage_ion_card_13_Template_ion_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentCoursePage_ion_card_13_Template_ion_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.enrollCourse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Inscribir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r1.course.name, " Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.course.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.course.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.course.description);
  }
}
let CurrentCoursePage = /*#__PURE__*/(() => {
  var _CurrentCoursePage;
  class CurrentCoursePage {
    constructor(route, router) {
      this.route = route;
      this.router = router;
      this.course = null;
    }
    ngOnInit() {
      this.loadCourseData();
    }
    loadCourseData() {
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
      this.router.navigate(['/courses']);
    }
    goToSettings() {
      this.router.navigate(['/settings']);
    }
    enrollCourse() {
      if (this.course) {
        console.log(`Enrolling in course: ${this.course.name}`);
        // Navigate to detalle-curso after enrolling
        this.router.navigate(['/detalle-curso'], {
          queryParams: {
            course: JSON.stringify(this.course)
          }
        });
      }
    }
  }
  _CurrentCoursePage = CurrentCoursePage;
  _CurrentCoursePage.ɵfac = function CurrentCoursePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CurrentCoursePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  _CurrentCoursePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _CurrentCoursePage,
    selectors: [["app-current-course"]],
    decls: 15,
    vars: 3,
    consts: [["slot", "start"], ["defaultHref", "/courses", 3, "click"], ["slot", "end"], [3, "click"], ["name", "settings-outline"], [1, "current-course-content", 3, "fullscreen"], [1, "background-pattern"], ["src", "assets/images/fondo.png", "alt", "Background Pattern", 1, "background-fill"], [1, "course-details"], ["class", "course-card", 4, "ngIf"], ["src", "assets/images/logo2.png", "alt", "App Logo", 1, "app-logo"], [1, "course-card"], ["lines", "none"], [1, "course-thumbnail"], [1, "course-image", 3, "src", "alt"], [1, "button-group"], ["color", "medium", 3, "click"], ["color", "danger", 3, "click"]],
    template: function CurrentCoursePage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0)(3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentCoursePage_Template_ion_back_button_click_3_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-buttons", 2)(7, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentCoursePage_Template_ion_button_click_7_listener() {
          return ctx.goToSettings();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-content", 5)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CurrentCoursePage_ion_card_13_Template, 14, 5, "ion-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course == null ? null : ctx.course.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButton],
    styles: ["\n\n.current-course-content[_ngcontent-%COMP%] {\n  --background: #e6f0ff; \n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  position: relative;\n  overflow: hidden; \n\n  height: 100vh; \n\n}\n\n\n\n.background-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; \n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; \n\n  z-index: -1; \n\n}\n\n.background-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover; \n\n}\n\n\n\n.course-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%; \n\n  max-width: 600px; \n\n  margin-top: 20px; \n\n}\n\n\n\n.course-card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);\n  background-color: white;\n  text-align: center;\n}\n\n\n\n.course-thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 350px;\n  height: auto; \n\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n}\n\n.course-image[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 12px;\n  object-fit: cover;\n}\n\n\n\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin-top: 20px;\n}\n\n.button-group[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  width: 45%; \n\n  font-weight: bold;\n}\n\n\n\n.app-logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  bottom: 20px; \n\n  left: 50%;\n  transform: translateX(-50%); \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3VycmVudC1jb3Vyc2UvY3VycmVudC1jb3Vyc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFBO0FBQ0E7RUFDRSxxQkFBQSxFQUFBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBLEVBQUEsNkJBQUE7RUFDQSxhQUFBLEVBQUEsaURBQUE7QUFDRjs7QUFFQSxrQ0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBLEVBQUEsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBLEVBQUEsc0JBQUE7RUFDQSxXQUFBLEVBQUEsd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBLEVBQUEsdUNBQUE7QUFDRjs7QUFFQSwyQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBLEVBQUEsMkJBQUE7RUFDQSxnQkFBQSxFQUFBLG9CQUFBO0VBQ0EsZ0JBQUEsRUFBQSwyQkFBQTtBQUNGOztBQUVBLHVCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUEsMkJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUEsRUFBQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBLHlCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUEsRUFBQSxxREFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUEsMkJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBLEVBQUEsd0JBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUEsRUFBQSx3QkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogRnVsbHNjcmVlbiBjb250ZW50IGFkanVzdG1lbnRzICovXG4uY3VycmVudC1jb3Vyc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2U2ZjBmZjsgLyogTGlnaHQgYmx1ZSBiYWNrZ3JvdW5kICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBQcmV2ZW50cyBvdmVyZmxvdyBpc3N1ZXMgKi9cbiAgaGVpZ2h0OiAxMDB2aDsgLyogRnVsbCBoZWlnaHQgdG8gYWxsb3cgY29tcGxldGUgbGF5b3V0IGNvbnRyb2wgKi9cbn1cblxuLyogQmFja2dyb3VuZCBwYXR0ZXJuIHdpdGggaW1hZ2UgKi9cbi5iYWNrZ3JvdW5kLXBhdHRlcm4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTsgLyogQ292ZXJzIHRoZSBlbnRpcmUgcGFnZSAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogUHJldmVudHMgb3ZlcmZsb3cgKi9cbiAgei1pbmRleDogLTE7IC8qIFNlbmQgYmVoaW5kIGNvbnRlbnQgKi9cbn1cblxuLmJhY2tncm91bmQtZmlsbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjsgLyogQ292ZXJzIHRoZSBhcmVhIHdpdGhvdXQgZGlzdG9ydGlvbiAqL1xufVxuXG4vKiBDb3Vyc2UgZGV0YWlscyBzZWN0aW9uICovXG4uY291cnNlLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTAlOyAvKiBBZGp1c3Qgd2lkdGggYXMgbmVlZGVkICovXG4gIG1heC13aWR0aDogNjAwcHg7IC8qIExpbWl0IG1heCB3aWR0aCAqL1xuICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBBZGQgc3BhY2UgZnJvbSB0aGUgdG9wICovXG59XG5cbi8qIENvdXJzZSBjYXJkIHN0eWxlcyAqL1xuLmNvdXJzZS1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBDb3Vyc2UgaW1hZ2UgdGh1bWJuYWlsICovXG4uY291cnNlLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWlucyBhc3BlY3QgcmF0aW8gKi9cbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb3Vyc2UtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi8qIEJ1dHRvbiBncm91cCBzdHlsaW5nICovXG4uYnV0dG9uLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYnV0dG9uLWdyb3VwIGlvbi1idXR0b24ge1xuICB3aWR0aDogNDUlOyAvKiBNYWtlIGJ1dHRvbnMgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgZ3JvdXAgKi9cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIEFwcCBsb2dvIGF0IHRoZSBib3R0b20gKi9cbi5hcHAtbG9nbyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4OyAvKiBBZGp1c3QgYXMgbmVjZXNzYXJ5ICovXG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyAvKiBDZW50ZXIgaG9yaXpvbnRhbGx5ICovXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
  return CurrentCoursePage;
})();

/***/ })

}]);
//# sourceMappingURL=src_app_current-course_current-course_module_ts.js.map