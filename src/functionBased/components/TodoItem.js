import React, { useState } from "react"
import styles from "./TodoItem.module.css"

function TodoItem(props) {
  const [editing, setEditing] = useState(false)

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { completed, id, title } = props.todo

  function handleEditing() {
    setEditing(true)
    // console.log("Edit mode activated")
  }

  function handleUpdatedDone(event) {
    if (event.key === "Enter") {
      setEditing(false)
    }
    console.log(event.key)
  }

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return <li className={styles.item}>
    <div onDoubleClick={handleEditing} style={viewMode}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
      />
      <button onClick={() => props.delTodoProps(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
    </div>
    <input
      type="text"
      className={styles.textInput}
      style={editMode}
      value={title}
      onChange={e => {
        { props.setUpdate(e.target.value, id) }
      }}
      onKeyDown={handleUpdatedDone}
    />
  </li>
}

export default TodoItem