var students = require('../api/student');
module.exports = function(router) {

  router.route('/quotes')
  	.post(function(req, res) { console.log(req.body); quotes.addStudent(req,res); })
    .get(function(req,res) { students.getAllStudents(req,res) });

  router.route('*').get(function(req, res) {
    res.sendfile('./public/index.html'); // load our public/index.html file
    
  });

};