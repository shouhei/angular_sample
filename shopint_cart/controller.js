var MyAppModule = angular.module("MyApp",[]);
MyAppModule.controller("CartController", function($scope) {
  $scope.items = [
    {'title':'ペットボトル','quantity':8,'price': 3.95},
    {'title':'ポルカドット','quantity':17,'price': 12.95},
    {'title':'ペブル','quantity':5,'price': 6.95},
  ];
  $scope.remove = function(index){
    $scope.items.splice(index,1);
  }
});
