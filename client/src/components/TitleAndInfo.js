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
            <div className='titleAndInfo'>
                <h1><span>T</span>ask<span>A</span>id</h1>
                
                <div className='infoIcon' onClick={this.handleInfoToggle}>
                    {
                    this.state.infoToggled ?
                        <FontAwesomeIcon 
                            className='landingInfoIcon' 
                            icon={faTimesCircle} 
                            size="2x" /> :
                        <FontAwesomeIcon 
                            className='landingInfoIcon' 
                            icon={faQuestionCircle} 
                            size="2x" />
                    }
                </div>
            </div>
        )
    }
}
