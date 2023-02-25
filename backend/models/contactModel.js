const mongoose = require("mongoose")

const { Schema } = mongoose

const contactScheme = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email:{
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true
        }
    }
    , { timestamps: true }
)

const Contact = mongoose.model("contact", contactScheme)
module.exports = (Contact)