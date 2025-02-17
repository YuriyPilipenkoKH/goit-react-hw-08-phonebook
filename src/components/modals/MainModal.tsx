import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useLanguage } from '../../hooks/useLanguage';
import { useAll } from '../../hooks/useAll';
import { createPortal } from 'react-dom';
import { ModalContainer, ModalOverlay, ModalText, ModalTitle } from './MainModal.styled';
import { BtnEdit } from '../phonebook/contactslist/ContactList.styled';
import { toggleModal } from '../../redux/modal/modalSlice';

interface MainModalProps {
  // modalTypes: ModalBaseTypes

}
const modalRoot = document.getElementById('modal-root');

const MainModal: React.FC<MainModalProps> = () => {
  const dispatch = useAppDispatch();
  const lang = useLanguage()
  const {  modalIsOpen } = useAll()
  

  useEffect(() => {
    const handleBackdropClick =( e:MouseEvent ) => {
      if ((e.target as HTMLElement).classList.contains("modal-backdrop")) {
        dispatch(toggleModal());
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(toggleModal());
        }
    };

    const body = document.body;
    body.style.overflow = 'hidden';
    document.addEventListener('click', handleBackdropClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
        body.style.overflow = 'unset';
        document.removeEventListener('click', handleBackdropClick);
        document.removeEventListener('keydown', handleKeyDown);
    };
}, [dispatch]);

const shut = () => {
    dispatch(toggleModal())
};


  if (!modalRoot) return null;
    return createPortal(
      <div className="modal">
       
        <ModalOverlay 
          className={`modal ${
          modalIsOpen
            ? ['active', 'modal-backdrop'].join(' ')
            : 'modal-backdrop'
            }`}>
          <ModalContainer >
            <ModalTitle>{lang.appTitle } </ModalTitle>
            <ModalText>
                {lang.find} 
            </ModalText>
            
          </ModalContainer>
        </ModalOverlay>

      </div>,
      modalRoot
    )

}

export default MainModal