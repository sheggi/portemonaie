'use strict';
angular.module('moneyFilters', []).filter('valuta', function () {
    return function (input) {
        return input.toFixed(2) + ' CHFr.';
    };
});