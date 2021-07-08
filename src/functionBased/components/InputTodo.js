import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"

function InputTodo(props) {
  const [inputText, setInputText] = useState({
    title: ""
  })

  function onChange(e) {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    })
    // console.log("hello")
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title)
      setInputText({
        title: ""
      })
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
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">
        <FaPlusCircle
          style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
        />
      </button>
    </form>
  )
}

export default InputTodo