import styled from "styled-components";


export const UserName = styled.p`
    
font-weight: 600;

`
export const MainMenu = styled.div`
    position: relative;
`


export const UserWrapp = styled.div`

    display: flex;
    align-items: center;
    gap: 18px;
    padding: 6px 22px;
    border: 3px solid #777;
    border-radius: 6px;

`
export const MenuBtn = styled.button`
    
    background-color: transparent;
    border: none;
    padding: 0 4px;
    margin: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const SliderBtn = styled.button`

    position: absolute;
    top: 35px;
    right: 20%;
  
    
    background-color: transparent;
    border: none;
    padding: 0 4px;
    margin: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
`


export const DropdownMenu = styled.div`
    
    position: absolute;
    top: 60px;
    right: 6px;
    /* left: 20px; */
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    padding: 14px 22px;
    border: 3px solid #777;
    border-radius: 6px;
    background-color: var(--body-color);
    box-shadow: var(--shadow-four);
`
export const MenuItem  = styled.button `
    padding: 6px 32px;
    width: 150px;
    background-color: var(--body-color);
    color: #555;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    border: 3px solid var(--green);
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover, 
    &:focus {
        color: #eee;
        background-color: var(--green);
    }

`