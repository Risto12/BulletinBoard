import React, {PureComponent} from "react"
import Aux from "../../Aux.js"
import Typography from '@material-ui/core/Typography';

class TextData extends PureComponent{
    constructor(props){
        super(props)
        this.state =  {
          
        }
           
        
    }
     
    componentWillReceiveProps(){
        
        const data ={}
       
       

        this.props.files.forEach(param => {
            
            data[param.id] = {
                subject:param.subject,
                sender:param.sender,
                date:param.date,
                text:param.text
            }
            
        });
       
      

        this.setState(data)
    
    }

    render(){
    
        const style = {
            div:{
                marginLeft:"50px",
                marginTop:"20px"
                
            },
            main:{
                width:"400px",
                borderBottom:"1px solid black",
                
                
            },
            divIn:{
                display:"inline"
            },
            text:{
                marginTop:"20px",
                
            }

        }

        const data = this.state[this.props.id] === undefined 
        ? <Typography variant="subheading">No messages</Typography> 
        : <Aux><Typography variant="subheading" style={style.main}><b>Subject:</b>{this.state[this.props.id].subject}</Typography>
        <Typography variant="subheading" style={style.main}><b>Sender:</b>{this.state[this.props.id].sender}</Typography>
        <Typography variant="subheading" style={style.main}><b>Date:</b>{this.state[this.props.id].date}</Typography>
        <Typography variant="subheading" style={style.text}> {this.state[this.props.id].text}</Typography>
        </Aux>

        return(
            <div style={style.div}>
                {data}
            </div>
       )
    }
    
        
    
    
}


export default TextData