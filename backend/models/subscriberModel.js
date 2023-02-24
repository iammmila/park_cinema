const mongoose = require("mongoose")

const { Schema } = mongoose

const subscribersScheme = new Schema(
    {
        email: {
            type: String,
            required: true
        }
    }
    , { timestamps: true }
)

const Subscribes = mongoose.model("subscriber", subscribersScheme)
module.exports = (Subscribes)