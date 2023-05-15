import React from 'react';
import Todoitem from './todo';
export default function todos(props) {
  return (
    <div className='container'>
     <h3 className='text-center'>Todos-List!</h3>
     {props.todos.length===0? "no todos to display": 
       props.todos.map((todos)=>{
          return <Todoitem Todo = {todos} key={todos.sno1} ondelete = {props.ondelete}/>
     })}
     
    </div>
  )
}

