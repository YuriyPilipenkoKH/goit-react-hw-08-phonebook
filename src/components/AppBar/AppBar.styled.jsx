import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
   /* justify-content: space-between; */
   gap: 20px;
`

export const ThemeBtn = styled.button`
   margin-left: auto;
 
    width: 40px;
    height: 40px;
   display: grid;
   place-items: center;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.4ms ease-in-out;
    cursor: pointer;
    

    &> svg {
        fill:  ${props => props.theme === 'light' ? '#444' : '#eee'};
        }

    &:hover{
        background-color: var(--green);


        &> svg {
            fill:  ${props => props.theme === 'light' ? '#eee' : '#222'};
        }
    }
`