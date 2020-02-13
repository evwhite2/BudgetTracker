var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var budgetSchema = new Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

var Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
