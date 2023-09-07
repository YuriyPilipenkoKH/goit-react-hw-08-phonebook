import styled, { keyframes } from "styled-components";

const scaleTo2 = keyframes`
    0% {
        transform: scale(1)
    }
    50% {
        transform: scale(1.5)
    }
    100% {
        transform: scale(1)
    }

`

export const AnimatedContainer = styled.div`
    display: none;

@media screen and (min-width: 768px) {
    display: flex;
    gap: 50px;
    padding: 10px;
    width: 703px;
    height: 250px;
    background-color: var(--background-color);
    border-radius: 20px;
    outline: 2px solid #777;
}

@media screen and (min-width: 1280px) {
    display: none;
}
    &>button{
        width: 200px;
        height: 40px;
    }
    
`

export const AnimatedTitle = styled.h2.attrs(props => ({
    // Add any other props you want to pass here
    isAnimating: props.isAnimating,
  }))`

    padding: 20px;
    font-size: 26px;
    animation: ${props => (props.isAnimating ? scaleTo2 : "none")} 1s ease; 

`

export const AnimatedWrap = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 4px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;

`
