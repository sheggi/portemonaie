'use strict';

/**
 * freigewählter Name für die Aplikation ist 'App'
 */
var App = angular.module('App', [
    'ngRoute',
    'AppControllers',
    'moneyFilters'
]);

App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/portemonaie', {
                templateUrl: 'views/main.html',
                controller: 'MoneyListCtrl'
            }).
            when('/portemonaie/:moneyId', {
                templateUrl: 'views/detail.html',
                controller: 'MoneyDetailCtrl'
            }).
            otherwise({
                redirectTo: '/portemonaie'
            });
    }]);
        