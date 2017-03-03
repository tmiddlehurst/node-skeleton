var request = require('request')
var baseUrlSearch = 'https://api.themoviedb.org/3/search/movie?api_key=' + process.env.TMDBAPIKEY + '&language=en-US'
var movieController = require('../controllers/movie.js');
var baseUrlShowSimilar = 'https://api.themoviedb.org/3/movie/';
var extraUrlShowSimilar = '/similar?api_key=' + process.env.TMDBAPIKEY + '&language=en-US';


function search (req, res) {
	var searchParams = req.body.term
	console.log("req.body starts here")
	// console.log(req.body)
	if (!searchParams) return res.status(500).send()

	request(baseUrlSearch + '&query=' + searchParams, function (error, response, body) {
		if (error) {
			console.log(error)
			return res.status(500).json(error)
		}
		res.json(body);
		// console.log(body)
	})
}
function showSimilar (req, res) {
	var selectedId = req.body.id;
	if (!selectedId) return res.status(500).send()

	request(baseUrlShowSimilar + selectedId + extraUrlShowSimilar, function (error, response, body) {
		if (error) {
			console.log(error)
			return res.status(500).json(error)
		}
		console.log("BODY:" + body)
		return res.json(body);
	})
} 





module.exports = {
	search: search,
	showSimilar: showSimilar
}