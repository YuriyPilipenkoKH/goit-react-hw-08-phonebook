import React from 'react'
import { Div, Wrapper } from './Message.styled'
import { useLanguage } from '../../../hooks/useLanguage'

interface MessageProps{
  text: string
}

const Message: React.FC<MessageProps> = ({text}) => {
    const lang = useLanguage()
  return (
    <Div >
      <Wrapper>{lang[text]}</Wrapper>
    </Div>
  )
}

export default Message