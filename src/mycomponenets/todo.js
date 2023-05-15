import React from 'react'

export default function todo(props) {
  return (
    <div>
        <h3>
            {props.Todo.sno1}
        </h3>
      <h4>
          {props.Todo.title}
      </h4>
      <p>
        {props.Todo.desc}
      </p>
      <button className='btn btn-sm btn-danger' onClick={()=>{props.ondelete(props.Todo)}} >Delete</button>
    </div>
  )
}
