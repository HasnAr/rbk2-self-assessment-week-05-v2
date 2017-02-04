var express = require('express');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });
var app = express();

var User = sequelize.define('User', {
  username: Sequelize.STRING
});
//User.create({ username: 'zlester' });
/*  Create a '/users' route that responds to 
    a GET request with all users in the database */


app.get("/users", function(req, res){
	//console.log(User.findAll())
	//var temp= User.findAll();
	res.send(JSON.stringify(User.findAll()));
});

module.exports = { 
  app: app,
  User: User
};
