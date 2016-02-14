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

  $scope.userMutable = [];

  function User(){}

  $scope.newUser = new User();

  User.prototype.getUserData = function(){

    var userImmutable = [];

    var args = Array.prototype.slice.call(arguments);

    args.forEach(function(x){
      userImmutable.push(x);
      $scope.userMutable.push(x);
    });

    var userData = {
      username: "nada",
      email:    "nada",
      password: "nada",

      set setUserData(array){
        var props     = array;
        this.username = props[0] || '';
        this.email    = props[1] || '';
        this.password = props[2] || '';
      }
    };
    userData.setUserData = userImmutable;

    return JSON.stringify(userData, null, '\n\t');
  };

  $scope.title = "Sign Up";
  $scope.message = "Hey!";

  $http.get('/userSignUp').then(function(res){

    $scope.username = res.data.name;
  })
});