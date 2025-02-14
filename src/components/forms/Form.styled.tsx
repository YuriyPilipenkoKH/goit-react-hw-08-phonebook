import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { buttonStyles } from "../button/Button.styled";


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