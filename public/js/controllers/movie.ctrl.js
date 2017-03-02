angular
	.module('whatToWatch')
	.controller('movieController', movieController)

function movieController (Movie) {
	var self = this;
	self.searchTerm = '';
	self.search = function () {
		Movie.search({ term: self.searchTerm})
			.then(function (res) {
				self.movieResults = JSON.parse(res.data).results[0].title
				console.log(self.movieResults)
				console.log(self.movieResults.results[0].title)
			})
			.catch(function (err) {
				console.log(err)
			})
	}
}