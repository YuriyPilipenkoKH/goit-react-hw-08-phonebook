import styled from "styled-components";
import bg1 from '../img/Group-3149.svg'
import bg2 from '../img/Reactjs-Development-img.svg'
import bg3 from '../img/04_React_Native_App.svg'
import bg4 from '../img/hero-image-5.svg'
import bg5 from '../img/react-3.svg'
import bg6 from '../img/specilized-react-app.svg'
import bg7 from '../img/reacy-native-development.svg'
import bg8 from '../img/reactjs-benefits.svg'
import bg9 from '../img/react-dev-partner.svg'

export const HomeWrapper= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;


  /* background-image: url(${props => props.theme === 'light' ? bg1 : bg6}); */
  background-image: var(--background-image);
  transition: background-image 1s ease-in-out;
  background-repeat: no-repeat;
  background-position: center;  
  background-size: cover;
`

export const arrayOfBackgrounds = [
  bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9,
]

export const HomeTitle = styled.h1`

  text-align: center;

  font-size: 32px;
  font-weight: 700;
  color: #555;

  &+span {
    font-weight: 600;
   color:${props => props.theme === 'light' ? '#555' : '#999'};
    font-size: 24px;
    text-align: center;
    display: block;

  }
`
export const Page404 = styled.div`
 min-width: 300px;

  & > svg {
       fill: var(--text-color);
        transition: fill 1s ease-in-out;

  }
`