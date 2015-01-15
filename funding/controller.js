var MyAppModule = angular.module("MyApp",[]);
MyAppModule.controller("StartUpController", function($scope) {

  $scope.funding = { startingEstimate: 0};

  $scope.computeNeeded = function(){
    $scope.funding.needed = $scope.funding.startingEstimate * 10;
  }

});
