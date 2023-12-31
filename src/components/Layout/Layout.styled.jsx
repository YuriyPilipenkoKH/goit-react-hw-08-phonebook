import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const MainHeader= styled.header`
  top: 0;
  left: 0;
  width: 100%;
 position: sticky;
  z-index: 100;
  display: flex;
  gap: 25px;
  align-items: center;

  padding: 32px 50px 16px;
  background-color: transparent;
 
  border-bottom: 1px solid #222;



  >.logo{
    width: 100px;
    height: 32px;

    color:var(--teal);
    transition: 0.4s ease;

  &:hover {
    color: var(--react-color);
  }
  }

  >.KH-icon {

    width: 100px;
    height: 32px;
    color: #222;
    transition: 0.4s ease;

    &:hover {
        color: var(--teal);
    }


  }
`

export const StyledLink = styled(NavLink)`
  height: 34px;
  width: 95px;  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border:2px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  color: var(--text-color) ;
  transition:  color 1s ease-in-out;

  font-weight: 600;
  transition: 0.3s ease;



  &.active {
    color: #eee;
    background-color: var(--green);
    box-shadow: var(--shadow-four);
  }
`;

export const MainFooter = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 40px;
  width: 100%;
  padding: 22px 16px;

  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color:  var(--text-color);
  border-top: 1px solid #222;
  background-color: transparent;
  transition: color 1s ease-in-out, fill 1s ease-in-out;

  &> svg {
    /* transition: 0.3s ease; */
    transition: color 1s ease-in-out, fill 1s ease-in-out;
    fill: var(--text-color);
  }
`