import React from 'react'
import { Wrapper } from './Message.styled'

interface MessageProps{
  text: string
}

const Message: React.FC<MessageProps> = ({text}) => {
  return (
    <div>
      <Wrapper>{text}</Wrapper>
    </div>
  )
}

export default Message