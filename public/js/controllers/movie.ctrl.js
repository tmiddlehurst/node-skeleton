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

	self.passedMovie ='';
	self.modalTarget = '';

	self.visible = true;

// Search for favourite movie
	self.search = function () {
		Movie.search({ term: self.searchTerm})
			.then(function (res) {
				self.showContent();
				self.movieResults = JSON.parse(res.data)
			})
	}

// Store id of selected favourite movie
	self.storeId = function (movie) {
		self.selected = movie
		self.selectedId = movie.id

		// Find similar movies to selected movie
		Movie.showSimilar({ id: self.selectedId})
			.then (function (res) {
				self.similarMovies = JSON.parse(res.data)
			})
	}

// Content to be shown in modal
	self.modalContent = function (movie) {
		self.modalTarget = movie;
		self.showContent();
	}

// Show/hide content

	self.resetVisibility = function () {
		self.visible = true
	}
	self.showContent = function () {
		self.visible = !self.visible;
	}

}