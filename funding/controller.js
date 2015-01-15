var MyAppModule = angular.module("MyApp",[]);
MyAppModule.controller("StartUpController", function($scope) {

  $scope.funding = { startingEstimate: 0};

  $scope.computeNeeded = function(){
    $scope.funding.needed = $scope.funding.startingEstimate * 10;
  }

  $scope.requestFunding = function(){
    window.alert("もっと顧客を増やしてからにしてください");
  }

  $scope.$watch('funding.startingEstimate',$scope.computeNeeded);
});
