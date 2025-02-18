import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useLanguage } from '../../hooks/useLanguage';
import { useAll } from '../../hooks/useAll';
import { createPortal } from 'react-dom';
import { ModalContainer, ModalOverlay, ModalText, ModalTitle } from './MainModal.styled';
import { onModalClose } from '../../redux/modal/modalSlice';
import EditContactForm from '../forms/EditContactForm';
import { Contact } from '../../types/contact.model';
import { fakeContact } from '../../data/contact';

interface MainModalProps {
  contact?: Contact
}
const modalRoot = document.getElementById('modal-root');

const MainModal: React.FC<MainModalProps> = ({contact}) => {
  const dispatch = useAppDispatch();
  const lang = useLanguage()
  const {  modalIsOpen } = useAll()

  useEffect(() => {
    const handleBackdropClick =( e:MouseEvent ) => {
      if ((e.target as HTMLElement).classList.contains("modal-backdrop")) {
        dispatch(onModalClose())
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(onModalClose())
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

    if (!modalRoot) return null;
    return createPortal(
           <>

         <ModalOverlay 
          className={`modal ${
          modalIsOpen
            ? ['active', 'modal-backdrop'].join(' ')
            : 'modal-backdrop'
            }`}>
          <ModalContainer >
            <ModalTitle>{lang.appTitle } </ModalTitle>
            <ModalText>
                {/* {lang.find}  */}{contact?._id}
            </ModalText>

        <EditContactForm 
                    contact={ contact || fakeContact }
            />
          </ModalContainer>
        </ModalOverlay>

            {/* {!open && (
              <BtnEdit 
              type="button"
              //  id ={contact._id}
              onClick={showModal}
              >
                { lang.edit}
                </BtnEdit>
            )} */}

           </>
     ,
      modalRoot
    )

}

export default MainModal