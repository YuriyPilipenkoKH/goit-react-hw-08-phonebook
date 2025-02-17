import React from 'react'

interface MainModalProps {
  // modalTypes: ModalBaseTypes
  id: string
  name: string
}
const modalRoot = document.querySelector('#modal-root');

const MainModal: React.FC<MainModalProps> = () => {
  return (
    <div>MainModal</div>
  )
}

export default MainModal