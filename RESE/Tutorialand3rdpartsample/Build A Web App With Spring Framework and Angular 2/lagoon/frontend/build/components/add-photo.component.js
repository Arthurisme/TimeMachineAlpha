System.register(['angular2/core', '../services/user.service', '../models/photo', '../services/add-photo.service', '../services/upload-photo.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1, photo_1, add_photo_service_1, upload_photo_service_1;
    var AddPhoto;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (photo_1_1) {
                photo_1 = photo_1_1;
            },
            function (add_photo_service_1_1) {
                add_photo_service_1 = add_photo_service_1_1;
            },
            function (upload_photo_service_1_1) {
                upload_photo_service_1 = upload_photo_service_1_1;
            }],
        execute: function() {
            AddPhoto = (function () {
                function AddPhoto(uploadPhotoService, addPhotoService, userService) {
                    this.uploadPhotoService = uploadPhotoService;
                    this.addPhotoService = addPhotoService;
                    this.userService = userService;
                    this.newPhoto = new photo_1.Photo();
                    this.photoAdded = false;
                }
                AddPhoto.prototype.onSubmit = function () {
                    var _this = this;
                    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
                        _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                        console.log(_this.user);
                        _this.newPhoto.user = _this.user;
                        _this.addPhotoService.sendPhoto(_this.newPhoto)
                            .subscribe(function (data) {
                            _this.photoAdded = true;
                            _this.newPhoto = new photo_1.Photo();
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
            exports_1("AddPhoto", AddPhoto);
        }
    }
});
//# sourceMappingURL=add-photo.component.js.map