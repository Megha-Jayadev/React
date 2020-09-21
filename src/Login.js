import React from 'react'


class Login extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: '',
             emailError: '',
             pwdError: '',
             disabled: false
        }
    }

    changeHandler = e=>{
        this.setState({
            email:  e.target.value,
            emailError: '',
            disabled: false
        })
    }

    pwdChangeHandler = e =>{
        this.setState({
            password:  e.target.value,
            pwdError: '',
            disabled: false
        })
    }


    validate = () => {
        let emailError = ''
        let pwdError= ''

    
        if(!this.state.email.match('^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]+).([a-z]{2,20})(.[a-z]{2,8})$')){
            emailError = 'Invalid email'
        }

        if(!this.state.password.match('.*[a-z].*[A-z].*[0-9]+.*')){
            pwdError = 'Invalid password'
        }

        if(emailError || pwdError){
            this.setState({emailError,pwdError, disabled: true})
            return false
        }
        return true

    }

    handleSubmit = e =>{
        e.preventDefault()
        const isValid = this.validate()
        if(isValid){
            console.log('successful')
        }
            
    }

    
    render(){
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" value={this.state.email} 
                        id="email" placeholder="Email" 
                        onChange={this.changeHandler}required/>
                        { this.state.emailError ? (<span style={{fontSize:12 ,color:'red'}}>{this.state.emailError}</span>): null }
                    </div>
                    <div>
                        <input type="password" value={this.state.password} id="pwd" 
                        onChange={this.pwdChangeHandler} placeholder="Password" required/>
                        { this.state.pwdError ? (<span style={{fontSize:12 ,color:'red'}}>{this.state.pwdError}</span>): null }
                    </div>
                    <div>
                        <button type="submit" disabled = {this.state.disabled}>Login</button>
                    </div>
  
                </form>
            </React.Fragment>
        )
    }
}

export default Login