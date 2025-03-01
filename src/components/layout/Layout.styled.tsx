import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const MainHeader= styled.header`
width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 24px 8px 12px;
  background-color: transparent;
  border-bottom: 1px solid #222;

  >.logo{
    width: 100px;
    height: 32px;

    color:var(--teal);
    transition: 0.5s ease-in-out;

  &:hover {
    color: var(--react-color);
  }
  }

  >.KH-icon {
    width: 100px;
    height: 32px;
    color: #222;
    transition: 0.5s ease-in-out;

    &:hover {
        color: var(--teal);
    }
  }
  @media screen and (min-width: 768px) {
    padding: 32px 20px 16px;
    }
  @media screen and (min-width: 1280px) {
    padding: 32px 40px 16px;
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
  transition:  color 0.5s ease-in-out;

  font-weight: 600;
  transition: 0.5s ease-in-out;



  &.active {
    color: #eee;
    background-color: var(--green);
    box-shadow: var(--shadow-four);
  }
`;

export const MainFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 22px 16px;

  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color:  var(--text-color);
  border-top: 1px solid #222;
  background-color: transparent;
  transition: color 0.5s ease-in-out, fill 0.5s ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 600;
    align-items: baseline;
    }

  &> svg {
    display: none;
    transition: color 0.5s ease-in-out, fill 0.5s ease-in-out;
    fill: var(--text-color);
    @media screen and (min-width: 768px) {
    display: flex;
    }
  }
  &>button.quit{
    background: transparent;
    margin: 0;
    padding: 0;
    border: none;
    outline: none ;
    color: var(--text-color);
  }
`