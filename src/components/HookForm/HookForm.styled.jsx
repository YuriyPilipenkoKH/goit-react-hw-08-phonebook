import isPropValid from "@emotion/is-prop-valid"
import styled from "styled-components"

export const HookedForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 26px;
    width: 320px;
    height: 500px;
    padding: 18px;

    &>button.sub{
        width: 140px;
        height: 40px;
        margin-top: auto;
        &:disabled{
            background-color: #777;
        }
    }
    &>button.set{
        width: 140px;
        &:disabled{
            background-color: #777;
        }
    }
`
export const HookedLabel = styled.label`
    position: relative;
    display: grid;
    gap: 8px;
    &>button.showBtn{
        position: absolute;
        top: 38px;
        right: 16px;
    }
`
export const HookedInput = styled.input.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) 
        && prop !== 'errors'
        && prop !== 'isValid',
  })`
    height: 40px;
    background-color: #f5f5f5;
    border: 2px solid #777;
    border-color: ${({ errors, isValid }) => 
    (errors ? "crimson" : isValid ? "#080" : "#777")};

    border-radius: 8px;
    padding: 4px 12px;
    outline : none;
`

export const ErrorWrap = styled.div`
 
    color: crimson;
    position: absolute;
    bottom: -18px;
    font-size: 12px;
    font-weight: 500;
    z-index: 4;
`