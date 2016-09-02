System.register(['angular2/core', '../models/user', '../services/register.service'], function(exports_1, context_1) {
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
    var core_1, user_1, register_service_1;
    var Register;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (register_service_1_1) {
                register_service_1 = register_service_1_1;
            }],
        execute: function() {
            Register = (function () {
                function Register(registerService) {
                    this.registerService = registerService;
                    this.newUser = new user_1.User();
                    this.registered = false;
                }
                Register.prototype.onSubmit = function () {
                    var _this = this;
                    this.registerService.sendUser(this.newUser).subscribe(function (data) {
                        _this.registered = true;
                        _this.newUser = new user_1.User();
                    }, function (error) { return console.log(error); });
                };
                Register = __decorate([
                    core_1.Component({
                        selector: 'register',
                        templateUrl: 'app/components/register.component.html'
                    }), 
                    __metadata('design:paramtypes', [register_service_1.RegisterService])
                ], Register);
                return Register;
            }());
            exports_1("Register", Register);
        }
    }
});
//# sourceMappingURL=register.component.js.map