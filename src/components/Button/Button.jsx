import PropTypes from 'prop-types';
import { StyledArrowButton, StyledButton } from './Button.styled';


const Button = ({ children, ...props }) => {
  return <StyledButton type='button' {...props}> {children}</StyledButton>;
};

export const ArrowButton = ({ children, ...props }) => {
  return <StyledArrowButton type='button' {...props}> {children}</StyledArrowButton>;
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};