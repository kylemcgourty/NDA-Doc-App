angular.module('NDA').controller('NDAdoc', function ($scope, $location) {
  $scope.doc = {};
  this.entered = function () {
    console.log("INside entered!")
    return $location.path('/submitted')
  }
});