'use strict'; 
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.

var app = angular.module('angularExample', [
    'ngRoute',
    'ngResource',
    'time',
    'controllers'
]);

/*
 * Configuration blocks:
 * get executed during the provider registrations and configuration phase. Only providers and constants can be injected into configuration blocks. 
 * This is to prevent accidental instantiation of services before they have been fully configured.
 */
app.config(function ($routeProvider) { 
    
        $routeProvider.when('/riders', {
            templateUrl: 'list.html'
            //controller: 'ridersListController'
        }),

        $routeProvider.when('/riders/:number', {
            templateUrl: 'details.html'
            //controller: 'riderDetailsController'
        }),
        
        $routeProvider.when('/webservice', {
            templateUrl: 'webservice.html'
           // controller: 'weatherController'
        }),

        $routeProvider.when('/test', {
            templateUrl: 'test.html'
           // controller: 'weatherController'
        }),
        
        $routeProvider.otherwise({
            redirectTo: '/riders'
        })
    }
);

/*
 * Run blocks:
 * get executed after the injector is created and are used to kickstart the application. Only instances and constants can be injected into run blocks. 
 * This is to prevent further system configuration during application run time. 
 */
app.run(function($rootScope) {
	 $rootScope.user = {name: "Stefano", surname: "Tombolini"};
});