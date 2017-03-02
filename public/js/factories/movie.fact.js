angular
	.module('takeOne')
	.factory('Movie', movieFactory)
function movieFactory (API, $http) {
	return {
		search: function(searchTerm) {
			return $http.post(API + '/search', searchTerm)

		}
	}
}