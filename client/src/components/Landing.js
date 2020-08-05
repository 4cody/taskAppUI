import React, { useState } from 'react'
import { LoginForm } from './LoginForm'
import { TitleAndInfo } from './TitleAndInfo'
import '../assets/css/main.css'

export const Landing = (props) => {
    const [toggled, setToggle] = useState(false)

    const toggleHandler = () => {
        setToggle(!toggled)
    }

    return (
        <div className='landing'>
            <section className='sectionLandingTop'>
                <LoginForm />
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