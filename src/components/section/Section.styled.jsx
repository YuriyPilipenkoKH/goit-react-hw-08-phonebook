import styled from 'styled-components';

export const MainSection = styled.section`
    width: 280px;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0;
`


export const MainTitle = styled.h2`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 22px;
  text-align: center;
  color: #eee;
  margin: 0;
  padding: 8px 30px;
  border-radius: 10px;
  background-color: #777;
  border: 4px solid #777;
  box-shadow: var(--shadow-four);
  transition: opacity 1s ease-in-out;

  &>svg {
    fill: #eee;
    transition: opacity 1s ease-in-out;
  }
`