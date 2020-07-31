import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        alert('this was submited ' + this.state.value)
    }
    
    render() {
        return (
            <form id='loginForm' onSubmit={this.handleSubmit}>

                <input type='text'
                    name='email'
                    id='emailInput' 
                    value={this.state.email}
                    onChange={this.handleChange} />

                <input type='text'
                    name='password'
                    id='passwordInput' 
                    value={this.state.password}
                    onChange={this.handleChange} />

                <input type='submit' 
                    id='submitBtn'
                    value='Submit' />
            </form>
        )
    }
}
