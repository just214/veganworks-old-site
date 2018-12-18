import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.div`
  width: 100%;
  height: 100%;
  min-height: ${props => (props.full ? '100vh' : '0')};
  background-color: ${props => props.bg || '#fff'};
  text-align: ${props => (props.center ? 'center' : 'left')};
  background-image: ${props => (props.bg ? `url(${props.bg})` : 'none')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

Section.propTypes = {
  bg: PropTypes.string,
  center: PropTypes.bool,
  full: PropTypes.bool,
};

export default Section;
