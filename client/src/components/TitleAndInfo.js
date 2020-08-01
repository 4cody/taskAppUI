import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default class TitleAndInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            infoToggled: false
        }

        this.handleInfoToggle = this.handleInfoToggle.bind(this)
    }

    handleInfoToggle(e) {
        this.setState({
            infoToggled: !this.state.infoToggled
        }, () => {
            console.log(
                this.props.aProp(this.state.infoToggled)
            )
        })
    }

    render() {
        return (
            <div className={
                this.state.infoToggled ?
                    'titleAndInfo toggled-titleInfo' :
                    'titleAndInfo'
            }>
                <h1><span>T</span>ask<span>A</span>id</h1>
                
                <div className='infoIcon' onClick={this.handleInfoToggle}>
                    {
                    this.state.infoToggled ?
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
                    this.state.infoToggled ?
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
}
