var express = require('express')
var router = express.Router()

var usersController = require('../controllers/users.js');

// http://127.0.0.1:3000/users
router.route('/users')

  //POST a new blob
  .post(usersController.createUser);


router.route('/users/:id')

  // GET return specific User
  .get(usersController.getUser)

  // PATCH update existing User
  .patch(usersController.updateUser)

  // DELETE remove specific User from DB
  .delete(usersController.removeUser);

  .get(usersController.edit);


module.exports = router