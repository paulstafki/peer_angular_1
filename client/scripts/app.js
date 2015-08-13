var myApp = angular.module('myApp', []); // still need to memorize this line of code

myApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http){
    $scope.note = {};
    $scope.notes = [];

    $scope.heading = "Here is your message: ";

    $scope.getData = function(){
        //GET
        $http.get('/data').then(function(response){
            console.log(response);
            $scope.note = {};
            $scope.notes = response.data;
            console.log($scope.notes);
            return response.data;
        });
    };

    $scope.updateMessage = function(note){
        //POST
        console.log($scope.note);
        console.log(note);
        $http.post('/data', note).then($scope.getData());
    };
}]);