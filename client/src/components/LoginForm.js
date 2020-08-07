import React, { useState } from 'react'
import Auth from '../assets/js/Auth'
import { useHistory } from "react-router-dom";

export const LoginForm = (props)  => {
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault();
        let user = {
            email,
            password
        }

        Auth.login(user, (n) => {
            props.user(n)
            history.push({
                pathname: '/dash',
                state: {
                    name: n
                }
            })
        })
    }

    return (
        <form id='loginForm' onSubmit={handleSubmit}>

            <input type='text'
                name='email'
                id='emailInput' 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='email' />

            <input type='text'
                name='password'
                id='passwordInput' 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='password' />

            <input type='submit' 
                id='submitBtn'
                value='Login!' />
        </form>
    )
}
