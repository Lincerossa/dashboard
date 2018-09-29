
const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require('mongoose')
const md5 = require('md5')
const multer = require('multer')
const xlsx = require('node-xlsx')

const Query = require('./mongo/Query')

const app = express()
const storage = multer.memoryStorage()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// serve solo x controllare la connessione
mongoose.connect('mongodb://127.0.0.1/27017')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

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
    }))
  for (let i = 0; i < myData.length; i++) {
    const expense = await Query.get.expense(myData[i])
    if (!expense) {
      await Query.post.expense(myData[i])
    }
  }
  res.json(await Query.get.expenses())
})


app.post('/post/segment', async (req, res) => {

  const { text, budget, tags } = req.body.data
  
  await Query.post.segment({ text, budget, tags })
  res.json({
    res: true,
  })
})

async function handleResource(req, res) {
  const { resource } = req.params
  const data = await Query.get[resource]()
  return res.json(data)
}

app.get('/get/:resource(expenses|segments)', handleResource)

app.listen(3005, () => {
  console.log('Example app listening on port 3005 !')
})
