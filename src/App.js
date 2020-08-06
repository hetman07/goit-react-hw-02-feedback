import React, { Component } from "react";
import PropTypes from "prop-types";

import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";

export default class App extends Component {
  static propTypes = {
    state: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
    countTotalFeedback: PropTypes.func,
    countPositiveFeedbackPercentage: PropTypes.func,
    handleIncrement: PropTypes.func,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    let total = Object.values(this.state).reduce((acc, item) => acc + item, 0);
    // let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positivePercentage;
  };

  handleIncrement = (e) => {
    const field = e.target.dataset.row;
    this.setState((prevState) => {
      return {
        [field]: prevState[field] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title>
          <FeedbackOptions onIncrement={this.handleIncrement} />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
