"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_recovery_recovery_module_ts"],{

/***/ 8870:
/*!*****************************************************!*\
  !*** ./src/app/recovery/recovery-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecoveryPageRoutingModule: () => (/* binding */ RecoveryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _recovery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recovery.page */ 6648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _recovery_page__WEBPACK_IMPORTED_MODULE_0__.RecoveryPage
}];
let RecoveryPageRoutingModule = /*#__PURE__*/(() => {
  var _RecoveryPageRoutingModule;
  class RecoveryPageRoutingModule {}
  _RecoveryPageRoutingModule = RecoveryPageRoutingModule;
  _RecoveryPageRoutingModule.ɵfac = function RecoveryPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecoveryPageRoutingModule)();
  };
  _RecoveryPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: _RecoveryPageRoutingModule
  });
  _RecoveryPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return RecoveryPageRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RecoveryPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5887:
/*!*********************************************!*\
  !*** ./src/app/recovery/recovery.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecoveryPageModule: () => (/* binding */ RecoveryPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _recovery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recovery-routing.module */ 8870);
/* harmony import */ var _recovery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recovery.page */ 6648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);






let RecoveryPageModule = /*#__PURE__*/(() => {
  var _RecoveryPageModule;
  class RecoveryPageModule {}
  _RecoveryPageModule = RecoveryPageModule;
  _RecoveryPageModule.ɵfac = function RecoveryPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecoveryPageModule)();
  };
  _RecoveryPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: _RecoveryPageModule
  });
  _RecoveryPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _recovery_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecoveryPageRoutingModule]
  });
  return RecoveryPageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RecoveryPageModule, {
    declarations: [_recovery_page__WEBPACK_IMPORTED_MODULE_1__.RecoveryPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _recovery_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecoveryPageRoutingModule]
  });
})();

/***/ }),

/***/ 6648:
/*!*******************************************!*\
  !*** ./src/app/recovery/recovery.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecoveryPage: () => (/* binding */ RecoveryPage)
/* harmony export */ });
/* harmony import */ var _Users_user_Documents_Workspace_englishApp_englishAppFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 2630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





let RecoveryPage = /*#__PURE__*/(() => {
  var _RecoveryPage;
  class RecoveryPage {
    constructor(navCtrl) {
      this.navCtrl = navCtrl;
      this.email = '';
    }
    sendRecoveryEmail() {
      var _this = this;
      return (0,_Users_user_Documents_Workspace_englishApp_englishAppFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (_this.email) {
          try {
            const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
            yield (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.sendPasswordResetEmail)(auth, _this.email);
            alert('Recovery email sent! Please check your inbox.');
          } catch (error) {
            alert('No account found with that email address.');
            console.error('Error sending recovery email:', error);
          }
        } else {
          alert('Please enter your email address.');
        }
      })();
    }
    navigateBackToLogin() {
      this.navCtrl.navigateBack('/login');
    }
  }
  _RecoveryPage = RecoveryPage;
  _RecoveryPage.ɵfac = function RecoveryPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecoveryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController));
  };
  _RecoveryPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: _RecoveryPage,
    selectors: [["app-recovery"]],
    decls: 20,
    vars: 3,
    consts: [[3, "translucent"], [3, "fullscreen"], [1, "card-container"], ["position", "floating"], ["type", "email", "required", "", 3, "ngModelChange", "ngModel"], ["shape", "round", "color", "secondary", "expand", "full", 3, "click"], [1, "back-to-login"], ["color", "medium", 2, "cursor", "pointer", 3, "click"]],
    template: function RecoveryPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Password Recovery");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content", 1)(5, "div", 2)(6, "ion-card")(7, "ion-card-header")(8, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Recover Your Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-card-content")(11, "ion-item")(12, "ion-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RecoveryPage_Template_ion_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecoveryPage_Template_ion_button_click_15_listener() {
          return ctx.sendRecoveryEmail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Send Recovery Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 6)(18, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecoveryPage_Template_ion_label_click_18_listener() {
          return ctx.navigateBackToLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Back to Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return RecoveryPage;
})();

/***/ })

}]);
//# sourceMappingURL=src_app_recovery_recovery_module_ts.js.map