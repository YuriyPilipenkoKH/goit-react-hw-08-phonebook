import styled from "styled-components";

export const HomeWrapper= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const HomeTitle = styled.h1`

  text-align: center;

  font-size: 32px;
  font-weight: 700;
  color: #555;
  /* background-color: #cad9d9bb;
  border: 4px solid #7775;
  border-radius: 16px; */

  &+span {
    font-weight: 600;
   color: #555;
    font-size: 24px;
    text-align: center;
    /* background-color: #cad9d955; */
    display: block;

  }
`