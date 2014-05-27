'use strict';

/**
 * freigewählter Name für die Aplikation ist 'App'
 */
var App = angular.module('App', [
    'ui.bootstrap',
    'ngRoute',
    'AppControllers',
    'moneyFilters'
]);

App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/home.html',
                controller: 'MoneyCtrl'
            }).
            when('/money', {
                templateUrl: 'views/money.html',
                controller: 'MoneyCtrl'
            }).
            when('/money/:category/:Id ', {
                templateUrl: 'views/money.html',
                controller: 'MoneyCtrl'
            }).
            when('/test', {
            	templateUrl: 'views/money.list.test.html',
            	controller: 'MoneyCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
        