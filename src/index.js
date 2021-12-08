import React from "react";
import ReactDom from "react-dom";
import Todo from "components/addTodos";

const App = () => {
  return <Todo />;
};

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
