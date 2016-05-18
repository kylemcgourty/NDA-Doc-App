angular.module('NDA').controller('signed', function ($location) {
  this.placeholder=[];
  this.goBack = function () {
     return $location.path('/');
     console.log('In goback!')
  };
  this.viewCollection = function () {
    return $location.path('/signees')
    console.log("in viewCollection!")
  }
});