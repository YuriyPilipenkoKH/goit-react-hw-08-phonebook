import React from 'react'
import { Wrapper } from './Message.styled'
import { useLanguage } from '../../../hooks/useLanguage'

interface MessageProps{
  text: string
}

const Message: React.FC<MessageProps> = ({text}) => {
    const lang = useLanguage()
  return (
    <div style={{width: '100%'}}>
      <Wrapper>{lang[text]}</Wrapper>
    </div>
  )
}

export default Message