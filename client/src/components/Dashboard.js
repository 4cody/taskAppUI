import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import '../assets/css/main.css'

export const Dashboard = () => {
    const [display, setDisplay] = useState('')

    const handleChange = evt => {
        const d = evt.target.attributes.sortvalue.value
        console.log(d)
        setDisplay(d)
    }

    // useEffect(async () => {
    //     let creds = {
    //         'Authorization'
    //     }
    //     // console.log(display)
    //     const res = await axios.get('http://localhost:3007/tasks', )
    // })

    return (
        <div className='dashboardContainer'>
            <div className='dashboardBanner'>
                <h2>Hi person</h2>
                <button>Add Task</button>
            </div>
            <div className='dashboardFilter'>                    
                <ul>
                    <li>
                        <div 
                            onClick={handleChange} 
                            className='filterOption'
                            sortvalue='all' >All</div>
                    </li>
                    
                    <li>
                        <div 
                            onClick={handleChange} 
                            className='filterOption'
                            sortvalue='todo'>Todo</div>
                    </li>

                    <li>
                        <div 
                            onClick={handleChange} 
                            className='filterOption'
                            sortvalue='done'>Done</div>
                    </li>
                </ul>
            </div>
            <div className="itemList">

            </div>
        </div>
    )
}

