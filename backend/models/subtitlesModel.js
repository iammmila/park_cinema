const mongoose = require("mongoose")

const { Schema } = mongoose

const subtitlesScheme = new Schema(
    {
        subtitleName: {
            type: String,
            required: true
        }
    }
    , { timestamps: true }
)

const Subtitles = mongoose.model("subtitles", subtitlesScheme)
module.exports = (Subtitles)