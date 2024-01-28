import React from "react";
import styles from "./SearchInput.module.css"
import { PropTypes } from "prop-types";
const SearchInput = (props) => {
    const{onSubmit,onChange,value} = props;
  return (
    <div>
      {" "}
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          onChange={onChange
          }
          name="todo"
          value={value}
          type="text"
          placeholder="Add a list..."
          className={styles.input}
        />
        <button className={styles.addButton} type="submit">
          add
        </button>
      </form>
    </div>
  );
};

SearchInput.prototype = {
    onSubmit : PropTypes.function,
    onChange : PropTypes.function,
    value : PropTypes.string
}

export default SearchInput;
