import React, { Component } from 'react'
import LoginForm from './LoginForm'
import TitleAndInfo from './TitleAndInfo'
import '../assets/css/main.css'

export default class Landing extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggled: false
        }

        this.intakeChangeAndHandle = this.intakeChangeAndHandle.bind(this)
    }

    intakeChangeAndHandle(intake) {
        this.setState({
            toggled: intake
        }, console.log('state in landing is ' + this.state.toggled))
    }

    render() {
        return (
            <div className='landing'>
                
                <section className='sectionLandingTop'>
                    <LoginForm />
                </section>

                <section className={
                    this.state.toggled === false ? 
                    'sectionLandingBot' :
                    'sectionLandingBot toggled'
                }>
                    <TitleAndInfo aProp={this.intakeChangeAndHandle} />
                </section>

            </div>
        )
    }
}