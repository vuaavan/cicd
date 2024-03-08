require("dotenv").config() // Load environment variables from .env file
const express = require("express")
const app = express()
const port = process.env.PORT || 8080

app.get("/", (req, res) => {
  res.send("Admin Service is running!")
})

app.listen(port, () => {
  console.log(`Admin Service is listening at http://localhost:${port}`)
})
