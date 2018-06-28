import React, {PureComponent} from "react"
import Post from './post'
import {modifyF} from '../../fetch/fetch.js'


class File extends PureComponent {
    
    constructor(props){
        super(props)
        this.getIdOne = this.getId.bind(this) // test
        this.state ={files:[
            ]}
    }

    
    

    componentWillReceiveProps(nextProps){
      
      this.setState({files:nextProps.files})
      
    }
    
   

    getId(param){
       /*Comes from app.js*/ this.props.getId(param)
    }

    //Edit color of post
    editId = (id) => {
      
      

      const copy = this.state.files.slice();
      
      const obj = copy.find((param,index) =>{
        return id === param.id
      })
      
      if(obj.color === "yellow") 
        obj.color = "green"
      else if(obj.color === "green")
        obj.color = "red"
      else
        obj.color = "yellow"
       
        
      
      modifyF({id:id,color:obj.color})
      .then((result) => {
        this.props.refresh()
      },
      (reject) => {
        console.log(reject)
      })
      .catch((err) =>{
        console.log(err)
      })
    }
    
    //remove post
    removeId = (id) =>{
      const copy = this.state.files.slice();
      
      const obj = copy.filter((param,index) =>{
        return id !== param.id
      })
        
      

      this.setState({files:obj})
    }

    render(){
        
        const style = {
            height:"100vh",
            overflow:"auto",
            
        }
        
        return(
        <div style={style}>
          <Post list={this.state.files} read={this.getIdOne} delete={this.props.removeId} edit={this.editId}/>  
        </div>
        )
    }
}

export default File;