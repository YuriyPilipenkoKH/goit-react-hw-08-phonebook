import PropTypes from 'prop-types';
import { StyledArrowButton, StyledButton, StyledFlatButton } from './Button.styled';


const Button = ({ children, ...props }) => {
  return <StyledButton type='button' {...props}> {children}</StyledButton>;
};

export const ArrowButton = ({ children, ...props }) => {
  return <StyledArrowButton type='button' {...props}> {children}</StyledArrowButton>;
};

export const FlatButton = ({ children, ...props }) => {
  return <StyledFlatButton type='button' {...props}> {children}</StyledFlatButton>;
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};