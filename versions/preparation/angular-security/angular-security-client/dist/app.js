(function() {

    'use strict';

    angular
    .module('employeeManagerApp', [
        'ngCookies',
        'ngResource',
        'ngRoute',
        'angular-storage',
        'angular-jwt'
    ])
    .config(function ($routeProvider, $httpProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/registration', {
                templateUrl: 'views/registration.html',
                controller: 'RegistrationController'
        })
        .when('/employees', {
            templateUrl: 'views/employees.html',
            controller: 'EmployeeController',
            auth: true
        })
        .when('/logout', {
            template: ' ',
            controller: ['$scope','$location', 'store', '$rootScope', function ($scope, $location, store, $rootScope) {
                store.remove('jwt_token');
                $rootScope.loggedIn = false;
                $location.path('/login');
            }]
        })
        .otherwise({
            redirectTo: '/'
        });
        // Interecepts every request sent from client application and stores token to Authorization header
        $httpProvider.interceptors.push('AuthenticationHttpInterceptor');

    }).service('AuthenticationHttpInterceptor', ['store','$rootScope', function(store, $rootScope) {
        this.request = function(config) {

	    if(store.get('jwt_token')) {

                config.headers.Authorization = store.get('jwt_token');
                $rootScope.loggedIn = true;
            }
            return config;
        };
    }]).run(function (store, $rootScope, $location, $route) {
        $rootScope.$on('$locationChangeStart', function (e, next, current) {
            var nextPath = $location.path();
            var nextRoute = $route.routes[nextPath];
            if(nextRoute && nextRoute.auth && !store.get('jwt_token')) {
                e.preventDefault();
                $location.path('/login');
            }
        });
    });

})();

(function() {
    'use strict';
    
    angular.module('employeeManagerApp').constant('API_BASE', 'http://localhost:8080');    
})();



(function() {

    'use strict';

    angular.module('employeeManagerApp').controller('EmployeeController', ['$scope','employeeService', function ($scope, employeeService) {
        initEmployee();

        employeeService.findAll(function (data) {
            $scope.employees = data;
        });

        $scope.saveEmployee = function () {
            employeeService.save($scope.employee)
                .then(function(response) {
                    if(response.status === 200) {
                      employeeService.findAll(function (data) {
                          $scope.employees = data;
                      });
                    }
                }, function(response) {
                    // Handle error
                    console.log(response);
            });
            initEmployee();
        };

        function initEmployee() {
            $scope.employee = {
                firstName: null,
                lastName: null,
                age: null
            };
        }
    }]);
})();

(function() {
    'use strict';

    angular.module('employeeManagerApp')
        .controller('LoginController', ['$scope', '$rootScope', 'loginService', '$http', 'store', '$location', function ($scope, $rootScope, loginService, $http, store, $location) {
            $scope.user = {
                username: null,
                password: null
            };

            $scope.login = function () {
                loginService.login($scope.user.username, $scope.user.password).success(function (result, status, headers, config) {
                    $scope.token = headers('Authorization');
                    // Saves token to local storage and redirects to "employees" page
                    store.set('jwt_token', headers('Authorization'));
                    console.log(headers('Authorization'));
                    $location.path('/employees');
                });
            };

    } ]);
    
})();

(function() {
  
  'use strict';

  angular.module('employeeManagerApp')
    .controller('MainController',['$scope', function ($scope) {
      $scope.title = 'Welcome to employee manager!';
    }]);

})();

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

(function() {

    'use strict';

    angular.module('employeeManagerApp').factory('employeeService', ['$http', 'API_BASE', function($http, API_BASE) {
        return {
            findAll: function(callback) {
                    return $http.get(API_BASE + '/admin/employee/all').success(callback);
            },
            save: function (employee) {
                    return $http.post(API_BASE + '/admin/employee/save', { firstName: employee.firstName, lastName: employee.lastName, age: employee.age });
            }
        };
    }]);

})();

(function() {
    
    'use strict';

    angular.module('employeeManagerApp').factory('loginService', ['$http', 'API_BASE', function ($http, API_BASE) {
        return {
            login : function(uname, pwd) {
                return $http.post(API_BASE + '/api/login', { username: uname, password: pwd });
            }
        };
    }]);

})();

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
