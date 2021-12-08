import React, { Component } from "react";
import TodosList from "components/todosList";
import "styles/todo.css";
import { v4 as uuid } from "uuid";

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
      this.state.todos.push({ id: uuid(), val: this.state.todoTxt });
      this.setState({
        todoTxt: "",
      });
    } else {
      this.setState({
        errMsg: "Enter Something First!",
      });
    }
  };

  deleteTodoHandler = (todoIndex) => {
    this.state.todos.splice(todoIndex, 1);
    this.setState({ todos: this.state.todos });
  };

  onKeyDownEventHandler = (e) => {
    if (e.key === "Enter") {
      this.addTodoHandler();
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
            onKeyDown={this.onKeyDownEventHandler}
            autoFocus
          />
          <button className="add-btn" onClick={this.addTodoHandler}>
            ADD
          </button>
        </div>
        <p className="err-msg">{this.state.errMsg}</p>
        <TodosList
          myTodos={this.state.todos}
          onDeleteHandler={this.deleteTodoHandler}
        />
      </>
    );
  }
}

export default AddTodos;
