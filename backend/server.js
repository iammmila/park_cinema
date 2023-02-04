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

const exampleScheme = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        information: {
            type: String,
            required: true
        }
    }
    , { timestamps: true })

mongoose.set("strictQuery", false)

const Example = mongoose.model("example", exampleScheme)
const PORT = process.env.PORT
const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD)

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
app.get("/examples", (req, res) => {
    Example.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(200).json({ message: err })
        }
    })
})
app.get("/examples/:id", (req, res) => {
    const { id } = req.params;
    Example.findById(id, (err, docs) => {
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

app.post("/examples", async (req, res) => {
    const service = req.body
    try {
        await Example.create(service)
        res.status(200).json({ message: "jsdvsv" })
    } catch (error) {
        console.log(error)
    }
})