import React from 'react'

const form = (props) => {

const style = {
    center:{ 
        display: "flex",
        justifyContent: "center",
        marginTop: "10vh"
    },
    input:{
        color:"red"
    },
    button:{
        marginTop:"2vh",
        
    }


}


return (
    <div style={style.center}>
        <form onSubmit={(event)=>{}}>
              <label>Name</label>
              <input style={style.input} type="text" value={props.state} onChange={(event)=>{props.change(event)}}/>
              <br/>
              <input style={style.button} type="submit" value="Submit"/>
      </form>
      
    </div>
)


}

export default form