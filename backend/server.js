const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();
const app = express();
app.use(cors())
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: false }))

const filmsRoute = require("./routes/filmsRoute")
const cinemasRoute = require("./routes/cinemasRoute")

app.use("/films", filmsRoute)
app.use("/cinemas", cinemasRoute)

const PORT = process.env.PORT
const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD)
mongoose.set("strictQuery", false)

//!connection
mongoose.connect(DB)
    .then(() => {
        console.log("Connected");
    })
    .catch(() => {
        console.log("try again")
    })

app.listen(PORT, () => {
    console.log(`App is listenning on port : ${PORT}`)
})