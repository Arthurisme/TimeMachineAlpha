System.register(['angular2/core', './components/home.component', './components/nav-bar.component', 'angular2/router', './components/register.component', 'angular2/http', './services/register.service', './components/login.component', './services/login.service', './services/user.service', './services/photo.service', './components/my-album.component', './components/add-photo.component', './components/image-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, home_component_1, nav_bar_component_1, router_1, router_2, register_component_1, http_1, register_service_1, login_component_1, login_service_1, user_service_1, photo_service_1, my_album_component_1, add_photo_component_1, image_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (nav_bar_component_1_1) {
                nav_bar_component_1 = nav_bar_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (register_service_1_1) {
                register_service_1 = register_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (photo_service_1_1) {
                photo_service_1 = photo_service_1_1;
            },
            function (my_album_component_1_1) {
                my_album_component_1 = my_album_component_1_1;
            },
            function (add_photo_component_1_1) {
                add_photo_component_1 = add_photo_component_1_1;
            },
            function (image_detail_component_1_1) {
                image_detail_component_1 = image_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [home_component_1.HomeComponent, nav_bar_component_1.NavBar, router_1.ROUTER_DIRECTIVES, login_component_1.Login, my_album_component_1.MyAlbum, add_photo_component_1.AddPhoto],
                        providers: [router_2.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, register_service_1.RegisterService, login_service_1.LoginService, user_service_1.UserService, photo_service_1.PhotoService],
                        template: "\n    <nav-bar></nav-bar>\n    <router-outlet></router-outlet>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/register', name: 'Register', component: register_component_1.Register },
                        { path: '/login', name: 'Login', component: login_component_1.Login },
                        { path: '/my-album', name: 'MyAlbum', component: my_album_component_1.MyAlbum },
                        { path: '/add-photo', name: 'AddPhoto', component: add_photo_component_1.AddPhoto },
                        { path: '/image-detail/:id', name: 'ImageDetail', component: image_detail_component_1.ImageDetail }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map