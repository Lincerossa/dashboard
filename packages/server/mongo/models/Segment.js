const mongoose = require('mongoose');

const segment = {
  id: Number,
  text: String,
}

const segmentSchema = new mongoose.Schema(segment)
module.exports = mongoose.model('Segment', segmentSchema)

