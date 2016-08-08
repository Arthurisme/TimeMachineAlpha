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
var http_1 = require('@angular/http');
var AddPhotoService = (function () {
    function AddPhotoService(http) {
        this.http = http;
    }
    AddPhotoService.prototype.sendPhoto = function (photo) {
        var url = "http://localhost:8080/rest/photo/add";
        var header = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(url, JSON.stringify(photo), { headers: header });
    };
    AddPhotoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AddPhotoService);
    return AddPhotoService;
}());
exports.AddPhotoService = AddPhotoService;
//# sourceMappingURL=add-photo.service.js.map