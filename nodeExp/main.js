const express = require('express')
const app = express();
const mongo = require("./mongo/mongod.js")
const bulletBoard = require("./bulletBoard/methods.js")
const bodyParser = require("body-parser")
const cors = require("cors")

const port = 8070;


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

console.log("Testing systems mongodb & express:")

//mongo.test()

app.listen(port,()=>{
    console.log("Express working:")
    console.log(`listening port ${port}`)

})

//middleware

app.use("/",(req,res,next)=>{
    next()
})


app.use("/posts", bulletBoard)






// app.get("/",(req,res)=>{ res.send("test")})
