"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 1122:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageRoutingModule: () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 9444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
let LoginPageRoutingModule = /*#__PURE__*/(() => {
  var _LoginPageRoutingModule;
  class LoginPageRoutingModule {}
  _LoginPageRoutingModule = LoginPageRoutingModule;
  _LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginPageRoutingModule)();
  };
  _LoginPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: _LoginPageRoutingModule
  });
  _LoginPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return LoginPageRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1307:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageModule: () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 1122);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 9444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);






let LoginPageModule = /*#__PURE__*/(() => {
  var _LoginPageModule;
  class LoginPageModule {}
  _LoginPageModule = LoginPageModule;
  _LoginPageModule.ɵfac = function LoginPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginPageModule)();
  };
  _LoginPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: _LoginPageModule
  });
  _LoginPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule]
  });
  return LoginPageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginPageModule, {
    declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule]
  });
})();

/***/ }),

/***/ 9444:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ 2630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);






function LoginPage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
let LoginPage = /*#__PURE__*/(() => {
  var _LoginPage;
  class LoginPage {
    constructor(router) {
      this.router = router;
      this.email = ''; // To store the user's email input
      this.password = ''; // To store the user's password input
      this.errorMessage = null; // To store error messages
    }
    // Method to handle user login
    login() {
      const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();
      (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailAndPassword)(auth, this.email, this.password).then(userCredential => {
        // Successful login
        console.log('User logged in:', userCredential.user);
        this.router.navigate(['/home']); // Redirect to home page after successful login
        this.errorMessage = null; // Clear any previous error message
      }).catch(error => {
        console.error('Login error:', error);
        this.errorMessage = 'Failed to login. Please check your credentials.'; // Display error message
      });
    }
    // Method for handling forgot password action
    forgotPassword() {
      // Add logic to handle forgot password, e.g., navigate to a forgot password page
      console.log('Forgot password clicked');
      // Example: this.router.navigate(['/forgot-password']);
    }
    // Method to navigate to the register page
    navigateToRegister() {
      this.router.navigate(['/register']); // Navigate to the registration page
    }
  }
  _LoginPage = LoginPage;
  _LoginPage.ɵfac = function LoginPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  _LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _LoginPage,
    selectors: [["app-login"]],
    decls: 28,
    vars: 5,
    consts: [[3, "translucent"], [1, "login-content", 3, "fullscreen"], [1, "background-pattern"], ["src", "assets/images/fondo.png", "alt", "Background Pattern", 1, "background-fill"], ["src", "assets/images/logo2.png", "alt", "App Logo", 1, "app-logo"], [1, "login-card"], ["lines", "none", 1, "input-item"], ["position", "stacked"], ["type", "text", "placeholder", "Nombre de Usuario", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022", 3, "ngModelChange", "ngModel"], ["shape", "round", "expand", "block", 1, "login-button", 3, "click"], ["color", "medium", 1, "forgot-password", 3, "click"], ["color", "medium", 1, "register-link", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
    template: function LoginPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "English Tea");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content", 1)(5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 3)(7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "ENGLISH TEA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Identif\u00EDcate para continuar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 6)(14, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "USUARIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item", 6)(18, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "CONTRASE\u00D1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_21_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-text", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPage_Template_ion_text_click_23_listener() {
          return ctx.forgotPassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " \u00BFOlvidaste tu contrase\u00F1a? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-text", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPage_Template_ion_text_click_25_listener() {
          return ctx.navigateToRegister();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Registrarse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, LoginPage_div_27_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translucent", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor],
    styles: ["\n\n.login-content[_ngcontent-%COMP%] {\n  --background: #e6f0ff; \n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  position: relative; \n\n}\n\n\n\n.background-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 40%; \n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; \n\n}\n\n.background-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover; \n\n  z-index: -1; \n\n}\n\n.app-logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background-color: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1; \n\n}\n\n\n\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 350px;\n  background: #fff;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  margin-top: 150px; \n\n}\n\n.login-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #333;\n  margin-bottom: 10px;\n}\n\n.login-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  margin-bottom: 20px;\n}\n\n\n\n.input-item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.input-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  background-color: #d9d9d9;\n  border-radius: 12px;\n  padding: 10px;\n}\n\n\n\n.login-button[_ngcontent-%COMP%] {\n  --background: #3a4ca8; \n\n  --border-radius: 20px;\n  font-weight: bold;\n}\n\n\n\n.forgot-password[_ngcontent-%COMP%], \n.register-link[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n  font-size: 14px;\n  cursor: pointer;\n  color: #6c757d;\n}\n\n.forgot-password[_ngcontent-%COMP%]:hover, \n.register-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: #e74c3c; \n\n}\n\n\n\n.error-message[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #e74c3c; \n \n\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n  font-size: 14px;\n}\n.error-message[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%] {\n  --background: #e6f0ff; \n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh; \n\n  padding: 20px;\n  position: relative; \n\n}\n.error-message[_ngcontent-%COMP%]   .background-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 40%; \n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; \n\n}\n.error-message[_ngcontent-%COMP%]   .background-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover; \n\n  z-index: -1; \n\n}\n.error-message[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background-color: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1; \n\n}\n.error-message[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 350px;\n  background: #fff;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  margin-top: 20px; \n\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%); \n\n}\n.error-message[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #333;\n  margin-bottom: 10px;\n}\n.error-message[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  margin-bottom: 20px;\n}\n.error-message[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.error-message[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  background-color: #d9d9d9;\n  border-radius: 12px;\n  padding: 10px;\n}\n.error-message[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  --background: #3a4ca8; \n\n  --border-radius: 20px;\n  font-weight: bold;\n}\n.error-message[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%], \n.error-message[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n  font-size: 14px;\n  cursor: pointer;\n  color: #6c757d;\n}\n.error-message[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]:hover, \n.error-message[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: #e74c3c; \n\n}\n.error-message[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #e74c3c; \n\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFBO0FBQ0E7RUFDSSxxQkFBQSxFQUFBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQSxFQUFBLGtEQUFBO0FBQ0o7O0FBRUUsaUNBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQSxFQUFBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQSxFQUFBLHNCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQSxFQUFBLHVDQUFBO0VBQ0EsV0FBQSxFQUFBLG9CQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLFVBQUEsRUFBQSwrQkFBQTtBQUNKOztBQUVFLHVCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQSxFQUFBLDhCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRSxpQkFBQTtBQUNBO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUUsaUJBQUE7QUFDQTtFQUNFLHFCQUFBLEVBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUUsdUNBQUE7QUFDQTs7RUFFRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTs7RUFFRSwwQkFBQTtFQUNBLGNBQUEsRUFBQSxxQkFBQTtBQUNKOztBQUVFLDBCQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGNBQUEsRUFBQSx5QkFBQSxFQUFBLG1DQUFBO0VBWUosaUNBQUE7RUFnQ0EsdUJBQUE7RUE0QkEsaUJBQUE7RUFXQSxpQkFBQTtFQU9BLHVDQUFBO0VBZ0JBLDBCQUFBO0VBT0ksZUFBQTtBQXpHSjtBQVBBO0VBQ0UscUJBQUEsRUFBQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBLEVBQUEscUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUEsRUFBQSxrREFBQTtBQVNGO0FBTEE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUEsRUFBQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUEsRUFBQSxzQkFBQTtBQU9GO0FBSkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQSxFQUFBLHVDQUFBO0VBQ0EsV0FBQSxFQUFBLG9CQUFBO0FBTUY7QUFIQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQSxFQUFBLCtCQUFBO0FBS0Y7QUFEQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBLEVBQUEscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQSxFQUFBLGdDQUFBO0FBR0Y7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFHQTtFQUNFLG1CQUFBO0FBREY7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRkY7QUFNQTtFQUNFLHFCQUFBLEVBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBSkY7QUFRQTs7RUFFRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFORjtBQVNBOztFQUVFLDBCQUFBO0VBQ0EsY0FBQSxFQUFBLHFCQUFBO0FBUEY7QUFXQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQSxFQUFBLHlCQUFBO0VBQ0EsZUFBQTtBQVRGIiwic291cmNlc0NvbnRlbnQiOlsiLyogRnVsbHNjcmVlbiBjb250ZW50IGFkanVzdG1lbnRzICovXG4ubG9naW4tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTZmMGZmOyAvKiBMaWdodCBibHVlIGJhY2tncm91bmQgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogQWxsb3dzIHBvc2l0aW9uaW5nIGZvciB0aGUgYmFja2dyb3VuZCBwYXR0ZXJuICovXG4gIH1cbiAgXG4gIC8qIEJhY2tncm91bmQgcGF0dGVybiB3aXRoIGxvZ28gKi9cbiAgLmJhY2tncm91bmQtcGF0dGVybiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAlOyAvKiBBZGp1c3QgaGVpZ2h0IHRvIGZpdCBkZXNpZ24gKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogUHJldmVudHMgb3ZlcmZsb3cgKi9cbiAgfVxuICBcbiAgLmJhY2tncm91bmQtZmlsbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjsgLyogQ292ZXJzIHRoZSBhcmVhIHdpdGhvdXQgZGlzdG9ydGlvbiAqL1xuICAgIHotaW5kZXg6IC0xOyAvKiBCZWhpbmQgdGhlIGxvZ28gKi9cbiAgfVxuICBcbiAgLmFwcC1sb2dvIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgei1pbmRleDogMTsgLyogSW4gZnJvbnQgb2YgdGhlIGJhY2tncm91bmQgKi9cbiAgfVxuICBcbiAgLyogTG9naW4gY2FyZCBzZWN0aW9uICovXG4gIC5sb2dpbi1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNTBweDsgLyogQWRqdXN0IHRvIGNlbnRlciB0aGUgY2FyZCAqL1xuICB9XG4gIFxuICAubG9naW4tY2FyZCBoMSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5sb2dpbi1jYXJkIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAvKiBJbnB1dCBmaWVsZHMgKi9cbiAgLmlucHV0LWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgXG4gIC5pbnB1dC1pdGVtIGlvbi1pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgXG4gIC8qIExvZ2luIGJ1dHRvbiAqL1xuICAubG9naW4tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMzYTRjYTg7IC8qIFByaW1hcnkgYmx1ZSBjb2xvciAqL1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLyogRm9yZ290IHBhc3N3b3JkIGFuZCByZWdpc3RlciBsaW5rcyAqL1xuICAuZm9yZ290LXBhc3N3b3JkLFxuICAucmVnaXN0ZXItbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICB9XG4gIFxuICAuZm9yZ290LXBhc3N3b3JkOmhvdmVyLFxuICAucmVnaXN0ZXItbGluazpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICNlNzRjM2M7IC8qIEFjY2VudCByZWQgY29sb3IgKi9cbiAgfVxuICBcbiAgLyogRXJyb3IgbWVzc2FnZSBzdHlsaW5nICovXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiAjZTc0YzNjOyAvKiBSZWQgY29sb3IgZm9yIGVycm9ycyAqLy8qIEZ1bGxzY3JlZW4gY29udGVudCBhZGp1c3RtZW50cyAqL1xuLmxvZ2luLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlNmYwZmY7IC8qIExpZ2h0IGJsdWUgYmFja2dyb3VuZCAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDsgLyogRnVsbCBoZWlnaHQgdG8gY2VudGVyIHZlcnRpY2FsbHkgKi9cbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBbGxvd3MgcG9zaXRpb25pbmcgZm9yIHRoZSBiYWNrZ3JvdW5kIHBhdHRlcm4gKi9cbn1cblxuLyogQmFja2dyb3VuZCBwYXR0ZXJuIHdpdGggbG9nbyAqL1xuLmJhY2tncm91bmQtcGF0dGVybiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MCU7IC8qIEFkanVzdCBoZWlnaHQgdG8gZml0IGRlc2lnbiAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogUHJldmVudHMgb3ZlcmZsb3cgKi9cbn1cblxuLmJhY2tncm91bmQtZmlsbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjsgLyogQ292ZXJzIHRoZSBhcmVhIHdpdGhvdXQgZGlzdG9ydGlvbiAqL1xuICB6LWluZGV4OiAtMTsgLyogQmVoaW5kIHRoZSBsb2dvICovXG59XG5cbi5hcHAtbG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHotaW5kZXg6IDE7IC8qIEluIGZyb250IG9mIHRoZSBiYWNrZ3JvdW5kICovXG59XG5cbi8qIExvZ2luIGNhcmQgc2VjdGlvbiAqL1xuLmxvZ2luLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDsgLyogQWRkcyBzcGFjZSBiZXR3ZWVuIGxvZ28gYW5kIGNhcmQgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAvKiBDZW50ZXJzIHRoZSBjYXJkIHZlcnRpY2FsbHkgKi9cbn1cblxuLmxvZ2luLWNhcmQgaDEge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmxvZ2luLWNhcmQgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi8qIElucHV0IGZpZWxkcyAqL1xuLmlucHV0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaW5wdXQtaXRlbSBpb24taW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiBMb2dpbiBidXR0b24gKi9cbi5sb2dpbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMzYTRjYTg7IC8qIFByaW1hcnkgYmx1ZSBjb2xvciAqL1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKiBGb3Jnb3QgcGFzc3dvcmQgYW5kIHJlZ2lzdGVyIGxpbmtzICovXG4uZm9yZ290LXBhc3N3b3JkLFxuLnJlZ2lzdGVyLWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4uZm9yZ290LXBhc3N3b3JkOmhvdmVyLFxuLnJlZ2lzdGVyLWxpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICNlNzRjM2M7IC8qIEFjY2VudCByZWQgY29sb3IgKi9cbn1cblxuLyogRXJyb3IgbWVzc2FnZSBzdHlsaW5nICovXG4uZXJyb3ItbWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjZTc0YzNjOyAvKiBSZWQgY29sb3IgZm9yIGVycm9ycyAqL1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
  return LoginPage;
})();

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map