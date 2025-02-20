import React from 'react'
import { useContacts } from '../../../hooks/useContacts'
import { CounterWrap } from './Counter.styled'

const Counter = () => {
  const {counter} = useContacts()
  return (
    <CounterWrap>{counter}</CounterWrap>
  )
}

export default Counter