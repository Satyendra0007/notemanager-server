require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDb = require("./util/db")
const authRouter = require("./router/auth-router")
const notesRouter = require("./router/notes-router")


const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())
app.use("/api/auth", authRouter);
app.use("/api/notes", notesRouter)


app.get("/", (req, res) => {
  res.send("hello world !")
})


connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("App is running on Port", PORT)
  })
}).catch((error) => {
  console.log(error)
  console.log("Failed to Connect ")
})
