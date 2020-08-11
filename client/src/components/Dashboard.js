import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from './Modal'
import Task from './Task'
import '../assets/css/main.css'

export const Dashboard = (props) => {
    const [tasks, setTasks] = useState([])
    const [completed, setCompleted] = useState([])
    const [modalIsToggled, setModal] = useState(false)
    const [radioSelect, selectRadio] = useState('todo')

    const token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const getTasks = async () => {
        const res = await axios.get(
            'http://localhost:3007/tasks', 
            config
        )
        // Sort incomming tasks on 'completed' property 
        let todos = []
        let done = []
        res.data.forEach(t => {
            if(t.completed === true) {
                done.push(t)
            } else {
                todos.push(t)
            }
        })

        setTasks(todos)
        setCompleted(done)
    }

    useEffect(() => {
        getTasks()
    }, [])

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

    const mapTasks = (taskArr, filter) => {
        const mapped = taskArr.map(t => {
            const date = t.createdAt.slice(5,10)
            return(
                <Task
                    date={date}
                    key={t._id}
                    id={t._id}
                    description={t.description}
                    done={t.completed}
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
                <h3><span>T</span>ask<span>A</span>id</h3>
                <h2>Hi {props.user}</h2>
                <button onClick={toggleNewTaskModal}>Add Task</button>
                {/* <form className='listToggle'>
                    <div>
                        <input
                        type="radio"
                        value="option1"
                        checked={true}
                        />Todo
                    </div>

                    <div>
                        <input
                        type="radio"
                        value="option2"
                        />Complete
                    </div>
                </form> */}
            </div>                    
            
            <div className="itemList">
                    {mapTasks(tasks)}
            </div>
        </div>
    )
}

