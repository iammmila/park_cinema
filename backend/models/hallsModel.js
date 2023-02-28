const mongoose = require("mongoose")

const { Schema } = mongoose

const hallsScheme = new Schema(
    {
        row: {
            type: Number,
            required: true
        },
        column: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
    , { timestamps: true }
)

const Halls = mongoose.model("halls", hallsScheme)
module.exports = (Halls)