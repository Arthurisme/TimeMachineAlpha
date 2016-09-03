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
var ApiTestService = (function () {
    function ApiTestService(http) {
        this.http = http;
    }
    // sendCredentials (model) {
    //     let tokenUrl = "http://localhost:8080/user/login";
    //     let headers1 = new Headers({'Content-Type': 'application/json'});
    //
    //     return this.http.post(tokenUrl, JSON.stringify(model), {headers: headers1});
    // }
    // check if downloaded token same with server:
    ApiTestService.prototype.testApiRole = function () {
        var userUrl = "http://localhost:8080/api/role/user";
        // let headers2 = new Headers({'Authorization': 'Bearer '+token});
        // let headers2 = new Headers({'Authorization': 'Bearer '+token});
        // let header2 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+localStorage.getItem("token")});
        var header2 = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.get(userUrl, { headers: header2 });
        // return this.http.get(userUrl);
    };
    ApiTestService.prototype.checkLogin = function () {
        if (localStorage.getItem("currentUserName") != "" && localStorage.getItem("token") != "") {
            return true;
        }
        else {
            return false;
        }
    };
    ApiTestService.prototype.logout = function () {
        localStorage.setItem("token", "");
        localStorage.setItem("currentUserName", "");
        alert("You just logged out.");
    };
    ApiTestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiTestService);
    return ApiTestService;
}());
exports.ApiTestService = ApiTestService;
//# sourceMappingURL=apitest.service.js.map