import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      <Button
        onClick={() =>
          options.map(
            option => option === options[0] && onLeaveFeedback(option)
          )
        }
      >
        {options[0]}
      </Button>
      <Button
        onClick={() =>
          options.map(
            option => option === options[1] && onLeaveFeedback(option)
          )
        }
      >
        {options[1]}
      </Button>
      <Button
        onClick={() =>
          options.map(
            option => option === options[2] && onLeaveFeedback(option)
          )
        }
      >
        {options[2]}
      </Button>
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
