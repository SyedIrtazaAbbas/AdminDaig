var mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/dagi")
.then(()=>{
    console.log("connected to MongoDB")
}).catch(()=>{
console.error("error connection to MongoDB");
})