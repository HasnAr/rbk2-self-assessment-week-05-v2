angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  .factory('counter', function($scope){
    $scope.counter=1;
  })
  .controller('fizzbuzzCtrl', function($scope){
    $scope.increment =function(){
      $scope.counter++;
    };
    if($scope.counter%3===0)
      $scope.display='FIZZ'
    else if($scope.counter%5===0)
      $scope.display= 'BUZZ'
    else if($scope.counter%3===0 && $scope.counter%5===0)
       $scope.display= 'FIZZBUZZ'
     
  })
  .controller('fozzbazzCtrl', function($scope){
    $scope.increment =function(){
      $scope.counter++;
    };
     if($scope.counter%4===0)
      $scope.display='FOZZ'
    else if($scope.counter%6===0)
      $scope.display= 'BAZZ'
    else if($scope.counter%4===0 && $scope.counter%6===0)
       $scope.display= 'FOZZBAZZ'

  });
