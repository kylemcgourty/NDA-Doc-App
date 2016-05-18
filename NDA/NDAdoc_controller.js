var savedSignatures = [];

 


angular.module('NDA', ['ngRoute']).controller('NDAdoc', function ($scope, $location) {
  this.doc = {};

  this.entered = function () {
    
    console.log("INside entered!");
    console.log("this is scope.recipient", $scope.doc.recipient);
    savedSignatures.push({signee: $scope.doc.recipient, 
      subject: $scope.doc.IP,
      date: $scope.doc.date});
    
    return $location.path('/submitted')

  }
});