var cheerlympics = angular.module('cheerlympics', ['ngRoute']);

cheerlympics.config(function($routeProvider) {
    $routeProvider 
        .when("/", {
            templateUrl: "home.html",
            controller: "CheerlympicsController"
        })
        .when("/edit", {
            templateUrl: "edit.html",
            controller: "EditController"
        })
});

cheerlympics.controller('CheerlympicsController',
    function CheerlympicsController($scope) {
        $scope.temp = "Hello2!"
    }
);