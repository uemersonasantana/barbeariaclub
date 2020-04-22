function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/password/request-reset/request-reset.component */
    "./src/app/components/password/request-reset/request-reset.component.ts");
    /* harmony import */


    var _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/password/response-reset/response-reset.component */
    "./src/app/components/password/response-reset/response-reset.component.ts");
    /* harmony import */


    var _services_before_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/before-login.service */
    "./src/app/services/before-login.service.ts");
    /* harmony import */


    var _services_after_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/after-login.service */
    "./src/app/services/after-login.service.ts");
    /* harmony import */


    var _components_agendamento_agendamento_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/agendamento/agendamento.component */
    "./src/app/components/agendamento/agendamento.component.ts");
    /* harmony import */


    var _components_barbeiro_barbeiro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/barbeiro/barbeiro.component */
    "./src/app/components/barbeiro/barbeiro.component.ts");
    /* harmony import */


    var _components_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/cliente/cliente.component */
    "./src/app/components/cliente/cliente.component.ts");
    /* harmony import */


    var _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/usuario/usuario.component */
    "./src/app/components/usuario/usuario.component.ts");

    var appRoutes = [{
      path: '',
      canActivate: [_services_before_login_service__WEBPACK_IMPORTED_MODULE_6__["BeforeLoginService"]],
      children: [{
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
      }, {
        path: 'request-password-reset',
        component: _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_4__["RequestResetComponent"]
      }, {
        path: 'response-password-reset',
        component: _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_5__["ResponseResetComponent"]
      }]
    }, {
      path: '',
      canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_7__["AfterLoginService"]],
      children: [{
        path: 'agendamentos',
        component: _components_agendamento_agendamento_component__WEBPACK_IMPORTED_MODULE_8__["AgendamentoComponent"]
      }, {
        path: 'barbeiros',
        component: _components_barbeiro_barbeiro_component__WEBPACK_IMPORTED_MODULE_9__["BarbeiroComponent"]
      }, {
        path: 'clientes',
        component: _components_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_10__["ClienteComponent"]
      }, {
        path: 'usuarios',
        component: _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_11__["UsuarioComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes) //,RouterModule.forChild(appRoutesChildren)
      ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes) //,RouterModule.forChild(appRoutesChildren)
          ],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-snotify */
    "./node_modules/ng-snotify/__ivy_ngcc__/fesm2015/ng-snotify.js");

    var AppComponent = function AppComponent(Auth, router) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.Auth = Auth;
      this.router = router;
      this.title = 'angular-app';
      this.Auth.authStatus.subscribe(function (value) {
        return _this.loggedIn = value;
      });

      if (this.loggedIn) {
        this.router.navigateByUrl('/agendamentos');
      }
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ng-snotify");
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: options, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "options", function () {
      return options;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! .//app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_agendamento_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/agendamento.service */
    "./src/app/services/agendamento.service.ts");
    /* harmony import */


    var _services_barbeiro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/barbeiro.service */
    "./src/app/services/barbeiro.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/signup/signup.component */
    "./src/app/components/signup/signup.component.ts");
    /* harmony import */


    var _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/password/request-reset/request-reset.component */
    "./src/app/components/password/request-reset/request-reset.component.ts");
    /* harmony import */


    var _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/password/response-reset/response-reset.component */
    "./src/app/components/password/response-reset/response-reset.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/jarwis.service */
    "./src/app/services/jarwis.service.ts");
    /* harmony import */


    var _services_token_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_after_login_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/after-login.service */
    "./src/app/services/after-login.service.ts");
    /* harmony import */


    var _services_before_login_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/before-login.service */
    "./src/app/services/before-login.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ng_snotify__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ng-snotify */
    "./node_modules/ng-snotify/__ivy_ngcc__/fesm2015/ng-snotify.js");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
    /* harmony import */


    var _components_agendamento_agendamento_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/agendamento/agendamento.component */
    "./src/app/components/agendamento/agendamento.component.ts");
    /* harmony import */


    var _components_barbeiro_barbeiro_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/barbeiro/barbeiro.component */
    "./src/app/components/barbeiro/barbeiro.component.ts");
    /* harmony import */


    var _components_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/cliente/cliente.component */
    "./src/app/components/cliente/cliente.component.ts");
    /* harmony import */


    var _components_ce_ce_agendamento_ce_agendamento_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/ce/ce-agendamento/ce-agendamento.component */
    "./src/app/components/ce/ce-agendamento/ce-agendamento.component.ts");
    /* harmony import */


    var _components_ce_ce_barbeiro_ce_barbeiro_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/ce/ce-barbeiro/ce-barbeiro.component */
    "./src/app/components/ce/ce-barbeiro/ce-barbeiro.component.ts");
    /* harmony import */


    var _components_ce_ce_cliente_ce_cliente_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/ce/ce-cliente/ce-cliente.component */
    "./src/app/components/ce/ce-cliente/ce-cliente.component.ts");
    /* harmony import */


    var _auth_interceptor__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./auth-interceptor */
    "./src/app/auth-interceptor.ts");
    /* harmony import */


    var _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/usuario/usuario.component */
    "./src/app/components/usuario/usuario.component.ts");
    /* harmony import */


    var _components_ce_ce_usuario_ce_usuario_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/ce/ce-usuario/ce-usuario.component */
    "./src/app/components/ce/ce-usuario/ce-usuario.component.ts"); //import {MatFormFieldModule} from '@angular/material/form-field';


    var options = {}; //import {FormsModule, ReactiveFormsModule} from '@angular/forms';
    //import {OverlayModule} from '@angular/cdk/overlay';

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_agendamento_service__WEBPACK_IMPORTED_MODULE_5__["AgendamentoService"], _services_barbeiro_service__WEBPACK_IMPORTED_MODULE_6__["BarbeiroService"], _services_jarwis_service__WEBPACK_IMPORTED_MODULE_13__["JarwisService"], _services_token_service__WEBPACK_IMPORTED_MODULE_14__["TokenService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_after_login_service__WEBPACK_IMPORTED_MODULE_16__["AfterLoginService"], _services_before_login_service__WEBPACK_IMPORTED_MODULE_17__["BeforeLoginService"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_38__["AuthInterceptor"],
        multi: true
      }], //[{provide: LOCALE_ID, useValue: 'pt-BR'}]
      {
        provide: 'SnotifyToastConfig',
        useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_19__["ToastDefaults"]
      }, ng_snotify__WEBPACK_IMPORTED_MODULE_19__["SnotifyService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng_snotify__WEBPACK_IMPORTED_MODULE_19__["SnotifyModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_20__["AutocompleteLibModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_30__["MatCardModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_31__["NgxMaskModule"].forRoot(options)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_10__["RequestResetComponent"], _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_11__["ResponseResetComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _components_agendamento_agendamento_component__WEBPACK_IMPORTED_MODULE_32__["AgendamentoComponent"], _components_barbeiro_barbeiro_component__WEBPACK_IMPORTED_MODULE_33__["BarbeiroComponent"], _components_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_34__["ClienteComponent"], _components_ce_ce_agendamento_ce_agendamento_component__WEBPACK_IMPORTED_MODULE_35__["CeAgendamentoComponent"], _components_ce_ce_barbeiro_ce_barbeiro_component__WEBPACK_IMPORTED_MODULE_36__["CeBarbeiroComponent"], _components_ce_ce_cliente_ce_cliente_component__WEBPACK_IMPORTED_MODULE_37__["CeClienteComponent"], _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_39__["UsuarioComponent"], _components_ce_ce_usuario_ce_usuario_component__WEBPACK_IMPORTED_MODULE_40__["CeUsuarioComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng_snotify__WEBPACK_IMPORTED_MODULE_19__["SnotifyModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_20__["AutocompleteLibModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_30__["MatCardModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_31__["NgxMaskModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_10__["RequestResetComponent"], _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_11__["ResponseResetComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _components_agendamento_agendamento_component__WEBPACK_IMPORTED_MODULE_32__["AgendamentoComponent"], _components_barbeiro_barbeiro_component__WEBPACK_IMPORTED_MODULE_33__["BarbeiroComponent"], _components_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_34__["ClienteComponent"], _components_ce_ce_agendamento_ce_agendamento_component__WEBPACK_IMPORTED_MODULE_35__["CeAgendamentoComponent"], _components_ce_ce_barbeiro_ce_barbeiro_component__WEBPACK_IMPORTED_MODULE_36__["CeBarbeiroComponent"], _components_ce_ce_cliente_ce_cliente_component__WEBPACK_IMPORTED_MODULE_37__["CeClienteComponent"], _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_39__["UsuarioComponent"], _components_ce_ce_usuario_ce_usuario_component__WEBPACK_IMPORTED_MODULE_40__["CeUsuarioComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng_snotify__WEBPACK_IMPORTED_MODULE_19__["SnotifyModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_20__["AutocompleteLibModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_30__["MatCardModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_31__["NgxMaskModule"].forRoot(options)],
          providers: [_services_agendamento_service__WEBPACK_IMPORTED_MODULE_5__["AgendamentoService"], _services_barbeiro_service__WEBPACK_IMPORTED_MODULE_6__["BarbeiroService"], _services_jarwis_service__WEBPACK_IMPORTED_MODULE_13__["JarwisService"], _services_token_service__WEBPACK_IMPORTED_MODULE_14__["TokenService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_after_login_service__WEBPACK_IMPORTED_MODULE_16__["AfterLoginService"], _services_before_login_service__WEBPACK_IMPORTED_MODULE_17__["BeforeLoginService"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_38__["AuthInterceptor"],
            multi: true
          }], //[{provide: LOCALE_ID, useValue: 'pt-BR'}]
          {
            provide: 'SnotifyToastConfig',
            useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_19__["ToastDefaults"]
          }, ng_snotify__WEBPACK_IMPORTED_MODULE_19__["SnotifyService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth-interceptor.ts":
  /*!*************************************!*\
    !*** ./src/app/auth-interceptor.ts ***!
    \*************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/Observable */
    "./node_modules/rxjs-compat/_esm2015/Observable.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./global-constants */
    "./src/app/global-constants.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(router, Token, Auth, dialogRef) {
        _classCallCheck(this, AuthInterceptor);

        this.router = router;
        this.Token = Token;
        this.Auth = Auth;
        this.dialogRef = dialogRef;
        this.baseUrl = _global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].API_URL;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this2 = this;

          var token = localStorage.getItem('token'); //const lanaguageInj= this.injector.get(RefreshToken2);

          if (token) {
            req = req.clone({
              setHeaders: {
                'Authorization': 'Bearer ' + token
              }
            });
          }

          return next.handle(req)["catch"](function (err) {
            if (err.status === 401) {
              // Redireciona para login quando expirar a sessão.
              console.log('foi22');

              _this2.Token.remove();

              _this2.Auth.changeAuthStatus(false);

              _this2.dialogRef.closeAll();

              _this2.router.navigateByUrl('/login');
            }

            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]["throw"](err);
          });
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/agendamento/agendamento.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/agendamento/agendamento.component.ts ***!
    \*****************************************************************/

  /*! exports provided: I18n, CustomDatepickerI18n, CustomAdapter, CustomDateParserFormatter, AgendamentoComponent */

  /***/
  function srcAppComponentsAgendamentoAgendamentoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "I18n", function () {
      return I18n;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomDatepickerI18n", function () {
      return CustomDatepickerI18n;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomAdapter", function () {
      return CustomAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomDateParserFormatter", function () {
      return CustomDateParserFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgendamentoComponent", function () {
      return AgendamentoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _ce_ce_agendamento_ce_agendamento_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ce/ce-agendamento/ce-agendamento.component */
    "./src/app/components/ce/ce-agendamento/ce-agendamento.component.ts");
    /* harmony import */


    var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/Rx */
    "./node_modules/rxjs-compat/_esm2015/Rx.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _services_agendamento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/agendamento.service */
    "./src/app/services/agendamento.service.ts");
    /* harmony import */


    var _services_cliente_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/cliente.service */
    "./src/app/services/cliente.service.ts");
    /* harmony import */


    var _services_barbeiro_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/barbeiro.service */
    "./src/app/services/barbeiro.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function AgendamentoComponent_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 39);
      }

      if (rf & 2) {
        var item_r42 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r42.nome, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function AgendamentoComponent_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cliente n\xE3o encontrado.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AgendamentoComponent_option_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var b_r44 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", b_r44.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r44.nome);
      }
    }

    function AgendamentoComponent_option_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var t_r45 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", t_r45.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r45.nome);
      }
    }

    function AgendamentoComponent_div_31_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AgendamentoComponent_div_31_ng_template_6_Template_span_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var date_r51 = ctx.$implicit;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r53.hoveredDate = date_r51;
        })("mouseleave", function AgendamentoComponent_div_31_ng_template_6_Template_span_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r55.hoveredDate = null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var date_r51 = ctx.$implicit;
        var focused_r52 = ctx.focused;

        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", focused_r52)("range", ctx_r48.isRange(date_r51))("faded", ctx_r48.isHovered(date_r51) || ctx_r48.isInside(date_r51));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r51.day, " ");
      }
    }

    function AgendamentoComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 43, 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function AgendamentoComponent_div_31_Template_input_dateSelect_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.onDateSelection($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AgendamentoComponent_div_31_ng_template_6_Template, 2, 7, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 47, 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgendamentoComponent_div_31_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.form.dataInicial = $event;
        })("input", function AgendamentoComponent_div_31_Template_input_input_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.fromDate = ctx_r59.validateInput(ctx_r59.fromDate, _r49.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgendamentoComponent_div_31_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          return _r46.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 52, 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgendamentoComponent_div_31_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r61.form.dataFinal = $event;
        })("input", function AgendamentoComponent_div_31_Template_input_input_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r62.toDate = ctx_r62.validateInput(ctx_r62.toDate, _r50.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgendamentoComponent_div_31_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          return _r46.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", "outside")("displayMonths", 2)("dayTemplate", _r47)("startDate", ctx_r24.fromDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.form.dataInicial)("value", ctx_r24.formatter.format(ctx_r24.fromDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.form.dataFinal)("value", ctx_r24.formatter.format(ctx_r24.toDate));
      }
    }

    function AgendamentoComponent_th_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "antigo": a0
      };
    };

    function AgendamentoComponent_td_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r64 = ctx.$implicit;

        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, row_r64.dataagendamento, "dd/MM/yyyy HH:mm") < ctx_r26.CurrentDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r64.id);
      }
    }

    function AgendamentoComponent_th_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AgendamentoComponent_td_55_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Antigo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AgendamentoComponent_td_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AgendamentoComponent_td_55_span_2_Template, 2, 0, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r65 = ctx.$implicit;

        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 3, row_r65.dataagendamento, "dd/MM/yyyy HH:mm") < ctx_r28.CurrentDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, row_r65.dataagendamento, "dd/MM/yyyy HH:mm") < ctx_r28.CurrentDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 9, row_r65.dataagendamento, "dd/MM/yyyy"), "");
      }
    }

    function AgendamentoComponent_th_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hora");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AgendamentoComponent_td_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r67 = ctx.$implicit;

        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, row_r67.dataagendamento, "dd/MM/yyyy HH:mm") < ctx_r30.CurrentDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, row_r67.dataagendamento, "HH:mm"));
      }
    }

    function AgendamentoComponent_th_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Servi\xE7o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AgendamentoComponent_td_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r68 = ctx.$implicit;

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, row_r68.dataagendamento, "dd/MM/yyyy HH:mm") < ctx_r32.CurrentDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r68.descricao);
      }
    }

    function AgendamentoComponent_th_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cliente");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AgendamentoComponent_td_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r69 = ctx.$implicit;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, row_r69.dataagendamento, "dd/MM/yyyy HH:mm") < ctx_r34.CurrentDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r69.cliente.nome);
      }
    }

    function AgendamentoComponent_th_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Barbearia");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AgendamentoComponent_td_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r70 = ctx.$implicit;

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, row_r70.dataagendamento, "dd/MM/yyyy HH:mm") < ctx_r36.CurrentDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r70.barbeiro.nome);
      }
    }

    function AgendamentoComponent_th_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
      }
    }

    function AgendamentoComponent_td_70_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgendamentoComponent_td_70_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var row_r71 = ctx.$implicit;

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.openModal(row_r71.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgendamentoComponent_td_70_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var row_r71 = ctx.$implicit;

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.delRowInTable(row_r71.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Apagar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r71 = ctx.$implicit;

        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, row_r71.dataagendamento, "dd/MM/yyyy HH:mm") < ctx_r38.CurrentDate));
      }
    }

    function AgendamentoComponent_tr_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 60);
      }
    }

    function AgendamentoComponent_tr_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 61);
      }
    }

    function AgendamentoComponent_mat_card_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return [5, 10, 25, 100];
    };

    var I18N_VALUES = {
      'pt': {
        weekdays: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
      } // other languages you would support

    }; // Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
    // use the Angular LOCALE_ID value

    var I18n = function I18n() {
      _classCallCheck(this, I18n);

      this.language = 'pt';
    };

    I18n.ɵfac = function I18n_Factory(t) {
      return new (t || I18n)();
    };

    I18n.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: I18n,
      factory: I18n.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](I18n, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })(); // Define custom service providing the months and weekdays translations


    var CustomDatepickerI18n = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
      _inherits(CustomDatepickerI18n, _ng_bootstrap_ng_boot);

      var _super = _createSuper(CustomDatepickerI18n);

      function CustomDatepickerI18n(_i18n) {
        var _this3;

        _classCallCheck(this, CustomDatepickerI18n);

        _this3 = _super.call(this);
        _this3._i18n = _i18n;
        return _this3;
      }

      _createClass(CustomDatepickerI18n, [{
        key: "getWeekdayShortName",
        value: function getWeekdayShortName(weekday) {
          return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
        }
      }, {
        key: "getMonthShortName",
        value: function getMonthShortName(month) {
          return I18N_VALUES[this._i18n.language].months[month - 1];
        }
      }, {
        key: "getMonthFullName",
        value: function getMonthFullName(month) {
          return this.getMonthShortName(month);
        }
      }, {
        key: "getDayAriaLabel",
        value: function getDayAriaLabel(date) {
          return "".concat(date.day, "-").concat(date.month, "-").concat(date.year);
        }
      }]);

      return CustomDatepickerI18n;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"]);

    CustomDatepickerI18n.ɵfac = function CustomDatepickerI18n_Factory(t) {
      return new (t || CustomDatepickerI18n)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](I18n));
    };

    CustomDatepickerI18n.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomDatepickerI18n,
      factory: CustomDatepickerI18n.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomDatepickerI18n, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: I18n
        }];
      }, null);
    })();
    /**
     * This Service handles how the date is represented in scripts i.e. ngModel.
     */


    var CustomAdapter = /*#__PURE__*/function (_ng_bootstrap_ng_boot2) {
      _inherits(CustomAdapter, _ng_bootstrap_ng_boot2);

      var _super2 = _createSuper(CustomAdapter);

      function CustomAdapter() {
        var _this4;

        _classCallCheck(this, CustomAdapter);

        _this4 = _super2.apply(this, arguments);
        _this4.DELIMITER = '-';
        return _this4;
      }

      _createClass(CustomAdapter, [{
        key: "fromModel",
        value: function fromModel(value) {
          if (value) {
            var date = value.split(this.DELIMITER);
            return {
              day: parseInt(date[0], 10),
              month: parseInt(date[1], 10),
              year: parseInt(date[2], 10)
            };
          }

          return null;
        }
      }, {
        key: "toModel",
        value: function toModel(date) {
          return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
        }
      }]);

      return CustomAdapter;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"]);

    CustomAdapter.ɵfac = function CustomAdapter_Factory(t) {
      return ɵCustomAdapter_BaseFactory(t || CustomAdapter);
    };

    CustomAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomAdapter,
      factory: CustomAdapter.ɵfac
    });

    var ɵCustomAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomAdapter);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /**
     * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
     */


    var CustomDateParserFormatter = /*#__PURE__*/function (_ng_bootstrap_ng_boot3) {
      _inherits(CustomDateParserFormatter, _ng_bootstrap_ng_boot3);

      var _super3 = _createSuper(CustomDateParserFormatter);

      function CustomDateParserFormatter() {
        var _this5;

        _classCallCheck(this, CustomDateParserFormatter);

        _this5 = _super3.apply(this, arguments);
        _this5.DELIMITER = '/';
        return _this5;
      }

      _createClass(CustomDateParserFormatter, [{
        key: "parse",
        value: function parse(value) {
          if (value) {
            var date = value.split(this.DELIMITER);
            return {
              day: parseInt(date[0], 10),
              month: parseInt(date[1], 10),
              year: parseInt(date[2], 10)
            };
          }

          return null;
        }
      }, {
        key: "format",
        value: function format(date) {
          return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
        }
      }]);

      return CustomDateParserFormatter;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]);

    CustomDateParserFormatter.ɵfac = function CustomDateParserFormatter_Factory(t) {
      return ɵCustomDateParserFormatter_BaseFactory(t || CustomDateParserFormatter);
    };

    CustomDateParserFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomDateParserFormatter,
      factory: CustomDateParserFormatter.ɵfac
    });

    var ɵCustomDateParserFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomDateParserFormatter);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomDateParserFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();

    var AgendamentoComponent = /*#__PURE__*/function () {
      function AgendamentoComponent(AgendamentoService, ClienteService, BarbeiroService, calendar, formatter, dialog //,private _i18n: I18n
      ) {
        _classCallCheck(this, AgendamentoComponent);

        this.AgendamentoService = AgendamentoService;
        this.ClienteService = ClienteService;
        this.BarbeiroService = BarbeiroService;
        this.calendar = calendar;
        this.formatter = formatter;
        this.dialog = dialog;
        this.config = {
          format: "DD/MM/YYYY"
        };
        this.tempo = [{
          id: 0,
          nome: 'Todos'
        }, {
          id: 1,
          nome: 'Hoje'
        }, {
          id: 2,
          nome: 'Esta semana'
        }, {
          id: 3,
          nome: 'Este mês'
        }, {
          id: 4,
          nome: 'Últimos 30 dias'
        }, {
          id: 5,
          nome: 'Escolha o período'
        }];
        this.keyword = 'nome';
        this.duedates = false;
        this.hoveredDate = null;
        this.form = {
          cliente_id: '',
          barbeiro_id: 0,
          tempo: 0,
          dataInicial: null,
          dataFinal: null
        };
        this.CurrentDate = new Date().toLocaleString("pt-BR", {
          timeZone: "America/Sao_Paulo"
        });
        this.displayedColumns = ['id', 'data', 'hora', 'servico', 'cliente', 'barbearia', 'actions']; //@Input() sorting: MatSortable;

        this.isLoading = true;
      }

      _createClass(AgendamentoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.BarbeiroService.getBarbeiros().subscribe(function (data) {
            _this6.barbeiros = data;
          });
          this.AgendamentoService.getAgendamentos().subscribe(function (data) {
            _this6.isLoading = false;
            _this6.agendamentos = data; // Assign the data to the data source for the table to render

            _this6.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this6.agendamentos);
            _this6.dataSource.paginator = _this6.paginator;

            _this6.sort.sort({
              id: 'dataagendamento',
              start: 'desc'
            });

            _this6.dataSource.sort = _this6.sort;
          }, function (error) {
            return _this6.isLoading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.agendamentos = null;
          this.barbeiros = null;
          this.clientes = null;
        }
      }, {
        key: "getServerResponseClientes",
        value: function getServerResponseClientes(event) {
          var _this7 = this;

          this.isLoadingResult = true;
          this.ClienteService.getBuscaClientes(event).subscribe(function (data) {
            if (data[0]['nome'] == undefined) {
              _this7.clientes = [];
            } else {
              _this7.clientes = data;
            }

            _this7.isLoadingResult = false;
          });
        }
      }, {
        key: "searchClearedClientes",
        value: function searchClearedClientes() {
          this.clientes = [];
        }
      }, {
        key: "addRowInTable",
        value: function addRowInTable(data) {
          this.agendamentos.push(data[0]);

          this.dataSource._updateChangeSubscription();
        }
      }, {
        key: "updateRowInTable",
        value: function updateRowInTable(data) {
          var i = this.agendamentos.findIndex(function (d) {
            return d.id == data[0].id;
          });

          if (i >= 0) {
            this.agendamentos[i] = data[0];
          }

          this.dataSource._updateChangeSubscription();
        }
      }, {
        key: "delRowInTable",
        value: function delRowInTable(id) {
          var i = this.agendamentos.findIndex(function (d) {
            return d.id == id;
          });

          if (i >= 0) {
            this.agendamentos.splice(i, 1);
          }

          this.dataSource._updateChangeSubscription();

          this.AgendamentoService.apagar(id);
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();

          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        }
      }, {
        key: "getAgendamentos",
        value: function getAgendamentos(value) {
          var _this8 = this;

          this.AgendamentoService.getAgendamentos(value).subscribe(function (agendamentos) {
            _this8.agendamentos = [];

            var _iterator = _createForOfIteratorHelper(agendamentos),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var t = _step.value;

                _this8.agendamentos.push(t);
              } // Assign the data to the data source for the table to render

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _this8.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this8.agendamentos);
            _this8.dataSource.paginator = _this8.paginator;
            _this8.dataSource.sort = _this8.sort;
          }, function (error) {
            return _this8.handleError(error);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.fromDate) {
            this.form.dataInicial = this.fromDate.day + '/' + this.fromDate.month + '/' + this.fromDate.year;
          } else {
            this.form.dataInicial = '';
          }

          if (this.toDate) {
            this.form.dataFinal = this.toDate.day + '/' + this.toDate.month + '/' + this.toDate.year;
          } else {
            this.form.dataFinal = '';
          } // Ao invés de enviar o objeto, enviamos apenas o id do cliente.


          var c;

          if (this.form.cliente_id) {
            c = this.form.cliente_id;

            if (c['id'] > 0) {
              this.form.cliente_id = c['id'];
            }
          }

          this.errorMessage = null;
          this.getAgendamentos(this.form);

          if (this.form.cliente_id) {
            this.form.cliente_id = c['nome'];
          }
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          this.errorMessage = '<table>';

          for (var _i = 0, _Object$keys = Object.keys(error.error.errors); _i < _Object$keys.length; _i++) {
            var e = _Object$keys[_i];
            this.errorMessage += "<tr><td><div class='alert alert-danger'>" + error.error.errors[e][0] + "</div></td></tr>";
          }

          this.errorMessage += '<table>';
        }
      }, {
        key: "onBoxDueDates",
        value: function onBoxDueDates(value) {
          if (value == 5) {
            this.duedates = true;
          } else {
            this.form.dataInicial = null;
            this.form.dataFinal = null;
            this.duedates = false;
          }
        }
      }, {
        key: "onDateSelection",
        value: function onDateSelection(date) {
          if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
          } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
            this.toDate = date;
          } else {
            this.toDate = null;
            this.fromDate = date;
          }
        }
      }, {
        key: "isHovered",
        value: function isHovered(date) {
          return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
        }
      }, {
        key: "isInside",
        value: function isInside(date) {
          return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
        }
      }, {
        key: "isRange",
        value: function isRange(date) {
          return date.equals(this.fromDate) || this.toDate && date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
        }
      }, {
        key: "validateInput",
        value: function validateInput(currentValue, input) {
          var parsed = this.formatter.parse(input);
          return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed)) ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed) : currentValue;
        }
      }, {
        key: "openModal",
        value: function openModal(id) {
          var _this9 = this;

          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
          dialogConfig.data = {
            id: id
          };
          var dialogRef = this.dialog.open(_ce_ce_agendamento_ce_agendamento_component__WEBPACK_IMPORTED_MODULE_3__["CeAgendamentoComponent"], dialogConfig);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              if (result[0].modo == 'editar') {
                _this9.updateRowInTable(result);
              } else {
                _this9.addRowInTable(result);
              }
            }
          });
        }
      }, {
        key: "apagarAgendamento",
        value: function apagarAgendamento(id) {
          this.AgendamentoService.apagar(id);
        }
      }]);

      return AgendamentoComponent;
    }();

    AgendamentoComponent.ɵfac = function AgendamentoComponent_Factory(t) {
      return new (t || AgendamentoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_agendamento_service__WEBPACK_IMPORTED_MODULE_8__["AgendamentoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cliente_service__WEBPACK_IMPORTED_MODULE_9__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_barbeiro_service__WEBPACK_IMPORTED_MODULE_10__["BarbeiroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    AgendamentoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AgendamentoComponent,
      selectors: [["app-agendamento"]],
      viewQuery: function AgendamentoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([I18n, {
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"],
        useClass: CustomDatepickerI18n
      }, {
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
        useClass: CustomAdapter
      }, {
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"],
        useClass: CustomDateParserFormatter
      }] // define custom NgbDatepickerI18n provider
      )],
      decls: 75,
      vars: 20,
      consts: [[1, "card"], [1, "card-body"], [3, "ngSubmit"], ["agendamentosForm", "ngForm"], [1, "container"], [1, "row"], [1, "col-4", "CustomCol", "center", "texto-branco", "bg-gray"], [2, "color", "#444"], [1, "col-4", "CustomCol"], [1, "ng-autocomplete"], ["name", "form.cliente_id", "placeHolder", "Digite o nome do cliente", "minQueryLength", "2", 3, "ngModel", "data", "searchKeyword", "isLoading", "itemTemplate", "notFoundTemplate", "ngModelChange", "inputChanged", "inputCleared"], ["itemTemplate", ""], ["notFoundTemplate", ""], ["name", "barbeiro_id", 1, "custom-select", 3, "ngModel", "ngModelChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-4", "CustomCol", "text-center"], ["name", "tempo", 1, "custom-select", 3, "ngModel", "ngModelChange", "change"], ["class", "container", 4, "ngIf"], [1, "col", "CustomCol", "text-center"], ["type", "button", 1, "btn", "btn-info", "btn-space", 3, "click"], [1, "row", 3, "innerHtml", "hidden"], [1, "col"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["matInput", "", 3, "keyup"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "data"], ["matColumnDef", "hora"], ["matColumnDef", "servico"], ["matColumnDef", "cliente"], ["matColumnDef", "barbearia"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["style", "display: flex; justify-content: center; align-items: center", 4, "ngIf"], [3, "pageSizeOptions"], [3, "innerHTML"], [2, "color", "black", "padding", "10px"], [1, "form-group", "hidden"], [1, "input-group"], ["name", "datepicker", "ngbDatepicker", "", "outsideDays", "hidden", 1, "form-control", 2, "border", "0", 3, "autoClose", "displayMonths", "dayTemplate", "startDate", "dateSelect"], ["datepicker", "ngbDatepicker"], ["t", ""], [1, "col-6", "text-left", 2, "margin-top", "10px", "margin-right", "-50px"], ["placeholder", "Inicial", "name", "dataInicial", "autocomplete", "off", "readonly", "", 1, "form-control", "col-sm-10", 3, "ngModel", "value", "ngModelChange", "input"], ["dataInicial", ""], [1, "col-1", "text-left", 2, "margin-top", "10px"], ["type", "button", 1, "btn", "btn-outline-secondary", 2, "padding", "4px", 3, "click"], [1, "far", "fa-calendar-alt"], ["placeholder", "Final", "name", "dataFinal", "autocomplete", "off", "readonly", "", 1, "form-control", "col-sm-10", 3, "ngModel", "value", "ngModelChange", "input"], ["dataFinal", ""], [1, "custom-day", 3, "mouseenter", "mouseleave"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "ngClass"], ["class", "badge badge-warning", 4, "ngIf"], [1, "badge", "badge-warning"], ["type", "button", 1, "btn", "btn-danger", "btn-space", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [2, "display", "flex", "justify-content", "center", "align-items", "center"], ["color", "primary", "mode", "indeterminate"]],
      template: function AgendamentoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AgendamentoComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cliente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Barbeiro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tempo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ng-autocomplete", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgendamentoComponent_Template_ng_autocomplete_ngModelChange_18_listener($event) {
            return ctx.form.cliente_id = $event;
          })("inputChanged", function AgendamentoComponent_Template_ng_autocomplete_inputChanged_18_listener($event) {
            return ctx.getServerResponseClientes($event);
          })("inputCleared", function AgendamentoComponent_Template_ng_autocomplete_inputCleared_18_listener() {
            return ctx.searchClearedClientes();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AgendamentoComponent_ng_template_19_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AgendamentoComponent_ng_template_21_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgendamentoComponent_Template_select_ngModelChange_24_listener($event) {
            return ctx.form.barbeiro_id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AgendamentoComponent_option_27_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgendamentoComponent_Template_select_ngModelChange_29_listener($event) {
            return ctx.form.tempo = $event;
          })("change", function AgendamentoComponent_Template_select_change_29_listener($event) {
            return ctx.onBoxDueDates($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AgendamentoComponent_option_30_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AgendamentoComponent_div_31_Template, 20, 8, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgendamentoComponent_Template_button_click_34_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Pesquisar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgendamentoComponent_Template_button_click_41_listener() {
            return ctx.openModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Novo agendamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Buscar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AgendamentoComponent_Template_input_keyup_48_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "table", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](50, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AgendamentoComponent_th_51_Template, 2, 0, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AgendamentoComponent_td_52_Template, 3, 7, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](53, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AgendamentoComponent_th_54_Template, 2, 0, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AgendamentoComponent_td_55_Template, 6, 14, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](56, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AgendamentoComponent_th_57_Template, 2, 0, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AgendamentoComponent_td_58_Template, 4, 10, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](59, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AgendamentoComponent_th_60_Template, 2, 0, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AgendamentoComponent_td_61_Template, 3, 7, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](62, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AgendamentoComponent_th_63_Template, 2, 0, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AgendamentoComponent_td_64_Template, 3, 7, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](65, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AgendamentoComponent_th_66_Template, 2, 0, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AgendamentoComponent_td_67_Template, 3, 7, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](68, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AgendamentoComponent_th_69_Template, 1, 0, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AgendamentoComponent_td_70_Template, 6, 6, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, AgendamentoComponent_tr_71_Template, 1, 0, "tr", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AgendamentoComponent_tr_72_Template, 1, 0, "tr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, AgendamentoComponent_mat_card_73_Template, 2, 0, "mat-card", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "mat-paginator", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.cliente_id)("data", ctx.clientes)("searchKeyword", ctx.keyword)("isLoading", ctx.isLoadingResult)("itemTemplate", _r18)("notFoundTemplate", _r20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.barbeiro_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.barbeiros);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.tempo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tempo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.duedates);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.errorMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("hidden", !ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutocompleteComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinner"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
      styles: [".card[_ngcontent-%COMP%] {\n    background-color: white;\n}\n.mat-input-element[_ngcontent-%COMP%] {\n    color:black;\n}\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.float-button[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n}\n.ng-autocomplete[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.form-group.hidden[_ngcontent-%COMP%] {\n    width: 0;\n    margin: 0;\n    border: none;\n    padding: 0;\n}\n.custom-day[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0.185rem 0.25rem;\n    display: inline-block;\n    height: 2rem;\n    width: 2rem;\n}\n.custom-day.focused[_ngcontent-%COMP%] {\n    background-color: #e6e6e6;\n}\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n    background-color: rgb(2, 117, 216);\n    color: white;\n}\n.custom-day.faded[_ngcontent-%COMP%] {\n    background-color: rgba(2, 117, 216, 0.5);\n}\n.antigo[_ngcontent-%COMP%] {\n    background-color: red; \n    color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZ2VuZGFtZW50by9hZ2VuZGFtZW50by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FnZW5kYW1lbnRvL2FnZW5kYW1lbnRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNvbG9yOmJsYWNrO1xufVxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmZsb2F0LWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNDBweDtcbiAgICByaWdodDogNDBweDtcbn1cbi5uZy1hdXRvY29tcGxldGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1ncm91cC5oaWRkZW4ge1xuICAgIHdpZHRoOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbn1cbi5jdXN0b20tZGF5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xufVxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cbi5jdXN0b20tZGF5LnJhbmdlLCAuY3VzdG9tLWRheTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uY3VzdG9tLWRheS5mYWRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cbi5hbnRpZ28ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDsgXG4gICAgY29sb3I6d2hpdGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgendamentoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-agendamento',
          templateUrl: './agendamento.component.html',
          styleUrls: ['./agendamento.component.css'],
          providers: [I18n, {
            provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"],
            useClass: CustomDatepickerI18n
          }, {
            provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
            useClass: CustomAdapter
          }, {
            provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"],
            useClass: CustomDateParserFormatter
          }] // define custom NgbDatepickerI18n provider

        }]
      }], function () {
        return [{
          type: _services_agendamento_service__WEBPACK_IMPORTED_MODULE_8__["AgendamentoService"]
        }, {
          type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_9__["ClienteService"]
        }, {
          type: _services_barbeiro_service__WEBPACK_IMPORTED_MODULE_10__["BarbeiroService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], {
            "static": true
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/barbeiro/barbeiro.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/barbeiro/barbeiro.component.ts ***!
    \***********************************************************/

  /*! exports provided: BarbeiroComponent */

  /***/
  function srcAppComponentsBarbeiroBarbeiroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarbeiroComponent", function () {
      return BarbeiroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _ce_ce_barbeiro_ce_barbeiro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ce/ce-barbeiro/ce-barbeiro.component */
    "./src/app/components/ce/ce-barbeiro/ce-barbeiro.component.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _services_barbeiro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/barbeiro.service */
    "./src/app/services/barbeiro.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function BarbeiroComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BarbeiroComponent_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r90 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r90.id, " ");
      }
    }

    function BarbeiroComponent_th_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nome");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BarbeiroComponent_td_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r91 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r91.nome, " ");
      }
    }

    function BarbeiroComponent_th_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BarbeiroComponent_td_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r92 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r92.fone, " ");
      }
    }

    function BarbeiroComponent_th_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "E-mail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BarbeiroComponent_td_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r93 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r93.email, " ");
      }
    }

    function BarbeiroComponent_th_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 18);
      }
    }

    function BarbeiroComponent_td_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarbeiroComponent_td_27_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var row_r94 = ctx.$implicit;

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r95.openModal(row_r94.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarbeiroComponent_td_27_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var row_r94 = ctx.$implicit;

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r97.delRowInTable(row_r94.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Apagar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BarbeiroComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
      }
    }

    function BarbeiroComponent_tr_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
      }
    }

    function BarbeiroComponent_mat_card_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 25, 100];
    };

    var BarbeiroComponent = /*#__PURE__*/function () {
      function BarbeiroComponent(BarbeiroService, dialog) {
        _classCallCheck(this, BarbeiroComponent);

        this.BarbeiroService = BarbeiroService;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'nome', 'fone', 'email', 'actions'];
        this.isLoading = true;
      }

      _createClass(BarbeiroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.BarbeiroService.getBarbeiros().subscribe(function (data) {
            _this10.isLoading = false;
            _this10.barbeiros = data; // Assign the data to the data source for the table to render

            _this10.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this10.barbeiros);
            _this10.dataSource.paginator = _this10.paginator;
            _this10.dataSource.sort = _this10.sort;
          }, function (error) {
            return _this10.isLoading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.barbeiros = null;
        }
      }, {
        key: "addRowInTable",
        value: function addRowInTable(data) {
          this.barbeiros.push(data[0]);

          this.dataSource._updateChangeSubscription();
        }
      }, {
        key: "updateRowInTable",
        value: function updateRowInTable(data) {
          var i = this.barbeiros.findIndex(function (d) {
            return d.id == data[0].id;
          });

          if (i >= 0) {
            this.barbeiros[i] = data[0];
          }

          this.dataSource._updateChangeSubscription();
        }
      }, {
        key: "delRowInTable",
        value: function delRowInTable(id) {
          var i = this.barbeiros.findIndex(function (d) {
            return d.id == id;
          });

          if (i >= 0) {
            this.barbeiros.splice(i, 1);
          }

          this.dataSource._updateChangeSubscription();

          this.BarbeiroService.apagar(id);
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();

          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        }
      }, {
        key: "openModal",
        value: function openModal(id) {
          var _this11 = this;

          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
          dialogConfig.data = {
            id: id
          };
          var dialogRef = this.dialog.open(_ce_ce_barbeiro_ce_barbeiro_component__WEBPACK_IMPORTED_MODULE_2__["CeBarbeiroComponent"], dialogConfig);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              if (result[0].modo == 'editar') {
                _this11.updateRowInTable(result);
              } else {
                _this11.addRowInTable(result);
              }
            }
          });
        }
      }]);

      return BarbeiroComponent;
    }();

    BarbeiroComponent.ɵfac = function BarbeiroComponent_Factory(t) {
      return new (t || BarbeiroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_barbeiro_service__WEBPACK_IMPORTED_MODULE_6__["BarbeiroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    BarbeiroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BarbeiroComponent,
      selectors: [["app-barbeiro"]],
      viewQuery: function BarbeiroComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 32,
      vars: 6,
      consts: [[1, "card", "card-center", "col-10"], [1, "card-body"], [1, "row"], [1, "col"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["matInput", "", 3, "keyup"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nome"], ["matColumnDef", "fone"], ["matColumnDef", "email"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["style", "display: flex; justify-content: center; align-items: center", 4, "ngIf"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["type", "button", 1, "btn", "btn-info", "btn-space", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-space", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [2, "display", "flex", "justify-content", "center", "align-items", "center"], ["color", "primary", "mode", "indeterminate"]],
      template: function BarbeiroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarbeiroComponent_Template_button_click_4_listener() {
            return ctx.openModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Novo barbeiro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buscar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BarbeiroComponent_Template_input_keyup_11_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BarbeiroComponent_th_14_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BarbeiroComponent_td_15_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BarbeiroComponent_th_17_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BarbeiroComponent_td_18_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BarbeiroComponent_th_20_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BarbeiroComponent_td_21_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BarbeiroComponent_th_23_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BarbeiroComponent_td_24_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BarbeiroComponent_th_26_Template, 1, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BarbeiroComponent_td_27_Template, 5, 0, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, BarbeiroComponent_tr_28_Template, 1, 0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, BarbeiroComponent_tr_29_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BarbeiroComponent_mat_card_30_Template, 2, 0, "mat-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-paginator", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinner"]],
      styles: [".card[_ngcontent-%COMP%] {\n    background-color: white;\n}\n.mat-input-element[_ngcontent-%COMP%] {\n    color:black;\n}\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXJiZWlyby9iYXJiZWlyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFyYmVpcm8vYmFyYmVpcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY29sb3I6YmxhY2s7XG59XG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarbeiroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-barbeiro',
          templateUrl: './barbeiro.component.html',
          styleUrls: ['./barbeiro.component.css']
        }]
      }], function () {
        return [{
          type: _services_barbeiro_service__WEBPACK_IMPORTED_MODULE_6__["BarbeiroService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
            "static": true
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/ce/ce-agendamento/ce-agendamento.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/ce/ce-agendamento/ce-agendamento.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CustomDateParserFormatter, CeAgendamentoComponent */

  /***/
  function srcAppComponentsCeCeAgendamentoCeAgendamentoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomDateParserFormatter", function () {
      return CustomDateParserFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CeAgendamentoComponent", function () {
      return CeAgendamentoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../global-constants */
    "./src/app/global-constants.ts");
    /* harmony import */


    var _services_agendamento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/agendamento.service */
    "./src/app/services/agendamento.service.ts");
    /* harmony import */


    var _services_cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/cliente.service */
    "./src/app/services/cliente.service.ts");
    /* harmony import */


    var _services_barbeiro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/barbeiro.service */
    "./src/app/services/barbeiro.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CeAgendamentoComponent_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 28);
      }

      if (rf & 2) {
        var item_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r12.nome, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function CeAgendamentoComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cliente n\xE3o encontrado.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CeAgendamentoComponent_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var b_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", b_r14.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r14.nome);
      }
    }

    function CeAgendamentoComponent_option_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var s_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", s_r15.nome);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r15.nome);
      }
    }

    var API_URL = _global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].API_URL;
    /**
     * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
     */

    var CustomDateParserFormatter = /*#__PURE__*/function (_ng_bootstrap_ng_boot4) {
      _inherits(CustomDateParserFormatter, _ng_bootstrap_ng_boot4);

      var _super4 = _createSuper(CustomDateParserFormatter);

      function CustomDateParserFormatter() {
        var _this12;

        _classCallCheck(this, CustomDateParserFormatter);

        _this12 = _super4.apply(this, arguments);
        _this12.DELIMITER = '-';
        _this12.DELIMITER_SHOW = '/';
        _this12.DELIMITER_TIME = ':';
        return _this12;
      }

      _createClass(CustomDateParserFormatter, [{
        key: "parse",
        value: function parse(value) {
          if (value) {
            var date = value.split(this.DELIMITER);
            return {
              day: parseInt(date[2], 10),
              month: parseInt(date[1], 10),
              year: parseInt(date[0], 10)
            };
          }

          return null;
        }
      }, {
        key: "format",
        value: function format(date) {
          return date ? date.day + this.DELIMITER_SHOW + date.month + this.DELIMITER_SHOW + date.year : '';
        }
      }]);

      return CustomDateParserFormatter;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]);

    CustomDateParserFormatter.ɵfac = function CustomDateParserFormatter_Factory(t) {
      return ɵCustomDateParserFormatter_BaseFactory(t || CustomDateParserFormatter);
    };

    CustomDateParserFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomDateParserFormatter,
      factory: CustomDateParserFormatter.ɵfac
    });

    var ɵCustomDateParserFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomDateParserFormatter);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomDateParserFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();

    var CeAgendamentoComponent = /*#__PURE__*/function () {
      function CeAgendamentoComponent(dialogRef, AgendamentoService, ClienteService, BarbeiroService, _http, formatter, data) {
        var _this13 = this;

        _classCallCheck(this, CeAgendamentoComponent);

        this.dialogRef = dialogRef;
        this.AgendamentoService = AgendamentoService;
        this.ClienteService = ClienteService;
        this.BarbeiroService = BarbeiroService;
        this._http = _http;
        this.formatter = formatter;
        this.keyword = 'nome';
        this.duedates = false;
        this.agendamento = [{
          id: null,
          descricao: '',
          cliente_id: null,
          barbeiro_id: null,
          dataagendamento: null
        }];
        this.config = {
          format: "DD/MM/YYYY HH:mm"
        };
        this.servicos = [{
          nome: 'BARBA'
        }, {
          nome: 'CABELO'
        }, {
          nome: 'BARBA+CABELO'
        }];

        if (data.id != null) {
          this.modo = 'Editar';
          var formID = {
            id: data.id
          };

          this._http.post(API_URL + '/agendamentos/find', formID).subscribe(function (agendamento) {
            _this13.agendamento = [];

            var _iterator2 = _createForOfIteratorHelper(agendamento),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var p = _step2.value;
                var c = p.cliente;
                _this13.tempClienteNome = c.nome;
                _this13.fromDate = _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(_this13.formatter.parse(p.dataagendamento));
                _this13.fromTime = _this13.parseTime(p.dataagendamento.substr(11, 5));

                _this13.agendamento.push(p);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          });
        } else {
          this.modo = 'Novo';
        }
      }

      _createClass(CeAgendamentoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getClientes();
          this.getBarbeiros();
        }
      }, {
        key: "parseTime",
        value: function parseTime(value) {
          if (value) {
            var time = value.split(':');
            return {
              hour: parseInt(time[0], 10),
              minute: parseInt(time[1], 10),
              second: 0
            };
          }
        }
      }, {
        key: "getAgendamento",
        value: function getAgendamento(value) {
          var _this14 = this;

          this.AgendamentoService.getAgendamentos(value).subscribe(function (agendamento) {
            return _this14.agendamento = agendamento;
          }, function (error) {
            return _this14.handleError(error);
          });
        }
      }, {
        key: "postAgendamento",
        value: function postAgendamento(value) {
          var _this15 = this;

          this.AgendamentoService.postAgendamento(value).subscribe(function (agendamento) {
            _this15.dialogRef.close(agendamento);
          }, function (error) {
            _this15.handleError(error);
          });
        }
      }, {
        key: "getClientes",
        value: function getClientes() {
          var _this16 = this;

          this.ClienteService.getClientes().subscribe(function (clientes) {
            return _this16.clientes = clientes;
          }, function (error) {
            return _this16.error = error;
          });
        }
      }, {
        key: "getBarbeiros",
        value: function getBarbeiros() {
          var _this17 = this;

          this.BarbeiroService.getBarbeiros().subscribe(function (barbeiros) {
            return _this17.barbeiros = barbeiros;
          }, function (error) {
            return _this17.error = error;
          });
        }
      }, {
        key: "pad",
        value: function pad(num, size) {
          var s = num + "";

          while (s.length < size) {
            s = "0" + s;
          }

          return s;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var tempData;

          for (var _i2 = 0, _Object$keys2 = Object.keys(this.fromDate); _i2 < _Object$keys2.length; _i2++) {
            var d = _Object$keys2[_i2];

            if (d === "year") {
              tempData = this.fromDate[d];
            }

            if (d === "month") {
              tempData += '-' + this.fromDate[d];
            }

            if (d === "day") {
              tempData += '-' + this.fromDate[d];
            }
          }

          if (this.fromDate && this.fromTime) {
            this.agendamento[0].dataagendamento = new Date(tempData + ' ' + this.pad(this.fromTime.hour, 2) + ':' + this.pad(this.fromTime.minute, 2));
          } else {
            this.agendamento[0].dataagendamento = null;
          }

          this.error = null;
          this.postAgendamento(this.agendamento[0]);
        }
      }, {
        key: "cancelar",
        value: function cancelar() {
          this.dialogRef.close(null);
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          this.error = '<table>';

          for (var _i3 = 0, _Object$keys3 = Object.keys(error.error.errors); _i3 < _Object$keys3.length; _i3++) {
            var e = _Object$keys3[_i3];
            this.error += "<tr><td><div class='alert alert-danger'>" + error.error.errors[e][0] + "</div></td></tr>";
          }

          this.error += '<table>';
        }
      }, {
        key: "getServerResponseClientes",
        value: function getServerResponseClientes(event) {
          var _this18 = this;

          this.isLoadingResult = true;
          this.ClienteService.getBuscaClientes(event).subscribe(function (data) {
            if (data[0]['nome'] == undefined) {
              _this18.clientes = [];
            } else {
              _this18.clientes = data;
            }

            _this18.isLoadingResult = false;
          });
        }
      }, {
        key: "searchClearedClientes",
        value: function searchClearedClientes() {
          this.agendamento[0].cliente_id = 0;
          this.clientes = [];
        }
      }, {
        key: "selectEvent",
        value: function selectEvent(item) {
          if (item) {
            var id_cliente = item.id;
            this.agendamento[0].cliente_id = id_cliente;
          }
        }
      }]);

      return CeAgendamentoComponent;
    }();

    CeAgendamentoComponent.ɵfac = function CeAgendamentoComponent_Factory(t) {
      return new (t || CeAgendamentoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_agendamento_service__WEBPACK_IMPORTED_MODULE_4__["AgendamentoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_barbeiro_service__WEBPACK_IMPORTED_MODULE_6__["BarbeiroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
    };

    CeAgendamentoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CeAgendamentoComponent,
      selectors: [["app-ce-agendamento"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"],
        useClass: CustomDateParserFormatter
      }])],
      decls: 53,
      vars: 16,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["agendamentosForm", "ngForm"], [1, "container"], [1, "row"], [1, "form-group"], [1, "ng-autocomplete"], ["name", "tempClienteNome", "required", "", "placeHolder", "Digite o nome do cliente", "minQueryLength", "2", 3, "ngModel", "data", "searchKeyword", "isLoading", "itemTemplate", "notFoundTemplate", "ngModelChange", "selected", "closed", "inputChanged", "inputCleared"], ["itemTemplate", ""], ["notFoundTemplate", ""], ["name", "barbeiro_id", "required", "", 1, "custom-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "descricao", "required", "", 1, "custom-select", 3, "ngModel", "ngModelChange"], [1, "input-group"], ["required", "", "autocomplete", "off", "placeholder", "Data", "name", "dataagendamento", "ngbDatepicker", "", 1, "form-control", "col-sm-5", 3, "ngModel", "value", "ngModelChange"], ["dataagendamento", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "far", "fa-calendar-alt"], ["name", "fromTime", "required", "", 2, "border-left", "0", 3, "ngModel", "ngModelChange"], [1, "row", 3, "innerHtml", "hidden"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-info", "btn-space", 3, "click"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [3, "innerHTML"], [2, "color", "black", "padding", "10px"], [3, "value"]],
      template: function CeAgendamentoComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CeAgendamentoComponent_Template_button_click_3_listener() {
            return ctx.cancelar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CeAgendamentoComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cliente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ng-autocomplete", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeAgendamentoComponent_Template_ng_autocomplete_ngModelChange_15_listener($event) {
            return ctx.tempClienteNome = $event;
          })("selected", function CeAgendamentoComponent_Template_ng_autocomplete_selected_15_listener($event) {
            return ctx.selectEvent($event);
          })("closed", function CeAgendamentoComponent_Template_ng_autocomplete_closed_15_listener($event) {
            return ctx.selectEvent($event);
          })("inputChanged", function CeAgendamentoComponent_Template_ng_autocomplete_inputChanged_15_listener($event) {
            return ctx.getServerResponseClientes($event);
          })("inputCleared", function CeAgendamentoComponent_Template_ng_autocomplete_inputCleared_15_listener() {
            return ctx.searchClearedClientes();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CeAgendamentoComponent_ng_template_16_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CeAgendamentoComponent_ng_template_18_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Barbeiros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeAgendamentoComponent_Template_select_ngModelChange_24_listener($event) {
            return ctx.agendamento[0].barbeiro_id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CeAgendamentoComponent_option_25_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Servi\xE7os:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeAgendamentoComponent_Template_select_ngModelChange_30_listener($event) {
            return ctx.agendamento[0].descricao = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CeAgendamentoComponent_option_31_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Data:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeAgendamentoComponent_Template_input_ngModelChange_37_listener($event) {
            return ctx.fromDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CeAgendamentoComponent_Template_button_click_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return _r11.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Hora:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ngb-timepicker", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeAgendamentoComponent_Template_ngb_timepicker_ngModelChange_46_listener($event) {
            return ctx.fromTime = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CeAgendamentoComponent_Template_button_click_49_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Salvar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CeAgendamentoComponent_Template_button_click_51_listener() {
            return ctx.cancelar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tempClienteNome)("data", ctx.clientes)("searchKeyword", ctx.keyword)("isLoading", ctx.isLoadingResult)("itemTemplate", _r5)("notFoundTemplate", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.agendamento[0].barbeiro_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.barbeiros);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.agendamento[0].descricao);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fromDate)("value", ctx.formatter.format(ctx.fromDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fromTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.error, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("hidden", !ctx.error);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutocompleteComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"]],
      styles: [".ng-autocomplete[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.close[_ngcontent-%COMP%] {\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jZS9jZS1hZ2VuZGFtZW50by9jZS1hZ2VuZGFtZW50by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jZS9jZS1hZ2VuZGFtZW50by9jZS1hZ2VuZGFtZW50by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLWF1dG9jb21wbGV0ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY2xvc2Uge1xuICAgIGNvbG9yOiBibGFjaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CeAgendamentoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ce-agendamento',
          templateUrl: './ce-agendamento.component.html',
          styleUrls: ['./ce-agendamento.component.css'],
          providers: [{
            provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"],
            useClass: CustomDateParserFormatter
          }]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: _services_agendamento_service__WEBPACK_IMPORTED_MODULE_4__["AgendamentoService"]
        }, {
          type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"]
        }, {
          type: _services_barbeiro_service__WEBPACK_IMPORTED_MODULE_6__["BarbeiroService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ce/ce-barbeiro/ce-barbeiro.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/ce/ce-barbeiro/ce-barbeiro.component.ts ***!
    \********************************************************************/

  /*! exports provided: CeBarbeiroComponent */

  /***/
  function srcAppComponentsCeCeBarbeiroCeBarbeiroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CeBarbeiroComponent", function () {
      return CeBarbeiroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../global-constants */
    "./src/app/global-constants.ts");
    /* harmony import */


    var src_app_services_barbeiro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/barbeiro.service */
    "./src/app/services/barbeiro.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var API_URL = _global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].API_URL;

    var CeBarbeiroComponent = /*#__PURE__*/function () {
      function CeBarbeiroComponent(dialogRef, BarbeiroService, _http, data) {
        var _this19 = this;

        _classCallCheck(this, CeBarbeiroComponent);

        this.dialogRef = dialogRef;
        this.BarbeiroService = BarbeiroService;
        this._http = _http;
        this.barbeiro = [{
          id: null,
          nome: null,
          fone: null,
          email: null
        }];

        if (data.id != null) {
          this.modo = 'Editar';
          var formID = {
            id: data.id
          };

          this._http.post(API_URL + '/barbeiro/edit', formID).subscribe(function (barbeiro) {
            _this19.barbeiro = barbeiro;
          });
        } else {
          this.modo = 'Novo';
        }
      }

      _createClass(CeBarbeiroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cancelar",
        value: function cancelar() {
          this.dialogRef.close();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.error = null;
          this.post(this.barbeiro[0]);
        }
      }, {
        key: "post",
        value: function post(value) {
          var _this20 = this;

          this.BarbeiroService.post(value).subscribe(function (barbeiro) {
            _this20.dialogRef.close(barbeiro);
          }, function (error) {
            _this20.handleError(error);
          });
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          this.error = '<table>';

          for (var _i4 = 0, _Object$keys4 = Object.keys(error.error.errors); _i4 < _Object$keys4.length; _i4++) {
            var e = _Object$keys4[_i4];
            this.error += "<tr><td><div class='alert alert-danger'>" + error.error.errors[e][0] + "</div></td></tr>";
          }

          this.error += '<table>';
        }
      }]);

      return CeBarbeiroComponent;
    }();

    CeBarbeiroComponent.ɵfac = function CeBarbeiroComponent_Factory(t) {
      return new (t || CeBarbeiroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_barbeiro_service__WEBPACK_IMPORTED_MODULE_3__["BarbeiroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    CeBarbeiroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CeBarbeiroComponent,
      selectors: [["app-ce-barbeiro"]],
      decls: 31,
      vars: 6,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["barbeiroForm", "ngForm"], [1, "container"], [1, "row"], [1, "form-group"], ["type", "text", "required", "", "name", "nome", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "tel", "required", "", "name", "fone", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "required", "", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", 3, "innerHtml", "hidden"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-info", "btn-space", 3, "click"], ["type", "button", 1, "btn", "btn-light", 3, "click"]],
      template: function CeBarbeiroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CeBarbeiroComponent_Template_button_click_3_listener() {
            return ctx.cancelar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CeBarbeiroComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Barbeiro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeBarbeiroComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.barbeiro[0].nome = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Fone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeBarbeiroComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.barbeiro[0].fone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeBarbeiroComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.barbeiro[0].email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CeBarbeiroComponent_Template_button_click_27_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Salvar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CeBarbeiroComponent_Template_button_click_29_listener() {
            return ctx.cancelar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.barbeiro[0].nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.barbeiro[0].fone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.barbeiro[0].email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.error, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("hidden", !ctx.error);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: [".close[_ngcontent-%COMP%] {\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jZS9jZS1iYXJiZWlyby9jZS1iYXJiZWlyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2UvY2UtYmFyYmVpcm8vY2UtYmFyYmVpcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZSB7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CeBarbeiroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ce-barbeiro',
          templateUrl: './ce-barbeiro.component.html',
          styleUrls: ['./ce-barbeiro.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: src_app_services_barbeiro_service__WEBPACK_IMPORTED_MODULE_3__["BarbeiroService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ce/ce-cliente/ce-cliente.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/ce/ce-cliente/ce-cliente.component.ts ***!
    \******************************************************************/

  /*! exports provided: CeClienteComponent */

  /***/
  function srcAppComponentsCeCeClienteCeClienteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CeClienteComponent", function () {
      return CeClienteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../global-constants */
    "./src/app/global-constants.ts");
    /* harmony import */


    var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/cliente.service */
    "./src/app/services/cliente.service.ts");
    /* harmony import */


    var _services_uf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/uf.service */
    "./src/app/services/uf.service.ts");
    /* harmony import */


    var _services_municipio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/municipio.service */
    "./src/app/services/municipio.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CeClienteComponent_option_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var uf_r102 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", uf_r102.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](uf_r102.nome);
      }
    }

    function CeClienteComponent_option_78_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r103 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r103.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r103.nome);
      }
    }

    var API_URL = _global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].API_URL;

    var CeClienteComponent = /*#__PURE__*/function () {
      function CeClienteComponent(dialogRef, ClienteService, UfService, MunicipiosService, _http, data) {
        var _this21 = this;

        _classCallCheck(this, CeClienteComponent);

        this.dialogRef = dialogRef;
        this.ClienteService = ClienteService;
        this.UfService = UfService;
        this.MunicipiosService = MunicipiosService;
        this._http = _http;
        this.cliente = [{
          id: null,
          nome: null,
          sobrenome: null,
          apelido: null,
          cpf: null,
          fone1: null,
          fone2: null,
          email: null
        }];
        this.endereco = [{
          id: null,
          logradouro: null,
          numero: null,
          complemento: null,
          bairro: null,
          municipio_id: null,
          cep: null
        }];
        this.panelOpenState = false;

        if (data.id != null) {
          this.modo = 'Editar';
          var formID = {
            id: data.id
          };

          this._http.post(API_URL + '/cliente/edit', formID).subscribe(function (cliente) {
            _this21.cliente = cliente;

            if (cliente[0]['endereco_id']) {
              _this21.endereco = [{
                id: cliente[0]['endereco_id'],
                logradouro: cliente[0]['logradouro'],
                numero: cliente[0]['numero'],
                complemento: cliente[0]['complemento'],
                bairro: cliente[0]['bairro'],
                municipio_id: cliente[0]['municipio_id'],
                cep: cliente[0]['cep']
              }];
              _this21.uf = cliente[0]['uf_id'];
              _this21.municipio = cliente[0]['municipio_id'];

              if (_this21.uf) {
                _this21.selectMunicipio(_this21.uf);
              }
            }
          });
        } else {
          this.modo = 'Novo';
        }
      }

      _createClass(CeClienteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ufs = this.UfService.ufs;
        }
      }, {
        key: "selectMunicipio",
        value: function selectMunicipio(uf_id) {
          var _this22 = this;

          if (uf_id) {
            this.municipios = [{
              id: 0,
              nome: 'Carregando...'
            }];
            this.MunicipiosService.getMunicipios(uf_id).subscribe(function (municipios) {
              return _this22.municipios = municipios;
            }, function (error) {
              return _this22.handleError(error);
            });
          } else {
            this.municipios = null;
          }
        }
      }, {
        key: "cancelar",
        value: function cancelar() {
          this.dialogRef.close();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.error = null;
          this.cliente[0]['logradouro'] = this.endereco[0]['logradouro'];
          this.cliente[0]['numero'] = this.endereco[0]['numero'];
          this.cliente[0]['complemento'] = this.endereco[0]['complemento'];
          this.cliente[0]['bairro'] = this.endereco[0]['bairro'];
          this.cliente[0]['municipio_id'] = this.municipio;
          this.cliente[0]['cep'] = this.endereco[0]['cep'];
          this.cliente[0]['uf_id'] = this.uf;
          this.cliente[0]['modo'] = this.modo;
          this.post(this.cliente[0]);
        }
      }, {
        key: "post",
        value: function post(value) {
          var _this23 = this;

          this.ClienteService.post(value).subscribe(function (data) {
            _this23.dialogRef.close(data);
          }, function (error) {
            _this23.handleError(error);
          });
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          this.error = '<table>';

          for (var _i5 = 0, _Object$keys5 = Object.keys(error.error.errors); _i5 < _Object$keys5.length; _i5++) {
            var e = _Object$keys5[_i5];
            this.error += "<tr><td><div class='alert alert-danger'>" + error.error.errors[e][0] + "</div></td></tr>";
          }

          this.error += '<table>';
        }
      }]);

      return CeClienteComponent;
    }();

    CeClienteComponent.ɵfac = function CeClienteComponent_Factory(t) {
      return new (t || CeClienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_uf_service__WEBPACK_IMPORTED_MODULE_4__["UfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_municipio_service__WEBPACK_IMPORTED_MODULE_5__["MunicipioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    CeClienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CeClienteComponent,
      selectors: [["app-ce-cliente"]],
      decls: 85,
      vars: 20,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["barbeiroForm", "ngForm"], ["dynamicHeight", ""], ["label", "Perfil"], [1, "tap-large-box", "mat-elevation-z4"], [1, "container"], [1, "row"], [1, "form-group"], ["type", "text", "required", "", "name", "nome", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "sobrenome", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "cpf", "mask", "000.000.000-00", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "fone1", "mask", "(00) 00000-0000", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "fone2", "mask", "(00) 00000-0000", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["label", "Endere\xE7o"], ["type", "text", "name", "logradouro", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "bairro", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "numero", 1, "form-control", "col-4", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "complemento", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "cep", "mask", "00000-000", 1, "form-control", "col-6", 3, "ngModel", "ngModelChange"], ["name", "uf", 1, "custom-select", 3, "ngModel", "ngModelChange", "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "municipio", 1, "custom-select", 3, "ngModel", "ngModelChange"], [1, "row", 3, "innerHtml", "hidden"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-info", "btn-space", 3, "click"], ["type", "button", 1, "btn", "btn-light", 3, "click"]],
      template: function CeClienteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CeClienteComponent_Template_button_click_3_listener() {
            return ctx.cancelar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CeClienteComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab-group", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeClienteComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.cliente[0].nome = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sobrenome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeClienteComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.cliente[0].sobrenome = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CPF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeClienteComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.cliente[0].cpf = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Fone 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeClienteComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.cliente[0].fone1 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Fone 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeClienteComponent_Template_input_ngModelChange_35_listener($event) {
            return ctx.cliente[0].fone2 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeClienteComponent_Template_input_ngModelChange_40_listener($event) {
            return ctx.cliente[0].email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-tab", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Rua");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeClienteComponent_Template_input_ngModelChange_48_listener($event) {
            return ctx.endereco[0].logradouro = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Bairro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeClienteComponent_Template_input_ngModelChange_52_listener($event) {
            return ctx.endereco[0].bairro = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "N\xFAmero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeClienteComponent_Template_input_ngModelChange_56_listener($event) {
            return ctx.endereco[0].numero = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Compl.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeClienteComponent_Template_input_ngModelChange_61_listener($event) {
            return ctx.endereco[0].complemento = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Cep");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeClienteComponent_Template_input_ngModelChange_65_listener($event) {
            return ctx.endereco[0].cep = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "UF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeClienteComponent_Template_select_ngModelChange_70_listener($event) {
            return ctx.uf = $event;
          })("change", function CeClienteComponent_Template_select_change_70_listener($event) {
            return ctx.selectMunicipio($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, CeClienteComponent_option_72_Template, 2, 2, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Munic\xEDpio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "select", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeClienteComponent_Template_select_ngModelChange_76_listener($event) {
            return ctx.municipio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, CeClienteComponent_option_78_Template, 2, 2, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CeClienteComponent_Template_button_click_81_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Salvar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CeClienteComponent_Template_button_click_83_listener() {
            return ctx.cancelar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cliente[0].nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cliente[0].sobrenome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cliente[0].cpf);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cliente[0].fone1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cliente[0].fone2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cliente[0].email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.endereco[0].logradouro);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.endereco[0].bairro);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.endereco[0].numero);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.endereco[0].complemento);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.endereco[0].cep);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.uf);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ufs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.municipio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.municipios);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.error, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("hidden", !ctx.error);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ngx_mask__WEBPACK_IMPORTED_MODULE_9__["MaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]],
      styles: [".close[_ngcontent-%COMP%] {\n    color: black;\n}\n\n.tap-small-box[_ngcontent-%COMP%], .tap-large-box[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 16px;\n    padding: 16px;\n    border-radius: 8px;\n}\n\n.tap-small-box[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 100px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jZS9jZS1jbGllbnRlL2NlLWNsaWVudGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBOzs7O0VBSUUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NlL2NlLWNsaWVudGUvY2UtY2xpZW50ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi50YXAtc21hbGwtYm94LCAudGFwLWxhcmdlLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMTZweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnRhcC1zbWFsbC1ib3gge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi8qXG4udGFwLWxhcmdlLWJveCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMzAwcHg7XG59Ki8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CeClienteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ce-cliente',
          templateUrl: './ce-cliente.component.html',
          styleUrls: ['./ce-cliente.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]
        }, {
          type: _services_uf_service__WEBPACK_IMPORTED_MODULE_4__["UfService"]
        }, {
          type: _services_municipio_service__WEBPACK_IMPORTED_MODULE_5__["MunicipioService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ce/ce-usuario/ce-usuario.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/ce/ce-usuario/ce-usuario.component.ts ***!
    \******************************************************************/

  /*! exports provided: CeUsuarioComponent */

  /***/
  function srcAppComponentsCeCeUsuarioCeUsuarioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CeUsuarioComponent", function () {
      return CeUsuarioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../global-constants */
    "./src/app/global-constants.ts");
    /* harmony import */


    var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CeUsuarioComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeUsuarioComponent_div_20_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131);

          var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r130.form.editPassword = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mudar senha");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r127.form.editPassword)("value", true);
      }
    }

    function CeUsuarioComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Senha");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeUsuarioComponent_div_21_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133);

          var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r132.usuario[0].password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r128.usuario[0].password);
      }
    }

    function CeUsuarioComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirma\xE7\xE3o de Senha");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeUsuarioComponent_div_22_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r135);

          var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r134.form.password_confirmation = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r129.form.password_confirmation);
      }
    }

    var API_URL = _global_constants__WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].API_URL;

    var CeUsuarioComponent = /*#__PURE__*/function () {
      function CeUsuarioComponent(dialogRef, UsuarioService, _http, data) {
        var _this24 = this;

        _classCallCheck(this, CeUsuarioComponent);

        this.dialogRef = dialogRef;
        this.UsuarioService = UsuarioService;
        this._http = _http;
        this.usuario = [{
          id: null,
          name: null,
          email: null,
          password: null
        }];
        this.form = {
          editPassword: null,
          password_confirmation: null
        };

        if (data.id != null) {
          this.modo = 'Editar';
          var formID = {
            id: data.id
          };

          this._http.post(API_URL + '/usuario/edit', formID).subscribe(function (usuario) {
            _this24.usuario = usuario;
          });
        } else {
          this.modo = 'Novo';
          this.form.editPassword = true;
        }
      }

      _createClass(CeUsuarioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cancelar",
        value: function cancelar() {
          this.dialogRef.close();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.error = null;
          this.usuario[0]['editPassword'] = this.form['editPassword'];
          this.usuario[0]['password_confirmation'] = this.form['password_confirmation'];
          this.post(this.usuario[0]);
        }
      }, {
        key: "post",
        value: function post(value) {
          var _this25 = this;

          this.UsuarioService.post(value).subscribe(function (data) {
            _this25.dialogRef.close(data);
          }, function (error) {
            _this25.handleError(error);
          });
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          this.error = '<table>';

          for (var _i6 = 0, _Object$keys6 = Object.keys(error.error.errors); _i6 < _Object$keys6.length; _i6++) {
            var e = _Object$keys6[_i6];
            this.error += "<tr><td><div class='alert alert-danger'>" + error.error.errors[e][0] + "</div></td></tr>";
          }

          this.error += '<table>';
        }
      }]);

      return CeUsuarioComponent;
    }();

    CeUsuarioComponent.ɵfac = function CeUsuarioComponent_Factory(t) {
      return new (t || CeUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    CeUsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CeUsuarioComponent,
      selectors: [["app-ce-usuario"]],
      decls: 29,
      vars: 8,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["barbeiroForm", "ngForm"], [1, "container"], [1, "row"], [1, "form-group"], ["type", "text", "required", "", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "required", "", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "row", 4, "ngIf"], [1, "row", 3, "innerHtml", "hidden"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-info", "btn-space", 3, "click"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "editPassword", "name", "editPassword", 1, "custom-control-input", 3, "ngModel", "value", "ngModelChange"], ["for", "editPassword", 1, "custom-control-label"], ["type", "password", "required", "", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "required", "", "name", "password_confirmation", 1, "form-control", 3, "ngModel", "ngModelChange"]],
      template: function CeUsuarioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CeUsuarioComponent_Template_button_click_3_listener() {
            return ctx.cancelar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CeUsuarioComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Usu\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeUsuarioComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.usuario[0].name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CeUsuarioComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.usuario[0].email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CeUsuarioComponent_div_20_Template, 5, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CeUsuarioComponent_div_21_Template, 5, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CeUsuarioComponent_div_22_Template, 5, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CeUsuarioComponent_Template_button_click_25_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Salvar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CeUsuarioComponent_Template_button_click_27_listener() {
            return ctx.cancelar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario[0].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usuario[0].email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario[0].id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.editPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.editPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.error, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("hidden", !ctx.error);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"]],
      styles: [".close[_ngcontent-%COMP%] {\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jZS9jZS11c3VhcmlvL2NlLXVzdWFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NlL2NlLXVzdWFyaW8vY2UtdXN1YXJpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlIHtcbiAgICBjb2xvcjogYmxhY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CeUsuarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ce-usuario',
          templateUrl: './ce-usuario.component.html',
          styleUrls: ['./ce-usuario.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/cliente/cliente.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/cliente/cliente.component.ts ***!
    \*********************************************************/

  /*! exports provided: ClienteComponent */

  /***/
  function srcAppComponentsClienteClienteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClienteComponent", function () {
      return ClienteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _ce_ce_cliente_ce_cliente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ce/ce-cliente/ce-cliente.component */
    "./src/app/components/ce/ce-cliente/ce-cliente.component.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _services_cliente_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/cliente.service */
    "./src/app/services/cliente.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function ClienteComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClienteComponent_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r117 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r117.id, " ");
      }
    }

    function ClienteComponent_th_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nome");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClienteComponent_td_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r118 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r118.nome, " ");
      }
    }

    function ClienteComponent_th_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClienteComponent_td_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r119 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r119.fone, " ");
      }
    }

    function ClienteComponent_th_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "E-mail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClienteComponent_td_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r120 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r120.email, " ");
      }
    }

    function ClienteComponent_th_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 18);
      }
    }

    function ClienteComponent_td_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClienteComponent_td_27_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123);

          var row_r121 = ctx.$implicit;

          var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r122.openModal(row_r121.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClienteComponent_td_27_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123);

          var row_r121 = ctx.$implicit;

          var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r124.delRowInTable(row_r121.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Apagar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClienteComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
      }
    }

    function ClienteComponent_tr_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
      }
    }

    function ClienteComponent_mat_card_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 25, 100];
    };

    var ClienteComponent = /*#__PURE__*/function () {
      function ClienteComponent(ClienteService, dialog) {
        _classCallCheck(this, ClienteComponent);

        this.ClienteService = ClienteService;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'nome', 'fone', 'email', 'actions'];
        this.isLoading = true;
      }

      _createClass(ClienteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.ClienteService.getClientes().subscribe(function (data) {
            _this26.isLoading = false;
            _this26.clientes = data; // Assign the data to the data source for the table to render

            _this26.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this26.clientes);
            _this26.dataSource.paginator = _this26.paginator;
            _this26.dataSource.sort = _this26.sort;
          }, function (error) {
            return _this26.isLoading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.clientes = null;
        }
      }, {
        key: "addRowInTable",
        value: function addRowInTable(data) {
          this.clientes.push(data[0]);

          this.dataSource._updateChangeSubscription();
        }
      }, {
        key: "updateRowInTable",
        value: function updateRowInTable(data) {
          var i = this.clientes.findIndex(function (d) {
            return d.id == data[0].id;
          });

          if (i >= 0) {
            this.clientes[i] = data[0];
          }

          this.dataSource._updateChangeSubscription();
        }
      }, {
        key: "delRowInTable",
        value: function delRowInTable(id) {
          var i = this.clientes.findIndex(function (d) {
            return d.id == id;
          });

          if (i >= 0) {
            this.clientes.splice(i, 1);
          }

          this.dataSource._updateChangeSubscription();

          this.ClienteService.apagar(id);
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();

          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        }
      }, {
        key: "openModal",
        value: function openModal(id) {
          var _this27 = this;

          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
          dialogConfig.data = {
            id: id
          };
          var dialogRef = this.dialog.open(_ce_ce_cliente_ce_cliente_component__WEBPACK_IMPORTED_MODULE_2__["CeClienteComponent"], dialogConfig);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              if (result[0].modo == 'editar') {
                _this27.updateRowInTable(result);
              } else {
                _this27.addRowInTable(result);
              }
            }
          });
        }
      }]);

      return ClienteComponent;
    }();

    ClienteComponent.ɵfac = function ClienteComponent_Factory(t) {
      return new (t || ClienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cliente_service__WEBPACK_IMPORTED_MODULE_6__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    ClienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClienteComponent,
      selectors: [["app-cliente"]],
      viewQuery: function ClienteComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 32,
      vars: 6,
      consts: [[1, "card", "card-center", "col-10"], [1, "card-body"], [1, "row"], [1, "col"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["matInput", "", 3, "keyup"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nome"], ["matColumnDef", "fone"], ["matColumnDef", "email"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["style", "display: flex; justify-content: center; align-items: center", 4, "ngIf"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["type", "button", 1, "btn", "btn-info", "btn-space", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-space", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [2, "display", "flex", "justify-content", "center", "align-items", "center"], ["color", "primary", "mode", "indeterminate"]],
      template: function ClienteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClienteComponent_Template_button_click_4_listener() {
            return ctx.openModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Novo cliente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buscar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ClienteComponent_Template_input_keyup_11_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClienteComponent_th_14_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ClienteComponent_td_15_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ClienteComponent_th_17_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ClienteComponent_td_18_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ClienteComponent_th_20_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ClienteComponent_td_21_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ClienteComponent_th_23_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ClienteComponent_td_24_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ClienteComponent_th_26_Template, 1, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ClienteComponent_td_27_Template, 5, 0, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ClienteComponent_tr_28_Template, 1, 0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ClienteComponent_tr_29_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ClienteComponent_mat_card_30_Template, 2, 0, "mat-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-paginator", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinner"]],
      styles: [".card[_ngcontent-%COMP%] {\n    background-color: white;\n}\n.mat-input-element[_ngcontent-%COMP%] {\n    color:black;\n}\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRlL2NsaWVudGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsaWVudGUvY2xpZW50ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjb2xvcjpibGFjaztcbn1cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClienteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cliente',
          templateUrl: './cliente.component.html',
          styleUrls: ['./cliente.component.css']
        }]
      }], function () {
        return [{
          type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_6__["ClienteService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
            "static": true
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/jarwis.service */
    "./src/app/services/jarwis.service.ts");
    /* harmony import */


    var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(Jarwis, Token, router, Auth, UsuarioService) {
        _classCallCheck(this, LoginComponent);

        this.Jarwis = Jarwis;
        this.Token = Token;
        this.router = router;
        this.Auth = Auth;
        this.UsuarioService = UsuarioService;
        this.form = {
          email: null,
          password: null
        };
        this.error = null;
      }

      _createClass(LoginComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var _this28 = this;

          this.Jarwis.login(this.form).subscribe(function (data) {
            return _this28.handleResponse(data);
          }, function (error) {
            return _this28.handleError(error);
          });
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(data) {
          this.Token.handle(data.access_token);
          this.Auth.changeAuthStatus(true);
          this.UsuarioService.me();
          this.router.navigateByUrl('/agendamentos');
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          this.error = error.error.error;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 26,
      vars: 5,
      consts: [[1, "mt-4", "col-8", "offset-2"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "alert", "alert-danger", 3, "hidden"], [1, "form-group", "row"], ["for", "inputEmail3", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "email", "name", "email", "id", "inputEmail3", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword3", 1, "col-sm-2", "col-form-label"], ["type", "password", "name", "password", "id", "inputPassword3", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-10", "offset-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "float-right"], ["routerLink", "/request-password-reset"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Entre aqui");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.form.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.form.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Entrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "small", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Esqueci minha senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.error, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"]
        }, {
          type: _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../global-constants */
    "./src/app/global-constants.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/jarwis.service */
    "./src/app/services/jarwis.service.ts");
    /* harmony import */


    var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var ng_snotify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-snotify */
    "./node_modules/ng-snotify/__ivy_ngcc__/fesm2015/ng-snotify.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/agendamentos"];
    };

    var _c1 = function _c1() {
      return ["active"];
    };

    function NavbarComponent_a_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Agendamentos");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
      }
    }

    function NavbarComponent_a_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Barbeiros");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clientes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return ["/login"];
    };

    function NavbarComponent_li_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Entrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
      }
    }

    var _c3 = function _c3() {
      return ["/usuarios"];
    };

    function NavbarComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Configura\xE7\xF5es ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Usu\xE1rios");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_16_Template_a_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161);

          var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r160.logout($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sair");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
      }
    }

    var _c4 = function _c4() {
      return ["/barbeiros"];
    };

    var _c5 = function _c5() {
      return ["/clientes"];
    };

    var API_URL = _global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].API_URL;

    var NavbarComponent = /*#__PURE__*/function () {
      //userLogged: Usuario[] = [];
      function NavbarComponent(Auth, router, Jarwis, Token, //private UsuarioService: UsuarioService,
      Notfiy) {
        _classCallCheck(this, NavbarComponent);

        this.Auth = Auth;
        this.router = router;
        this.Jarwis = Jarwis;
        this.Token = Token;
        this.Notfiy = Notfiy;
        this.collapsed = true;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.Auth.authStatus.subscribe(function (value) {
            return _this29.loggedIn = value;
          });
          /*if (this.loggedIn) {
            this.userLogged = this.UsuarioService.userLogged
          }*/
        }
      }, {
        key: "logout",
        value: function logout(event) {
          this.Jarwis.logout();
          event.preventDefault();
          this.Token.remove();
          this.Auth.changeAuthStatus(false);
          this.Notfiy.clear();
          this.router.navigateByUrl('/login');
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_jarwis_service__WEBPACK_IMPORTED_MODULE_4__["JarwisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_snotify__WEBPACK_IMPORTED_MODULE_6__["SnotifyService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 17,
      vars: 17,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["class", "nav-link", "routerLink", "agendamentos", 3, "routerLink", "routerLinkActive", 4, "ngIf"], [1, "nav-item", 3, "routerLink", "routerLinkActive"], ["class", "nav-link", "routerLink", "/barbeiros", 4, "ngIf"], ["class", "nav-link", "routerLink", "/clientes", 4, "ngIf"], ["id", "navbarContent", 1, "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [4, "ngIf"], ["class", "nav-item", "ngbDropdown", "", "display", "dynamic", "placement", "bottom-right", 4, "ngIf"], ["routerLink", "agendamentos", 1, "nav-link", 3, "routerLink", "routerLinkActive"], ["routerLink", "/barbeiros", 1, "nav-link"], ["routerLink", "/clientes", 1, "nav-link"], ["routerLink", "login", 1, "nav-link", 3, "routerLink", "routerLinkActive"], ["ngbDropdown", "", "display", "dynamic", "placement", "bottom-right", 1, "nav-item"], ["ngbDropdownToggle", "", "id", "navbarDropdown3", "role", "button", 1, "nav-link", 2, "color", "white", "cursor", "pointer"], ["ngbDropdownMenu", "", "aria-labelledby", "navbarDropdown3", 1, "dropdown-menu"], ["ngbDropdownItem", "", "routerLink", "/usuarios", 3, "routerLink", "routerLinkActive"], ["ngbDropdownItem", "", "href", "#", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BarbeariaClub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_a_8_Template, 2, 4, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_a_10_Template, 2, 0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_a_12_Template, 2, 0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_li_15_Template, 4, 4, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavbarComponent_li_16_Template, 8, 4, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c5))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapse", ctx.collapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownItem"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_jarwis_service__WEBPACK_IMPORTED_MODULE_4__["JarwisService"]
        }, {
          type: _services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]
        }, {
          type: ng_snotify__WEBPACK_IMPORTED_MODULE_6__["SnotifyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/password/request-reset/request-reset.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/password/request-reset/request-reset.component.ts ***!
    \******************************************************************************/

  /*! exports provided: RequestResetComponent */

  /***/
  function srcAppComponentsPasswordRequestResetRequestResetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestResetComponent", function () {
      return RequestResetComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/jarwis.service */
    "./src/app/services/jarwis.service.ts");
    /* harmony import */


    var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-snotify */
    "./node_modules/ng-snotify/__ivy_ngcc__/fesm2015/ng-snotify.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var RequestResetComponent = /*#__PURE__*/function () {
      function RequestResetComponent(Jarvis, notify, Notfiy) {
        _classCallCheck(this, RequestResetComponent);

        this.Jarvis = Jarvis;
        this.notify = notify;
        this.Notfiy = Notfiy;
        this.form = {
          email: null
        };
      }

      _createClass(RequestResetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this30 = this;

          this.Notfiy.info('Wait...', {
            timeout: 5000
          });
          this.Jarvis.sendPasswordResetLink(this.form).subscribe(function (data) {
            return _this30.handleResponse(data);
          }, function (error) {
            return _this30.notify.error(error.error.error);
          });
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(res) {
          this.Notfiy.success(res.data, {
            timeout: 0
          });
          this.form.email = null;
        }
      }]);

      return RequestResetComponent;
    }();

    RequestResetComponent.ɵfac = function RequestResetComponent_Factory(t) {
      return new (t || RequestResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"]));
    };

    RequestResetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RequestResetComponent,
      selectors: [["app-request-reset"]],
      decls: 16,
      vars: 2,
      consts: [[1, "mt-4", "col-8", "offset-2"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit"], ["RequestResetForm", "ngForm"], [1, "form-group", "row"], ["for", "inputEmail3", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "email", "name", "email", "id", "inputEmail3", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-10", "offset-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
      template: function RequestResetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enviar email para redefinir senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RequestResetComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RequestResetComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.form.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Solicitar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFzc3dvcmQvcmVxdWVzdC1yZXNldC9yZXF1ZXN0LXJlc2V0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestResetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-request-reset',
          templateUrl: './request-reset.component.html',
          styleUrls: ['./request-reset.component.css']
        }]
      }], function () {
        return [{
          type: _services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"]
        }, {
          type: ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"]
        }, {
          type: ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/password/response-reset/response-reset.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/password/response-reset/response-reset.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ResponseResetComponent */

  /***/
  function srcAppComponentsPasswordResponseResetResponseResetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponseResetComponent", function () {
      return ResponseResetComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/jarwis.service */
    "./src/app/services/jarwis.service.ts");
    /* harmony import */


    var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-snotify */
    "./node_modules/ng-snotify/__ivy_ngcc__/fesm2015/ng-snotify.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ResponseResetComponent = /*#__PURE__*/function () {
      function ResponseResetComponent(route, Jarwis, router, Notify) {
        var _this31 = this;

        _classCallCheck(this, ResponseResetComponent);

        this.route = route;
        this.Jarwis = Jarwis;
        this.router = router;
        this.Notify = Notify;
        this.error = [];
        this.form = {
          email: null,
          password: null,
          password_confirmation: null,
          resetToken: null
        };
        route.queryParams.subscribe(function (params) {
          _this31.form.resetToken = params['token'];
        });
      }

      _createClass(ResponseResetComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var _this32 = this;

          this.Jarwis.changePassword(this.form).subscribe(function (data) {
            return _this32.handleResponse(data);
          }, function (error) {
            return _this32.handleError(error);
          });
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(data) {
          var _this33 = this;

          var _router = this.router;
          this.Notify.confirm('Done!, Now login with new Password', {
            buttons: [{
              text: 'Okay',
              action: function action(toster) {
                _router.navigateByUrl('/login'), _this33.Notify.remove(toster.id);
              }
            }]
          });
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          this.error = error.error.errors;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResponseResetComponent;
    }();

    ResponseResetComponent.ɵfac = function ResponseResetComponent_Factory(t) {
      return new (t || ResponseResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]));
    };

    ResponseResetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResponseResetComponent,
      selectors: [["app-response-reset"]],
      decls: 32,
      vars: 10,
      consts: [[1, "mt-4", "col-8", "offset-2"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit"], ["ResetPasswordForm", "ngForm"], [1, "form-group", "row"], ["for", "inputEmail3", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "email", "name", "email", "id", "inputEmail3", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-danger", 3, "hidden"], ["for", "inputPassword3", 1, "col-sm-2", "col-form-label"], ["type", "password", "name", "password", "id", "inputPassword3", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword4", 1, "col-sm-2", "col-form-label"], ["type", "password", "name", "password_confirmation", "id", "inputPassword4", "placeholder", "Confirm Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-10", "offset-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
      template: function ResponseResetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Redefinir senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResponseResetComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResponseResetComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.form.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResponseResetComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.form.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Repita senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResponseResetComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.form.password_confirmation = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Confirmar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.error.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.error.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.password_confirmation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.error.password_confirmation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error.password_confirmation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFzc3dvcmQvcmVzcG9uc2UtcmVzZXQvcmVzcG9uc2UtcmVzZXQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResponseResetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-response-reset',
          templateUrl: './response-reset.component.html',
          styleUrls: ['./response-reset.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/signup/signup.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/signup/signup.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppComponentsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/jarwis.service */
    "./src/app/services/jarwis.service.ts");
    /* harmony import */


    var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(Jarwis, Token, router) {
        _classCallCheck(this, SignupComponent);

        this.Jarwis = Jarwis;
        this.Token = Token;
        this.router = router;
        this.form = {
          email: null,
          name: null,
          password: null,
          password_confirmation: null
        };
        this.error = [];
      }

      _createClass(SignupComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var _this34 = this;

          this.Jarwis.signup(this.form).subscribe(function (data) {
            return _this34.handleResponse(data);
          }, function (error) {
            return _this34.handleError(error);
          });
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(data) {
          this.Token.handle(data.access_token);
          this.router.navigateByUrl('/agendamentos');
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          this.error = error.error.errors;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 39,
      vars: 11,
      consts: [[1, "mt-4", "col-8", "offset-2"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit"], ["signupForm", "ngForm"], [1, "form-group", "row"], ["for", "inputName3", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "name", "name", "id", "inputname3", "placeholder", "Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "inputEmail3", 1, "col-sm-2", "col-form-label"], ["type", "email", "name", "email", "id", "inputEmail3", "placeholder", "Email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPasswordConfirmation3", 1, "col-sm-2", "col-form-label"], ["type", "password", "name", "password", "id", "inputPasswordConfirmation3", "placeholder", "Confirm Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword3", 1, "col-sm-2", "col-form-label"], ["type", "password", "name", "password_confirmation", "id", "inputPassword3", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-10", "offset-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["routerLink", "/login", 1, "btn", "btn-info", "float-right"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.form.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.form.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.form.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_32_listener($event) {
            return ctx.form.password_confirmation = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.error.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.error.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.error.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.error.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.error.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.error.password, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.password_confirmation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _services_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"]
        }, {
          type: _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/usuario/usuario.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/usuario/usuario.component.ts ***!
    \*********************************************************/

  /*! exports provided: UsuarioComponent */

  /***/
  function srcAppComponentsUsuarioUsuarioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function () {
      return UsuarioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _ce_ce_usuario_ce_usuario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ce/ce-usuario/ce-usuario.component */
    "./src/app/components/ce/ce-usuario/ce-usuario.component.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function UsuarioComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsuarioComponent_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r147 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r147.id, " ");
      }
    }

    function UsuarioComponent_th_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nome");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsuarioComponent_td_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r148 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r148.name, " ");
      }
    }

    function UsuarioComponent_th_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "E-mail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsuarioComponent_td_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r149 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r149.email, " ");
      }
    }

    function UsuarioComponent_th_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
      }
    }

    function UsuarioComponent_td_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsuarioComponent_td_24_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r152);

          var row_r150 = ctx.$implicit;

          var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r151.openModal(row_r150.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsuarioComponent_td_24_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r152);

          var row_r150 = ctx.$implicit;

          var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r153.delRowInTable(row_r150.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Apagar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsuarioComponent_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
      }
    }

    function UsuarioComponent_tr_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
      }
    }

    function UsuarioComponent_mat_card_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 25, 100];
    };

    var UsuarioComponent = /*#__PURE__*/function () {
      function UsuarioComponent(UsuarioService, dialog) {
        _classCallCheck(this, UsuarioComponent);

        this.UsuarioService = UsuarioService;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'nome', 'email', 'actions'];
        this.isLoading = true;
      }

      _createClass(UsuarioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.UsuarioService.getUsuarios().subscribe(function (data) {
            _this35.isLoading = false;
            _this35.usuarios = data; // Assign the data to the data source for the table to render

            _this35.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this35.usuarios);
            _this35.dataSource.paginator = _this35.paginator;
            _this35.dataSource.sort = _this35.sort;
          }, function (error) {
            return _this35.isLoading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.usuarios = null;
        }
      }, {
        key: "addRowInTable",
        value: function addRowInTable(data) {
          this.usuarios.push(data[0]);

          this.dataSource._updateChangeSubscription();
        }
      }, {
        key: "updateRowInTable",
        value: function updateRowInTable(data) {
          var i = this.usuarios.findIndex(function (d) {
            return d.id == data[0].id;
          });

          if (i >= 0) {
            this.usuarios[i] = data[0];
          }

          this.dataSource._updateChangeSubscription();
        }
      }, {
        key: "delRowInTable",
        value: function delRowInTable(id) {
          var i = this.usuarios.findIndex(function (d) {
            return d.id == id;
          });

          if (i >= 0) {
            this.usuarios.splice(i, 1);
          }

          this.dataSource._updateChangeSubscription();

          this.UsuarioService.apagar(id);
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();

          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        }
      }, {
        key: "openModal",
        value: function openModal(id) {
          var _this36 = this;

          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
          dialogConfig.data = {
            id: id
          };
          var dialogRef = this.dialog.open(_ce_ce_usuario_ce_usuario_component__WEBPACK_IMPORTED_MODULE_2__["CeUsuarioComponent"], dialogConfig);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              if (result[0].modo == 'editar') {
                _this36.updateRowInTable(result);
              } else {
                _this36.addRowInTable(result);
              }
            }
          });
        }
      }, {
        key: "apagar",
        value: function apagar(id) {
          this.UsuarioService.apagar(id);
        }
      }]);

      return UsuarioComponent;
    }();

    UsuarioComponent.ɵfac = function UsuarioComponent_Factory(t) {
      return new (t || UsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    UsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsuarioComponent,
      selectors: [["app-usuario"]],
      viewQuery: function UsuarioComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 29,
      vars: 6,
      consts: [[1, "card", "card-center", "col-10"], [1, "card-body"], [1, "row"], [1, "col"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["matInput", "", 3, "keyup"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nome"], ["matColumnDef", "email"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["style", "display: flex; justify-content: center; align-items: center", 4, "ngIf"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["type", "button", 1, "btn", "btn-info", "btn-space", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-space", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [2, "display", "flex", "justify-content", "center", "align-items", "center"], ["color", "primary", "mode", "indeterminate"]],
      template: function UsuarioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsuarioComponent_Template_button_click_4_listener() {
            return ctx.openModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Novo usuario");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buscar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UsuarioComponent_Template_input_keyup_11_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UsuarioComponent_th_14_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UsuarioComponent_td_15_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UsuarioComponent_th_17_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UsuarioComponent_td_18_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UsuarioComponent_th_20_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UsuarioComponent_td_21_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UsuarioComponent_th_23_Template, 1, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UsuarioComponent_td_24_Template, 5, 0, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UsuarioComponent_tr_25_Template, 1, 0, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UsuarioComponent_tr_26_Template, 1, 0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UsuarioComponent_mat_card_27_Template, 2, 0, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-paginator", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinner"]],
      styles: [".card[_ngcontent-%COMP%] {\n    background-color: white;\n}\n.mat-input-element[_ngcontent-%COMP%] {\n    color:black;\n}\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c3VhcmlvL3VzdWFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzdWFyaW8vdXN1YXJpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjb2xvcjpibGFjaztcbn1cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-usuario',
          templateUrl: './usuario.component.html',
          styleUrls: ['./usuario.component.css']
        }]
      }], function () {
        return [{
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
            "static": true
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/global-constants.ts":
  /*!*************************************!*\
    !*** ./src/app/global-constants.ts ***!
    \*************************************/

  /*! exports provided: GlobalConstants */

  /***/
  function srcAppGlobalConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalConstants", function () {
      return GlobalConstants;
    });

    var GlobalConstants = function GlobalConstants() {
      _classCallCheck(this, GlobalConstants);
    };

    GlobalConstants.API_URL = 'http://barbeariaclub.local/api';
    /***/
  },

  /***/
  "./src/app/services/after-login.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/after-login.service.ts ***!
    \*************************************************/

  /*! exports provided: AfterLoginService */

  /***/
  function srcAppServicesAfterLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AfterLoginService", function () {
      return AfterLoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./token.service */
    "./src/app/services/token.service.ts");

    var AfterLoginService = /*#__PURE__*/function () {
      function AfterLoginService(Token) {
        _classCallCheck(this, AfterLoginService);

        this.Token = Token;
      }

      _createClass(AfterLoginService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          return this.Token.loggedIn();
        }
      }]);

      return AfterLoginService;
    }();

    AfterLoginService.ɵfac = function AfterLoginService_Factory(t) {
      return new (t || AfterLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]));
    };

    AfterLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AfterLoginService,
      factory: AfterLoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AfterLoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/agendamento.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/agendamento.service.ts ***!
    \*************************************************/

  /*! exports provided: AgendamentoService */

  /***/
  function srcAppServicesAgendamentoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgendamentoService", function () {
      return AgendamentoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global-constants */
    "./src/app/global-constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ng_snotify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-snotify */
    "./node_modules/ng-snotify/__ivy_ngcc__/fesm2015/ng-snotify.js");

    var API_URL = _global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].API_URL;

    var AgendamentoService = /*#__PURE__*/function () {
      function AgendamentoService(_http, Notfiy) {
        _classCallCheck(this, AgendamentoService);

        this._http = _http;
        this.Notfiy = Notfiy;
        this.agendamentos = [];
        this.NotifyAgendamentos = [];
        this.getNotifyAgendamentos();
      }

      _createClass(AgendamentoService, [{
        key: "getNotifyAgendamentos",
        value: function getNotifyAgendamentos() {
          var _this37 = this;

          var tempForm = {
            tempo: 6
          };

          this._http.post(API_URL + '/agendamentos/find', tempForm).subscribe(function (data) {
            var _iterator3 = _createForOfIteratorHelper(data),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var d = _step3.value;

                if (d.cliente.nome) {
                  var sobrenome = '';
                  var Fone2 = '';

                  if (d.cliente.sobrenome) {
                    sobrenome = d.cliente.sobrenome.substr(0, 6);

                    if (d.cliente.sobrenome.length > 6) {
                      sobrenome += '...';
                    }
                  } else {
                    sobrenome = '';
                  }

                  if (Fone2) {
                    Fone2 = ' | ' + 'Fone 2: ' + d.cliente.fone2;
                  }

                  _this37.Notfiy.confirm('Fone 1: ' + d.cliente.fone1 + Fone2, d.cliente.nome + ' ' + sobrenome, {
                    showProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    buttons: [{
                      text: 'Fechar',
                      action: function action(toast) {
                        _this37.Notfiy.remove(toast.id);
                      },
                      bold: false
                    }]
                  });
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        }
        /*
          * explanation of observable response object
          *
          * resData = {
          *      data: <object>,
          *      statusCode: <number>,
          *      response: <jwres>,
          *      error: <undefined>
          * }
          *
          * error = {
          *      data: null,
          *      statusCode: <number>,
          *      response: <jwres>,
          *      error: <jwres.error>
          * }
          */

      }, {
        key: "getAgendamentos",
        value: function getAgendamentos(params) {
          return this._http.post(API_URL + '/agendamentos/find', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }, {
        key: "postAgendamento",
        value: function postAgendamento(agendamento) {
          var tipoForm;

          if (agendamento.id == null) {
            tipoForm = 'new';
          } else {
            tipoForm = 'edit'; //delete agendamento['cliente'];
          }

          return this._http.post(API_URL + '/agendamento/' + tipoForm, agendamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }, {
        key: "apagar",
        value: function apagar(id) {
          this._http["delete"](API_URL + '/agendamento/' + id).subscribe();
        }
      }]);

      return AgendamentoService;
    }();

    AgendamentoService.ɵfac = function AgendamentoService_Factory(t) {
      return new (t || AgendamentoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_snotify__WEBPACK_IMPORTED_MODULE_5__["SnotifyService"]));
    };

    AgendamentoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AgendamentoService,
      factory: AgendamentoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgendamentoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: ng_snotify__WEBPACK_IMPORTED_MODULE_5__["SnotifyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/BehaviorSubject */
    "./node_modules/rxjs-compat/_esm2015/BehaviorSubject.js");
    /* harmony import */


    var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./token.service */
    "./src/app/services/token.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(Token) {
        _classCallCheck(this, AuthService);

        this.Token = Token;
        this.loggedIn = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.Token.loggedIn());
        this.authStatus = this.loggedIn.asObservable();
      }

      _createClass(AuthService, [{
        key: "changeAuthStatus",
        value: function changeAuthStatus(value) {
          this.loggedIn.next(value);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/barbeiro.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/barbeiro.service.ts ***!
    \**********************************************/

  /*! exports provided: BarbeiroService */

  /***/
  function srcAppServicesBarbeiroServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarbeiroService", function () {
      return BarbeiroService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global-constants */
    "./src/app/global-constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var API_URL = _global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].API_URL;

    var BarbeiroService = /*#__PURE__*/function () {
      function BarbeiroService(_http) {
        _classCallCheck(this, BarbeiroService);

        this._http = _http;
      }

      _createClass(BarbeiroService, [{
        key: "getBarbeiros",
        value: function getBarbeiros() {
          return this._http.post(API_URL + '/barbeiros', null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }, {
        key: "post",
        value: function post(barbeiro) {
          var tipoForm;

          if (barbeiro.id == null) {
            tipoForm = 'store';
          } else {
            tipoForm = 'update';
          }

          return this._http.post(API_URL + '/barbeiro/' + tipoForm, barbeiro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }, {
        key: "apagar",
        value: function apagar(id) {
          this._http["delete"](API_URL + '/barbeiro/' + id).subscribe();
        }
      }]);

      return BarbeiroService;
    }();

    BarbeiroService.ɵfac = function BarbeiroService_Factory(t) {
      return new (t || BarbeiroService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    BarbeiroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BarbeiroService,
      factory: BarbeiroService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarbeiroService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/before-login.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/before-login.service.ts ***!
    \**************************************************/

  /*! exports provided: BeforeLoginService */

  /***/
  function srcAppServicesBeforeLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeforeLoginService", function () {
      return BeforeLoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./token.service */
    "./src/app/services/token.service.ts");

    var BeforeLoginService = /*#__PURE__*/function () {
      function BeforeLoginService(Token) {
        _classCallCheck(this, BeforeLoginService);

        this.Token = Token;
      }

      _createClass(BeforeLoginService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          return !this.Token.loggedIn();
        }
      }]);

      return BeforeLoginService;
    }();

    BeforeLoginService.ɵfac = function BeforeLoginService_Factory(t) {
      return new (t || BeforeLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]));
    };

    BeforeLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BeforeLoginService,
      factory: BeforeLoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeforeLoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/cliente.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/cliente.service.ts ***!
    \*********************************************/

  /*! exports provided: ClienteService */

  /***/
  function srcAppServicesClienteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClienteService", function () {
      return ClienteService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global-constants */
    "./src/app/global-constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var API_URL = _global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].API_URL;

    var ClienteService = /*#__PURE__*/function () {
      function ClienteService(_http) {
        _classCallCheck(this, ClienteService);

        this._http = _http;
        this.clientes = [];
      }

      _createClass(ClienteService, [{
        key: "getBuscaClientes",
        value: function getBuscaClientes(q) {
          return this._http.get(API_URL + '/clientes/buscar/' + q).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }, {
        key: "getClientes",
        value: function getClientes() {
          return this._http.post(API_URL + '/clientes', null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }, {
        key: "post",
        value: function post(barbeiro) {
          var tipoForm;

          if (barbeiro.id == null) {
            tipoForm = 'store';
          } else {
            tipoForm = 'update';
          }

          return this._http.post(API_URL + '/cliente/' + tipoForm, barbeiro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }, {
        key: "apagar",
        value: function apagar(id) {
          this._http["delete"](API_URL + '/cliente/' + id).subscribe();
        }
      }]);

      return ClienteService;
    }();

    ClienteService.ɵfac = function ClienteService_Factory(t) {
      return new (t || ClienteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    ClienteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ClienteService,
      factory: ClienteService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClienteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/jarwis.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/jarwis.service.ts ***!
    \********************************************/

  /*! exports provided: JarwisService */

  /***/
  function srcAppServicesJarwisServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JarwisService", function () {
      return JarwisService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../global-constants */
    "./src/app/global-constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var JarwisService = /*#__PURE__*/function () {
      function JarwisService(http, _http) {
        _classCallCheck(this, JarwisService);

        this.http = http;
        this._http = _http;
        this.baseUrl = _global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].API_URL;
      }

      _createClass(JarwisService, [{
        key: "signup",
        value: function signup(data) {
          return this.http.post("".concat(this.baseUrl, "/signup"), data);
        }
      }, {
        key: "login",
        value: function login(data) {
          return this.http.post("".concat(this.baseUrl, "/login"), data);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.http.post("".concat(this.baseUrl, "/logout"), null).subscribe();
        }
      }, {
        key: "sendPasswordResetLink",
        value: function sendPasswordResetLink(data) {
          return this.http.post("".concat(this.baseUrl, "/sendPasswordResetLink"), data);
        }
      }, {
        key: "changePassword",
        value: function changePassword(data) {
          return this.http.post("".concat(this.baseUrl, "/resetPassword"), data);
        }
      }]);

      return JarwisService;
    }();

    JarwisService.ɵfac = function JarwisService_Factory(t) {
      return new (t || JarwisService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    JarwisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JarwisService,
      factory: JarwisService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JarwisService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/municipio.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/municipio.service.ts ***!
    \***********************************************/

  /*! exports provided: MunicipioService */

  /***/
  function srcAppServicesMunicipioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MunicipioService", function () {
      return MunicipioService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global-constants */
    "./src/app/global-constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var API_URL = _global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].API_URL;

    var MunicipioService = /*#__PURE__*/function () {
      function MunicipioService(_http) {
        _classCallCheck(this, MunicipioService);

        this._http = _http;
        this.municipios = [];
      }

      _createClass(MunicipioService, [{
        key: "getMunicipios",
        value: function getMunicipios(uf_id) {
          return this._http.get(API_URL + '/municipios/' + uf_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return MunicipioService;
    }();

    MunicipioService.ɵfac = function MunicipioService_Factory(t) {
      return new (t || MunicipioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    MunicipioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MunicipioService,
      factory: MunicipioService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MunicipioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/token.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/token.service.ts ***!
    \*******************************************/

  /*! exports provided: TokenService */

  /***/
  function srcAppServicesTokenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenService", function () {
      return TokenService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../global-constants */
    "./src/app/global-constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TokenService = /*#__PURE__*/function () {
      function TokenService(_http) {
        _classCallCheck(this, TokenService);

        this._http = _http;
        this.baseUrl = _global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].API_URL;
        this.iss = {
          login: this.baseUrl + '/login',
          signup: this.baseUrl + '/signup'
        };
      }

      _createClass(TokenService, [{
        key: "refreshToken",
        value: function refreshToken() {
          return this._http.post("".concat(this.baseUrl, "/ufs"), null);
        }
      }, {
        key: "handle",
        value: function handle(token) {
          this.set(token);
        }
      }, {
        key: "set",
        value: function set(token) {
          localStorage.setItem('token', token);
        }
      }, {
        key: "get",
        value: function get() {
          return localStorage.getItem('token');
        }
      }, {
        key: "remove",
        value: function remove() {
          localStorage.removeItem('token');
        }
      }, {
        key: "isValid",
        value: function isValid() {
          var token = this.get();

          if (token) {
            var payload = this.payload(token);

            if (payload) {
              return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
            }
          }

          return false;
        }
      }, {
        key: "payload",
        value: function payload(token) {
          var payload = token.split('.')[1];
          return this.decode(payload);
        }
      }, {
        key: "decode",
        value: function decode(payload) {
          return JSON.parse(atob(payload));
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return this.isValid();
        }
      }]);

      return TokenService;
    }();

    TokenService.ɵfac = function TokenService_Factory(t) {
      return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenService,
      factory: TokenService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/uf.service.ts":
  /*!****************************************!*\
    !*** ./src/app/services/uf.service.ts ***!
    \****************************************/

  /*! exports provided: UfService */

  /***/
  function srcAppServicesUfServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UfService", function () {
      return UfService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../global-constants */
    "./src/app/global-constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var API_URL = _global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].API_URL;

    var UfService = function UfService(_http) {
      var _this38 = this;

      _classCallCheck(this, UfService);

      this._http = _http;
      this.ufs = [];

      this._http.post(API_URL + '/ufs', null).subscribe(function (data) {
        var _iterator4 = _createForOfIteratorHelper(data),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var d = _step4.value;

            _this38.ufs.push(d);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      });
    };

    UfService.ɵfac = function UfService_Factory(t) {
      return new (t || UfService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UfService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UfService,
      factory: UfService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UfService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/usuario.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/usuario.service.ts ***!
    \*********************************************/

  /*! exports provided: UsuarioService */

  /***/
  function srcAppServicesUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global-constants */
    "./src/app/global-constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var API_URL = _global_constants__WEBPACK_IMPORTED_MODULE_3__["GlobalConstants"].API_URL;

    var UsuarioService = /*#__PURE__*/function () {
      function UsuarioService(_http) {
        _classCallCheck(this, UsuarioService);

        this._http = _http;
        this.usuarios = [];
        this.userLogged = [];
      }

      _createClass(UsuarioService, [{
        key: "me",
        value: function me() {
          var _this39 = this;

          this.userLogged = [];

          this._http.get(API_URL + '/me').subscribe(function (data) {
            _this39.userLogged.push(data['user']);
          });
        }
      }, {
        key: "getUsuarios",
        value: function getUsuarios() {
          return this._http.post(API_URL + '/usuarios', null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }, {
        key: "post",
        value: function post(usuario) {
          var tipoForm;

          if (usuario.id == null) {
            tipoForm = 'store';
          } else {
            tipoForm = 'update';
          }

          return this._http.post(API_URL + '/usuario/' + tipoForm, usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }, {
        key: "apagar",
        value: function apagar(id) {
          this._http["delete"](API_URL + '/usuario/' + id).subscribe();
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.ɵfac = function UsuarioService_Factory(t) {
      return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    UsuarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsuarioService,
      factory: UsuarioService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /var/www/laravel/angular-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map