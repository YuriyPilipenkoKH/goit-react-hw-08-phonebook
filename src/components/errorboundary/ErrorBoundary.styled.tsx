
import styled from '@emotion/styled';

export const BoundaryWrapper= styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 60px;

  &>h2 {
    font-size: 64px;
    font-weight: 800;
  }
  &>p {
    font-size: 32px;
    font-weight: 600;
  }
  &>button {
    font-size: 32px;
    font-weight: 600;
    padding: 20px 100px ;
    border-radius: 20px;
    background-color: var(--yellow);
    cursor: pointer;

    &:hover {
      color: #777;
    }
  }
`