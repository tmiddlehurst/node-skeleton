var request = require('request')
var baseUrlSearch = 'https://api.themoviedb.org/3/search/movie?api_key=' + process.env.TMDBAPIKEY + '&language=en-US'
var baseUrlShowSimilar = 'https://api.themoviedb.org/3/movie/' + selected + 'similar?api_key=' + process.env.TMDBAPIKEY + '&language=en-US'
var movieController = require('../controllers/movie.js');
console.log(baseUrl)

function search (req, res) {
	var searchParams = req.body.term
	console.log(req.body)
	if (!searchParams) return res.status(500).send()

	request(baseUrlSearch + '&query=' + searchParams, function (error, response, body) {
		if (error) {
			console.log(error)
			return res.status(500).json(error)
		}
		res.json(body);
		console.log(body)
	})
}
function showSimilar (req, res) {
	var selected = req.body.id;
	console.log(req.body)
	if (!selected) return res.status(500).send()

	request(baseUrlShowSimilar, function (error, response, body) {
		if (error) {
			console.log(error)
			return res.status(500).json(error)
		}
		res.json(body);
		console.log(body)
	})
} 




module.exports = {
	search: search
}