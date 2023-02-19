const mongoose = require("mongoose")

const { Schema } = mongoose

const campaignScheme = new Schema(
    {
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        discount: {
            type: Number,
            required: true
        }
    }
    , { timestamps: true }
)

const Campaigns = mongoose.model("campaigns", campaignScheme)
module.exports = (Campaigns)