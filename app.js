angular.module("RoutingApp", ["ngRoute"]);
  .config(function("$routeProvider", "$locationProvider", function){
    $routeProvider
      .when('/first', {
        templateUrl: "first.html"
       })
      .when('/second', {
        templateUrl:"second.html"
      })
      .otherwise({
        templateUrl:"initial.html"
      });
    $locationProvider.html5Mode(true);
  });

console.log("this worked!");