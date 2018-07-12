const faker = require("faker");
const User = require("../models/user");
var appRouter = function (app) {



  app.get("/", function (req, res) {
    res.status(200).send({ message: 'Welcome to our restful API' });
  });

  //create user
  app.post("/users", function(req, res) {
    //var user = new User(req.body);
    //user.save();
    User.create(req.body)
      .then(function(user) {
        res.status(200).send(user);
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
  });

  //delete user
  app.delete("/users/:id", function(req, res) {
    User.findByIdAndRemove({_id: req.params.id})
      .then(function(user) {
        res.status(200).send(user);
      });
  });

  //update user
  app.put("/users/:id", function(req, res) {
    User.findByIdAndUpdate({_id: req.params.id}, req.body)
      .then(function() {
        User.findOne({_id: req.params.id})
          .then(function(user) {
            res.status(200).send(user);
          });
      });
  });

  //fetch users
  app.get("/users", function(req, res) {
    User.find({})
      .then(function(users) {
        res.status(200).send(users);
    });
  });
}

module.exports = appRouter;
