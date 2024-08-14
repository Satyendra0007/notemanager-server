const Mongoose = require("mongoose")

const notesSchema = new Mongoose.Schema({
  userId: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  priority: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },

})

const Note = Mongoose.models.Note || new Mongoose.model("Note", notesSchema)
module.exports = Note