import React, { Component } from "react";
// import PropTypes from "prop-types";
import Notification from "./components/Notification/Notification";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";

export default class App extends Component {
  // static propTypes = {};
  // static defaultProp = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title>
            <FeedbackOptions />
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}
