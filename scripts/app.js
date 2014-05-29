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
        




/*
 * groupBy
 *
 * Define when a group break occurs in a list of items
 * http://stackoverflow.com/questions/19992090/angularjs-group-by-directive
 *
 * @param {array}  the list of items
 * @param {String} then name of the field in the item from the list to group by
 * @returns {array} the list of items with an added field name named with "_new"
 *                  appended to the group by field name
 *
 * @example     <div ng-repeat="item in MyList  | groupBy:'groupfield'" >
 *              <h2 ng-if="item.groupfield_CHANGED">{{item.groupfield}}</h2>
 *
 *              Typically you'll want to include Angular's orderBy filter first
 */

App.filter('groupBy', function(){
    return function(list, group_by) {

    var filtered = [];
    var prev_item = null;
    var group_changed = false;
    // this is a new field which is added to each item where we append "_CHANGED"
    // to indicate a field change in the list
    var new_field = group_by + '_CHANGED';

    // loop through each item in the list
    angular.forEach(list, function(item) {

        group_changed = false;

        // if not the first item
        if (prev_item !== null) {

            // check if the group by field changed
            if (prev_item[group_by] !== item[group_by]) {
                group_changed = true;
            }

        // otherwise we have the first item in the list which is new
        } else {
            group_changed = true;
        }

        // if the group changed, then add a new field to the item
        // to indicate this
        if (group_changed) {
            item[new_field] = true;
        } else {
            item[new_field] = false;
        }

        filtered.push(item);
        prev_item = item;

    });

    return filtered;
    };
})