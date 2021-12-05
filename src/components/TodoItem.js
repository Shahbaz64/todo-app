import React, { Component } from "react";
import "../Styles/todo.css";

export class TodoItem extends Component {
  state = {
    classeName: "non-strike",
  };

  onChangeCheckBoxHandler = (e) => {
    if (e.target.checked) {
      this.setState({
        className: "strike",
      });
    } else {
      this.setState({
        className: "non-strike",
      });
    }
  };

  render() {
    return (
      <>
        <div className="todo-item">
          <input
            type="checkbox"
            className="chk-box"
            onChange={this.onChangeCheckBoxHandler}
          />
          <p id="todo-txt" className={this.state.className}>
            {this.props.todoTxt}
          </p>
          <i
            id="del-icon"
            className="fa fa-trash fa-lg"
            onClick={this.props.onDeleteHandler}
          ></i>
        </div>
        <hr></hr>
      </>
    );
  }
}

export default TodoItem;
