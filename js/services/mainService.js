angular.module("pokemonApp")
.service("mainService", function($http){
    var service = this;
    var BASE_URL = "http://pokeapi.co/api/v1/"
    this.getDex = function(){
        return $http.get(BASE_URL + 'pokedex')
        .then(function(response) { 
            console.log(response)
            var pokemonList = response.data.objects[0].pokemon;
            for (var pokemon of pokemonList) {
                pokemon.pokedex = parseInt(pokemon.resource_uri.split('/').slice(-2, -1).join(''))
            }
            var sortedList = pokemonList.sort(function(a, b) {
                return a.pokedex - b.pokedex;
            })
            sortedList = sortedList.slice(0, 151);
            return sortedList
        })
    }
    this.getPokemon = function(poke){
        console.log(BASE_URL + "pokemon/" + poke)
        return $http.get(BASE_URL + "pokemon/" + poke).then(function(response){
            return response.data
        })
    }
    this.getDescription = function(description){
        return $http.get("http://pokeapi.co" + description)
    }
})