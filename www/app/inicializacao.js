/// <reference path="../node_modules/angular/angular.min.js" />
/// <reference path="../node_modules/angular-route/angular-route.min.js" />

//inicia a aplicacao, criando um modulo
//atraves do nome do modulo (MADRUGADA) conseguimos usa-lo em outros lugares
//injetamos os servicos que sera usando na aplicacao
var aplicacao = angular.module("MADRUGADA", ["ngRoute", "ngMaterial", "ngMdIcons"]);

//angular por padrao trabalha com injecao de dependencia
//sempre que baixarmos um modulo temos que injetar dentro da aplicacao

//lembra o arquivo route.config.cs do asp.net mvc
aplicacao.config(function ($routeProvider) {
    //$routeProvider desceu do modulo ngRoute
    //definimos uma url amigavel pra cada pagina

    $routeProvider
        .when("/home",
            {
                controller: "homeController",
                templateUrl: "app/views/home.html"
            })
        .when("/amigo/listar",
            {
                controller: "amigoController",
                templateUrl: "app/views/amigos/listar.html"
            })
        .when("/amigo/cadastrar",
            {
                controller: "amigoController",
                templateUrl: "app/views/amigos/cadastrar.html"
            });

    //definimos a rota padrao, caso o usuario nao especifique nenhuma url
    $routeProvider.otherwise({
        redirectTo: "/home"
    });


});