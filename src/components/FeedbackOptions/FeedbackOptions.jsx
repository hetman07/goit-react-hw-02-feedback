import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.modules.css";

export default function FeedbackOptions({ onIncrement }) {
  return (
    <div className="div-button">
      <button
        type="button"
        className="Feedback-button"
        data-row="good"
        onClick={onIncrement}
      >
        Good
      </button>
      <button
        type="button"
        className="Feedback-button"
        data-row="neutral"
        onClick={onIncrement}
      >
        Neutral
      </button>
      <button
        type="button"
        className="Feedback-button"
        data-row="bad"
        onClick={onIncrement}
      >
        Bad
      </button>
    </div>
  );
}
