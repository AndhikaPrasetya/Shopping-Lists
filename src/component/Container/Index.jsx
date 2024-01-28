import React from "react";
import { PropTypes } from "prop-types";
import styles from "./Container.module.css"
const Container = (props) => {
    const{children} = props;
  return (
    <div>
      <section className={styles.container}>
        {children}
      </section>
    </div>
  );
};

Container.propTypes = {
    children : PropTypes.node
}
export default Container;
