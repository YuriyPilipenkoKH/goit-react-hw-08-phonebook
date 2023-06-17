import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';


const Button = ({ children, ...props }) => {
  return <StyledButton type='button' {...props}> {children}</StyledButton>;
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};