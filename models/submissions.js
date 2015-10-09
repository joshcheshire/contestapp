var allSubmissions = []

var submission = function(submissionData){

	this.name = submissionData.name;
	this.URL = submissionData.URL;
	this.title= submissionData.title;
	this.description= submissionData.description;

	allSubmissions.push(this);
}

module.exports = {

	allSubmissions : allSubmissions,
	submission     : submission

}