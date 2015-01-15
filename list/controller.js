var MyAppModule = angular.module("MyApp",[]);
var students = [{'name':'メアリー・コントラリー','id':1},
                {'name':'ジャック・スプラット','id':2},
                {'name':'ジル・ヒル','id':3}];
MyAppModule.controller("StudentListController", function($scope) {
  $scope.students = students;
  $scope.insertTom = function(){
    $scope.students.splice(1,0,{'name':'トム・サム','id':4});
  }
});
