angular.module('NDA').controller('collection', function ($scope, $location) {

$scope.savedSignatures = savedSignatures;

$scope.goBack = function() {
     return $location.path('/');
   };

});