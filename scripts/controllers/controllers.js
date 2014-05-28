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
        
        var rawMoneyList = null;
        
	$scope.panes = [
		{title:"Übersicht", src:"views/money.list.html", active:true},
		{title:"Change", src:"views/money.change.html"}
	];
        
 	$http.get('scripts/services/data.json').success(function (data) {
        console.log(data);
		$scope.moneys = data;
		rawMoneyList = data;
		$scope.moneys.date = Date.parse($scope.moneys.date);
	});
	$scope.orderProp = '-date';
    $scope.query = '';

	$scope.moneyId = $routeParams.moneyId;
    $scope.hello = function (name) {
        alert('Hello ' + (name || 'world') +'!');
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
    
    var indexedTeams = [];
    
    $scope.playersToFilter = function() {
        indexedTeams = [];
        return $scope.moneys;
    }
    
    $scope.filterTeams = function(player) {
        // var date = $filter('date')(player.date,'yyyyMM');
        var teamIsNew = indexedTeams.indexOf(player.date) == -1;
        if (teamIsNew) {
            indexedTeams.push(player.date);
        }
        return teamIsNew;
    }
   
    var _moneyByMonth;
    $scope.moneyByMonth = function (rawMoneys) {
    		_moneyByMonth = [];
    		for(var i = 0; i < rawMoneys.length ;i++){
                var yearmonth = $filter('date')(rawMoneys[i].date,'yyyyMMdd') + "";
                _moneyByMonth[_moneyByMonth.length] = {'yearmonth': yearmonth, 'entry' : rawMoneys[i]};
    			//_moneyByMonth[ ($filter('date')(rawMoneys[i].date,'yyyyMM'))   ]  =  rawMoneys[i] ; ////FIXXXX
    		}
    		//return _moneyByMonth;
    		return _moneyByMonth;
    }
    
        
}]);