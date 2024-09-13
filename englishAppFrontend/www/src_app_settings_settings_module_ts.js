"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 4670:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPageRoutingModule: () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 7984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
}];
let SettingsPageRoutingModule = /*#__PURE__*/(() => {
  var _SettingsPageRoutingModule;
  class SettingsPageRoutingModule {}
  _SettingsPageRoutingModule = SettingsPageRoutingModule;
  _SettingsPageRoutingModule.ɵfac = function SettingsPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsPageRoutingModule)();
  };
  _SettingsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: _SettingsPageRoutingModule
  });
  _SettingsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
  return SettingsPageRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8951:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPageModule: () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 4670);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 7984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);






let SettingsPageModule = /*#__PURE__*/(() => {
  var _SettingsPageModule;
  class SettingsPageModule {}
  _SettingsPageModule = SettingsPageModule;
  _SettingsPageModule.ɵfac = function SettingsPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsPageModule)();
  };
  _SettingsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: _SettingsPageModule
  });
  _SettingsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule]
  });
  return SettingsPageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingsPageModule, {
    declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule]
  });
})();

/***/ }),

/***/ 7984:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPage: () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ 2630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);




let SettingsPage = /*#__PURE__*/(() => {
  var _SettingsPage;
  class SettingsPage {
    constructor() {
      this.user = {}; // Modify this if you have a specific User type
      this.newProfilePicture = null;
    }
    ngOnInit() {
      const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();
      const currentUser = auth.currentUser;
      if (currentUser) {
        this.user = {
          id: currentUser.uid,
          name: currentUser.displayName || 'User',
          email: currentUser.email,
          profilePicture: currentUser.photoURL || ''
        };
      }
    }
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.newProfilePicture = file;
        // Handle the upload of the profile picture
      }
    }
    updateUserInfo() {
      if (!this.user) return;
      const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();
      (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updateProfile)(auth.currentUser, {
        displayName: this.user.name,
        photoURL: this.newProfilePicture ? URL.createObjectURL(this.newProfilePicture) : this.user.profilePicture
      }).then(() => {
        console.log('User profile updated successfully');
        alert('User updated successfully');
      }).catch(error => {
        console.error('Error updating user profile:', error);
        alert('Error updating user');
      });
    }
  }
  _SettingsPage = SettingsPage;
  _SettingsPage.ɵfac = function SettingsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsPage)();
  };
  _SettingsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _SettingsPage,
    selectors: [["app-settings"]],
    decls: 44,
    vars: 6,
    consts: [["fileInput", ""], ["slot", "start"], ["defaultHref", "/home"], ["slot", "end"], [3, "click"], [1, "settings-content"], [1, "profile-section"], ["alt", "Profile Picture", 1, "profile-picture", 3, "src"], ["color", "medium", "expand", "block", 3, "click"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], [3, "ngSubmit"], ["position", "floating"], ["name", "nombre", "required", "", 3, "ngModelChange", "ngModel"], ["name", "nombreUsuario", "required", "", 3, "ngModelChange", "ngModel"], ["name", "correo", "type", "email", "required", "", 3, "ngModelChange", "ngModel"], ["name", "contrasena", "type", "password", 3, "ngModelChange", "ngModel"], ["display-format", "DD/MM/YYYY", "picker-format", "DD/MM/YYYY", "name", "fechaNacimiento", 3, "ngModelChange", "ngModel"], ["expand", "full", "color", "primary", "type", "submit"]],
    template: function SettingsPage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Ajustes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-buttons", 3)(7, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsPage_Template_ion_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.updateUserInfo());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-content", 5)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsPage_Template_ion_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const fileInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](fileInput_r2.click());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Cambiar foto de perfil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 9, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SettingsPage_Template_input_change_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onFileChange($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-card")(17, "ion-card-header")(18, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Actualizar datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-card-content")(21, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SettingsPage_Template_form_ngSubmit_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.updateUserInfo());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-item")(23, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.user.nombre, $event) || (ctx.user.nombre = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-item")(27, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Nombre de Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_input_ngModelChange_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.user.nombreUsuario, $event) || (ctx.user.nombreUsuario = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-item")(31, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_input_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.user.correo, $event) || (ctx.user.correo = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-item")(35, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_input_ngModelChange_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.user.contrasena, $event) || (ctx.user.contrasena = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-item")(39, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Fecha de Nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-datetime", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_datetime_ngModelChange_41_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.user.fechaNacimiento, $event) || (ctx.user.fechaNacimiento = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Actualizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.newProfilePicture ? ctx.newProfilePicture : (ctx.user == null ? null : ctx.user.profilePicture) ? "/uploads/" + (ctx.user == null ? null : ctx.user.profilePicture) : "/assets/images/9187604.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.user.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.user.nombreUsuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.user.correo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.user.contrasena);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.user.fechaNacimiento);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButton],
    styles: [".settings-content[_ngcontent-%COMP%] {\n  --background: #e6f0ff; \n\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 100vh; \n\n  background-image: url(\"/assets/images/fondo.png\"); \n\n  background-size: cover; \n\n  background-position: center;\n}\n\n.profile-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px 0;\n}\n.profile-section[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  margin-bottom: 10px;\n  object-fit: cover;\n  border: 2px solid #fff; \n\n}\n.profile-section[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\nion-card[_ngcontent-%COMP%] {\n  background-color: #ffffff !important; \n\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px; \n\n  padding: 20px;\n  margin-bottom: 20px; \n\n}\n\nion-card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: #333; \n\n  text-align: center;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  margin-bottom: 10px;\n  background: #f0f0f0; \n\n  border-radius: 10px; \n\n  --inner-padding-top: 20px; \n\n  --inner-padding-bottom: 20px; \n\n}\n\nion-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333;\n}\n\nion-input[_ngcontent-%COMP%] {\n  --color: #333; \n\n}\n\nion-input[placeholder][_ngcontent-%COMP%] {\n  opacity: 1; \n\n  color: #999; \n\n}\n\n.date-picker-icon[_ngcontent-%COMP%] {\n  margin-left: 10px; \n\n}\n\nion-button[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\nion-button[color=primary][_ngcontent-%COMP%] {\n  --background: #3a4ca8; \n\n  --border-radius: 12px;\n}\n\nion-button[color=danger][_ngcontent-%COMP%] {\n  --background: #e74c3c; \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUEsRUFBQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUEsRUFBQSx3QkFBQTtFQUNBLGlEQUFBLEVBQUEsNEJBQUE7RUFDQSxzQkFBQSxFQUFBLGdEQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBLEVBQUEsK0NBQUE7QUFDTjtBQUVJO0VBQ0UsZ0JBQUE7QUFBTjs7QUFJRTtFQUNFLG9DQUFBLEVBQUEsd0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBLEVBQUEsOENBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUEsRUFBQSxnQ0FBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQSxFQUFBLHdCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBLEVBQUEscUNBQUE7RUFDQSxtQkFBQSxFQUFBLG9DQUFBO0VBQ0EseUJBQUEsRUFBQSx3Q0FBQTtFQUNBLDRCQUFBLEVBQUEsd0NBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDRSxhQUFBLEVBQUEsZUFBQTtBQURKOztBQUlFO0VBQ0UsVUFBQSxFQUFBLHdDQUFBO0VBQ0EsV0FBQSxFQUFBLCtCQUFBO0FBREo7O0FBSUU7RUFDRSxpQkFBQSxFQUFBLDZDQUFBO0FBREo7O0FBSUU7RUFDRSxnQkFBQTtBQURKOztBQUlFO0VBQ0UscUJBQUEsRUFBQSx1QkFBQTtFQUNBLHFCQUFBO0FBREo7O0FBSUU7RUFDRSxxQkFBQSxFQUFBLHFCQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3MtY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZTZmMGZmOyAvKiBMaWdodCBibHVlIGJhY2tncm91bmQgKi9cbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogRW5zdXJlcyBmdWxsIGhlaWdodCAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvZm9uZG8ucG5nJyk7IC8qIEVuc3VyZSB0aGUgY29ycmVjdCBwYXRoICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogRW5zdXJlcyB0aGUgYmFja2dyb3VuZCBjb3ZlcnMgdGhlIGZ1bGwgYXJlYSAqL1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnByb2ZpbGUtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIFxuICAgIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7IC8qIE9wdGlvbmFsOiBhZGRzIGEgYm9yZGVyIGFyb3VuZCB0aGUgcGljdHVyZSAqL1xuICAgIH1cbiAgXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgLyogU29saWQgd2hpdGUgYmFja2dyb3VuZCBmb3IgdGhlIGNhcmQgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNDAwcHg7IC8qIEVuc3VyZXMgdGhlIGNhcmQgZG9lc24ndCBzdHJldGNoIHRvbyB3aWRlICovXG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBBZGRzIHNwYWNpbmcgYmVsb3cgdGhlIGNhcmQgKi9cbiAgfVxuICBcbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzMzMzsgLyogRGFyayB0ZXh0IGZvciB0aXRsZSAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDsgLyogTGlnaHQgZ3JheSBiYWNrZ3JvdW5kIGZvciBpbnB1dHMgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIGlucHV0IGl0ZW1zICovXG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMjBweDsgLyogQWRkcyBwYWRkaW5nIHRvIGF2b2lkIGxhYmVsIG92ZXJsYXAgKi9cbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAyMHB4OyAvKiBBZGRzIHBhZGRpbmcgdG8gYXZvaWQgbGFiZWwgb3ZlcmxhcCAqL1xuICB9XG4gIFxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICBcbiAgaW9uLWlucHV0IHtcbiAgICAtLWNvbG9yOiAjMzMzOyAvKiBUZXh0IGNvbG9yICovXG4gIH1cbiAgXG4gIGlvbi1pbnB1dFtwbGFjZWhvbGRlcl0ge1xuICAgIG9wYWNpdHk6IDE7IC8qIEVuc3VyZXMgcGxhY2Vob2xkZXIgdGV4dCBpcyB2aXNpYmxlICovXG4gICAgY29sb3I6ICM5OTk7IC8qIEdyYXkgY29sb3IgZm9yIHBsYWNlaG9sZGVyICovXG4gIH1cbiAgXG4gIC5kYXRlLXBpY2tlci1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgLyogQWRqdXN0IHNwYWNlIGFyb3VuZCB0aGUgZGF0ZSBwaWNrZXIgaWNvbiAqL1xuICB9XG4gIFxuICBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG4gIFxuICBpb24tYnV0dG9uW2NvbG9yPVwicHJpbWFyeVwiXSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjM2E0Y2E4OyAvKiBQcmltYXJ5IGJsdWUgY29sb3IgKi9cbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIH1cbiAgXG4gIGlvbi1idXR0b25bY29sb3I9XCJkYW5nZXJcIl0ge1xuICAgIC0tYmFja2dyb3VuZDogI2U3NGMzYzsgLyogRGFuZ2VyIHJlZCBjb2xvciAqL1xuICB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
  return SettingsPage;
})();

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map