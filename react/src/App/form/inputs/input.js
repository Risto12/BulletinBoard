import React from 'react'
import Aux from "../../../Aux.js"

const input = (props) => {

    
    const style = {
        outline:"none",
        border: "1px solid #ccc",
        backgroundColor:"white",
        font:"inherit",
        padding: "10px 15px",
        display:"block",
        marginBottom:"10px"
    }
    
    let inp = null;
     
    switch(props.type){
        case "textArea":
        style.padding = "1px 15px"
        style.height = "120px"
        style.width = "80%"

        inp = <textarea style={style} value={props.value} onChange={(e)=>{props.change(e,props.target)}}/>
        break;
   
        case "input":  
            inp = <input style={style} value={props.value} onChange={(e)=>{props.change(e,props.target)} }/>
        break;
    
        default:
        break;

}    

    

    return (
        <div>
            
            {inp}
       </div>
    )

}

export default input