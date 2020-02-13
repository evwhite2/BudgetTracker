
var db = require("../models");

module.exports = function(app) {
  app.get("/api/Budget", function(req, res) {
    db.Budget.find({}).then(function(dbBudget) {
      res.json(dbBudget);
    });
  });

  app.get("/api/Budget/:id", function(req, res) {
    db.Budget.findById(req.params.id).then(function(dbBudget) {
      res.json(dbBudget);
    });
  });


  app.put("/api/Budget/:id", function(req, res) {
    db.Budget.updateOne({ _id: req.params.id }, { amount: req.body.amount },{ description: req.body.description}).then(function(dbBudget) {
      res.json(dbBudget);
    });
  });
};