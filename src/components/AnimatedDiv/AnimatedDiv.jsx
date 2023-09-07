import Button from "components/Button/Button"
import { AnimatedContainer, AnimatedTitle, AnimatedWrap } from "./AnimatedDiv.styled"
import { useState } from "react";



export  const AnimatedDiv = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleButtonClick = () => {
      setIsAnimating(!isAnimating);
    };
  return (
    <AnimatedContainer >
        <Button  onClick={handleButtonClick}>ANIMATION</Button>
        <AnimatedWrap>
            <AnimatedTitle  isAnimating={isAnimating}> 1 </AnimatedTitle>
        </AnimatedWrap>
    </AnimatedContainer>
  )
}

