import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
 <div className='container'>
   <h2 className='text-center my-3'> Todo List</h2>
   { props.todos.map((todo) => {
     return  <TodoItem key={todo.title} todo={todo} onDelete={props.onDelete}/>
   }) }
 </div>
    
  )
}
