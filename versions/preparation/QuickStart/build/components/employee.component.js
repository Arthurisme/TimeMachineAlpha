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
var employee_1 = require("../models/employee");
var employee_service_1 = require("../services/employee.service");
var Employee = (function () {
    function Employee(employeeService) {
        var _this = this;
        this.employeeService = employeeService;
        this.newEmployee = new employee_1.Employee();
        this.registered = false;
        this.employeeService.findAll().subscribe(function (data) {
            // this.employees = data;
            _this.employees = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        });
    }
    Employee.prototype.onSubmit = function () {
        var _this = this;
        this.employeeService.save(this.newEmployee).subscribe(function (data) {
            if (data.status === 200) {
                _this.employeeService.findAll().subscribe(function (data) {
                    _this.employees = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                }, function (error) { return console.log(error); });
            }
            // this.registered =true;
            _this.newEmployee = new employee_1.Employee();
        }, function (error) { return console.log(error); });
    };
    Employee = __decorate([
        core_1.Component({
            selector: 'employee',
            templateUrl: "app/components/employee.component.html"
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], Employee);
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.component.js.map