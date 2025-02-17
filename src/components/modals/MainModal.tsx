import React from 'react'

interface MainModalProps {
  modalTypes: ModalBaseTypes
  id: string
  name: string
}

const MainModal: React.FC<MainModalProps> = () => {
  return (
    <div>MainModal</div>
  )
}

export default MainModal