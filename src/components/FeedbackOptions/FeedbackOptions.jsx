import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.modules.css";

export default function FeedbackOptions() {
  return (
    <div className="div-button">
      <button type="button" className="Feedback-button">
        Goot
      </button>
      <button type="button" className="Feedback-button">
        Neutral
      </button>
      <button type="button" className="Feedback-button">
        Bad
      </button>
    </div>
  );
}