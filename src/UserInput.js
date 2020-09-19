import React from 'react'


class UserInput extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             name: ''
        }
    }

    changeHandler = e => {
        this.setState({
            name: e.target.value
        })
    }

    render(){
        return(
            <div>
                <label>Name: </label>
                <input 
                    type="text" 
                    value={this.state.name} 
                    placeholder="username" required  
                    onChange= {this.changeHandler}
                />
                <UserOutput name={this.state.name} />
                
            </div>
        )
    }
}


const UserOutput = (props)=>{
    return (
      <h3>
        Your name is: {props.name}
      </h3>
    );
  }


export default UserInput

