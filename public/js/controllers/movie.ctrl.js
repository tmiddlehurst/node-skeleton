angular
	.module('takeOne')
	.controller('movieController', movieController)

function movieController (Movie) {
	var self = this;
	self.searchTerm = '';
	self.searchResults ='';

	self.search_poster_path = ''
	self.similar_poster_path = ''

	self.selected = '';
	self.selectedId ='';
	self.similarMovies = '';

	self.modalTarget = '';
	self.modalVideo = '';

	self.visible = true;

// Search for movie
	self.search = function () {
	
		// set 'term' of the req.body object
		Movie.search({ term: self.searchTerm})
			.then(function (res) {
				self.showContent();
				self.movieResults = JSON.parse(res.data)
			})
	}
// Get Similar movies
	self.getSimilar = function (movie) {

		// Store id of selected movie
		self.selected = movie
		self.selectedId = movie.id

		// Find similar movies to selected movie
			// set 'id' of req.body object
		Movie.showSimilar({ id: self.selected.id})
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
			// set 'id' of req.body object
		Movie.getTrailer({ id: self.modalTargetId})
			.then (function (res) {
				self.modalVideo = JSON.parse(res.data)
				self.trailerKey = self.modalVideo.results[0].key
				console.log(self.trailerKey)
			})
	}
//reload state
	self.reloadState = function ($state) {
		$state.reload()
	}

// Show/hide content

	self.resetVisibility = function () {
		self.visible = true
	}
	self.showContent = function () {
		self.visible = !self.visible;
	}

}