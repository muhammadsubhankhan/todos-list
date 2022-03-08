import React from 'react'

export default function TodoItem({todo, onDelete}) {
  return (
    <>
    <p>{todo.title}</p>
    <button className="btn btn-sm btn-danger" onClick={ ()=>{onDelete(todo)}}>Delete</button>
    </>

  )
}
