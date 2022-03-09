import "./App.css";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import React, { useState } from "react";
import AddTodo from "./Components/AddTodo";

function App() {
  const [todos, setTodos] = useState([
  ]);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title) => {
    
setTodos([...todos, {title}])
  }
  return (
    <>
      <Header title="Todo List" searchBar={false} />
    <AddTodo addTodo={addTodo}></AddTodo>
      <Todos todos={todos}  onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
