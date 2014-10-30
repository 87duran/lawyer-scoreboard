var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var app = express();

app.use(express.static(__dirname + '/public'));
//CONNECTION
var connection = new Sequelize('shadyLawyers', 'root', null,
{
	host: 'localhost'
});
//MODEL OR TABLE
var Lawyer = connection.define('lawyer', {
	name: Sequelize.STRING,
	location: Sequelize.STRING,
	record: Sequelize.STRING,
	hourlyRate: Sequelize.FLOAT
});

app.get('/lawyers', function(req, res) {
	Lawyer.all().then(function(data) {
		res.send(data);
	});
});

try {
	connection.sync();
}

catch(err) {
	console.log('database error' + err);
}

app.listen(3500);