const mongoose = require("mongoose")

const { Schema } = mongoose

const cinemaScheme = new Schema(
    {
        name: {
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
        images: {
            type: String,
            required: true
        },
    }
    , { timestamps: true }
)

const Cinemas = mongoose.model("cinemas", cinemaScheme)
module.exports = (Cinemas)