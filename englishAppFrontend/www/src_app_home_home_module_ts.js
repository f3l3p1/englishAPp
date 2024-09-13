"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 5055:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageModule: () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 1624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


 // Ensure IonicModule is imported




let HomePageModule = /*#__PURE__*/(() => {
  var _HomePageModule;
  class HomePageModule {}
  _HomePageModule = HomePageModule;
  _HomePageModule.ɵfac = function HomePageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePageModule)();
  };
  _HomePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: _HomePageModule
  });
  _HomePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
    // Importing IonicModule
    _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }])]
  });
  return HomePageModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageModule, {
    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 1624:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ 2630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);





function HomePage_ion_card_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 16)(1, "ion-card-content")(2, "div", 17)(3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Clases Completadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Tareas Completadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Logros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.completedSessions || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.completedTasks || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.achievements || 0);
  }
}
function HomePage_div_9_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 25);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.user.profilePicture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_div_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 26);
  }
}
function HomePage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomePage_div_9_img_1_Template, 1, 1, "img", 23)(2, HomePage_div_9_ng_template_2_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 24)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const defaultIcon_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.user.profilePicture)("ngIfElse", defaultIcon_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Email: ", ctx_r0.user.correo, "");
  }
}
function HomePage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27)(1, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-card-header")(4, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_div_17_Template_ion_button_click_8_listener() {
      const course_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.viewCourse(course_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Ver m\u00E1s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const course_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", course_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](course_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", course_r4.description, " ");
  }
}
function HomePage_ion_item_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label")(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Leer m\u00E1s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const newsItem_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](newsItem_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](newsItem_r5.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/news-detail/", newsItem_r5.id, "");
  }
}
function HomePage_section_26_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r6.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r6.correo);
  }
}
function HomePage_section_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 33)(1, "div", 7)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomePage_section_26_ion_item_5_Template, 6, 2, "ion-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.users);
  }
}
function HomePage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
let HomePage = /*#__PURE__*/(() => {
  var _HomePage;
  class HomePage {
    constructor(router) {
      this.router = router;
      this.user = null; // Current logged-in user
      this.users = []; // List of all users
      this.error = null; // Error message, if any
      this.courses = [{
        name: 'New Comers',
        description: 'Primera etapa donde podrás comenzar mejorando tu vocabulario',
        enrolled: 256,
        image: 'assets/images/newcommers.webp'
      }, {
        name: 'Novices',
        description: 'Segunda etapa que consta de tres pasos...',
        enrolled: 128,
        image: 'assets/images/novices.jpg'
      }, {
        name: 'Transitionals',
        description: 'Tercera etapa llena de conversación...',
        enrolled: 74,
        image: 'assets/images/transitionals.jpg'
      }, {
        name: 'Skilled',
        description: 'Cuarta etapa para especialización...',
        enrolled: 35,
        image: 'assets/images/skilled.webp'
      }];
      this.news = [{
        title: 'English Tea',
        summary: 'Estudiantes de English Tea realizan primera "Students’ Meeting".',
        image: 'assets/images/news1.jpg',
        id: 1
      }, {
        title: 'New Classes Available',
        summary: 'Check out the new classes available in the English Tea program.',
        image: 'assets/images/news2.jpg',
        id: 2
      }, {
        title: 'Achievement Unlocked',
        summary: 'Students have unlocked a new achievement this week!',
        image: 'assets/images/news3.jpg',
        id: 3
      }];
      this.slideOptions = {
        slidesPerView: 1.2,
        spaceBetween: 10
      };
    }
    ngOnInit() {
      this.loadUserData();
      this.loadUsers();
    }
    loadUserData() {
      const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();
      (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)(auth, user => {
        if (user) {
          this.user = {
            usuarioID: user.uid,
            // `usuarioID` now correctly typed as a string
            nombre: user.displayName || 'User',
            nombreUsuario: user.displayName || 'User',
            correo: user.email || '',
            completedSessions: 0,
            completedTasks: 0,
            achievements: 0,
            profilePicture: user.photoURL || ''
          };
          console.log('User loaded:', this.user);
        } else {
          console.log('No user is signed in.');
        }
      });
    }
    loadUsers() {
      // Placeholder users; replace with actual logic for fetching users from Firestore or another service
      this.users = [{
        usuarioID: '1',
        nombre: 'John Doe',
        nombreUsuario: 'johnd',
        correo: 'john@example.com'
      }, {
        usuarioID: '2',
        nombre: 'Jane Doe',
        nombreUsuario: 'janed',
        correo: 'jane@example.com'
      }];
      console.log('Users loaded:', this.users);
    }
    viewCourse(course) {
      this.router.navigate(['/current-course'], {
        queryParams: {
          course: JSON.stringify(course)
        }
      });
    }
  }
  _HomePage = HomePage;
  _HomePage.ɵfac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  _HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: _HomePage,
    selectors: [["app-home"]],
    decls: 28,
    vars: 6,
    consts: [["defaultIcon", ""], ["slot", "end"], ["routerLink", "/settings"], ["name", "settings-outline"], ["class", "top-stats-card", 4, "ngIf"], ["class", "user-profile", 4, "ngIf"], [1, "courses-section"], [1, "section-header"], ["routerLink", "/courses", 1, "view-all"], [1, "courses-scroll"], ["class", "course-card", 4, "ngFor", "ngForOf"], [1, "news-section"], ["routerLink", "/all-news", 1, "view-all"], ["lines", "none", "class", "news-item", 4, "ngFor", "ngForOf"], ["class", "users-section", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "top-stats-card"], [1, "top-stats-grid"], [1, "stat-item"], ["name", "checkmark-circle-outline"], ["name", "checkmark-done-outline"], ["name", "trophy-outline"], [1, "user-profile"], ["alt", "Profile Picture", "class", "profile-picture", 3, "src", 4, "ngIf", "ngIfElse"], [1, "user-info"], ["alt", "Profile Picture", 1, "profile-picture", 3, "src"], ["name", "person-circle-outline", 1, "default-profile-icon"], [1, "course-card"], ["alt", "Course Image", 1, "course-image", 3, "src"], ["expand", "full", "color", "primary", 3, "click"], ["lines", "none", 1, "news-item"], ["name", "newspaper-outline", "slot", "start", 1, "news-icon"], ["fill", "clear", 3, "routerLink"], [1, "users-section"], [4, "ngFor", "ngForOf"], [1, "error-message"]],
    template: function HomePage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "English Tea");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 1)(5, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomePage_ion_card_8_Template, 21, 3, "ion-card", 4)(9, HomePage_div_9_Template, 9, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "section", 6)(11, "div", 7)(12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Ver todas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomePage_div_17_Template, 10, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "section", 11)(19, "div", 7)(20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Novedades");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Ver todas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HomePage_ion_item_25_Template, 9, 4, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HomePage_section_26_Template, 6, 1, "section", 14)(27, HomePage_div_27_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.news);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.users.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.RouterLinkDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: ["\n\n[_nghost-%COMP%] {\n  --primary-color: #3a4ca8; \n\n  --secondary-color: #e74c3c; \n\n  --text-color: #333; \n\n  --background-color: #f9f9f9; \n\n  --card-background: #fff; \n\n}\n\n\n\n.user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  background-color: var(--background-color);\n}\n\n.profile-picture[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  margin-right: 16px;\n  object-fit: cover; \n\n}\n\n.default-profile-icon[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: var(--primary-color);\n  margin-right: 16px;\n}\n\n.user-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  color: var(--text-color);\n}\n\n.user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  font-size: 14px;\n  color: var(--text-color);\n}\n\n\n\n.stats-grid[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n  display: flex;\n  justify-content: space-around;\n  background-color: var(--card-background);\n  border-radius: 12px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 10px 0;\n}\n\n.stat-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 4px 0;\n  color: var(--text-color);\n}\n\n.stat-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--primary-color);\n}\n\n.stat-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--secondary-color);\n}\n\n\n\n.courses-section[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: var(--background-color);\n}\n\n.courses-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto; \n\n  padding: 16px 0;\n}\n\n.course-card[_ngcontent-%COMP%] {\n  flex: 0 0 auto; \n\n  width: 160px; \n\n  margin-right: 10px; \n\n  background-color: var(--card-background);\n  border-radius: 12px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.course-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px; \n\n  object-fit: cover; \n\n  border-radius: 12px 12px 0 0; \n\n}\n\n.course-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 8px 0 4px 0;\n  color: var(--text-color);\n}\n\n.course-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n}\n\n\n\n.news-section[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: var(--background-color);\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--primary-color);\n}\n\n.view-all[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.view-all[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.news-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 0;\n  background-color: var(--card-background);\n  border-radius: 12px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  margin-bottom: 10px;\n}\n\n.news-icon[_ngcontent-%COMP%] {\n  font-size: 36px; \n\n  color: var(--primary-color);\n  margin-right: 12px;\n}\n\n.news-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: 16px;\n  color: var(--text-color);\n}\n\n.news-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n}\n\n\n\nion-footer[_ngcontent-%COMP%] {\n  --background: var(--card-background);\n  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --border-radius: 12px;\n}\n\nion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n\nion-buttons[_ngcontent-%COMP%]   ion-button.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--secondary-color); \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBQTtBQUNBO0VBQ0Usd0JBQUEsRUFBQSxjQUFBO0VBQ0EsMEJBQUEsRUFBQSxhQUFBO0VBQ0Esa0JBQUEsRUFBQSx1QkFBQTtFQUNBLDJCQUFBLEVBQUEscUJBQUE7RUFDQSx1QkFBQSxFQUFBLG9CQUFBO0FBQ0Y7O0FBRUEseUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUEsRUFBQSx5REFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUEsb0JBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUEsb0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBLEVBQUEsZ0NBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBLEVBQUEsdUJBQUE7RUFDQSxZQUFBLEVBQUEsMkJBQUE7RUFDQSxrQkFBQSxFQUFBLHdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQSxFQUFBLDJDQUFBO0VBQ0EsaUJBQUEsRUFBQSx5REFBQTtFQUNBLDRCQUFBLEVBQUEsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBLGlCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQSxFQUFBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUEsbUJBQUE7QUFDQTtFQUNFLG9DQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUEsRUFBQSxzQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2VuZXJhbCBTdHlsaW5nICovXG46aG9zdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogIzNhNGNhODsgLyogQmx1ZSB0b25lICovXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZTc0YzNjOyAvKiBSZWQgdG9uZSAqL1xuICAtLXRleHQtY29sb3I6ICMzMzM7IC8qIERhcmsgZ3JheSBmb3IgdGV4dCAqL1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7IC8qIExpZ2h0IGJhY2tncm91bmQgKi9cbiAgLS1jYXJkLWJhY2tncm91bmQ6ICNmZmY7IC8qIFdoaXRlIGZvciBjYXJkcyAqL1xufVxuXG4vKiBVc2VyIHByb2ZpbGUgc2VjdGlvbiAqL1xuLnVzZXItcHJvZmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBFbnN1cmVzIHRoZSBpbWFnZSBjb3ZlcnMgdGhlIGFyZWEgd2l0aG91dCBkaXN0b3J0aW9uICovXG59XG5cbi5kZWZhdWx0LXByb2ZpbGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi51c2VyLWluZm8gaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4udXNlci1pbmZvIHAge1xuICBtYXJnaW46IDRweCAwIDAgMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG5cbi8qIFN0YXRpc3RpY3MgZ3JpZCAqL1xuLnN0YXRzLWdyaWQge1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc3RhdC1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLnN0YXQtaXRlbSBoMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA0cHggMDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4uc3RhdC1pdGVtIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5zdGF0LWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4vKiBDb3Vyc2VzIHNlY3Rpb24gKi9cbi5jb3Vyc2VzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLmNvdXJzZXMtc2Nyb2xsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogYXV0bzsgLyogRW5hYmxlIGhvcml6b250YWwgc2Nyb2xsaW5nICovXG4gIHBhZGRpbmc6IDE2cHggMDtcbn1cblxuLmNvdXJzZS1jYXJkIHtcbiAgZmxleDogMCAwIGF1dG87IC8qIFByZXZlbnRzIHNocmlua2luZyAqL1xuICB3aWR0aDogMTYwcHg7IC8qIEFkanVzdCB3aWR0aCBhcyBuZWVkZWQgKi9cbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIGNhcmRzICovXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFja2dyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jb3Vyc2UtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDsgLyogQWRqdXN0IGhlaWdodCB0byBtYWludGFpbiBhc3BlY3QgcmF0aW8gKi9cbiAgb2JqZWN0LWZpdDogY292ZXI7IC8qIEVuc3VyZXMgdGhlIGltYWdlIGNvdmVycyB0aGUgYXJlYSB3aXRob3V0IGRpc3RvcnRpb24gKi9cbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDsgLyogUm91bmRzIG9ubHkgdGhlIHRvcCBjb3JuZXJzICovXG59XG5cbi5jb3Vyc2UtY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA4cHggMCA0cHggMDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4uY291cnNlLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi8qIE5ld3Mgc2VjdGlvbiAqL1xuLm5ld3Mtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnZpZXctYWxsIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi52aWV3LWFsbDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubmV3cy1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFja2dyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5uZXdzLWljb24ge1xuICBmb250LXNpemU6IDM2cHg7IC8qIEFkanVzdCBzaXplIGFzIG5lZWRlZCAqL1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLm5ld3MtaXRlbSBoMyB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG5cbi5uZXdzLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi8qIEJvdHRvbSB0b29sYmFyICovXG5pb24tZm9vdGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJhY2tncm91bmQpO1xuICBib3gtc2hhZG93OiAwIC0xcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbmlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbmlvbi1idXR0b25zIGlvbi1idXR0b24uYWN0aXZlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7IC8qIEFjdGl2ZSBpY29uIGNvbG9yICovXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
  return HomePage;
})();

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map