var api_key = process.env.TMDBAPIKEY;
var request = require('request');
var baseUrlSearch = 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&language=en-US';
var movieController = require('../controllers/movie.js');
var baseUrlMovieMethods = 'https://api.themoviedb.org/3/movie/';
var extraUrlShowSimilar = '/similar?api_key=' + api_key + '&language=en-US';
var extraUrlGetTrailer = '/videos?api_key=' + api_key + '&language=en-US';


function search (req, res) {
	var searchParams = req.body.term
	if (!searchParams) return res.status(500).send()

	request(baseUrlSearch + '&query=' + searchParams, function (error, response, body) {
		if (error) {
			console.log(error)
			return res.status(500).json(error)
		}
		res.json(body);
	})
}
function showSimilar (req, res) {
	var selectedId = req.body.id;
	if (!selectedId) return res.status(500).send()

	request(baseUrlMovieMethods + selectedId + extraUrlShowSimilar, function (error, response, body) {
		if (error) {
			console.log(error)
			return res.status(500).json(error)
		}
		return res.json(body);
	})
}
function getTrailer (req, res) {
	var movieIdForTrailer = req.body.id
	console.log(movieIdForTrailer)
	if (!movieIdForTrailer) return res.status(500).send()

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