const express = require("express")
const userMiddleware = require("../middlewares/user-middleware")
const noteController = require("../controller/notes-controller")

const router = express.Router()

router.use(express.json())

router.route("/")
  .post(userMiddleware, noteController.createNote)
  .get(userMiddleware, noteController.fetchAllNote)

router.route("/:id")
  .delete(userMiddleware, noteController.deleteNote)
  .patch(userMiddleware, noteController.editNote)


module.exports = router