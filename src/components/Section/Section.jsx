import PropTypes from 'prop-types';

import { Container } from './Section.styled';

export const SectionWrapper = ({ title, children }) => {
    return (
      <Container>
        <h1>{title}</h1>
        {children}
      </Container>
    );
  };


  SectionWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
  }

