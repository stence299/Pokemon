angular.module("pokemonApp")
.controller("pokeController", function($scope, mainService){
    mainService.getDex().then(function(result){
        console.log(result)
        $scope.entries = result
    })
})