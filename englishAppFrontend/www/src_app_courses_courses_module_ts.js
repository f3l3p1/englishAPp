"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_courses_courses_module_ts"],{

/***/ 5276:
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoursesComponent: () => (/* binding */ CoursesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);




function CoursesComponent_ion_card_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card")(1, "ion-item", 4)(2, "ion-thumbnail", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label")(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-note", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_ion_card_8_Template_ion_button_click_11_listener() {
      const course_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.viewCourse(course_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Ver m\u00E1s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const course_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", course_r2.name, " Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", course_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", course_r2.enrolled, " matriculados");
  }
}
let CoursesComponent = /*#__PURE__*/(() => {
  var _CoursesComponent;
  class CoursesComponent {
    constructor(router) {
      this.router = router;
      this.courses = [{
        name: 'New Comers',
        description: 'Primera etapa donde podrás comenzar mejorando tu vocabulario',
        enrolled: 256,
        image: 'assets/images/newcommers.webp' // Corrected path
      }, {
        name: 'Novices',
        description: 'Segunda etapa que consta de tres pasos...',
        enrolled: 128,
        image: 'assets/images/novices.jpg' // Corrected path
      }, {
        name: 'Transitionals',
        description: 'Tercera etapa llena de conversación...',
        enrolled: 74,
        image: 'assets/images/transitionals.jpg' // Corrected path
      }, {
        name: 'Skilled',
        description: 'Cuarta etapa para especialización...',
        enrolled: 35,
        image: 'assets/images/skilled.webp' // Corrected path
      }];
    }
    ngOnInit() {}
    // Method to handle viewing a course
    viewCourse(course) {
      this.router.navigate(['/current-course'], {
        queryParams: {
          course: JSON.stringify(course)
        }
      });
    }
  }
  _CoursesComponent = CoursesComponent;
  _CoursesComponent.ɵfac = function CoursesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  _CoursesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: _CoursesComponent,
    selectors: [["app-courses"]],
    decls: 9,
    vars: 1,
    consts: [["slot", "start"], ["defaultHref", "/home"], [1, "ion-padding"], [4, "ngFor", "ngForOf"], ["lines", "none"], ["slot", "start", 1, "course-thumbnail"], [3, "src", "alt"], ["slot", "end"], ["expand", "full", "color", "primary", 3, "click"]],
    template: function CoursesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cursos Disponibles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2)(7, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CoursesComponent_ion_card_8_Template, 13, 6, "ion-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButton],
    styles: ["\n\n.ion-padding[_ngcontent-%COMP%] {\n  --background: #e6f0ff; \n\n}\n\n\n\nion-list[_ngcontent-%COMP%] {\n  padding: 16px 0;\n}\n\nion-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px; \n\n  border-radius: 12px; \n\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); \n\n}\n\n\n\nion-item[_ngcontent-%COMP%] {\n  --background: #fff;\n  border-radius: 12px;\n  margin: 0; \n\n  padding: 10px; \n\n  display: flex;\n  flex-direction: row; \n\n  align-items: center; \n\n}\n\n.course-thumbnail[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 12px; \n\n  overflow: hidden; \n\n  margin-right: 10px; \n\n}\n\n.course-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover; \n\n}\n\nion-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; \n\n  padding: 0 10px; \n\n}\n\nion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0 0 5px 0; \n\n  color: #333;\n}\n\nion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  margin: 0;\n}\n\nion-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #333;\n}\n\n\n\nion-button[_ngcontent-%COMP%] {\n  --background: #3a4ca8; \n\n  margin-top: 10px; \n\n  border-radius: 12px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY291cnNlcy9jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUFBO0FBQ0E7RUFDRSxxQkFBQSxFQUFBLDZDQUFBO0FBQ0Y7O0FBRUEsaUNBQUE7QUFDQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBLEVBQUEsd0JBQUE7RUFDQSxtQkFBQSxFQUFBLG1DQUFBO0VBQ0EseUNBQUEsRUFBQSwwQkFBQTtBQUNGOztBQUVBLHdCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQSxFQUFBLDJCQUFBO0VBQ0EsYUFBQSxFQUFBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBLEVBQUEsbURBQUE7RUFDQSxtQkFBQSxFQUFBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBLEVBQUEsK0JBQUE7RUFDQSxnQkFBQSxFQUFBLHVDQUFBO0VBQ0Esa0JBQUEsRUFBQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQSxFQUFBLCtEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQSxFQUFBLDRCQUFBO0VBQ0EsZUFBQSxFQUFBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQSxFQUFBLHNCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBLG9DQUFBO0FBQ0E7RUFDRSxxQkFBQSxFQUFBLG9EQUFBO0VBQ0EsZ0JBQUEsRUFBQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdlbmVyYWwgY29udGVudCBzdHlsaW5nICovXG4uaW9uLXBhZGRpbmcge1xuICAtLWJhY2tncm91bmQ6ICNlNmYwZmY7IC8qIExpZ2h0IGJsdWUgYmFja2dyb3VuZCB0byBtYXRjaCB0aGUgdGhlbWUgKi9cbn1cblxuLyogQ291cnNlIGxpc3QgYW5kIGNhcmQgc3R5bGluZyAqL1xuaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAxNnB4IDA7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogU3BhY2UgYmV0d2VlbiBjYXJkcyAqL1xuICBib3JkZXItcmFkaXVzOiAxMnB4OyAvKiBSb3VuZHMgdGhlIGNvcm5lcnMgb2YgdGhlIGNhcmQgKi9cbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIFNvZnQgc2hhZG93IGZvciBkZXB0aCAqL1xufVxuXG4vKiBDb3Vyc2UgaXRlbSBzdHlsaW5nICovXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luOiAwOyAvKiBSZW1vdmVzIGRlZmF1bHQgbWFyZ2luICovXG4gIHBhZGRpbmc6IDEwcHg7IC8qIEFkZHMgcGFkZGluZyBpbnNpZGUgdGhlIGl0ZW0gKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgLyogRW5zdXJlcyB0aGUgdGh1bWJuYWlsIGFuZCBjb250ZW50IGFyZSBpbiBhIHJvdyAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBBbGlnbnMgY29udGVudCB2ZXJ0aWNhbGx5ICovXG59XG5cbi5jb3Vyc2UtdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciBpbWFnZXMgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogRW5zdXJlcyBubyBvdmVyZmxvdyBmcm9tIHRoZSBpbWFnZSAqL1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIFNwYWNlIGJldHdlZW4gaW1hZ2UgYW5kIHRleHQgKi9cbn1cblxuLmNvdXJzZS10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7IC8qIEVuc3VyZXMgaW1hZ2UgY292ZXJzIHRoZSB0aHVtYm5haWwgYXJlYSB3aXRob3V0IGRpc3RvcnRpb24gKi9cbn1cblxuaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlcnMgdGV4dCB2ZXJ0aWNhbGx5ICovXG4gIHBhZGRpbmc6IDAgMTBweDsgLyogU3BhY2UgYXJvdW5kIHRleHQgY29udGVudCAqL1xufVxuXG5pb24tbGFiZWwgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDAgMCA1cHggMDsgLyogU3BhY2UgYmVsb3cgdGl0bGUgKi9cbiAgY29sb3I6ICMzMzM7XG59XG5cbmlvbi1sYWJlbCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi8qIEJ1dHRvbiBzdHlsaW5nIGZvciB2aWV3aW5nIG1vcmUgKi9cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMzYTRjYTg7IC8qIFByaW1hcnkgYmx1ZSBjb2xvciBtYXRjaGluZyB0aGUgcmVzdCBvZiB0aGUgYXBwICovXG4gIG1hcmdpbi10b3A6IDEwcHg7IC8qIFNwYWNlIGFib3ZlIHRoZSBidXR0b24gKi9cbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
  return CoursesComponent;
})();

/***/ }),

/***/ 3435:
/*!*******************************************!*\
  !*** ./src/app/courses/courses.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoursesModule: () => (/* binding */ CoursesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _courses_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses.component */ 5276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  component: _courses_component__WEBPACK_IMPORTED_MODULE_0__.CoursesComponent
}];
let CoursesModule = /*#__PURE__*/(() => {
  var _CoursesModule;
  class CoursesModule {}
  _CoursesModule = CoursesModule;
  _CoursesModule.ɵfac = function CoursesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoursesModule)();
  };
  _CoursesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: _CoursesModule
  });
  _CoursesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)]
  });
  return CoursesModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoursesModule, {
    declarations: [_courses_component__WEBPACK_IMPORTED_MODULE_0__.CoursesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_courses_courses_module_ts.js.map