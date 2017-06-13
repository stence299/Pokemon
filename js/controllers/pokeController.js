angular.module("pokemonApp")
.controller("pokeController", function($scope, mainService){
    mainService.getDex().then(function(result){
        console.log(result)
        $scope.entries = result
    })
    $scope.pictureBox={

    }
    $scope.showPicture = function(name){ 
     console.log(name)
     $scope.pictureBox = {
         'background-image': 'url("http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif")'
     }
    mainService.getPokemon(name)
    .then(function(response) {
        console.log(response)
        $scope.pokemon = response;
        $scope.pictureBox= {
            'background-image': 'url("https://img.pokemondb.net/artwork/' + response.sprites[0].name + '.jpg")',
        }
    })
    }
})