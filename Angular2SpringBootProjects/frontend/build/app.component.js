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
var core_1 = require('@angular/core');
var home_component_1 = require('./components/home.component');
var nav_bar_component_1 = require('./components/nav-bar.component');
var register_component_1 = require('./components/register.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var router_deprecated_2 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var register_service_1 = require("./services/register.service");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [nav_bar_component_1.NavBar, home_component_1.HomeComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_2.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, register_service_1.RegisterService],
            template: "\n    <nav-bar></nav-bar>\n    <router-outlet></router-outlet>\n    "
        }),
        router_deprecated_1.RouteConfig([
            { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
            { path: '/register', name: 'Register', component: register_component_1.Register },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map