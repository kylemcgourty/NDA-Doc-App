
var app = angular.module('NDA', ['ngRoute']);

app.controller('NDAdoc', function () {
  this.doc = {};
  console.log('inside')
});

app.directive('ipa', function () {
  return {
    restrict: 'E',
    templateUrl: 'doc/document.html'
  }
});

app.config(function($routeProvider, $httpProvider) {
  $routeProvider.when(
    '/', {
      templateUrl: 'index.html',
      controller: 'NDAdoc',
      controllerAs: 'doc'
    })
});