import styled from 'styled-components';


export const FilterLabel = styled.label`


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