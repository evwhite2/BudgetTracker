var mongoose = require("mongoose");
var db = require("..//models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/budgetTracker",
  { useNewUrlParser: true }
);


var budgetSeed = [
    {
        amount: 50,
        description: "Groceries",
        date: new Date(Date.now())
    },
    {
        amount: 25,
        description: "Concert",
        date: new Date(Date.now())
    }
]

db.Budget.deleteMany({})
  .then(() => db.Budget.collection.insertMany(budgetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
