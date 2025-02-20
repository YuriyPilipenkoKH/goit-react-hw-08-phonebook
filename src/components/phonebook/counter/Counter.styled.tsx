import styled from "@emotion/styled";

export const CounterWrap = styled.div`
  position: absolute;
  right: 0;
  top: 62px;
  height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:10px;

  border-radius: 8px;
  background-color: var(--orange);
  color: var(--secondary-text-color);
  font-weight: 600;
  z-index: 3;

  @media screen and (min-width: 768px) {
    top: 0;
  }
`