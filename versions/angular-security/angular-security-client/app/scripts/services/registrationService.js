(function() {
    
    'use strict';

    angular.module('employeeManagerApp').factory('registrationService', ['$http', 'API_BASE', function ($http, API_BASE) {
        return {
         registration : function(uname, pwd) {
                return $http.post(API_BASE + '/api/users/registration', { username: uname, password: pwd });
            }
        };
    }]);

})();
