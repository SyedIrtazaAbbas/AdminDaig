var mongoose = require("mongoose")
var daigschema = new mongoose.Schema({
    daigName:String,
    daigDescription:String,
    daigOwnerNmae:String,
    daigOwnerNumber:String,
    daigOwnerAddress:String,
    daigstatus:String,
    daigtrackingid:String
})
var daigsmodel = mongoose.model("daig",daigschema)
module.exports = daigsmodel 