import React from "react";
import ReactDom from "react-dom";

//Components
import Todo from "./components/AddTodos";

const App = () => {
  return <Todo />;
};

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);