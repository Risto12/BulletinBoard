import React, {PureComponent} from 'react'
import Input from './inputs/input.js'
import {addF} from '../../fetch/fetch.js'


class Form extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            subject:{
                
                value:"Subject"
            },
            sender:{
                
                value:"Sender"
            },
            text:{
                
                value:"Message"
            }
        }
    }

    change = (e,target) => {
       
       const obj = {}
       obj[target] = {value:e.target.value}
       this.setState(obj)
       
    }

    send = (e) => {
        e.preventDefault()
        addF(this.state)
        .then((result)=>{
            
            this.props.refresh()
        })
    }

    render(){
        
        const style = {
            box:{
            width:"100%",
            padding: "10px 20px",
            },
            head:{
                marginBottom:"10%",
                textAlign:"center"
                
            }
            
            
        }
        
        return(
            <div style={style.box}>
                <h1 style={style.head}>Insert new post</h1>
                <form>
                    <Input type={"input"} value={this.state.subject.value} change={this.change} target={"subject"}/>
                    <Input type={"input"} value={this.state.sender.value} change={this.change} target={"sender"} />
                    <Input type={"textArea"} value={this.state.text.value} change={this.change} target={"text"} />
                    <button type={"submit"} onClick={(e)=>{this.send(e)}}>Send</button>
                </form>
            </div>
        )
    }



}




export default Form