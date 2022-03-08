import "./App.css";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { title: "morning walk" },
    { title: "workout" },
    { title: "break fast" },
  ]);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  return (
    <>
      <Header title="Todo App" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
