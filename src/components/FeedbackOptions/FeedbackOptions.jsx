import PropTypes from 'prop-types';
import {
  FeedbackOptionsStyled,
  FeedbackOptionsButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsStyled>
      {options.map(item => {
        return (
          <FeedbackOptionsButton
            key={item}
            type="button"
            onClick={() => onLeaveFeedback(item)}
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
  onLeaveFeedback: PropTypes.func.isRequired,
};
