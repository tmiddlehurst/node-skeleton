angular
	.module('takeOne')
	.controller('movieController', movieController)

function movieController (Movie) {
	var self = this;
	self.searchTerm = '';
	self.searchResults ='';

	self.selected = '';
	self.selectedId ='';
	self.similarMovies = '';

	self.visible = true;

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
		self.selected = individualMovie
		self.selectedId = individualMovie.id

		// Find similar movies to selected movie
		Movie.showSimilar({ id: self.selectedId})
			.then (function (res) {
				self.similarMovies = JSON.parse(res.data)
				// console.log(self.similarMovies)
			})
	}

// Show/hide content

		self.showContent = function () {
		console.log(self.visible);
		self.visible = false;
		console.log(self.visible);
	}

}