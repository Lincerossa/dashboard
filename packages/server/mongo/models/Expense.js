const mongoose = require('mongoose')

const expense = {
  data: Date,
  importo: Number,
  causale: String,
  md5: String,
  cazzone: Boolean,
}

const expenseSchema = new mongoose.Schema(expense)
module.exports = mongoose.model('Expense', expenseSchema)
