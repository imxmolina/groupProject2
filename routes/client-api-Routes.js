var db = require("../models");

module.exports = function(app) {
  // Get all examples

  app.get("/api/clients/:id", function(req, res){
    db.Client.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Product]
    }).then(function(dbClient){
      res.json(dbClient);
    });
  });

  // Create a new example
  app.post("/api/clients", function(req, res) {
    db.Client.create(req.body).then(function(dbClient) {
      res.json(dbClient);
    });
  });

  // Delete an example by id
  app.delete("/api/clients/:id", function(req, res) {
    db.Client.destroy({ where: { id: req.params.id } }).then(function(dbClient) {
      res.json(dbClient);
    });
  });
};
var db = require("../models");

module.exports = function(app) {
  // Get all examples

  app.get("/api/clients/:id", function(req, res){
    db.Client.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Product]
    }).then(function(dbClient){
      res.json(dbClient);
    });
  });

  // Create a new example
  app.post("/api/clients", function(req, res) {
    db.Client.create(req.body).then(function(dbClient) {
      res.json(dbClient);
    });
  });

  // Delete an example by id
  app.delete("/api/clients/:id", function(req, res) {
    db.Client.destroy({ where: { id: req.params.id } }).then(function(dbClient) {
      res.json(dbClient);
    });
  });
};