app.controller("HomeController", function($scope, $http){

  $scope.title = "Create Invoice";
  $scope.message = 'hello blah blah';

  $http.get('/test').then(function(res){

    $scope.username = res.data.name;

  })

});


app.controller("AboutController", function($scope, $http){

  $scope.title = 'about page';
  $scope.message = "I'm a poet -";

  $http.get('/test').then(function(res){

    $scope.username = res.data.name;
  })
});



app.controller("SignUpController", function($scope, $http){

  $scope.userData = [];

  $scope.newUser = function(email, pass){
    $scope.userData.push(email, pass);
  };


  $scope.title = "Sign Up";
  $scope.message = "You Sign Up Now";

  $http.get('/userSignUp').then(function(res){

    $scope.username = res.data.name;
  })
});