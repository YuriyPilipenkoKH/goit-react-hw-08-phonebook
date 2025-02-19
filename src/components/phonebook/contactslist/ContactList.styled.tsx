import { css, keyframes } from '@emotion/react';
import styled  from '@emotion/styled';
import { baseLiStyles, myRippleStyles } from '../../forms/Form.styled';

const ulAnimation = keyframes`
    0% {
        transform: rotateX(-90deg)
    }
    70% {
        transform: rotateX(20deg) 
    }
    100% {
        transform: rotateX(0deg) 
    }

`
const fadeIn = keyframes`
      0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`


export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: disc;


  font-size: 18px;
  font-weight: 500;
  margin: 0;
  padding: 0;

   animation: ${ulAnimation} 1s ease;   
`;

export const ListItem = styled.li`

    animation-duration: 0.5s;
    animation-fill-mode: both;
     

   display: grid;
   gap: 8px; 
   padding: 8px 10px;  

  @media screen and (min-width: 768px) {
    grid-template-columns:  auto 200px;
    }

     &~.deleted {
    position: fixed;
    width: 300px;
  }
     &~.edited {
    position: fixed;
    top: 300px;
    left: 50px;
    width: 300px;
  }
`;

export const ItemCard = styled.span`
  
  display: flex;
  align-items: center;
  min-height: 40px;
  border-radius: 4px;
  padding:4px 16px;
  font-weight: 600;
  color: var(--footer-text-color);
  background-color: var(--lauren);

  box-shadow: var(--shadow-four);    

  @media screen and (min-width: 768px) {
   justify-self: flex-start !important;
    }
`;


export const EditWrapper = styled.div`

  display: grid;
  grid-gap: 8px;

  &>input {
    width: 250px;
    padding: 4px 8px;
    border-radius: 4px;
    border: transparent;
    background-color: var(--beige);
    outline: none;

    &:active,
  &:focus {
   outline: 1px solid var(--orange);
  }
  }
`

export const ContactContainer = styled.div`
  position: relative;
  width: 320px;
  max-height: 480px;
  padding: 4px 2px;
  border: 3px solid var(--teal);
  background-color: rgba(238, 238, 238, 0.533);
  border-radius: 16px;
  box-shadow: var(--shadow-four);
  overflow: auto;
  transition: 1s ease-in-out;
  /* ::-webkit-scrollbar {
    display: none;
} */

::-webkit-scrollbar {
    width: 12px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}

@media screen and (min-width: 768px) {
      width: 90%;
      padding: 4px 8px;
      max-height: 300px;
    }
    @media (min-width: 1024px) {
      max-height: 500px;

  }
    @media (min-width: 1280px) {
      max-height: 500px;
      width: 100%;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

`

export const BtnDelete = styled.button`
   ${baseLiStyles};
  
    font-size: var(--fz);
   justify-content: center;
   width: 100px;
   /* background-color: var(--red); */
   cursor: pointer;
    transition: all 0.4s;
    padding: 2px;
    animation: ${fadeIn} 2s ease;

  &:hover,
  &:focus {
    outline:none;
    background-color: var(--red);
    color: var(--background-color);
    box-shadow: var(--shadow-two); 

    .cardSpan{
        color: var(--crimson);
        box-shadow: var(--shadow-two); 
    }
    ${myRippleStyles}
  }
`
export const BtnEdit = styled.button`
   ${baseLiStyles};

   font-size: var(--fz);
   justify-content: center;
   width: 100px;
   transition: opacity 1s ease-in-out;
   
   cursor: pointer;
    transition: all 0.4s;
    padding: 2px;

  &:hover,
  &:focus {
    outline:none;
    background-color: var(--green);
    color: var(--background-color);
    box-shadow: var(--shadow-two); 

    .cardSpan{
        color: var(--crimson);
        box-shadow: var(--shadow-two); 
    }
  }
  &:disabled {
    cursor: none;
    background-color: #888 !important;
    color: #eee;
    
  }
    ${myRippleStyles}
`
export const EmptySpan = styled.span`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #333;


`

export const Count  = styled.span`
position: absolute;
top: 485px;
right: 50%;
transform: translateX(140px);
width: 46px;
display: flex;
align-items: center;
justify-content: center;

background-color: var(--orange);
padding: 12px;
border-radius: 50%;
color: #555;
font-weight: 800;
letter-spacing: 1px;
z-index: 10;


`