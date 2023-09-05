import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as CheckIcon } from '../../img/check.svg';
import { ReactComponent as CrossIcon } from '../../img/cross-small.svg';


export const FormContainer = styled.div`
    position: relative;
    width: 280px;
    height: 517px;
    padding: 20px 16px;
    display: grid;
    grid-template-rows: 224px auto 31px;
    grid-template-areas: 
    "c1"
    "c2"
    "c3";

    gap: 20px;
    background-color: #fff;
    border-radius: 20px;
    outline: 2px solid #777;
    
    @media screen and (min-width: 768px) {
        width: 704px;
        height: 268px;
        grid-template-rows: auto;
        grid-template-columns: 360px auto ;
        grid-template-areas: 
        "c2 c1"
        "c3 c1" ;
    }
    
    @media screen and (min-width: 1280px) {
        width: 380px;
        height: 520px;
        grid-template-rows: 224px auto 31px;
        grid-template-columns: auto;
        grid-template-areas: 
        "c1"
        "c2"
        "c3";
    }

    transition: all 0.4s ease-in-out, left 0.4s ease-in-out;
`
export const ImgWrap = styled.div`
    grid-area: c1;
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
    grid-area: c2;
    display: grid;
    gap: 16px;
`
export const FormLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    @media screen and (min-width: 768px) {
     font-size: 18px;
        }
`

export const FormInput = styled.input`
    width: 180px;
    height: 24px;
    outline: 2px solid #29f;
    border-radius: 8px;
`

export const BtnWrap = styled.div`
    grid-area: c3;
    display: flex;
    width: 100%;
    @media screen and (min-width: 768px) {
        justify-content: flex-end;
    }

    &>button.saveBtn {
        font-family: inherit;
        width: 248px;
        height: 31px;
        border-radius:16px;
        cursor: pointer;
        padding: 4px 32px;

        @media screen and (min-width: 768px) {
            width: 180px;
        }
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

export const Avatar = styled.img`
    width: 182px;
    height: 182px;
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 40px;
`;

export const ImageControls = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }
    @media screen and (min-width: 1280px) {
        margin-bottom: 24px;
    }
`;

export const ConfirmButtonWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const EditButton = styled.button`
    display: flex;
    align-items: center;
    /* margin-top: 14px; */
    border: none;
    padding-top: 0;
    padding-right: 5px;
    padding-bottom: 0;
    padding-right: 5px;
    border-radius: 20px;
    background: transparent;

    font-weight: 400;
    font-size: 12px;
    line-height: 1.83;
    letter-spacing: 0.04em;
    box-shadow: none;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--text-color);
    transition: all 1s ease-in-out;
    cursor: pointer;

    &:hover,
    &:focus {
        box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    }
`;

export const Cross = styled(CrossIcon)`
    stroke: #F43F5E;
    margin-right: 8px;
`;

export const Check = styled(CheckIcon)`
    color: #00c3ad;
    margin-right: 8px;
`;