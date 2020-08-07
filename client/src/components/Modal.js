import React, {useState} from 'react'
import '../assets/css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default function Modal(props) {
    const [newTask, setNewTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTask(newTask)
        props.exit()
    }

    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    }

    const handleExit = (e) => {
        props.exit()
    }
    
    return (
        <div className='modal'>
            <form onSubmit={handleSubmit} className='modalForm'>
                <FontAwesomeIcon 
                    className='modalX'
                    onClick={handleExit} 
                    icon={faTimesCircle} 
                    size="2x" />

                <label>
                    <h5>What's the task?</h5>
                    <input type='text' onChange={handleInputChange}/>    
                </label> 

                <input 
                  className='modalSubmit' 
                  type='submit' 
                  value='Add Task' />
            </form>
        </div>
    )
}
