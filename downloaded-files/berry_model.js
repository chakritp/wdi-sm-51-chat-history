const
  mongoose = require('mongoose'),
  berrySchema = new mongoose.Schema({
    type: { type: String, required: true } 
  }, { timestamps: true })

module.exports = mongoose.model('Berry', berrySchema)