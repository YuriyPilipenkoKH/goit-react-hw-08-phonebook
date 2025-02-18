import React, { useState } from 'react'
import { BtnDelete, BtnEdit, BtnWrapper, EditWrapper, ItemCard, ListItem } from '../contactslist/ContactList.styled';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useLanguage } from '../../../hooks/useLanguage';
import { confirmDelete,  } from '../../../utils/notifier';
import { deleteContact } from '../../../redux/contacts/operations';
import { Contact } from '../../../types/contact.model';

import { useAll } from '../../../hooks/useAll';
import { onModalOpen } from '../../../redux/modal/modalSlice';
import { useContacts } from '../../../hooks/useContacts';

interface ContactListItemProps{
contact: Contact
}

const ContactListItem:React.FC<ContactListItemProps> = ({contact}) => {
  const dispatch = useAppDispatch();
const {contacts} = useContacts()
  const { _id, name, number} = contact;
  const [deleted, setDeleted] = useState<boolean>(false)
  const lang = useLanguage()
  const {  modalIsOpen,  } = useAll()


  const handleDelete = () => {

    confirmDelete(`Are you sure you want to delete ${name}?`, name)
  .then(() => {
    dispatch(deleteContact(_id))
    .then((data) => {
      console.log(data.payload);
    })
    setDeleted(true)
    setTimeout(() => setDeleted(false), 2000);
  })
  .catch(() => {
    // Handle cancellation or rejection
  });
  }

  const handleEdit = () => {
    dispatch(onModalOpen(contact))
  }




  return (
    <>
      <ListItem  >
          <ItemCard className="cardSpan">
            {contact.name}: {contact.number}
          </ItemCard>
        <BtnWrapper className="button-wrapper">
          <BtnEdit type="button" onClick={() => handleEdit()}>
            {lang.edit}
          </BtnEdit>

          <BtnDelete
          type="button" onClick={handleDelete}>
            {lang.delete}
          </BtnDelete>
        </BtnWrapper>
      </ListItem>
        
    </>
  );
}
export default ContactListItem


// {deleted && <Lottie animationData={animationDel} className='deleted'/>}
//  {isEdit && <Lottie animationData={animationEdit} className='edited'/>} 