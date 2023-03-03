const mongoose = require("mongoose")

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
        // isNew: {
        //     type: Boolean,
        //     required: true
        // },
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
    , { timestamps: true },{ suppressReservedKeysWarning: true }
)

const Films = mongoose.model("films", filmScheme)
module.exports = (Films)