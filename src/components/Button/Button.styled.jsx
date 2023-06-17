import styled from 'styled-components';

export const StyledButton = styled.button`
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--green);
  color: #eee;
  border: none;
  border-radius: 4px;
  padding: 8px 24px ;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  box-shadow: var(--shadow-four);
  transition: all 0.4s ease;

  &:hover  {
    color: #888;
    background-color: var(--bright-green);
    box-shadow: var(--shadow-two);
   
    & >svg {
    fill: #888;
    }
  }

  &:active {
    transform: scale(0.98);
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #5b24ff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.4s, opacity 1s;
  }

  &:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
`;