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
var user_service_1 = require("../services/user.service");
var photo_service_1 = require("../services/photo.service");
var router_deprecated_1 = require('@angular/router-deprecated');
var router_deprecated_2 = require('@angular/router-deprecated');
var MyAlbum = (function () {
    function MyAlbum(photoService, router, userService) {
        var _this = this;
        this.photoService = photoService;
        this.router = router;
        this.userService = userService;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            _this.photoService.getPhotosByUser(_this.user).subscribe(function (photos) {
                _this.photos = JSON.parse(JSON.parse(JSON.stringify(user))._body).photoList;
                console.log("test photos list in front end: " + _this.photos);
            }),
                function (error) { return console.log(error); };
        }),
            function (error) { return console.log(error); };
    }
    ;
    MyAlbum.prototype.onSelect = function (photo) {
        this.selectedPhoto = photo;
        this.router.navigate(['ImageDetail', { id: this.selectedPhoto.photoId }]);
    };
    MyAlbum = __decorate([
        core_1.Component({
            directives: [router_deprecated_2.ROUTER_DIRECTIVES],
            selector: 'my-album',
            templateUrl: "app/components/my-album.component.html"
        }), 
        __metadata('design:paramtypes', [photo_service_1.PhotoService, router_deprecated_1.Router, user_service_1.UserService])
    ], MyAlbum);
    return MyAlbum;
}());
exports.MyAlbum = MyAlbum;
//# sourceMappingURL=my-album.component.js.map