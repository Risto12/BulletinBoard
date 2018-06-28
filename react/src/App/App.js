import React, { Component } from 'react';
import File from './files/File'
import TextData from "./text/TextData.js"
import cork from "./cork3.png"
import Typography from '@material-ui/core/Typography'
import Dashboard from '@material-ui/icons/Dashboard'
import Edit from "../Comp/headEdit"
import Read from "../Comp/headRead"
import {allF,removeF} from "../fetch/fetch.js"
import SendForm from './form/form.js'


class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      files:[],
      id:"",
      read:true,
      log:{
        key:"",
        log:true,
        proj:"",
        status:"Fail"
      }
     
    }
  }
  
  componentDidMount(){
    this.getAll()
   
  }

  getAll = () => {
    
    allF()
    .then(
    (result)=>{
      
      this.setState({files:result})
    },
    (reject) =>{
      console.log("error in app fetch")
      
    })
  }
  
  removeOne = (id) => {
    
    removeF(id)
    .then((result)=>{
      
      this.getAll()
    },
    (err) => {
      console.log(err)
    })
    .catch((err)=>{

    })
    

  }

  //read method
  getFileId = (paramId) => {
   
    this.setState({id:paramId})
  }

  formChange = (event) => {
    event.preventDefault()
    
    this.setState({form:{text1:event.target.value}})
  }

  render() {
    
    const style = {
      main:{
      display:"grid",
      gridTemplateColumns:"1fr"
      },
      
      inf:{
        display:"grid",
        gridTemplateColumns:"1fr 2fr"
        },
      
      header:{
        display:"flex",
        backgroundColor:"grey",
        //backgroundColor:"rgb(4, 192, 255, 0.600)",
        margin:"none",
        width:"100",
        height:"120px",
      },
      
      flex1:{
        flex:1,
      },
      flex2:{
        flex:4,
      
      },
      head1logo:{
        marginTop:"2vh",
        marginLeft:"2vw",
        color:"white",
        fontSize:"40px",
      },
      head1text:{
        
        color:"white",
        display:"inline",
        
      },
      head2pos:{
        marginTop:"2vh",
        marginLeft:"7vw",
        color:"white",
      },
      leftBox:{
       
        backgroundImage:`url("${cork}")`,
        backgroundSize:" 1680px 100%",
        //backgroundColor:"rgba(192, 94, 14, 0.623)",
        

      },
      
      rightBox:{
        backgroundColor:"white",
       // backgroundColor:"#497959",
        borderTop:"1px solid black"
      },
      log:{
        color:"white",
        lineHeight:"0px"
      } , 
      denied:{
        marginLeft:"20px",
        display:"inline",
        color:"red"
      }  
      
    }
    
    //logging panel
    const logged = this.state.log.log  === true
    ? <div style={style.flex1}>
        <div style={{float:"right",marginTop:"5px"}}>
          <Edit fix={{color:"white"}}  click={()=>{this.setState({read:false})}}/>
          <Read fix={{color:"white"}} click={()=>{this.setState({read:true})}}/>
          
        </div>
      </div> 
    : <div style={style.flex1}>
        <div style={{marginLeft:"10vw"}}>
          <p style={style.log}>LogIn:</p>
          <input value="user" style={{display:"inline"}}/>
          <br/>
          <input value="password" style={{marginTop:"2px"}}/>
          <br/>
          <button onClick={()=>{this.setState({log:{
            key:"",
            log:true,
            proj:"Absolution"
          }})}}>send</button>
          <p style={style.denied}>{this.state.log.status}</p>

        </div>
      </div>
  //read and write panels
    const screen = this.state.read === true
    ? <div style={style.inf}>
        <div style={style.leftBox}>
          <File getId={this.getFileId} removeId={this.removeOne} files={this.state.files} refresh={this.getAll} />
        </div>
        <div style={style.rightBox}>
          <TextData id={this.state.id} files={this.state.files}/>
        </div>
      </div> 
    : <div style={style.inf}>
        <div style={style.leftBox}>
          <File getId={this.getFileId} files={this.state.files} removeId={this.removeOne} refresh={this.getAll}/>
        </div>
        <div style={style.rightBox}>
          <SendForm change={this.formChange} refresh={this.getAll}/>
        </div>
      </div>     

    

    return (
      <div style={style.main}>  
        <div style={style.header}>
          <div style={style.flex2}>
            <Dashboard style={style.head1logo}/>
            <Typography variant="display2" style={style.head1text}>Bulletin board: {this.state.log.proj}</Typography>
          </div>
          {logged}
          </div>     
          {screen}
      </div>
    );
  }
}

export default App;
