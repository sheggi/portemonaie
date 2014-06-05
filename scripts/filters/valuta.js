'use strict';
angular.module('moneyFilters', []).filter('valuta', function () {
    return function (input) {
        if(input == "") return;
        return input.toFixed(2) + ' CHFr.';
    };
});