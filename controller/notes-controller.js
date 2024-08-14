const Note = require("../models/Notes-model")

const createNote = async (req, res) => {
  try {
    const newNote = await Note.create({ ...req.body, userId: req.user.userId })
    res.status(200).json({ message: "Note Added " })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal Server Error " })
  }
}

const fetchAllNote = async (req, res) => {
  try {
    const allNotes = await Note.find({ userId: req.user.userId })
    res.status(200).json(allNotes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal Server Error " })
  }
}

// const fetchOneNote = async (req, res) => {
//   try {
//     const note = await Note.findOne({ _id: req.params.id })
//     if (note.userId === req.user.userId) {
//       const note = await Note.findOne({ _id: req.params.id })
//       res.status(200).json(note)
//     } else {
//       res.status(400).json({ message: "You don't have Authorization " })
//     }
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: "Internal Server Error " })
//   }
// }

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id })
    if (note.userId === req.user.userId) {
      const deleteNote = await Note.deleteOne({ _id: req.params.id })
      res.status(200).json({ message: "Note deleted Successfully " })
    } else {
      res.status(400).json({ message: "You don't have Authorization " })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal Server Error " })
  }
}

const editNote = async (req, res) => {
  const note = await Note.findOne({ _id: req.params.id })
  if (note.userId === req.user.userId) {
    const result = await Note.updateOne({ _id: req.params.id }, { $set: { ...req.body } })
    res.status(200).json({ message: "Note Updated Successfully " })
  } else {
    res.status(400).json({ message: "You don't have Authorization " })
  }
}

module.exports = { createNote, fetchAllNote, deleteNote, editNote }