import React from 'react'

class Component2 extends React.Component{

    state = {
        name : 'User'
    }

    nameHandler = (event) => {
        this.setState ( {
            name : event.target.value
        }
    )}

    render(){
        return(
            <div>
                <h1>Hello {this.state.name} </h1>
                <input type="text" placeholder="Enter name" required onChange = {this.nameHandler} />
            </div>
        );
    }
}

export default Component2

