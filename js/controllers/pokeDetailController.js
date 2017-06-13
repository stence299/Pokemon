angular.module('pokemonApp')
.controller('pokeDetailController', function($scope, $stateParams, mainService) {
    console.log($stateParams.name)
    mainService.getPokemon($stateParams.name)
    .then(function(response) {
        console.log(response)
        $scope.pokemon = response;

        mainService.getDescription($scope.pokemon.descriptions[25].resource_uri)
        .then(function (response){
            $scope.descriptions = response.data;
            console.log(response);
        })
    })
    
})