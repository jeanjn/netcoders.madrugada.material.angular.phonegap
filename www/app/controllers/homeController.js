aplicacao.controller("homeController", function ($rootScope, $mdSidenav, $mdUtil) {

    $rootScope.menu = $mdUtil.debounce(function () {
        $mdSidenav("left").toggle()
    }, 50);
});