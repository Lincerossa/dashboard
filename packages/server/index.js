
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var md5 = require('md5')

var xlsx = require('node-xlsx');
var fs = require('fs');


var multer  = require('multer');
var storage = multer.memoryStorage()

var expense = require('./mongo/schemas/expense')

mongoose.connect('mongodb://127.0.0.1/27017') 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));



var expenseSchema = new mongoose.Schema(expense);
var Expense = mongoose.model('Expense', expenseSchema)



var upload = multer({ storage });
app.post('/post/expenses', upload.single('expenses'), async (req, res) => {
  
  const file = req.file

  const obj = xlsx.parse(file.buffer)

  const myData = obj[0]
    .data.slice(1)
    .map(row => ({
      data: row[0],
      importo: row[2],
      causale: row[3],
      md5: md5(`${row.join('|')}`),
      cazzone: true,
    }));

  const oldData = await Expense.find(function(err, expenses) {
    if (err) return console.error(err);
    return expenses
  })

  for (let i = 0; i < myData.length; i++) {

    if (typeof oldData.find(e => e.md5 === myData[i].md5) === 'undefined') {
      const newExpense = new Expense(myData[i])
      newExpense.save(function (err, expense) {
        if (err) return
      });
    }
  }
  
  var data = {
    data: await Expense.find(function(err, expenses) {
      if (err) return console.error(err);
      return expenses
    })
  }
  res.json(data);
});

app.get('/get/expenses', async (req, res) => {

  const data =  await Expense.find(function(err, expenses) {
    if (err) return console.error(err);
    return expenses
  })

  res.json(data);

})

app.listen(3005, function () {
  console.log('Example app listening on port 3005 !');
});

