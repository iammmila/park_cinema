const mongoose = require("mongoose")

const { Schema } = mongoose

const languagesScheme = new Schema(
    {
        email: {
            type: String,
            required: true
        }
    }
    , { timestamps: true }
)

const Languages = mongoose.model("languages", languagesScheme)
module.exports = (Languages)