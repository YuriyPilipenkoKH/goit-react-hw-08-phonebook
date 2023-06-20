import PropTypes from 'prop-types';
import { MainContainer } from './Container.styled';
import { useSelector } from 'react-redux';
import { getTheme } from 'redux/selectors';

export const Container =({ children })  => {
    const theme = useSelector(getTheme)

    return <MainContainer theme = {theme} className='container'>{children}</MainContainer>
}

Container.propTypes = {
    children: PropTypes.node,
  };
  