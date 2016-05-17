
var app = angular.module('NDA', ['ngRoute']);

angular.module('NDA').directive('ipa', function () {
  return {
    restrict: 'E',
    templateUrl: 'doc/document.html'
  }
});


app.config(function($routeProvider, $httpProvider) {
  $routeProvider.when(
    '/', {
      templateUrl: 'NDA/NDA.html',
      controller: 'NDAdoc',
      controllerAs: 'ipa'
    })
  .when( 
    '/submitted', {
      templateUrl: 'Signed/entered.html',
      controller: 'entered'

  })
});