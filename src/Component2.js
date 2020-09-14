import React from 'react'

class Component2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            fullname : 'User'
        }; 
       
    }


   submitHandler = e => {
       e.preventDefault()
       const name = this.fullname.value
       this.setState({ fullname: name })
   }


    render(){
        return(
            <div>
                <h3>Your name is: {this.state.fullname}</h3>
                <input type="text" placeholder="Enter name" name="fullname" ref = {input => this.fullname = input} required/>
                <button type="submit" onClick = {this.submitHandler} >Submit</button>
            </div>
        );
    }
}

export default Component2

