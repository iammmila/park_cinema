const mongoose = require("mongoose")

const { Schema } = mongoose

const languagesScheme = new Schema(
    {
        name: {
            type: String,
            required: true
        }
    }
    , { timestamps: true }
)

const Languages = mongoose.model("languages", languagesScheme)
module.exports = (Languages)