import React, { useState } from "react";

export default function AddTodo({addTodo}) {
  const [title, setTitle] = useState("");
  const submit = (e) => {
      e.preventDefault()
      if(!title)
      alert('Title is required')

      addTodo(title)
  }
  return (
    <div className="container my-3">
     <h2 className="text-center my-3">Add Todo</h2>
     <form onSubmit={submit}>
     <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Enter Title"
        value={title}
        id="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn btn-primary my-3">
        Submit
      </button>
     </form>
    </div>
  );
}
