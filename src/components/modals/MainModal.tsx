import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useLanguage } from '../../hooks/useLanguage';
import { useAll } from '../../hooks/useAll';
import { createPortal } from 'react-dom';
import { ModalContainer, ModalOverlay, ModalText, ModalTitle } from './MainModal.styled';
import { BtnEdit } from '../phonebook/contactslist/ContactList.styled';
import { toggleModal } from '../../redux/modal/modalSlice';

interface MainModalProps {
  // modalTypes: ModalBaseTypes
  id: string
  name: string
}
const modalRoot = document.getElementById('modal-root');

const MainModal: React.FC<MainModalProps> = () => {
  const dispatch = useAppDispatch();
  const lang = useLanguage()
  const {  modalIsOpen } = useAll()


  if (!modalRoot) return null;
    return createPortal(
      <div className="modal">
        {!modalIsOpen && (
          <BtnEdit type="button" onClick={()=> dispatch(toggleModal())}>
          { lang.edit}
          </BtnEdit>
        )}
        {modalIsOpen && (
        <ModalOverlay>
          <ModalContainer >
            <ModalTitle>{lang.appTitle } </ModalTitle>
            <ModalText>
                {lang.find} 
            </ModalText>
          </ModalContainer>
        </ModalOverlay>
        )}
        
      </div>,
      modalRoot
    )

}

export default MainModal