const express=require("express")
const app=express()
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
let mongoose = require("mongoose")

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

app.get("/", (req, res)=>{
    res.send("Welcome Node")
})

let ImmigrationSchema= new mongoose.Schema({
    country:String,
    image:String,
    description:String,
    percent:Number,
})

let ImmigrationModel = mongoose.model("immigrations", ImmigrationSchema)

app.get("/immigrations", async(req,res)=>{
    let immigrations= await ImmigrationModel.find()
    res.send(immigrations)
})

app.get("/immigrations/:id",async (req,res)=>{
    let id=req.params.id
    let myimmigration= await ImmigrationModel.findById(id)
    res.send({
        message:"Success GetById",
        data:myimmigration
    })
})

app.delete("/immigrations/:id", async  (req,res)=>{
    let {id}=req.params
   await ImmigrationModel.findByIdAndDelete(id)
   res.send({
    message:"Success Delete",
})
})

app.post("/immigrations", async (req,res)=>{
    let newImmigration= ImmigrationModel(req.body)
   await newImmigration.save()
   res.send({
     message:"Success Post",
     data:req.body
   })
})

mongoose.connect(process.env.mongoURL)
.then(()=>{
    console.log("connected")
})

app.listen(3001,()=>{
    console.log("Bu Api 3001 portunda dinlenilir")
})
