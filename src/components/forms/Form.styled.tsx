import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { buttonStyles } from "../button/Button.styled";
import { css } from "@emotion/react";


export const LogoWrapp = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    &> svg {
        fill: #777;
    }
`

export const RouteWrapp = styled.div`
    
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;

    &> p{
        transition: color 1s ease-in-out;

    color: var(--text-color);
        font-size: 14px;
    }

    &>button {
        padding: 4px 16px;
    }
`
export const FormLink = styled(Link)`
    
    ${buttonStyles} ;
    padding: 4px 16px;
    text-decoration: none;
    font-size: 14px;
`

export const FormWrapper = styled.div`
    position: relative;
display: flex;
flex-direction: column;
align-items: center;
gap: 18px;
min-height: 520px;
padding:  32px 16px 60px;
border: 4px solid #777;
border-radius: 12px;
box-shadow: var(--shadow-four);
background-color:var(--background-color);
transition: background-color 1s ease-in-out, color 1s ease-in-out;
`

export const StyledForm = styled.form`
    
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const ShowBtn = styled.button`
position: absolute;
top: 35px;
right: 5px;
padding: 4px;
width: 80px;
border-radius: 4px;
border: transparent;
background-color: #777;
color: #eee;
`

export const SecondsCounter = styled.div`
    position: absolute;
    width: 90%;
    bottom: 5px;
    text-align: center;
    color: var(--crimson);
    font-size: 1.6em;
    font-weight: 600;
`
export const MainTitle = styled.h2`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 22px;
  text-align: center;
  color: #eee;
  margin: 0;
  padding: 8px 30px;
  border-radius: 10px;
  background-color: #777;
  border: 4px solid #777;
  box-shadow: var(--shadow-four);
  transition: width 1s ease-in-out, left 1.5s ease-in-out;

  &>svg {
    fill: #eee;
    transition: opacity 1s ease-in-out;
  }
`

export const Input = styled.input`
  height: 40px;
  width: 280px;
  border-radius: 10px;
  padding:4px 16px;
  font-size: 18px;
  background-color: var(--field-color);
  border: var(--border);
  box-shadow: var(--shadow-four);
  transition: background-color 1s ease-in-out, border 1s ease-in-out;

  &:hover,
  &:active,
  &:focus-visible {
   
    outline: 3px solid var(--orange);
    border: 3px solid transparent;
    box-shadow: var(--shadow-two);
    transition:  0.4s ease-in-out;
  }

  &:disabled {
    background-color: var(--field-color) !important;
    border: none;
    outline: none;
    cursor: none;

    &:hover {
      box-shadow: var(--shadow-four);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &>.new {
    position: absolute;
  }


`;


export const Label = styled.label`
position: relative;
  font-size: 18px;
  font-weight: 500;
  color:  var(--text-color);
  transition:  color 1s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;
  align-items: baseline;
`;

export const baseLiStyles = css`
  
    font-family: inherit;
    font-size: 16px;
    line-height: 17px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;

    height: 40px;
    color: var(--black);
    background-color: var(--yellow);
    border:  transparent;
    border-radius: 10px;
    box-shadow: var(--shadow-four);
`;


export const myRippleStyles = `
position: relative;
overflow: hidden;
       
&:active {
  transform: scale(0.98);
}

&:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #2b02a5 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.4s, opacity 1s;
}

&:active:after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}
`


export const Input_1 = styled.input`
  height: 40px;
  width: 280px;
  border-radius: 10px;
  padding:4px 16px;
  background-color: var(--field-color);
  border: var(--border);
  box-shadow: var(--shadow-four);
  transition: background-color 1s ease-in-out, border 1s ease-in-out;

  &:hover,
  &:active,
  &:focus-visible {
   
    outline: 3px solid var(--orange);
    border: 3px solid transparent;
    box-shadow: var(--shadow-two);
    transition:  0.4s ease-in-out;
  }

  &:disabled {
    background-color: var(--field-color) !important;
    border: none;
    outline: none;
    cursor: none;

    &:hover {
      box-shadow: var(--shadow-four);
    }
  }
`;

export const Form_1 = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &>.new {
    position: absolute;
  }


`;


export const Label_1 = styled.label`
position: relative;
  font-size: 18px;
  font-weight: 500;
  color:  var(--text-color);
  transition:  color 1s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;
  align-items: baseline;
`;


export const ContactFormBtn = styled.button`
  position: relative;
  overflow: hidden;
  ${baseLiStyles};

  width: 180px;
 justify-content: space-between; 
  /* width: 160px; */
  outline: none;
  cursor: pointer;
    transition: all 0.4s;

  &:hover,
  &:focus {
    outline:none;
    background-color: var(--green);
    color: var(--background-color);
    box-shadow: var(--shadow-two); 

    & >svg {
        fill: var(--background-color);

     }

     
     &:active {
    transform: scale(0.98);
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #2b02a5 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.4s, opacity 1s;
  }

  &:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
  }
`;