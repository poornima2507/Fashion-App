const express = require("express")
const mongoose = require("mongoose")
const cors =  require("cors")
const {fashionmodel} = require("./models/fashion")

mongoose.connect("mongodb+srv://poornima25:poornima25182220@cluster0.dg8g8.mongodb.net/fashiondb?retryWrites=true&w=majority&appName=Cluster0")
const app = express()
app.use(cors())
app.use(express.json())

app.post("/add",(req,res)=>{
    let input = req.body
    let fashion = new fashionmodel(input)
    fashion.save()
    res.json({"status":"success"})
})

app.listen(8088,()=>{
    console.log("server started")
})