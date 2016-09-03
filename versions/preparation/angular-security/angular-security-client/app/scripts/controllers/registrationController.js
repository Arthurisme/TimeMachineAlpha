(function() {
    'use strict';

    angular.module('employeeManagerApp')
        .controller('RegistrationController', ['$scope', '$rootScope', 'registrationService', '$http', 'store', '$location', function ($scope, $rootScope, registrationService, $http, store, $location) {
            $scope.user = {
                username: null,
                password: null
            };

            $scope.registration = function () {
                 registrationService.registration($scope.user.username, $scope.user.password).success(function (result, status, headers, config) {
                    // $scope.token = headers('Authorization');
                    // Saves token to local storage and redirects to "employees" page
                    // store.set('jwt_token', headers('Authorization'));
                    $location.path('/employees');
                });
            };

    } ]);
    
})();
