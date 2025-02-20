import styled from "@emotion/styled";

// import bg1 from '../img/Group-3149.svg'
// import bg2 from '../img/Reactjs-Development-img.svg'
// import bg3 from '../img/04_React_Native_App.svg'
// import bg4 from '../img/hero-image-5.svg'
// import bg5 from '../img/react-3.svg'
// import bg6 from '../img/specilized-react-app.svg'
// import bg7 from '../img/reacy-native-development.svg'
// import bg8 from '../img/reactjs-benefits.svg'
// import bg9 from '../img/react-dev-partner.svg'

// export const arrayOfBackgrounds = [
//   bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9,
// ]

export const HomeWrapper= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;



  background-image: var(--background-image);
  transition: background-image 1s ease-in-out;
  background-repeat: no-repeat;
  background-position: center;  
  background-size: cover;

  &>.football-player{
    width: 250px;
    @media screen and (min-width: 768px) {
    width: 500px;
}
    @media screen and (min-width: 1280px) {
    display: none;
}
  }
`
export const PhonebookWrapper= styled.div`
  width: 100%;

  background-image: var(--background-image-contacts);
 
  transition: background-image 1s ease-in-out;
  background-repeat: no-repeat;
  background-position: center;  
  background-size: cover;    
  padding: 0 20px 0;
  display: grid;
  gap: 32px;
  min-height: 100vh;
  transition: all 0.8s ease-in-out;
  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: start;
  }

  &>.new {
    position: absolute;
  }
 
`

export const HomeTitle = styled.h1`

  text-align: center;

  font-size: 40px;
  font-weight: 700;
  color: var(--app-title);
  padding: 12px;

  &+span {
    max-width: 800px;
    font-weight: 600;
    color: #757575;
    font-size: 24px;
    text-align: center;
    display: block;

  }
`
export const Page404 = styled.div`
 min-width: 300px;
 display: grid;
 place-items: center;
 text-align: center;

  & > svg {
       fill: var(--text-color);
        transition: fill 1s ease-in-out;

  }
  & > b {

    font-size: 38px;
  }

`


export const ListWrap = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  gap: 22px;

`
export const PaginationWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    }
`
export const PagSpan = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;
  min-height: 40px;
  border-radius: 4px;
  padding:4px 16px;
  font-weight: 600;
  color: var(--footer-text-color);
  background-color: var(--lauren);
`