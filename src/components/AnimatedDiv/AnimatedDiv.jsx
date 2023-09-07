import Button from "components/Button/Button"
import { AnimatedContainer, AnimatedTitle, AnimatedWrap } from "./AnimatedDiv.styled"
import { useState } from "react";
import { useEffect } from "react";



export  const AnimatedDiv = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const TIME = 5
    const [timer, setTimer] = useState(null);
    const [remained, setRemained] = useState(TIME);

    useEffect(() => {
        if((remained > 0) && timer){
          setTimeout(() => {
          setIsAnimating(true);
          setRemained(prev => prev - 1)
          // console.log(`${remained} seconds`);
            }, 1000);
               }
        else if(remained === 0) {
          setTimer(null)
          setTimeout(() => {
          setRemained(TIME)
          setIsAnimating(false);
           }, 4000);
        }
    }, [timer,remained])

    // useEffect(() => {
    //     setIsAnimating(false);
    //   }, [remained]);    
      
      
    const handleButtonClick = () => {
        setTimer(true)
      setIsAnimating(true);
    };
  return (
    <AnimatedContainer >
        <Button  onClick={handleButtonClick}>ANIMATION</Button>
        <AnimatedWrap>
            <AnimatedTitle  isAnimating={isAnimating}> {remained} </AnimatedTitle>
        </AnimatedWrap>
    </AnimatedContainer>
  )
}

