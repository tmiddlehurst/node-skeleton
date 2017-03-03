angular
	.module('takeOne')
	.controller('movieController', movieController)

function movieController (Movie) {
	var self = this;
	self.searchTerm = '';
	self.movieResults = '';
	self.similarTo = '';
	self.selected ='';
	self.visible=true;
	self.searchResults ='';

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
	self.showSimilar = function () {
		console.log
	}
	self.printMovieResults = function() {
		console.log(self.movieResults);
	}
	self.storeId = function (individualMovie) {
		self.selectedId = individualMovie.id;

		console.log(self.selectedId);
	}

}