import React, { useState, useEffect } from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid" // npm i uuid
import { Route, Switch } from "react-router-dom"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Navbar from "./Navbar"

function TodoContainer() {
  const [todos, setTodos] = useState(gettingInitialTodos())

  function handleChange(id) {
    setTodos(prevState => (
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    ))
    console.log("check clicked", id);
  }

  function delTodo(id) {
    setTodos([...todos.filter(todo => { return todo.id !== id })])
    console.log("deleted", id);
  }

  function addTodoItem(title) {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }

    setTodos([...todos, newTodo])
    console.log(title)
  }

  function setUpdate(newTitle, id) {
    setTodos(prevState => (
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title: newTitle
          }
        }
        return todo
      })
    ))
    console.log(newTitle, id)
  }

  function gettingInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)

    return loadedTodos || {}
  }

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                delTodoProps={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  )
}

export default TodoContainer