angular.module("pokemonApp", ["ui.router"])

.config(function ($stateProvider, $urlRouterProvider){
    
    $stateProvider
        
        .state("pokedex", {
            url: "/pokedex",
            templateUrl: "../views/pokedex.html",
            controller: "pokeController"
        })

        .state("pokemon", {
            url: "/pokemon/:name",
            templateUrl: "../views/pokemon.html",
            controller: "pokeDetailController"
        })
        .state("home", {
            url: "/",
            templateUrl: "../views/home.html",
            controller: ""
        })

    
    
    $urlRouterProvider.otherwise("/")
});




