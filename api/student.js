var Student = require('../models/student');

module.exports.getAllStudents = function(req, res) {
	Student.find(function(err, quotes) {
		if (err) {
			res.send(err);
		}
		res.json({students: students})
	})
};
module.exports.addStudent = function(req, res) {
	var quote = new Student(req.body.student);
    student.save(function(err) {
        if (err) {
            res.send(err);

        }
        res.json({student: student});
    });
}
