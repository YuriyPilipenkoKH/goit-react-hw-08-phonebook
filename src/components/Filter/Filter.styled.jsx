import styled from 'styled-components';


export const FilterLabel = styled.label`
 color:  ${props => props.theme === 'light' ? '#444' : '#eee'};

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