import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import { BrowserRouter as Router } from "react-router-dom"

import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// npx create-react-app react-todo-app