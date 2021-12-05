import React, { Component } from "react";
import "./TodoItem";
import "../Styles/todo.css";
import TodoItem from "./TodoItem";

export class TodosList extends Component {
  state = {
    todos: this.props.myTodos,
    input: "",
  };

  deleteTodoHandler = (todoIndex) => {
    const todos = [...this.state.todos];
    todos.splice(todoIndex, 1);
    this.setState({ todos: todos });
  };

  render() {
    let todoList = null;
    if (this.state.todos[0]) {
      todoList = (
        <div className="my-todos">
          {this.state.todos.map((todo, index) => {
            return (
              <TodoItem
                key={index}
                todoTxt={todo}
                onDeleteHandler={() => this.deleteTodoHandler(index)}
              />
            );
          })}
        </div>
      );
    } else {
      todoList = <div className="my-todos">Nothing Added Yet!</div>;
    }

    return <div className="todo-container">{todoList}</div>;
  }
}

export default TodosList;
