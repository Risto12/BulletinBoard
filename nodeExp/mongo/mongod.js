const mongo = require("mongodb").MongoClient
const ObjectID = require('mongodb').ObjectID;

const url = "mongodb://localhost:27017"
const dbName = "bulletBoard"
const tables = {
    post:"posts"
}


//Testing for connection for mongodb
function testCon(){
    
    mongo.connect(url,(err,db) =>{
        
        
        if(err) throw err; 
        
        console.log("connection established to mongodb")
        
        const dbo = db.db(dbName)

        dbo.createCollection(tables.post,(err,res)=>{
            console.log("creating/checking tables:")
            
            if(err) throw err
            
            console.log(`Tables ${tables.post} ok`)
            
            db.close()
        })
    })
}

function add(data){

return new Promise((res,rej)=>{    
    
            mongo.connect(url,(err,db) =>{
        
            if(err){ 
                rej(err)
                return
            }
        
            const dbo = db.db(dbName)
       
            dbo.collection("posts").insertOne(data, (err,result) =>{
                
                if(err){
                    rej(err)
                    return
                }

                res(result.insertedCount)

                db.close()

            })

    })
}) 
}

function findAll(){
    
  return new Promise((res,rej) => {
   
       mongo.connect(url,(err,db) =>{
            
            
            if(err){
                
                rej("Database error")
                return
            }
               
            const dbo = db.db(dbName)
            
       
            dbo.collection("posts").find({},{firstname:"risto"}).toArray((err,result)=>{
                
                if(err){ 
                    rej("Search error")
                    db.close()
                    return
                }
                
                
                
                res(result)
                db.close()
            })
        
        })
    })
}
        


function updateOne(data){
  
   return new Promise((resolve,reject)=>{ 

    mongo.connect(url,(err,db) =>{
        
        
        if(err){
                
            reject("Database error")
            return
        }
    
        
        
        const dbo = db.db(dbName)
        
        dbo.collection("posts").updateOne({_id:ObjectID(data.id)}, {$set:{color:data.color}}, function(err, res) {
            
            if(err){
                
                reject("Database error")
                return
            }
            resolve(res.modifiedCount)
            db.close()
        });
        
    })
}) 
}

function deleteOne(data){
   return new Promise((resolve,reject)=>{ 
        mongo.connect(url,(err,db) =>{
        
            if(err){
                
                reject("Database error")
                return
            }
            
            const dbo = db.db(dbName)
        
            dbo.collection("posts").deleteOne({_id:ObjectID(data)}, function(err, res) {
                if(err){
                
                    reject("Database error")
                    return
                }
                resolve(res.deletedCount);
                db.close()
            });
        
        })
    })
}





module.exports = {
    test:testCon,
    add:add,
    findAll:findAll,
    updateOne:updateOne,
    deleteOne:deleteOne

}
