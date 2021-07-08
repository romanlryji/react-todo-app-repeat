import React, { Component, useState } from "react"

function InputTodo(props) {
  const [title, setTitle] = useState("")

  function onChange(e) {
    setTitle(e.target.value)
    // console.log("hello")
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (title.trim()) {
      props.addTodoProps(title)
      setTitle("")
    } else {
      alert("Title is empty")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  )
}

export default InputTodo