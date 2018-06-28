const express = require('express')
const router = express.Router()
const mongo = require("../mongo/mongod.js")



router.get("/",(req,res) => {
    
    res.send("sain ")

})



router.get("/all",(req,res) =>{
  
    

   mongo.findAll()
   .then((result)=>{
        res.json(result).status(200)
    },
    (rej)=>{
        res.send("error").status(500)
    })
    .catch((err)=>{
        console.log(err).status(500)
    })
   

})

//not done
router.post("/add",(req,res) =>{
    
    mongo.add(req.body)
    .then((result)=>{
        res.send({success:result}).status(200)
    },(err)=>{
        res.send({success:"fail"}).status(500)
    })
    
    
 })

 
 router.post("/removeOne",(req,res)=>{
    
    mongo.deleteOne(req.body.id)
    .then((result) => {
        res.send(result + "").status(200)
    },
    (rej) => {
        res.send(result).status(200)
    })
    .catch((err)=>{
        console.log(err)
    })
    

    
 })

 //modify color 
 router.post("/updateOne",(req,res) =>{
    
    mongo.updateOne(req.body)
    .then((result)=>{
        res.send(result + "").status(200)
    },(err)=>{
        res.send("fail").status(500)
    })
    
    
 })

 router.post("/insertOne",(req,res) =>{
    
   
    
    mongo.insertOne({
        subject:req.body.subject,
        sender:req.body.sender,
        text:req.body.text
    })
    .then((result)=>{
        res.send(result + "").status(200)
    },(err)=>{
        res.send("fail").status(500)
    })
   
    
    
    
 })


module.exports = router