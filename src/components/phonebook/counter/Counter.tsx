import React from 'react'
import { useContacts } from '../../../hooks/useContacts'

const Counter = () => {
  const {counter} = useContacts()
  return (
    <div>Counter</div>
  )
}

export default Counter