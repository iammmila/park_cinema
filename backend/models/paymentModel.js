const mongoose = require("mongoose")

const { Schema } = mongoose

const paymentsScheme = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        cardDetail: {
            type: Number,
            required: true
        },
        month: {
            type: Number,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        cvv: {
            type: Number,
            required: true
        }
    }
    , { timestamps: true }
)

const Payments = mongoose.model("payments", paymentsScheme)
module.exports = (Payments)