import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      <Button onClick={() => onLeaveFeedback((options = 'good'))}>
        {options[0]}
      </Button>
      <Button>{options[1]}</Button>
      <Button>{options[2]}</Button>
    </Container>
  );
};
