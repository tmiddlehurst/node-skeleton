angular
	.module('takeOne')
	.controller('movieController', movieController)

function movieController (Movie) {
	var self = this;
	self.searchTerm = '';
	self.showSimilar ='';
	self.visible = true;
	self.searchResults ='';
	self.selectedId ='';
	self.similarMovies = '';

	// Search for favourite movie
	self.search = function () {
		Movie.search({ term: self.searchTerm})
			.then(function (res) {
				self.showContent();
				self.movieResults = JSON.parse(res.data)
				console.log(self.movieResults)
			})
	}
	// Store id of selected favourite movie
	self.storeId = function (individualMovie) {
		self.selectedId = individualMovie.id;

	// Find similar movies to selected movie
	self.showSimilar = function () {
		Movie.showSimilar({ id: self.selectedId})
			.then (function (res) {
				self.similarMovies = JSON.parse(res.data)
				console.log(self.movieResults)
			})
	}
		console.log(self.selectedId);
	}

	// Show/hide content

		self.showContent = function () {
		console.log(self.visible);
		self.visible = false;
		console.log(self.visible);
	}

}