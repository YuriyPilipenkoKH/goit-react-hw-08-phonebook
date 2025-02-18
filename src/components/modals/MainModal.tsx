import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useLanguage } from '../../hooks/useLanguage';
import { useAll } from '../../hooks/useAll';
import { createPortal } from 'react-dom';
import { ModalContainer, ModalOverlay, ModalText, ModalTitle } from './MainModal.styled';
import { toggleModal } from '../../redux/modal/modalSlice';
import EditContactForm from '../forms/EditContactForm';
import { Contact } from '../../types/contact.model';
import { BtnEdit } from '../phonebook/contactslist/ContactList.styled';

interface MainModalProps {
  // modalTypes: ModalBaseTypes
  contact?: Contact
  onClose: () => void;
}
const modalRoot = document.getElementById('modal-root');

const MainModal: React.FC<MainModalProps> = ({contact,onClose}) => {
  const dispatch = useAppDispatch();
  const lang = useLanguage()
  const {  modalIsOpen } = useAll()
  const [open, setOpen] = useState(false);
  
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
      setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const shut = () => {
    dispatch(toggleModal())
};

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


  const fakeContact ={
    _id : '',
    name: '',
    number: '',
    userId: ''
  }

  if (!modalRoot) return null;
    return createPortal(
           <>

         <ModalOverlay 
          className={`modal ${
          open
            ? ['active', 'modal-backdrop'].join(' ')
            : 'modal-backdrop'
            }`}>
          <ModalContainer >
            <ModalTitle>{lang.appTitle } </ModalTitle>
            <ModalText>
                {/* {lang.find}  */}{contact?._id}
            </ModalText>
            <EditContactForm 
              contact={ contact || fakeContact}
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