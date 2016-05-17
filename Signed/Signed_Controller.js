angular.module('NDA').controller('signed', function ($location) {
  this.placeholder=[];
  this.goBack = function () {
     return $location.path('/');
     console.log('In goback!')
  }
});