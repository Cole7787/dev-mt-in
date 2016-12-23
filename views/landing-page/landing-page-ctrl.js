angular.module('pageViews').controller('landing-page-ctrl', function($scope, mainService){
  $scope.getUserData = function(){
    $scope.data = mainService.obj;
    console.log($scope.data);
  }
  $scope.getUserData();
});
