import PropTypes from 'prop-types';

import {
  FeedbackOptionsStyled,
  FeedbackOptionsButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, handleFeedback }) => {
  return (
    <FeedbackOptionsStyled>
      {options.map(item => {
        return (
          <FeedbackOptionsButton
            key={item}
            type="button"
            onClick={() => handleFeedback(item)}
          >
            {item}
          </FeedbackOptionsButton>
        );
      })}
    </FeedbackOptionsStyled>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleFeedback: PropTypes.func.isRequired,
};
