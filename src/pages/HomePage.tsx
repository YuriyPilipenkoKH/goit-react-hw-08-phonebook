import React from 'react'
import animationData  from '../assets/Animation - 1739632523847.json'
import Lottie from 'lottie-react'
import { HomeTitle, HomeWrapper } from './Pages.styled'
import { useLanguage } from '../hooks/useLanguage'

const HomePage = () => {
  const lang = useLanguage()
  return (
    <HomeWrapper  >
    <HomeTitle  >
     {lang.appTitle}  
    </HomeTitle>
    <span>
    {lang.appUnderTitle}
      </span>
      {/* <Lottie animationData={animationData} className="football-player" /> */}

  </HomeWrapper>
  )
}

export default HomePage