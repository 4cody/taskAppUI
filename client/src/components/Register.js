import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import '../assets/css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios'

export const Register = (props) => {
    const history = useHistory()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name,
            email,
            password
        }

        props.regiserUser(newUser)
    }

    const handleExit = (e) => {
        history.push('/')
    }
    
    return (
        <div className='registerContainer'>
            <form onSubmit={handleSubmit} className='registerForm'>
                <FontAwesomeIcon 
                    className='modalX'
                    onClick={handleExit} 
                    icon={faTimesCircle} 
                    size="2x" />

                <input 
                    type='text' 
                    placeholder='name'
                    onChange={e => setName(e.target.value)} />

                <input 
                    type='email' 
                    placeholder='email'
                    onChange={e => setEmail(e.target.value)} />

                <input 
                    type='text' 
                    placeholder='password'
                    onChange={e => setPassword(e.target.value)} />

                <input 
                  className='registerSubmit' 
                  type='submit' 
                  value='Register' />
            </form>
        </div>
    )
}
