import React from "react";
import Context from "./context";
import ToDoList from "./toDo/ToDoList";
import AddToDo from "./toDo/addToDo";

function App() {
  const [todos, setToDos] = React.useState([
    { id: 1, completed: false, title: "buy bread" },
    { id: 2, completed: false, title: "buy milk" },
    { id: 3, completed: false, title: "learn React" },
  ]);

  function toggleToDo(id) {
    setToDos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    );
  }

  function removeToDo(id) {
    setToDos(todos.filter((todo) => todo.id !== id));
  }

  function addToDo(title) {
    setToDos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeToDo }}>
      <div className="wrapper">
        <h1 style={{ textAlign: "center" }}>Task List </h1>
        <AddToDo onCreate={addToDo} />
        {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleToDo} />
        ) : (
          <p>No tasks for today!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
