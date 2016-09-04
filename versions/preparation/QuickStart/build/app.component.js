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
var my_album_component_1 = require('./components/my-album.component');
var register_component_1 = require('./components/register.component');
var login_component_1 = require('./components/login.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var router_deprecated_2 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var register_service_1 = require("./services/register.service");
var login_service_1 = require("./services/login.service");
var user_service_1 = require("./services/user.service");
var photo_service_1 = require("./services/photo.service");
var add_photo_service_1 = require("./services/add-photo.service");
var upload_photo_service_1 = require("./services/upload-photo.service");
var apitest_service_1 = require("./services/apitest.service");
var add_photo_component_1 = require("./components/add-photo.component");
var image_detail_component_1 = require("./components/image-detail.component");
var employee_component_1 = require("./components/employee.component");
var employee_service_1 = require("./services/employee.service");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [nav_bar_component_1.NavBar, home_component_1.HomeComponent, my_album_component_1.MyAlbum, router_deprecated_1.ROUTER_DIRECTIVES, login_component_1.Login],
            providers: [router_deprecated_2.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, register_service_1.RegisterService, login_service_1.LoginService, user_service_1.UserService, employee_service_1.EmployeeService, photo_service_1.PhotoService,
                add_photo_service_1.AddPhotoService, upload_photo_service_1.UploadPhotoService, apitest_service_1.ApiTestService],
            template: "\n    <nav-bar></nav-bar>\n    <router-outlet></router-outlet>\n    "
        }),
        router_deprecated_1.RouteConfig([
            { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
            { path: '/register', name: 'Register', component: register_component_1.Register },
            { path: '/login', name: 'Login', component: login_component_1.Login },
            { path: '/my-album', name: 'MyAlbum', component: my_album_component_1.MyAlbum },
            { path: '/image-detail/:id', name: 'ImageDetail', component: image_detail_component_1.ImageDetail },
            { path: '/add-photo', name: 'AddPhoto', component: add_photo_component_1.AddPhoto },
            { path: '/employees', name: 'Employee', component: employee_component_1.Employee }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map