const mongoose = require("mongoose")

const { Schema } = mongoose

const cinemaScheme = new Schema(
    {
        cinemaName: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        workHour: {
            type: String,
            required: true
        },
        addressLine: {
            type: String,
            required: true
        },
        cinemaImages: {
            type: String,
            required: true
        },
    }
    , { timestamps: true }
)

const Cinemas = mongoose.model("cinemas", cinemaScheme)
module.exports = (Cinemas)