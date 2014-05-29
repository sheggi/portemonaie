'use strict';

/**
 * Kontroller für Money Liste
 */
var AppControllers = angular.module('AppControllers',[]);

AppControllers.controller( 'NavbarCtrl', ['$scope', '$location',
	function ($scope, $location) {
        
    $scope.subApps = [
        {title:"Home", path:"/"},
        {title:"Portemonaie", path:"/money"} ,
	   {title:"Test", path:"/test"}
    ];
        
    $scope.isCollapsed = true;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.isCollapsed = true;
    });
        
    $scope.getClass = function (path) {
        if(path === '/') {
            if($location.path() === '/') {
                return "active";
            } else {
                return "";
            }
        }

        if ($location.path().substr(0, path.length) === path) {
            return "active";
        } else {
            return "";
        }
    }
}]);

AppControllers.controller( 'MoneyCtrl', ['$scope', '$http', '$routeParams', '$filter', 
	function ($scope, $http, $routeParams, $filter) {
        
        
	$scope.panes = [
		{title:"Übersicht", src:"views/money.list.html", active:true},
		{title:"Change", src:"views/money.change.html"}
	];
        
 	$http.get('scripts/services/data.json').success(function (data) {
		$scope.moneys = data;
		$scope.moneys.date = Date.parse($scope.moneys.date);
	});
	$scope.orderProp = '-date';
    $scope.query = '';

	$scope.moneyId = $routeParams.moneyId;
    $scope.hello = function (name) {
        alert('FIXXXXXXX');
    };
      
    $scope.formModus = "Einnahme";
        	
	$scope.loadPane = function(src) {
        var i;
        for(i = 0; i < $scope.panes.length; ++i){
            $scope.panes[i].active = ($scope.panes[i].src == src);
        }
		$scope.paneURL = src;
	} 
    $scope.paneURL = $scope.panes[0].src;
    
    
    // ---------- TEST SECTION ----------
    
    var _moneyByMonth = [];
    $scope.moneyByMonth = function (rawMoneys) {
            _moneyByMonth = [];
    		for(var i = 0; i < rawMoneys.length ;i++){
                var yearmonth = $filter('date')(rawMoneys[i].date,'yyyyMM') + "";
                _moneyByMonth[_moneyByMonth.length] = {'yearmonth': yearmonth, 'entry' : rawMoneys[i]};
                
    		}
    		//return _moneyByMonth;
    		return _moneyByMonth;
    }
    
        
}]);