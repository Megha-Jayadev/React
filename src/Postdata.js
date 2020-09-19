import React from 'react'
import axios from 'axios'

class Postdata extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            posts: []
            
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/KrunalLathiya')
        .then(
            response => {
                this.setState({posts : response.data })
            }

        ).catch(
            error => {console.log(error)}
        )
    }



    render(){
        const {posts} = this.state
        
        const mystyle= {
            border: "1px solid black",
            borderCollapse: "collapse"
        }

        let getkeys = Object.keys(posts).splice(0, 4).map((item, index)=>{
            return <th key={index} style={mystyle}>{item}</th>
        })

        let getvalues = Object.values(posts).splice(0, 4).map((item, i)=>{
            return <td key={i} style={mystyle}>{item}</td>
        })

        
        return <React.Fragment>
            <div>
                <h1>User details</h1>
                <table style={mystyle}>
                    <thead>
                        <tr>
                            {getkeys}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {getvalues}
                        </tr>
                    </tbody>
                    
                </table>
            </div>

        </React.Fragment>
    }
}

export default Postdata