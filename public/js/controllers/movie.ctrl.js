angular
	.module('takeOne')
	.controller('movieController', movieController)

function movieController (Movie) {
	var self = this;
	self.searchTerm = '';
	self.movieResults = '';
	self.visible=true;

	self.showContent = function () {
		console.log(self.visible);
		self.visible = false;
		console.log(self.visible);
	}

	self.search = function () {
		Movie.search({ term: self.searchTerm})
			.then(function (res) {
				self.showContent();
				self.movieResults = JSON.parse(res.data)
				console.log(self.movieResults)
			})
	}
	self.printMovieResults = function() {
		console.log(self.movieResults);
	}
}