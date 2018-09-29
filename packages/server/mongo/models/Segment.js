const mongoose = require('mongoose');

const segment = {
  text: String,
  tags: String,
  budget: Number,
}

const segmentSchema = new mongoose.Schema(segment)
module.exports = mongoose.model('Segment', segmentSchema)

