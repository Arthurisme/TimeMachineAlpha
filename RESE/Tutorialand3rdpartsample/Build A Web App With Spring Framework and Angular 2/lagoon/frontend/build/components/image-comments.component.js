System.register(['angular2/core', '../models/photo', '../services/photo.service', '../services/user.service', '../models/user', '../models/comment', '../services/comment.service'], function(exports_1, context_1) {
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
    var core_1, photo_1, photo_service_1, user_service_1, user_1, comment_1, comment_service_1;
    var ImageComments;
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
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (comment_1_1) {
                comment_1 = comment_1_1;
            },
            function (comment_service_1_1) {
                comment_service_1 = comment_service_1_1;
            }],
        execute: function() {
            ImageComments = (function () {
                function ImageComments(userService, commentService, photoService) {
                    var _this = this;
                    this.userService = userService;
                    this.commentService = commentService;
                    this.photoService = photoService;
                    this.myLocalStorage = localStorage;
                    this.user = new user_1.User();
                    this.newComment = new comment_1.Comment();
                    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
                        _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                    }, function (error) { return console.log(error); });
                }
                ImageComments.prototype.onSubmit = function () {
                    var _this = this;
                    this.newComment.photo = this.photo;
                    this.newComment.userName = this.user.userName;
                    this.newComment.photoId = this.photo.photoId;
                    this.commentService.addComment(this.newComment).subscribe(function (photo) { return _this.photoService.getPhotoById(_this.photo.photoId).subscribe(function (photo) { return _this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body); }, function (error) { return console.log(error); }); });
                    this.newComment = new comment_1.Comment();
                };
                __decorate([
                    core_1.Input('photo'), 
                    __metadata('design:type', photo_1.Photo)
                ], ImageComments.prototype, "photo", void 0);
                ImageComments = __decorate([
                    core_1.Component({
                        selector: 'image-comments',
                        providers: [comment_service_1.CommentService],
                        templateUrl: 'app/components/image-comments.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, comment_service_1.CommentService, photo_service_1.PhotoService])
                ], ImageComments);
                return ImageComments;
            }());
            exports_1("ImageComments", ImageComments);
        }
    }
});
//# sourceMappingURL=image-comments.component.js.map