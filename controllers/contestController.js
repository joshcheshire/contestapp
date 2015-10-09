var contestModel = require('../models/submissions.js');

module.exports = {

	createSubmission:function() {

		var submission = new contestModel.submissions(req.body)
			console.log(contestModel.allSubmissions)
			res.send(contestModel.allSubmissions)
	}
}