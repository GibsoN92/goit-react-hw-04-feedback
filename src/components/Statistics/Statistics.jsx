import React from "react";
import PropTypes from "prop-types";

const Statistics = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Nautral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
