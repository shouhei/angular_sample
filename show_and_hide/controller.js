var MyAppModule = angular.module("MyApp",[]);
MyAppModule.controller("DeathrayMenuController", function($scope) {
  $scope.menuState = {'show':false};
  $scope.toggleMenu = function(){
    $scope.menuState.show = !$scope.menuState.show;
  }
});
