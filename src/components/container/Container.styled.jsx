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

// export const MainContainer = styled.div`
//     display: grid;
//     place-items: center;
//     /* justify-items: center; */
//     grid-gap: 25px;
//     background-color: #777;
//     padding: 0 20px;
//     margin: 0 auto;
//     outline: 1px solid crimson;
//     width: 320px;

//       @media screen and (min-width: 768px) {
//       padding: 0 32px;
//       width: 768px;
//     }

//       @media screen and (min-width: 1280px) {
//         padding: 0 16px;
//         width: 1280px;
//     }
