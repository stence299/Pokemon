angular.module('pokemonApp').controller('pokeDetailController', function($scope, $stateParams, mainService) {
    console.log($stateParams.name)
    mainService.getPokemon($stateParams.name)
    .then(function(response) {
        console.log(response)
        $scope.pokemon = response;
    })


})