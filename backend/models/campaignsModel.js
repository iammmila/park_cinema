const mongoose = require("mongoose")

const { Schema } = mongoose

const campaignScheme = new Schema(
    {
        campaignDescription: {
            type: String,
            required: true
        },
        campaignImage: {
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