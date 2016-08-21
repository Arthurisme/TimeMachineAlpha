System.register(['angular2/core', '../services/photo.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, photo_service_1, router_1;
    var PhotoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (photo_service_1_1) {
                photo_service_1 = photo_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PhotoList = (function () {
                function PhotoList(photoService, router) {
                    var _this = this;
                    this.photoService = photoService;
                    this.router = router;
                    this.photoService.getPhotos().subscribe(function (data) { return _this.photos = JSON.parse(JSON.parse(JSON.stringify(data))._body); }, function (error) { return console.log(error); });
                }
                PhotoList.prototype.onSelect = function (photo) {
                    this.selectedPhoto = photo;
                    this.router.navigate(['ImageDetail', { id: this.selectedPhoto.photoId }]);
                };
                PhotoList = __decorate([
                    core_1.Component({
                        selector: 'photo-list',
                        templateUrl: 'app/components/photo-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [photo_service_1.PhotoService, router_1.Router])
                ], PhotoList);
                return PhotoList;
            }());
            exports_1("PhotoList", PhotoList);
        }
    }
});
//# sourceMappingURL=photo-list.component.js.map