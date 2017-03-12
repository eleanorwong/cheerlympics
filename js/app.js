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

cheerlympics.controller('EditController', ['$scope',
    function EditController($scope) {
        $scope.tool = '';

        $scope.line1 = "";
        $scope.line2 = "";

        $scope.color = "white";

        $scope.sounds = [{name: "Applause"}, {name: "Horn"}, { name: "Cheering"}];

        $scope.setTool = function(newTool) {
            if($scope.tool === newTool) {
                $scope.tool = '';
            } else {
                $scope.tool = newTool;
            }
        }

        $scope.isSet = function(toolName) {
            return $scope.tool === toolName;
        }

        $scope.isSingleLine = function() {
            if($scope.text.line1 === "" && $scope.text.line2 === "") {
                return false;
            }

            return true;
        }

        $scope.setColor = function(color) {
            $scope.color = color;
            $scope.tool = '';
        }
    }
]);