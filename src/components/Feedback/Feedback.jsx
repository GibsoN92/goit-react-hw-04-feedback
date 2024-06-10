import React from "react";
import PropTypes from "prop-types";
import css from "./Feedback.module.scss";

const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback } = props;
  const optionsKeys = Object.keys(options);

  return (
    <ul className={css["option-list"]}>
      {optionsKeys.map((option, index) => {
        return (
          <li className={css["option-item"]} key={index}>
            <button
              type="button"
              className={css["option-btn"]}
              name={option}
              onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
