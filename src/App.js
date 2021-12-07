import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";
import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  let initTodos = [];
  if (localStorage.getItem("todos")) {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("Fuck" + todo.title);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    const myTodo = {
      sno: todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1,
      title: title,
      desc: desc,
    };
    console.log(myTodo);
    setTodos([...todos, myTodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          ></Route>
          <Route
            exact
            path="/about"
            element={
              <>
                <About />
              </>
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
