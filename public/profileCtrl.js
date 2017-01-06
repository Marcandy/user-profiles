angular.module('userProfiles')
.controller('profileCtrl', function( $scope ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
	$scope.profiles = function () {
	  friendService.getFriends().then(function (response) {
	    
	  })
	}

});
