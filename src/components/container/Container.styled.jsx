import styled from 'styled-components';


export const MainContainer = styled.div`
    display: grid;
    /* place-items: center; */
    justify-items: center;
    grid-gap: 25px;
    grid-template-rows: 80px auto 80px;
    height: 100vh;

    background-color: ${props => props.theme === 'light' ? 'var(--body-color)' : '#403f78'};
    padding: 0 16px;
    margin: 0 auto;
`