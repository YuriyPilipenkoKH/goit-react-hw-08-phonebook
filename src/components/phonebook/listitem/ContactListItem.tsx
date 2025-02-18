import React, { useState } from 'react'
import { BtnDelete, BtnEdit, BtnWrapper, EditWrapper, ItemCard, ListItem } from '../contactslist/ContactList.styled';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useLanguage } from '../../../hooks/useLanguage';
import { confirmDelete, confirmUpdate } from '../../../utils/notifier';
import { deleteContact } from '../../../redux/contacts/operations';
import { Contact } from '../../../types/contact.model';
import MainModal from '../../modals/MainModal';
import { useAll } from '../../../hooks/useAll';
import { toggleModal } from '../../../redux/modal/modalSlice';
import { useContacts } from '../../../hooks/useContacts';


interface ContactListItemProps{
contact: Contact
}

const ContactListItem:React.FC<ContactListItemProps> = ({contact}) => {
  const dispatch = useAppDispatch();
const {contacts} = useContacts()
  const { _id, name, number} = contact;
  const [deleted, setDeleted] = useState<boolean>(false)
  const [selectedContact, setSelectedContact] = useState<Contact >(contact);
  const lang = useLanguage()
  const {  modalIsOpen } = useAll()


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
  };

  const handleEdit = () => {
    setSelectedContact(contact); // Set clicked contact
    dispatch(toggleModal());
  };

  const handleEdit2 = (id: string) => {
    const foundContact = contacts.find((c) => c._id === id);
    if (foundContact) {
      setSelectedContact(foundContact); // Now we pass the correct contact
      dispatch(toggleModal());
    }
  };


  return (
    <>
      <ListItem  >
          <ItemCard className="cardSpan">
            {contact.name}: {contact.number}
          </ItemCard>
        <BtnWrapper className="button-wrapper">
         <BtnEdit type="button" onClick={handleEdit}>
          { lang.edit}
          </BtnEdit>

          <BtnDelete
          type="button" onClick={handleDelete}>
            {lang.delete}
          </BtnDelete>
        </BtnWrapper>
      </ListItem>
     {/* {deleted && <Lottie animationData={animationDel} className='deleted'/>}
     {isEdit && <Lottie animationData={animationEdit} className='edited'/>} */}
     {modalIsOpen && (
     <MainModal contact={selectedContact}/>
    )}
        
    </>
  );
}
export default ContactListItem

// const contactToUpdate  = contactsList.find(contact => contact.id === updatedContact.id)
// const allExeptUpdated = contactsList.filter(contact => contact.id !== contactToUpdate.id)

// const returnDefault =() =>{
//   setNick(contactToUpdate.name)
//   setPhone(contactToUpdate.number)
// }  

// if(updatedContact.name === '' || updatedContact.number === ''){
//   Notiflix.Notify.failure('No Empty Strings, dude!');
//   returnDefault()
//   return;


// if (allExeptUpdated.find((contact) => contact.name.toLowerCase() === updatedContact.name.toLowerCase())){
//   Notiflix.Notify.failure(`${updatedContact.name} is already in contacts.`);
//   returnDefault()
//   return ;
// }

// else if (allExeptUpdated.find((contact) => contact.number === updatedContact.number)) {
//   Notiflix.Notify.failure(`${updatedContact.number} is already in contacts.`);
//   returnDefault() 
//   return ;
// }


// confirmUpdate(`Are you sure you want to update ${name}?`, name)
//   .then(() => {
//     dispatch(editContact(updatedContact));
//   })
//   .catch(() => {
//     // Handle cancellation or rejection
//   });

//     }
//   };
