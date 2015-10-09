// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

var contestController= require('./controllers/contestController.js')


app.get('/', function(req, res){
  res.sendFile('home.html', { root: './public'})
});

app.get('/submit', function(req,res){

	res.sendFile('submit.html', {root: './public'});
});

app.get('/submissionspage', function(req, res){

	res.sendFile('submissions.html', {root : './public'});

});



app.post('/formsubmit', function(req,res){
	
	console.log(req.body)
	
	res.redirect('/submissionspage')

});


app.get('/winner', function(req,res){
	res.sendFile('winnner.html', {root : './public'});

})

app.get('/about', function(req, res){
  res.send('All about this site!');
});


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})