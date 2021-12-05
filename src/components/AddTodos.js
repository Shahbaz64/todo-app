import React, { Component } from "react";
import TodosList from "./TodosList";
import "../Styles/todo.css";

class AddTodos extends Component {
  state = {
    todoTxt: "",
    errMsg: "",
    todos: [],
  };

  onChangeInputHandler = (e) => {
    this.setState({
      todoTxt: e.target.value,
      errMsg: "",
    });
  };

  addTodoHandler = () => {
    if (this.state.todoTxt) {
      this.state.todos.push(this.state.todoTxt);
      this.setState({
        todoTxt: "",
      });
    } else {
      this.setState({
        errMsg: "Enter Something First!",
      });
    }
  };

  render() {
    return (
      <>
        <div className="input-section">
          <input
            type="text"
            placeholder="What will you do today?"
            className="todo-txt"
            value={this.state.todoTxt}
            onChange={this.onChangeInputHandler}
            autoFocus
          />
          <button className="add-btn" onClick={this.addTodoHandler}>
            ADD
          </button>
        </div>
        <p className="err-msg">{this.state.errMsg}</p>
        <TodosList myTodos={this.state.todos} />
      </>
    );
  }
}

export default AddTodos;
