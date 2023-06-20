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
  color: ${props => props.theme === 'light' ? '#555' : '#eee'};

  &+span {
    font-weight: 600;
   color:${props => props.theme === 'light' ? '#555' : '#999'};
    font-size: 24px;
    text-align: center;
    display: block;

  }
`