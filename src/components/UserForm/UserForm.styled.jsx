import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const FormContainer = styled.div`
    position: relative;
    width: 280px;
    height: 517px;
    padding: 20px 16px;
    display: grid;
    grid-template-rows: 224px auto 31px;
    gap: 20px;
    background-color: #fff;
    border-radius: 20px;
    outline: 2px solid #777;
    
`
export const ImgWrap = styled.div`
    display: grid;
    gap: 16px;
    justify-content: center;

    &>img {
        width: 180px;
        height: 180px;
        border-radius: 20px;
        background-color: #888;
    }
    &>button{
        width: 80px;
        justify-self: center;
        border-radius:8px;
    }

`
export const FormStyled = styled.form`
    display: grid;
    gap: 16px;
`
export const FormLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
`

export const FormInput = styled.input`
    width: 180px;
    height: 24px;
    outline: 2px solid #29f;
    border-radius: 8px;
`

export const BtnWrap = styled.div`
    display: flex;
    width: 100%;


    &>button.saveBtn {
        width: 248px;
        height: 31px;
        border-radius:16px;
        cursor: pointer;
        padding: 4px 32px;
        
    }
`
export const FormEditor = styled(NavLink)`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    transition: all 1s ease-in-out;
    @media screen and (min-width: 768px) {
        top: 20px;
        right: 20px;
    }

    & > svg {
        fill: blue;
    }
    & > svg.iconCross {
        transition: all 1s ease-in-out;
        stroke: #333;
    }
`;