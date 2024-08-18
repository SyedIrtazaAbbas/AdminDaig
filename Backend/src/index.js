require("./datebase/connection")
var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")
var app =express()
app.use(bodyParser.json())
app.use(cors())
var Admins = require("./Modules/admin")
var Daig = require("./Modules/Daig")

app.post("/admins",(req,res)=>{
    Admins.create(req.body).then(()=>{
    res.send("Admin regsited");
 })
})

app.post("/loginadmin",(req,res)=>{
    Admins.findOne({adminemail:req.body.adminemail}).then((response)=>{
        if (response.adminpassword==req.body.adminpassword){
            res.send("ture")
        }
        else{
            res.send("false")
        }
    }).catch(()=>{
        res.send("false")
    })
})


app.post("/daig",(req,res)=>{
    Daig.create(req.body).then(()=>{
        res.send("Daig regsited");
    })
})

app.get("/fetchdaig",(req,res)=>{
    Daig.find().then((response)=>{
res.send(response)
    })
})

app.delete("/deleteddaig/:id",(req,res)=>{
    Daig.findByIdAndDelete({_id: req.params.id}).then(()=>{
            res.send(" date deleted")
    })
})

app.get("/daigupdate/:id",(req,res)=>{
    Daig.findById({_id:req.params.id}).then((daigid)=>{
        res.send(daigid)
    })
})

app.put("/daig/:id",(req,res)=>{
    Daig.findByIdAndUpdate(req.params.id,req.body).then(()=>{
    res.send("date updated")
})
})
app.listen(8000)