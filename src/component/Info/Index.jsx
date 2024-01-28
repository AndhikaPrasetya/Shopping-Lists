import React from "react";
import styles from "./Info.module.css"
import { PropTypes } from "prop-types";
const Info = (props) => {
    const{todos, getTotalCounts, onClick} = props;
  return (
    <div>
      {" "}
      <section className={styles.info}>
      <div className={styles.infoTotal}>
            <p>{`Total List : ${todos}`}</p>
          </div>

          <div className={styles.infoTotal}>
            <p>{`Total Count : ${getTotalCounts} `}</p>
          </div>

          <button
            className={styles.hapusButton}
            onClick={onClick}
          >
            Hapus
          </button>
      </section>
    </div>
  );
};

Info.propTypes = {
    todos: PropTypes.number,
    getTotalCounts : PropTypes.number,
    onClick : PropTypes.func
}
export default Info;
