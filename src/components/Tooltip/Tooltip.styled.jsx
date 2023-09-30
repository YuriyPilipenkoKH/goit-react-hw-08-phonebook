import styled from "styled-components";

export const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;

  &:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
}

`;

export const TooltipText = styled.span`
  visibility: hidden;
  width: 150px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 8px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position above the element */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.5s ease;
`;