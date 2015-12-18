angular.module("myApp", [])
    .controller("userController", 
        function($scope) {
    	 $scope.utente = {name: "Mario", surname: "Rossi"}; 
    	 $scope.saluta = function(){
    		 return "Buongiorno " +   
             $scope.utente.name + " " + 
             $scope.utente.surname + "!"
    	 }; 
    });
