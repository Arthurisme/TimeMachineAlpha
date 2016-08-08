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
var photo_service_1 = require("../services/photo.service");
var router_deprecated_1 = require('@angular/router-deprecated');
var PhotoList = (function () {
    function PhotoList(photoService, router) {
        var _this = this;
        this.photoService = photoService;
        this.router = router;
        this.photoService.getPhotos().subscribe(function (photos) {
            _this.photos = JSON.parse(JSON.parse(JSON.stringify(photos))._body);
        }, function (error) { return console.log(error); });
    }
    PhotoList.prototype.onSelect = function (photo) {
        this.selectedPhoto = photo;
        this.router.navigate(['ImageDetail', { id: this.selectedPhoto.photoId }]);
    };
    PhotoList = __decorate([
        core_1.Component({
            selector: 'photo-list',
            templateUrl: "app/components/photo-list.component.html"
        }), 
        __metadata('design:paramtypes', [photo_service_1.PhotoService, router_deprecated_1.Router])
    ], PhotoList);
    return PhotoList;
}());
exports.PhotoList = PhotoList;
//# sourceMappingURL=photo-list.component.js.map