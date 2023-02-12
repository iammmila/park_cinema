const express = require("express")
const app =express()
require("dotenv").config()
require("./src/db/db.connection")
const port = process.env.PORT || 5001


app.get("/", (req,res)=>{
    res.json({
        message:"salam"
    })
})

app.listen(port, ()=>{
    console.log(`server: ${port}`);
})