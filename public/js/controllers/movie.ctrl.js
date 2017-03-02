angular
	.module('takeOne')
	.controller('movieController', movieController)

function movieController (Movie) {
	var self = this;
	self.searchTerm = '';
	self.movieResults = '';
	self.selfco

	self.search = function () {
		Movie.search({ term: self.searchTerm})
			.then(function (res) {
				self.movieResults = JSON.parse(res.data)
				console.log(self.movieResults)
			})
	}
	self.printMovieResults = function() {
		console.log(self.movieResults);
	}
}