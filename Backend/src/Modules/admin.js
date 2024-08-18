var mongoose = require("mongoose")
var adminSchema = new mongoose.Schema({

    adminname:String,
    adminemail:String,
    adminpassword:String
})

var adminmodel = mongoose.model("admin",adminSchema)
module.exports = adminmodel