import PropTypes from 'prop-types'

import { Buttons } from './FeedbackButtons.styled';

import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionKeys = Object.keys(options)
  return (
    <Buttons>
      {optionKeys.map((option) => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </Buttons>
  );
};


FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired
}

