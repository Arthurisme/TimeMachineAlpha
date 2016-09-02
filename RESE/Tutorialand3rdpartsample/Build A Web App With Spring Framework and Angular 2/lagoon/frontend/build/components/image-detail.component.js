System.register(['angular2/core', '../models/photo', '../services/photo.service', '../services/user.service', 'angular2/router', './image-comments.component'], function(exports_1, context_1) {
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
    var core_1, photo_1, photo_service_1, user_service_1, router_1, image_comments_component_1;
    var ImageDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (photo_1_1) {
                photo_1 = photo_1_1;
            },
            function (photo_service_1_1) {
                photo_service_1 = photo_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (image_comments_component_1_1) {
                image_comments_component_1 = image_comments_component_1_1;
            }],
        execute: function() {
            ImageDetail = (function () {
                function ImageDetail(photoService, userService, routeParams) {
                    var _this = this;
                    this.photoService = photoService;
                    this.userService = userService;
                    this.routeParams = routeParams;
                    this.photo = new photo_1.Photo();
                    var photoId = Number.parseInt(this.routeParams.get('id'));
                    this.photoService.getPhotoById(photoId).subscribe(function (photo) {
                        _this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body);
                        _this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
                            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                            if (_this.user.likedPhotoList.filter(function (photo) { return photo.photoId == _this.photo.photoId; })[0]) {
                                _this.like = "Unlike";
                            }
                            else {
                                _this.like = "Like";
                            }
                        }, function (error) { return console.log(error); });
                    }, function (error) { return console.log(error); });
                }
                ImageDetail.prototype.goBack = function () {
                    window.history.back();
                };
                ImageDetail.prototype.likeDisplay = function () {
                    if (this.like == "Like") {
                        this.like = "Unlike";
                        this.user.likedPhotoList.push(this.photo);
                        this.photo.likes += 1;
                        this.userService.updateUser(this.user).subscribe();
                        this.photoService.updatePhoto(this.photo).subscribe();
                    }
                    else {
                        this.like = "Like";
                        for (var i = 0; i < this.user.likedPhotoList.length; i++) {
                            if (this.user.likedPhotoList[i].photoId == this.photo.photoId) {
                                this.user.likedPhotoList.splice(i, 1);
                            }
                        }
                        this.photo.likes -= 1;
                        this.userService.updateUser(this.user).subscribe();
                        this.photoService.updatePhoto(this.photo).subscribe();
                    }
                };
                ImageDetail = __decorate([
                    core_1.Component({
                        selector: 'image-detail',
                        templateUrl: 'app/components/image-detail.component.html',
                        directives: [image_comments_component_1.ImageComments]
                    }), 
                    __metadata('design:paramtypes', [photo_service_1.PhotoService, user_service_1.UserService, router_1.RouteParams])
                ], ImageDetail);
                return ImageDetail;
            }());
            exports_1("ImageDetail", ImageDetail);
        }
    }
});
//# sourceMappingURL=image-detail.component.js.map