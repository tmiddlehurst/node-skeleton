angular
	.module('whatToWatch')
	.controller('movieController', movieController)

function movieController (Movie) {
	var self = this;
	self.searchTerm = '';

	self.search = function () {
		Movie.search({ term: self.searchTerm})
			.then(function (res) {
				var data = JSON.parse(res.data)
				console.log(data)
			})
			.catch(function (err) {
				console.log(err)
			})
	}
}