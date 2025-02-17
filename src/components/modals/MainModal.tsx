import React from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useLanguage } from '../../hooks/useLanguage';

interface MainModalProps {
  // modalTypes: ModalBaseTypes
  id: string
  name: string
}
const modalRoot = document.querySelector('#modal-root');

const MainModal: React.FC<MainModalProps> = () => {
  const dispatch = useAppDispatch();
  const lang = useLanguage()

  
  return (
    <div>MainModal</div>
  )
}

export default MainModal