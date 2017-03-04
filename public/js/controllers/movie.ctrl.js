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
	self.modalVideos = '';

	self.visible = true;

// Search for favourite movie
	self.search = function () {
		Movie.search({ term: self.searchTerm})
			.then(function (res) {
				self.showContent();
				self.movieResults = JSON.parse(res.data)
			})
	}
// Get Similar movies
	self.getSimilar = function (movie) {
		// Store id of selected favourite movie
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
		self.modalTargetId = movie.id;
		self.showContent();

		// Get Trailer of movie
		Movie.getTrailer({ id: self.modalTargetId})
			.then (function (res) {
				self.modalVideo = JSON.parse(res.data)
				console.log(self.modalVideo)
			})
	}

// Show/hide content

	self.resetVisibility = function () {
		self.visible = true
	}
	self.showContent = function () {
		self.visible = !self.visible;
	}

}