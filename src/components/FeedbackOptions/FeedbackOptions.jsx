import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.modules.css";

export default function FeedbackOptions({ onIncrement }) {
  return (
    <div className={styles.divButton}>
      <button
        type="button"
        className={styles.FeedbackButton}
        data-row="good"
        onClick={onIncrement}
      >
        Good
      </button>
      <button
        type="button"
        className={styles.FeedbackButton}
        data-row="neutral"
        onClick={onIncrement}
      >
        Neutral
      </button>
      <button
        type="button"
        className={styles.FeedbackButton}
        data-row="bad"
        onClick={onIncrement}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onIncrement: PropTypes.func
}