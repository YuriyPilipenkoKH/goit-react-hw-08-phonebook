import styled from 'styled-components';


export const FilterLabel = styled.label`
    transition: color 1s ease-in-out;
    color: var(--text-color);

  & >input{
      


    &:disabled {
      border: none;
      outline: none;
      cursor: none;

 
      background-color: var(--chamomile);
      &::placeholder {
        color: transparent;
      }
    }
  }
`;