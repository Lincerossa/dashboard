
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var md5 = require('md5')
var xlsx = require('node-xlsx');
var multer  = require('multer');
var storage = multer.memoryStorage()
var Query = require("./mongo/Query")

// serve solo x controllare la connessione
mongoose.connect('mongodb://127.0.0.1/27017') 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

async function handleResource(req, res) {
  const { resource } = req.params
  const data = await Query.get[resource]()
  return res.json(data)
}

app.post('/post/expenses', multer({ storage }).single('expenses'), async (req, res) => {
  const { file } = req
  const obj = xlsx.parse(file.buffer)
  const myData = obj[0]
    .data.slice(1)
    .map(row => ({
      data: row[0],
      importo: row[2],
      causale: row[3],
      md5: md5(`${row.join('|')}`),
    }));
  for (let i = 0; i < myData.length; i++) {
    const expense = await Query.get.expense(myData[i])
    if (!expense) {
      await Query.post.expense(myData[i])
    }
  }
  res.json(await Query.get.expenses());
});


app.get('/set/segments', async (req, res) => {
  await Query.post.segment({
    id: 1,
    text: 'first segment',
  })
  res.json({
    res: true,
  });
})

app.get(`/get/:resource(expenses|segments)`, handleResource)

app.listen(3005, function () {
  console.log('Example app listening on port 3005 !');
});

