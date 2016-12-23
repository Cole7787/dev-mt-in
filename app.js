angular.module('pageViews', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('', '/initial');
    $stateProvider
    .state('initial', {
      url: '/initial',
      controller: 'initial-view-ctrl',
      templateUrl: './views/initial-view/initial-view.html'
    })
    .state('landing-page', {
      url: '/landing-page',
      controller: 'landing-page-ctrl',
      templateUrl: './views/landing-page/landing-page.html'
    })
    .state('friends-view', {
      url: '/friends-view',
      controller: 'friends-view-ctrl',
      templateUrl: './views/friends-view/friends-view-ctrl'
    })
    .state('search-friends', {
      url: '/search-friends',
      controller: 'search-friends-ctrl',
      templateUrl: './views/search-friends/search-friends.html'
    })
    .state('friends-profile', {
      url: '/friends-profile',
      controller: 'friends-profile-ctrl',
      templateUrl: './views/friends-profile/friends-profile.html'

    })
    .state('update-profile', {
      url: '/update-profile',
      controller: 'update-profile-ctrl',
      templateUrl: './views/update-profile/update-profile.html'
    });
})
