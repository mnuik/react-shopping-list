import React, { useState } from "react";


import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (

    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className="todo-items">
        {todo.text}
      </div>
      <div>
        <button type="button" className="button-check" onClick={() => completeTodo(index)}> <i class="fa fa-check-square"></i> </button>
        <button type="button" className="button-delete" onClick={() => removeTodo(index)}> <i class="fa fa-trash"></i> </button>
      </div>
    </div>

  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Lisää tuote"
      />
      <button
        type="button"
        className="button-add"
      >
        Lisää
      </button>
    </form>

  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Banaani",
      isCompleted: false
    },
    {
      text: "Kananmuna (luomu)",
      isCompleted: false
    },
    {
      text: "Sipuli",
      isCompleted: false
    },
    {
      text: "Leipä",
      isCompleted: false
    },
    {
      text: "Juustu",
      isCompleted: false
    },
    {
      text: "Voi",
      isCompleted: false
    },
    {
      text: "Tehis",
      isCompleted: false
    },
    {
      text: "Sihis",
      isCompleted: false
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <header><div className="header">
        <h1>OSTOSLISTA</h1> <i class="far fa-heart"></i>
      </div></header>
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}
export default App;
