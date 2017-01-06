angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      /* FIX ME */
      return $http({
        method: 'POST',
        url: '/api/login',
        data: user
      })
      .then(function (response) {
        return response.data;
      })
    };

    this.getFriends = function() {
    	/* FIX ME */
      return $http({
        method: 'GET',
        url: '/api/profiles'
      })
      .then(function (response) {
        return response.data
      })
    };

});
