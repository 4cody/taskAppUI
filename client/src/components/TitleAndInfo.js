import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export const TitleAndInfo = props => {
    const [toggled, setToggle] = useState(false)

    const handleToggle = evt => {
        setToggle(!toggled)
        props.isToggled()
    }

    return (
        <div className={
            toggled ?
                'titleAndInfo toggled-titleInfo' :
                'titleAndInfo'
        }>
            <h1><span>T</span>ask<span>A</span>id</h1>
            
            <div className='infoIcon' onClick={handleToggle}>
                {
                toggled ?
                    <FontAwesomeIcon 
                        className='landingInfoIcon' 
                        icon={faTimesCircle} 
                        size="3x" /> :
                    <FontAwesomeIcon 
                        className='landingInfoIcon' 
                        icon={faQuestionCircle} 
                        size="2x" />
                }
            </div>
            
            <div className={
                toggled ?
                    'appInfo toggled-appInfo' :
                    'appInfo'
            }>
                <p> 
                    TaskAid is a simple and effective task managment system to aid your day to day life.
                    With it you can organise and keep track of the various things you need to get done on one easy-to-use platform. 
                </p>
                <br/>
                <p>
                    The only emails you will recieve are upon the creation of you account and if you delete your account.
                </p>
            </div>

        </div>
    )

}
