var express = require('express')
var router = express.Router()
var usersController = require('../controllers/users.js');
var movieController = require('../controllers/movie.js');

// http://127.0.0.1:3000/users
router.route('/users')
  .post(usersController.create);


router.route('/users/:id')

  // GET return specific User
  // .get(usersController.getUser)

  // PATCH update existing User
  // .patch(usersController.updateUser)

  // DELETE remove specific User from DB
  // .delete(usersController.removeUser);

  // .get(usersController.edit);


 // custom routes
router.route('/search')
	.post(movieController.search)

router.route('/showsimilar')
  .post(movieController.showSimilar)



module.exports = router