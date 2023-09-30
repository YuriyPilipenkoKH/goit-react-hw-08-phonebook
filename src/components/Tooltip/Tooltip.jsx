import { StyledTooltip, TooltipText } from "./Tooltip.styled"


const Tooltip = ({ text, children }) => {
  return (
    <StyledTooltip className="custom-tooltip">
    {children}
    <TooltipText className="tooltip-text">{text}</TooltipText>
  </StyledTooltip>
  )
}

export default Tooltip