const mongoose = require('mongoose')

const expense = {
  data: Date,
  importo: Number,
  causale: String,
  md5: String,
}

const expenseSchema = new mongoose.Schema(expense)
module.exports = mongoose.model('Expense', expenseSchema)
