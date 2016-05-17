
var app = angular.module('NDA', ['ngRoute']);

app.controller('NDAdoc', function () {
  this.doc = {};
  this.entered = function () {
    $location.path('/submitted')
  }
});

app.directive('ipa', function () {
  return {
    restrict: 'E',
    templateUrl: 'doc/document.html'
  }
});

app.controller('entered', function () {

})

app.config(function($routeProvider, $httpProvider) {
  $routeProvider.when(
    '/', {
      templateUrl: 'index.html',
      controller: 'NDAdoc',
      controllerAs: 'doc'
    })
  .when( 
    '/submitted', {
      templateUrl: 'entered.html',
      controller: 'entered'

  })
});