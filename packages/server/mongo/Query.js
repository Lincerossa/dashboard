const Expense = require('./models/Expense')
const Segment = require('./models/Segment')

const Query = {
  post: {
    segment: async (req) => {
      return new Segment(req)
        .save((err, expense) => {
          if (err) return
        })
    },
    expense: async (req) => {
      return new Expense(req)
        .save((err, expense) => {
          if (err) return
        })
    },
  },
  get: {
    segments: async () => Segment.find((err, expenses) => {
      if (err) return console.error(err)
      return expenses
    }),
    expenses: async () => Expense.find((err, expenses) => {
      if (err) return console.error(err)
      return expenses
    }),
    expense: async req => Expense.findOne({ md5: req.md5 }, (err, expense) => {
      if (err) return console.error(err)
      return expense
    }),
  },
}

module.exports = Query