import styled from 'styled-components';


export const MainContainer = styled.div`
    display: grid;
    /* place-items: center; */
    justify-items: center;
    grid-gap: 25px;
    grid-template-rows: 80px auto 80px;
    height: 100vh;

    transition: background-color 1s ease-in-out, color 1s ease-in-out;
    background: var(--background-color);
    color: var(--text-color);
    padding: 0 16px;
    margin: 0 auto;
`