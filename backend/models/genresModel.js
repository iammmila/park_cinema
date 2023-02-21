const mongoose = require("mongoose")

const { Schema } = mongoose

const genresScheme = new Schema(
    {
        genreName: {
            type: String,
            required: true
        }
    }
    , { timestamps: true }
)

const Genres = mongoose.model("genres", genresScheme)
module.exports = (Genres)