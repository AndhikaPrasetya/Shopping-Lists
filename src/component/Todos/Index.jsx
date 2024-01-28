import React from "react";
import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";
import styles from "./Todos.module.css"
import { PropTypes } from "prop-types";
import classnames from "classnames";

const Todos = (props) => {
    const { todos, handleCount, handleSubstractionCount} = props;
  return (
    <div>
      {" "}
      <div className={styles.todos}>
        {todos.map((todo, index, arr) => {
          return (
            <div
            //   className={`${styles.todo} ${
            //     !(arr.length === index + 1) && `${styles.todoDivider}`
            //   }`}
            key={index}
            className={classnames(styles.todo, {
                [styles.todoDivider]: !(arr.length === index + 1),
            })}
            >
              <div className={styles.todoTitle}>{todo.title}</div>

              <div className={styles.todoIconWrapper}>
                <div className={styles.todoCount}>{todo.count}</div>
              </div>

              <button
                className={styles.todoActionButton}
                onClick={()=>handleCount(index)}
              >
                <img src={plusIcon} alt="plus-icon" />
              </button>
              <button
                className={styles.todoActionButton}
                onClick={()=>handleSubstractionCount(index)}
              >
                <img src={minusIcon} alt="minus-icon" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title : PropTypes.string,
        count : PropTypes.number
    })).isRequired,
    handleCount : PropTypes.func,
    handleSubstractionCount : PropTypes.func
}

export default Todos;
