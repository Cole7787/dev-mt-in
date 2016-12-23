angular.module('pageViews').service('mainService', function($http){
  var obj = {};
  this.getUserData = function(name, tagline, imgUrl, bio){
      obj.name = name;
      obj.tagline = tagline;
      obj.imgUrl = imgUrl;
      obj.bio = bio;

  }
this.obj = obj;
});
