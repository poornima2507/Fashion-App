const mongoose = require("mongoose")
const schema = mongoose.Schema(
        {
            "id":String,
            "name":String,
            "price":String,
            "image":String
            
        }
    )
let fashionmodel = mongoose.model("fashion",schema);
module.exports = {fashionmodel}