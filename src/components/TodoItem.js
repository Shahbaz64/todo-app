import React, { Component } from "react";
import PropTypes from "prop-types";
import "styles/todo.css";

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
      </>
    );
  }
}

TodoItem.propTypes = {
  todoTxt: PropTypes.string.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  todoTxt: "",
  onDeleteHandler: () => {},
};

export default TodoItem;
