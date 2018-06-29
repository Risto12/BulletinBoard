
const url = "http://localhost:8070"


export function allF(){
    
  return new Promise((resolve,reject) => {
    
        fetch(`${url}/posts/all`,{
            method:"get",
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then((result)=>{
            return result.json()
        })
        .then((result)=>{
            
          result = result.map((param)=>{
                param.id = param._id
                delete param._id
                return param
            })

          resolve(result)  

           
        
        })
        .catch((err)=>{
            reject(err)
        })
    })
}


export function removeF(param){

    return new Promise((resolve,reject) => {

       

        fetch(`${url}/posts/removeOne`,
            {
                method:"POST",
                body: JSON.stringify({id:param}),
                headers:{
                    "content-type":"application/json"
                }
            })
             .then((result)=>{
                resolve(result.text())
             },
             (rej) => {
                reject(rej)
             })
             .catch((err)=>{
                 console.log(err)
             })
             

    })

}

export function modifyF(param){

    return new Promise((resolve,reject) => {

       

        fetch(`${url}/posts/updateOne`,
            {
                method:"POST",
                body: JSON.stringify({id:param.id,color:param.color}),
                headers:{
                    "content-type":"application/json"
                }
            })
             .then((result)=>{
                resolve(result.text())
             },
             (rej) => {
                reject(rej)
             })
             .catch((err)=>{
                 console.log(err)
             })
             

    })

}

export function addF(param){

    return new Promise((resolve,reject) => {
            
            fetch(`${url}/posts/insertOne`,
            {
                method:"POST",
                body: JSON.stringify({
                    subject:param.subject.value, 
                    sender:param.sender.value,
                    text:param.text.value
                }),
                headers:{
                    "content-type":"application/json"
                 }
            })
             .then((result)=>{
                resolve(result.text())
             },
             (rej) => {
                reject(rej)
             })
             .catch((err)=>{
                 console.log(err)
             })
             

    })

}