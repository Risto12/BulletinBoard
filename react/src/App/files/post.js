import React from 'react'
import Aux from "../../Aux.js"
import Cancel from "../../Comp/cancel.js"
import Edit from "../../Comp/edit.js"
import Typography from '@material-ui/core/Typography';

const FileBord = (props) => {
    
        const listFiles = props.list.map((param,index) => {
        
        let color = "";
        
        switch(param.color){
        
            case "yellow": color = "rgb(248, 248, 165)"
            
            break;
            //"#FFEA00"
            case "red": color = "#D50000"
            break;
            
            case "green": color = "#76FF03"
            break;
            
            default :color = "#FFEA00"
        }
        
    

        const style = {
      
            box:{
                  //borderStyle:"solid",
                  //borderWidth:"1px",
                  boxShadow: "5px 5px",
                  marginTop:"25px",
                  width:"50vh",
                  textAlign:"center",
                  
                  backgroundColor:color,
                  marginLeft:"3vw",
                  marginRight:"2vw"
                }
           
            
          }


        return(
            
            <div style={style.box} key={param.id} onClick={()=>{props.read(param.id)}}>
                <br/>
                <Typography variant="display1">{param.subject}</Typography>
                <Typography variant="subheading"> From:{param.sender}</Typography>
                <Typography variant="subheading"> Date:{param.date}</Typography>
                <div style={style.cancel}>
                    <Edit click={()=>{props.edit(param.id)}}/>  
                    <Cancel click={()=>{props.delete(param.id)}}/>
                </div>
            </div>
        )
    }) 
    
    return(
        <Aux>
            {listFiles}
        </Aux>
    )
}

export default FileBord