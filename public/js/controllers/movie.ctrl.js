angular
	.module('whatToWatch')
	.controller('movieController', movieController)

function movieController (movie) {
	var self = this;
	self.movieTerm = '';

	self.movie = function () {
		Movie.search(self.searchTerm)
	}
}