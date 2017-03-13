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

cheerlympics.controller('EditController', ['$scope', '$http',
    function EditController($scope, $http) {
        $scope.tool = '';

        $scope.text = {};

        $scope.text.line1 = '';
        $scope.text.line2 = '';

        $scope.color = "white";

        $scope.editing = true;

        $scope.flag = "";

        $scope.sounds = [{name: "Applause"}, {name: "Horn"}, { name: "Cheering"}];

        $http.get('js/countries.json')
            .then(function(res){
                $scope.countries = res.data.countries.country;                
            });

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

        $scope.setColor = function(color) {
            $scope.color = color;
            $scope.tool = '';
        }

        $scope.setFlag = function(flag) {
            $scope.flag = flag;
            $scope.tool = '';
        }

        $scope.isEdit = function() {
            return $scope.editing;
        }

        $scope.togglePlay = function() {
            console.log($scope.editing);
            $scope.editing = !$scope.editing;
        }

        $scope.getFlagClass = function(code) {
            return "flag-icon-"+code.toLowerCase();
        }

        $scope.isSingleLine = function() {
            if(($scope.text.line1 === "" || typeof($scope.text.line1) === undefined) && $scope.text.line2 === "") {
                return false;
            }

            return true;
        }
    }
]);

$('.marquee').marquee({
    //speed in milliseconds of the marquee
    duration: 5000,
    //gap in pixels between the tickers
    gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
});