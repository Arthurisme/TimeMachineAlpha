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
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.findAll = function () {
        var userUrl = "http://localhost:8080/admin/employee/all";
        // let headers2 = new Headers({'Authorization': 'Bearer '+token});
        // let headers2 = new Headers({'Authorization': 'Bearer '+token});
        // let header2 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+localStorage.getItem("token")});
        var header = new http_1.Headers({ 'Authorization': localStorage.getItem("token") });
        return this.http.get(userUrl, { headers: header });
        // return this.http.get(userUrl);
    };
    EmployeeService.prototype.save = function (employee) {
        var url = "http://localhost:8080/admin/employee/save";
        var header = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") });
        console.log("201609031722: " + JSON.stringify(employee));
        return this.http.post(url, JSON.stringify(employee), { headers: header });
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
// import {Injectable} from '@angular/core';
// import {Http,Headers} from '@angular/http';
// import {User} from '../models/User';
// import  {Observable} from 'rxjs/Observable';
//
//
// @Injectable()
// export class RegisterService {
//     constructor (private http:Http) {}
//
//     sendUser (user: User) {
//         let url = "http://localhost:8080/user/register";
//         let header = new Headers({'Content-Type': 'application/json'});
//
//         return this.http.post(url, JSON.stringify(user), {headers: header});
//     }
// } 
//# sourceMappingURL=employee.service.js.map