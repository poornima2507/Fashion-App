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

app.post("/search",(req,res)=>{
    let input = req.body
    fashionmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/delete",(req,res)=>{
    let input = req.body
    fashionmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
    
})

app.post("/view",(req,res)=>{
    fashionmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8088,()=>{
    console.log("server started")
})