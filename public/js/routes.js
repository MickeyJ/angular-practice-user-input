app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: '/partials/about.html',
      controller: 'AboutController'
    })
    .when('/sign-up', {
      templateUrl: '/partials/sign-up.html',
      controller: 'SignUpController'
    })


    .otherwise({redirectTo: '/'});
     $locationProvider.html5Mode(true);

});