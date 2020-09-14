import React from 'react'

class Component1 extends React.Component{

    constructor(){
        super()
        this.state = {
            name : "User"
        }
    }

    changeName = () => {
        this.setState ({
            name : "Megha"
        })
    }

    render(){
        return (
            <div>
                <h1>Hello {this.state.name} </h1>
                <h3>Welcome to {this.props.library} !!</h3>
                <button onClick = { this.changeName } >Click Here</button>
            </div>
        );
    }
}


export default Component1