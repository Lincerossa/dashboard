var mongoose = require('mongoose');


const segment = {
  id: Number,
  text: String,
}

var segmentSchema = new mongoose.Schema(segment);
var Segment = mongoose.model('Segment', segmentSchema)


module.exports = Segment