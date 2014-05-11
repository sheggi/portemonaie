'use strict';

/**
 * Kontroller für Money Liste
 */
var AppControllers = angular.module('AppControllers',[]);

AppControllers.controller( 'MoneyListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('scripts/services/data.json').success(function (data) {
        /*$.each(data, function () {
            var obj = this;
            this.date = Date.parse(this.date);
            console.log(obj);
        });*/
        $scope.moneys = data;
        $scope.moneys.date = Date.parse($scope.moneys.date);
    });
    /*
    $scope.moneys = [
        {'date': '12.03.2001', 'value': 100},
        {'date': '14.03.2001', 'value': 1000},
        {'date': '12.05.2001', 'value': 3440},
        {'date': '12.03.2005', 'value': 2309},
        {'date': '12.03.2006', 'value': 830},
        {'date': '12.03.2014', 'value': 100}
    ];
    */
    $scope.orderProp = '-date';
    $scope.query = '';
}]);

AppControllers.controller('MoneyDetailCtrl', ['$scope', '$routeParams',
    function ($scope, $routeParams) {
        $scope.moneyId = $routeParams.moneyId;
        $scope.hello = function (name) {
            alert('Hello ' + (name || 'world') +'!');
        };
}]);

AppControllers.controller('ChangeCtrl', ['$scope', 
    function ($scope) {
        $scope.formModus = "Einnahme";
}]);

AppControllers.controller('TabsetCtrl', ['$scope', 
    function ($scope) {
}]);
