aplicacao.controller("amigoController", function ($scope) {



    $scope.amigos = [];

    for (var i = 0; i < 100; i++) {
        $scope.amigos[i] = { nome: "Pessoa" + i, ativo: (i % 2 == 0) };
    }
});