var User = require ('../models/user.js')

// // SHOW USER
// function showUser(req, res) {
//   User.findById(req.params.id).populate('bands').exec(function(err, user) {
//     if(!user) return res.status(404).send("Not found");
//     if(err) return res.status(500).send(err);
//     res.render("users/show" , {
//       title: "User",
//       user: user
//     });
//   }); 
// }

// // NEW - GET
// function newUser(req, res) {
//   //create an empty user
//   var newUser = {
//     id: "",
//     username: "",
//     email: "",
//     password: "",
//     profileImage: ""
//   };
//   res.render("users/new" , {
//     title: "Register",
//     user: newUser
//   }); 
// }

//CREATE - POST
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