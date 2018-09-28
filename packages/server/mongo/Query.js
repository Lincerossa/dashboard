var Expense = require("./models/Expense")
var Segment = require("./models/Segment")

const Query = {
  post: {
    segment: async (req) => {
      return new Segment(req)
        .save(function (err, expense) {
          if (err) return
        });
    },
    expense: async (req) => {
      return new Expense(req)
        .save(function (err, expense) {
          if (err) return
        });
    }
  },
  get: {
    segments: async (req) => Segment.find(function(err, expenses) {
      if (err) return console.error(err);
      return expenses
    }),
    expenses: async (req) => Expense.find(function(err, expenses) {
      if (err) return console.error(err);
      return expenses
    }),
    expense: async (req) => Expense.findOne({ md5: req.md5 }, function (err, expense) {
      if (err) return console.error(err);
      return expense
    })
  }
}

module.exports = Query