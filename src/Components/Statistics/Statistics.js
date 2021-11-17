import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul>
        <li>{`Good: ${good}`}</li>
        <li>{`Neutral: ${neutral}`}</li>
        <li>{`Bad: ${bad}`}</li>
        <li>{`Total: ${total}`}</li>
        <li>{`Good feedback: ${positivePercentage}`}</li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
