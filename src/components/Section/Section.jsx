import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.modules.css";

const Section = ({ title, children }) => {
  return (
    <section className={styles.feedback}>
      {title && <h2> Please leave feedback </h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Section;
