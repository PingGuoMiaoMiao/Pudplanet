import {
  CommonModule,
  NgModule,
  RouterModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-MRCVEHZZ.js";

// src/app/admin/admin-routing-module.ts
var routes = [];
var AdminRoutingModule = class _AdminRoutingModule {
  static \u0275fac = function AdminRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/admin/admin-module.ts
var AdminModule = class _AdminModule {
  static \u0275fac = function AdminModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, AdminRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, AdminRoutingModule]
    }]
  }], null, null);
})();
export {
  AdminModule
};
//# sourceMappingURL=chunk-PO762VRW.js.map
