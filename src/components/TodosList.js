import React, { Component } from "react";
import TodoItem from "components/todoItem";
import PropTypes from "prop-types";
// import { v4 as uuid } from "uuid";
import "styles/todo.css";

export class TodosList extends Component {
  state = {
    todos: this.props.myTodos,
    input: "",
  };

  render() {
    return (
      <div className="todo-container">
        {this.state.todos[0] ? (
          <div className="my-todos">
            {this.state.todos.map(({ id, val }, index) => {
              return (
                <TodoItem
                  key={id}
                  todoTxt={val}
                  onDeleteHandler={() => this.props.onDeleteHandler(index)}
                />
              );
            })}
          </div>
        ) : (
          <div className="my-todos">
            <p>Nothing Added Yet!</p>
          </div>
        )}
      </div>
    );
  }
}

TodosList.propTypes = {
  myTodos: PropTypes.array,
  onDeleteHandler: PropTypes.func,
};

TodosList.defaultProps = {
  myTodos: [],
  onDeleteHandler: () => {},
};

export default TodosList;
