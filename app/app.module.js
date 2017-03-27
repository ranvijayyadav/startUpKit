"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var store_1 = require("@ngrx/store");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var header_component_1 = require("./../app/components/header/header.component");
var footer_component_1 = require("./../app/components/footer/footer.component");
var home_component_1 = require("./../app/components/home/home.component");
var setEndPoint_component_1 = require("./../app/components/setEndPoint/setEndPoint.component");
var responseQuery_component_1 = require("./../app/components/responseQuery/responseQuery.component");
var microService_component_1 = require("./../app/components/microService/microService.component");
var microServiceList_component_1 = require("./../app/components/microServiceList/microServiceList.component");
var dataSource_component_1 = require("./../app/components/dataSource/dataSource.component");
var appRoutes = [];
var counter_1 = require("./reducer/counter");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            /**
             * StoreModule.provideStore is imported once in the root module, accepting a reducer
             * function or object map of reducer functions. If passed an object of
             * reducers, combineReducers will be run creating your application
             * meta-reducer. This returns all providers for an @ngrx/store
             * based application.
             */
            store_1.StoreModule.provideStore({ counter: counter_1.counterReducer })
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            home_component_1.HomeComponent,
            setEndPoint_component_1.SetEndPointComponent,
            responseQuery_component_1.ResponseQueryComponent,
            microService_component_1.MicroServiceComponent,
            microServiceList_component_1.MicroServiceListComponent,
            dataSource_component_1.DataSourceComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map