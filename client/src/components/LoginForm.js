import React, { useState } from 'react'

export const LoginForm = ()  => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault();
        alert(`Submitting Name ${email}, ${password}`)
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
