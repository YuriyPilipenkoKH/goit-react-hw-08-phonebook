import React from 'react'
import { MainSection, MainTitle } from './Section.styled'

interface SectionProps{
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}

const Section:React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <MainSection>
      <MainTitle>{title}{icon} </MainTitle>
      {children}  
     </MainSection>)
 }
 
  

export default Section