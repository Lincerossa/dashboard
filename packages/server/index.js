
var express = require('express');
var app = express();
var getJson = require('./getJson')

app.get('/', async (req, res) => {
  const json = await getJson()
  res.json(json);
});

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});