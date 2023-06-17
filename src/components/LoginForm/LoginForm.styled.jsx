import styled from "styled-components";

export const FormWrapper = styled.div`
    
display: flex;
flex-direction: column;
gap: 18px;
padding:  32px 16px;
border: 4px solid #777;
border-radius: 12px;
box-shadow: var(--shadow-four);
background-color: var(--body-color);
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
width: 50px;
border-radius: 4px;
border: transparent;
background-color: #777;
color: #eee;
`