var User = require ('../models/user.js')

// Create a New user
function createUser(req, res) {
  console.log(req.body)
  User.create(req.body, function(err, user) {
    if(err) {
      console.log(err)
      return res.status(500).json(err);
    }
    res.json(user);
  });
}

module.exports = {

  create: createUser
  
}