'use strict';

var riders = [
    {
        name: "Valentino Rossi",
        number: 46,
        team: "Movistar Yamaha MotoGP",
        nation: 'ita',
        height: 182,
        weight: 65,
        city: "Urbino"
    },
    {
        name: "Jorge Lorenzo",
        number: 99,
        team: "Movistar Yamaha MotoGP",
        nation: 'esp',
        height: 173,
        weight: 63,
        city: "Palma de Mallorca"
    },
    {
        name: "Marc Marquez",
        number: 93,
        team: "Repsol Honda Team",
        nation: 'esp',
        height: 168,
        weight: 59,
        city: "Cervera"
    },
    {
        name: "Dani Pedrosa",
        number: 26,
        team: "Repsol Honda Team",
        nation: 'esp',
        height: 160,
        weight: 51,
        city: "Sabadell"
    }
]

var controllerManager = angular.module('controllers', ['services']);

/*
 * Funky array syntax, ['serviceName', function( serviceArgument ) {} ]
 * Quando Angular viene caricato, viene creato un Injector
 * Quando vengono caricati i services, si registrano all'Injector 
 * Quando viene caricata l'applicazione, vengono registrati tutti i controller con l'Injector dicendo i nomi dei servizi di cui quel controller avrà bisogno una volta eseguito
 * Quando la pagina viene utilizzata e viene eseguito il controller, l'Injector recupera i servizi utilizzati da quel controller e li passa come argomenti
 */
controllerManager.controller('ridersListController', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.riders = riders;
    $scope.user = {name: "Nuovo", surname: ""};
}]);

controllerManager.controller('riderDetailsController', ['$scope', '$routeParams', function($scope, $routeParams){
    var asd = 2;
	$scope.rider = riders.filter(function(rider){
    	return rider.number == $routeParams.number;
    })[0];
}]);

controllerManager.controller('webServiceController', ['$scope', '$rootScope', 'Customer', function($scope, $rootScope, Customer){
    $scope.site = 'www.wordpress.com';
    $scope.angular = angular;
    
    $scope.sendRequest = function(){
        Customer.getCustomers(
    		{site: $scope.site}, 
        	function(response){
        		$scope.response = response;
        	},
        	function(error){
        		$scope.response = error;
        	}
        )
    }
}]);

controllerManager.controller("testController", ['$scope', '$rootScope', 
        function($scope, $rootScope) {
    	// $scope.user = $rootScope.user; 
    	 $scope.sayHello = function(){
    		 return "Buongiorno " +   
    		 $rootScope.user.name + " " + 
    		 $rootScope.user.surname + "!"
    	 }; 
    	 $scope.visibile = false;
    	 this.testVariable = "variabile passata in maniera diversa"
    }]);