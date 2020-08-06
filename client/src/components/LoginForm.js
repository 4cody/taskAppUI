import React, { useState } from 'react'
import Auth from '../assets/js/Auth'
import { useHistory } from "react-router-dom";

export const LoginForm = (props)  => {
    let history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault();
        let user = {
            email,
            password
        }

        Auth.login(user, () => {
            history.push('/dash')
        })
    }

    return (
        <div>
            <form id='loginForm' onSubmit={handleSubmit}>

            <input type='text'
                name='email'
                id='emailInput' 
                value={email}
                onChange={e => setEmail(e.target.value)} />

            <input type='text'
                name='password'
                id='passwordInput' 
                value={password}
                onChange={e => setPassword(e.target.value)} />

            <input type='submit' 
                id='submitBtn'
                value='Submit' />
            </form>
        </div>
    )
}
