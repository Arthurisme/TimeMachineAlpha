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
var add_photo_service_1 = require("../services/add-photo.service");
var upload_photo_service_1 = require("../services/upload-photo.service");
var Photo_1 = require('../models/Photo');
var AddPhoto = (function () {
    function AddPhoto(uploadPhotoService, addPhotoService, userService) {
        this.uploadPhotoService = uploadPhotoService;
        this.addPhotoService = addPhotoService;
        this.userService = userService;
        this.newPhoto = new Photo_1.Photo();
        this.photoAdded = false;
    }
    AddPhoto.prototype.onSubmit = function () {
        var _this = this;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            _this.newPhoto.user = _this.user;
            _this.addPhotoService.sendPhoto(_this.newPhoto).subscribe(function (data) {
                _this.photoAdded = true;
                _this.newPhoto = new Photo_1.Photo;
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    AddPhoto = __decorate([
        core_1.Component({
            selector: 'add-photo',
            providers: [upload_photo_service_1.UploadPhotoService, add_photo_service_1.AddPhotoService],
            templateUrl: 'app/components/add-photo.component.html'
        }), 
        __metadata('design:paramtypes', [upload_photo_service_1.UploadPhotoService, add_photo_service_1.AddPhotoService, user_service_1.UserService])
    ], AddPhoto);
    return AddPhoto;
}());
exports.AddPhoto = AddPhoto;
//# sourceMappingURL=add-photo.component.js.map