
var express = require('express');
var app = express();
var mongoose = require('mongoose');



var getJson = require('./getJson')
var Expense = require('./mongo/schemas/expense')

mongoose.connect('mongodb://127.0.0.1/27017')
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function() {

  var expenseSchema = new mongoose.Schema(Expense);
  
  var Expense = mongoose.model('Expense', expenseSchema)

  var expenseFirst = new Expense({
    Data: "14/09/2018",
    Valuta: "13/09/212018",
    Importo: "-13.61",
    Causale: "ACaassasdU. POS DEBITO/PREPAG. NO DB  DEL  13.09.2018  18.41  PRESSO  PAM LOCAL  MILANO"
  })

  expenseFirst.save(function (err, expense) {
    if (err) return console.error(err);
    console.log("salvata", expense)
  });

  app.get('/', async (req, res) => {
    const json = await getJson()
    res.json(json);
  });


  app.get('/mongo', async (req, res) => {
    console.log("start mongo")
    Expense.find(function (err, expense) {
      console.log("expense", expense)
      console.log("err", expense)
      if (err) return console.error(err);
      console.log(expense);
    })
    console.log("fine mongo")
    const json = await getJson()
    res.json(json);
  });

  app.listen(3000, function () {
    console.log('Example app listening on port 3002!');
  });

});