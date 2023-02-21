const mongoose = require("mongoose")

const { Schema } = mongoose

const formatsScheme = new Schema(
    {
        formatName: {
            type: String,
            required: true
        }
    }
    , { timestamps: true }
)

const Formats = mongoose.model("formats", formatsScheme)
module.exports = (Formats)