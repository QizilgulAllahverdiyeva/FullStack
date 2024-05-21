const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const type =require('os')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
dotenv.config()

const {Schema} = mongoose

const foundationSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    }
});

const Foundation = mongoose.model("Foundation", foundationSchema);

 app.post("/foundation", async(req,res)=>{
    try{
        const{title, price, img}=req.body
        const newFoundation = new Foundation({
            title,
            price,
            img
        })
        await newFoundation.save()
        res.status(201).send(newFoundation)
    } catch(err){
        res.status(500).json({
            message: err
        })
    }
 })


 app.get("/foundation", async(req,res)=>{
    try{
        const foundation = await Foundation.find({})
        res.status(200).send(foundation)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
 })
 app.delete("/foundation/:id", async(req,res)=>{
    try{
        const {id}=req.params
        const foundationdelete =await Foundation.findByIdAndDelete(id)
        res.status(200).send(foundationdelete)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
 })

 app.get("/foundation/:id", async(req,res)=>{
    try{
        const {id}=req.params
        const foundation =await Foundation.findById(id)
        res.status(200).send(foundation)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
 });
 app.put("/foundation/:id", async(req,res)=>{
    try{
        const{title, price, img}=req.body
        const {id}=req.params
        const update =await Foundation.findByIdAndUpdate(id,{
            title,
            price,
            img
        })
        res.status(200).send(update)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
 })







const PORT =process.env.PORT
const DB = process.env.DB_URL
mongoose.connect(DB)
  .then(() => console.log('Connected!'));
app.listen(PORT, console.log("Port is Active", PORT))