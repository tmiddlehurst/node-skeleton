angular
	.module('takeOne')
	.factory('User', userFactory)

function  userFactory (API, $http) {
	return {
		create: function (user) {
			return $http.post(API + '/users', user)
		}
	}
}