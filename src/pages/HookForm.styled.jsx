import styled from "styled-components"

export const HookedForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 320px;
    height: 400px;
    padding: 22px;

    &>button.sub{
        width: 140px;
        height: 40px;
        margin-top: auto;
        &:disabled{
            background-color: #777;
        }
    }
`
export const HookedLabel = styled.label`
    display: grid;
    gap: 8px;

`
export const HookedInput = styled.input`
    height: 40px;
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 4px 12px;
    outline : none;
`

export const ErrorWrap = styled.div`
 
    color: crimson;
    position: absolute;
    bottom: -16px;
    font-size: 11px;
    font-weight: 500;
`