var mongoose = require('mongoose');


const expense = {
  data: Date,
  importo: Number,
  causale: String,
  md5: String,
  cazzone: Boolean,
}

var expenseSchema = new mongoose.Schema(expense);
var Expense = mongoose.model('Expense', expenseSchema)


module.exports = Expense