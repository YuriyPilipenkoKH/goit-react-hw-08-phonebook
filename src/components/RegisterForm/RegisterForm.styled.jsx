import styled from "styled-components";
import { Link } from "react-router-dom";
import { buttonStyles } from "components/Button/Button.styled";

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