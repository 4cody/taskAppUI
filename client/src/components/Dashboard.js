import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from './Modal'
import Task from './Task'
import '../assets/css/main.css'

export const Dashboard = (props) => {
    // const [display, setDisplay] = useState('all')
    const [tasks, setTasks] = useState([])
    const [modalIsToggled, setModal] = useState(false)

    const token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const getTasks = async () => {
        const res = await axios.get(
            'http://localhost:3007/tasks', 
            config
        )
        setTasks(res.data)
    }

    useEffect(() => {
        getTasks()
    }, [])

    // const handleDisplayChange = evt => {
    //     const d = evt.target.attributes.sortvalue.value
    //     setDisplay(d)
    //     console.log(display)
    // }

    const handleTaskChange = async evt => {
        const token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const bodyParameters = {
           completed: true
        };    
        const taskId = evt.target.parentNode.attributes.id.value
        await axios.patch(
            `http://localhost:3007/tasks/${taskId}`,
            bodyParameters,
            config
        )
        getTasks()
    }

    const handleTaskClick = evt => {
        console.log(evt.target.classlist)
    }

    const mapTasks = (taskArr, filter) => {
        const mapped = taskArr.map(t => {
            const date = t.createdAt.slice(5,10)
            // const done = t.completed 
            // ? 'Complete' : 'Not Complete'
            console.log(t._id)
            return(
                <Task
                    date={date}
                    data={t.completed}
                    key={t._id}
                    id={t._id}
                    description={t.description}
                    done={t.completed}
                    taskClick={handleTaskClick}
                    taskChange={handleTaskChange}
                 />
            )
        })
        return mapped
    }

    const handleAddTask = async (newTask) => {
        const body = {
            description: newTask
        }
        const token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const res = await axios.post(
            'http://localhost:3007/tasks',
            body, 
            config
        )

        setTasks(tasks.concat(res.data))
    }

    const toggleNewTaskModal = () => {
        setModal(!modalIsToggled)
    }

    const handleModalExit = () => {
        setModal(!modalIsToggled)
    }

    return (
        <div className='dashboardContainer'>
            {
                modalIsToggled ? 
                <Modal addTask={handleAddTask} exit={handleModalExit} /> :
                null
            }
            <div className='dashboardBanner'>
                <h2>Hi {props.user}</h2>
                <button onClick={toggleNewTaskModal}>Add Task</button>
            </div>
                               
            {/* <ul className='dashboardFilter'>
                <li>
                    <div 
                        onClick={handleDisplayChange} 
                        className='filterOption'
                        sortvalue='all' >All</div>
                </li>
                
                <li>
                    <div 
                        onClick={handleDisplayChange} 
                        className='filterOption'
                        sortvalue='todo'>Todo</div>
                </li>

                <li>
                    <div 
                        onClick={handleDisplayChange} 
                        className='filterOption'
                        sortvalue='done'>Done</div>
                </li>
            </ul> */}
            
            <div className="itemList">
                    {mapTasks(tasks)}
            </div>
        </div>
    )
}

