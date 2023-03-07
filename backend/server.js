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

//! routes

const filmsRoute = require("./routes/filmsRoute")
const cinemasRoute = require("./routes/cinemasRoute")
const campaignsRoute = require("./routes/campaignsRoute")
const genresRoute = require("./routes/genresRoute")
const subtitlesRoute = require("./routes/subtitlesRoute")
const formatsRoute = require("./routes/formatsRoute")
const subscriberRoute = require("./routes/subscriberRoute")
const contactRoute = require("./routes/contactRoute")
const hallsRoute = require("./routes/hallsRoute")
const sessionsRoute = require("./routes/sessionsRoute")
const languagesRoute = require("./routes/languagesRoute")
const paymentRoute = require("./routes/paymentRoute")

//!endpoints

app.use("/films", filmsRoute)
app.use("/cinemas", cinemasRoute)
app.use("/campaigns", campaignsRoute)
app.use("/genres", genresRoute)
app.use("/subtitles", subtitlesRoute)
app.use("/formats", formatsRoute)
app.use("/subscriber", subscriberRoute)
app.use("/contact", contactRoute)
app.use("/halls", hallsRoute)
app.use("/sessions", sessionsRoute)
app.use("/languages", languagesRoute)
app.use("/payment", paymentRoute)

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