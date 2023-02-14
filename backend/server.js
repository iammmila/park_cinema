const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();
const app = express();
app.use(cors())
app.use(bodyParser.json())

const { Schema } = mongoose

const filmScheme = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        ageLimit: {
            type: Number,
            required: true
        },
        durationMinute: {
            type: Number,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        actors: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        trailer: {
            type: String,
            required: true
        },
        poster: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        genres: [
            {
                name: {
                    type: String,
                    required: true
                }
            }
        ],
        languages: [
            {
                name: {
                    type: String,
                    required: true
                }
            }
        ],
        formats: [
            {
                name: {
                    type: String,
                    required: true
                }
            }
        ],
        subtitles: [
            {
                name: {
                    type: String,
                    required: true
                }
            }
        ],

    }
    , { timestamps: true })

mongoose.set("strictQuery", false)

const Films = mongoose.model("films", filmScheme)
const PORT = process.env.PORT
const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD)

//!connection

mongoose.connect(DB, (err) => {
    if (!err) {
        console.log("Connected")
        app.listen(PORT, () => {
            console.log(`Port:${PORT}`)
        })
    }
    else {
        console.log(err)
    }
})
//! get element
app.get("/films", (req, res) => {
    Films.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(200).json({ message: err })
        }
    })
})

//! get element by id

app.get("/films/:id", (req, res) => {
    const { id } = req.params;
    Films.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
            }
            else {
                res.status(404).json({ message: "not found" })
            }
        }
        else {
            res.status(200).json({ message: err })
        }
    })
})

//! delete element by id

app.delete("/films/:id", (req, res) => {
    const { id } = req.params;
    Films.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.json({ message: "film is deleted" })
        }
        else {
            res.status(500).json({ message: err })
        }
    })
})

//! post element 

app.post("/films", async (req, res) => {
    const film = req.body
    try {
        await Films.create(film)
        res.status(200).json({ message: "films is posted" })
    } catch (error) {
        console.log(error)
    }
})