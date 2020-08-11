import React from 'react'

export default function Task(props) {
    return (
      <div key={props.id}
        id={props.id}
        onClick={props.taskClick}
        className='task'
        data-done={props.data}>
          <h3>{props.date}</h3>
          <h3>{props.description}</h3>
          <h3>{props.done}</h3>
          {
            props.done === true ? null :
            <button 
              onClick={props.taskChange}>Mark Complete</button>
          }
      </div>
    )
}
