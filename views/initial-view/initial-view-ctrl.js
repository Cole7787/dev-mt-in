angular.module('pageViews').controller('initial-view-ctrl', function($scope, mainService){
  $scope.passData = function(name, tagline, imgUrl, bio){
    mainService.getUserData(name, tagline, imgUrl, bio);
  }
});
