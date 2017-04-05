var api_key = process.env.TMDBAPIKEY;
var request = require('request');
var movieController = require('../controllers/movie.js');

// Standard URL for a search request
var baseUrlSearch = 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&language=en-US';

// Standard URL for API requests for a specific movie
var baseUrlMovieMethods = 'https://api.themoviedb.org/3/movie/';

// URL extensions for movie-specific API requests
var extraUrlShowSimilar = '/similar?api_key=' + api_key + '&language=en-US';
var extraUrlGetTrailer = '/videos?api_key=' + api_key + '&language=en-US';

// ** API SEARCH using user query **
function search (req, res) {

	// takes the search term provided by the user on the 'search' state
	var searchParams = req.body.term
	if (!searchParams) return res.status(500).send()

	// queries the API using the search term 
	request(baseUrlSearch + '&query=' + searchParams, function (error, response, body) {
		if (error) {
			console.log(error)
			return res.status(500).json(error)
		}
		res.json(body);
	})
}

// ** API SHOW SIMILAR request **
function showSimilar (req, res) {

	// takes the id of the movie selected on the page by the user
	var selectedId = req.body.id;
	if (!selectedId) return res.status(500).send()

	// queries the API using the movie's id
	request(baseUrlMovieMethods + selectedId + extraUrlShowSimilar, function (error, response, body) {
		if (error) {
			console.log(error)
			return res.status(500).json(error)
		}
		return res.json(body);
	})
}

// ** API GETTRAILER request **
function getTrailer (req, res) {

	// takes the id of the movie selected on the page by the user
	var movieIdForTrailer = req.body.id
	console.log(movieIdForTrailer)
	if (!movieIdForTrailer) return res.status(500).send()

	// queries the API using the movie's id
	request(baseUrlMovieMethods + movieIdForTrailer + extraUrlGetTrailer, function (error, response, body) {
		if (error) {
			console.log(error)
			return res.status(500).json(error)
		}
		console.log("BODY:" + body)
		return res.json(body)
	})
}


module.exports = {
	search: search,
	showSimilar: showSimilar,
	getTrailer: getTrailer,
}