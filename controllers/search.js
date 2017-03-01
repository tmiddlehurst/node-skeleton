var request = require('request')
var baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=' + process.env.TMDBAPIKEY + '&language=en-US'

console.log(baseUrl)

function  search (req, res) {
	var searchParams = req.body.query
	if (!searchParams) return res.status(500).send()

	request(baseUrl + '&query=' + searchParams, function (error, response, body) {
		if (error) {
			console.log(error)
			return res.status(500).json(error)
		}
		res.json(body);
		console.log(body.results[id])
	})

}



module.exports = {
	search: search
}