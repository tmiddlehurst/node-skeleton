var express = require('express')
var router = express.Router()
var usersController = require('../controllers/users.js');
var movieController = require('../controllers/movie.js');

// Create User
router.route('/users')
  .post(usersController.create);

router.route('/users/:id')


 // ******* custom routes ******* //

 // Movie search
router.route('/search')
	.post(movieController.search)

// Get similar movies/get trailer
router.route('/showsimilar')
  .put(movieController.getTrailer)
  .post(movieController.showSimilar);


module.exports = router