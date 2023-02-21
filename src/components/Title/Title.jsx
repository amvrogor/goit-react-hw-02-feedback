import PropTypes from 'prop-types';
import { Container, TitleText } from './Title.styled';

export const Title = ({ title, children }) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>
      {children}
    </Container>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
