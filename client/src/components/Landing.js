import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { LoginForm } from './LoginForm'
import { TitleAndInfo } from './TitleAndInfo'
import '../assets/css/main.css'

export const Landing = (props) => {
    const history = useHistory()

    const [toggled, setToggle] = useState(false)

    const toggleHandler = () => {
        setToggle(!toggled)
    }

    const handleUser = (u) => {
        props.userIntake(u)
    }

    const handleRegisterBtn = () => {
        history.push('/register')
    }

    return (
        <div className='landing'>
            <section className='sectionLandingTop'>
                <LoginForm user={handleUser} />
                <button className='newUserBtn' onClick={handleRegisterBtn}>
                    Start Using TaskAid!
                </button>
            </section>

            <section className={
                toggled === false ? 
                'sectionLandingBot' :
                'sectionLandingBot toggled'
            }>
                <TitleAndInfo isToggled={toggleHandler} />
            </section>

        </div>
    )
}