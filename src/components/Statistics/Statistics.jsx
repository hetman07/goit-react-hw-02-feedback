import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <h3>Statistics</h3>
      <ul>
        <li className={styles.label}>
          <span>Good: </span>
          <span> {good} </span>
        </li>
        <li className={styles.label}>
          <span>Neutral: </span>
          <span> {neutral} </span>
        </li>
        <li className={styles.label}>
          <span>Bad: </span>
          <span> {bad} </span>
        </li>
      </ul>
      <div>
        <span>Total: </span>
        <span>{total}</span>
      </div>
      <div>
        <span>Positive feedback: </span>
        <span>{positivePercentage}%</span>
      </div>
    </>
  );
}
