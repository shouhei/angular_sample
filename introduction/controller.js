var MyAppModule = angular.module("MyApp",[]);
MyAppModule.controller("HelloController", function($scope) {
  $scope.greeting={ text: "hello" };
});
