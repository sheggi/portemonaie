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
            when('/portemonaie', {
                templateUrl: 'views/overview.html',
                controller: 'MoneyListCtrl'
            }).
            when('/portemonaie/:moneyId', {
                templateUrl: 'views/detail.html',
                controller: 'MoneyDetailCtrl'
            }).
            when('/change', {
                templateUrl: 'views/change.html',
                controller: 'ChangeCtrl'
            }).
            otherwise({
                redirectTo: '/portemonaie'
            });
    }]);
        