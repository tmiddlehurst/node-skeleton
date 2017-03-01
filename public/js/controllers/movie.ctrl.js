angular
	.module('whatToWatch')
	.controller('movieController', movieController)

function movieController (Movie) {
	var self = this;
	self.searchTerm = '';

	self.search = function () {
		Movie.search(self.searchTerm)
	}
}