import{t as e}from"./index-CBh11IS_.js";const t=e.div`
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
`,a=e.div`
  width: 100%;

  background-image: var(--background-image-contacts);
 
  transition: background-image 1s ease-in-out;
  background-repeat: no-repeat;
  background-position: center;  
  background-size: cover;    
  padding: 0 20px 0;
  /* display: flex;
  flex-direction:column;
  align-items: center; */
  gap: 32px;
  transition: all 0.8s ease-in-out;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: start;
  }

  &>.new {
    position: absolute;
  }
 
`,n=e.h1`

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
`,o=e.div`
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

`,r=e.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  gap: 22px;

`,p=e.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    }
`,s=e.div`
  display: flex;
  gap: 22px;
  align-items: center;
  min-height: 40px;
  border-radius: 4px;
  padding:4px 16px;
  font-weight: 600;
  color: var(--footer-text-color);
  background-color: var(--lauren);
`;export{t as H,r as L,p as P,n as a,s as b,a as c,o as d};
