//File: routes/tvshows.js
module.exports = function(app) {

  var User = require('../models/user.js');

  //GET - Return all users in the DB
  findAllUsers = function(req, res) {
  	User.find(function(err, users) {
  		if(!err) {
        console.log('GET /users')
  			res.send(users);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a User with specified ID
  findById = function(req, res) {
  	User.findById(req.params.id, function(err, user) {
  		if(!err) {
			console.log('GET /users/' + req.params.id);
  			res.send(user);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Insert a new User in the DB
  addUser = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var user = new User({
  		name:        req.body.name,
  		surname: 	 req.body.surname,
  		email:       req.body.email,
  		gender:      req.body.gender,
  	});

  	user.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(user);
  };

  //PUT - Update a register already exists
  updateUser = function(req, res) {
  	User.findById(req.params.id, function(err, user) {
  		user.name       = req.body.name;
  		user.surname    = req.body.surname;
  		user.email      = req.body.email;
  		user.gender     = req.body.gender;

  		user.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(user);
  		});
  	});
  }

  //DELETE - Delete a User with specified ID
  deleteUser = function(req, res) {
  	User.findById(req.params.id, function(err, user) {
  		user.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/users', findAllUsers);
  app.get('/users/:id', findById);
  app.post('/users', addUser);
  app.put('/users/:id', updateUser);
  app.delete('/users/:id', deleteUser);

}