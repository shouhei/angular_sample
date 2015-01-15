var MyAppModule = angular.module("MyApp",[]);
var album = [{'name':"サウスウェスト・セレナーデ",'duration':'2:34'},
             {'name':"ノーザン・ライト・ワルツ",'duration':'3:21'},
             {'name':"イースタン・タンゴ",'duration':'17:45'}]
MyAppModule.controller("AlbumController", function($scope) {
  $scope.album = album;
});
