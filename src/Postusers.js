import React from 'react'
import axios from 'axios'

class Postusers extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            info: []   
        }
    }

    componentDidMount() {

        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(
            res => {
                this.setState({info : res.data})
            }
        ).catch(
            error => {console.log(error)}
        )
    }


    render(){
        const {info} = this.state

        const mystyle= {
            border: "1px solid black",
            borderCollapse: "collapse"
        }

        
        
        return <React.Fragment>
            
            <div>
                <h1>Users</h1>
                <div>
                    <table style={mystyle}>
                        <thead >
                            <tr>
                                <th style={mystyle}>id</th>
                                <th style={mystyle}>name</th>
                                <th style={mystyle}>username</th>
                                <th style={mystyle}>email</th>
                                <th style={mystyle}>address : street</th>
                            </tr>
                        </thead>
                        <tbody>
                            {info.map((ele, i)=>{
                                return <tr style={mystyle} key={i}>
                                            <td style={mystyle}> {(ele)['id']} </td>
                                            <td style={mystyle}> {(ele)['name']} </td>
                                            <td style={mystyle}> {(ele)['username']} </td>
                                            <td style={mystyle}> {(ele)['email']} </td>
                                            <td style={mystyle}> {(ele)['address']['street']} </td>    
                                        </tr>
                            })}
                        </tbody>
                        
                    </table>
                </div>             
            </div>

        </React.Fragment>
    }
}

export default Postusers