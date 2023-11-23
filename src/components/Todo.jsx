// import React from "react";
import PropTypes from "prop-types";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  Todo.propTypes = {
    removeTodo: PropTypes.func,
    completeTodo: PropTypes.func,
    todo: PropTypes.object,
    // todo: PropTypes.objectOf(
    //   PropTypes.shape({
    //     id: PropTypes.number,
    //     text: PropTypes.string,
    //     category: PropTypes.string,
    //     completed: PropTypes.bool,
    //   })
    // ),
  };
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Todo;
