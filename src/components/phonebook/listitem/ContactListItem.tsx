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
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const lang = useLanguage()
  const {  modalIsOpen } = useAll()
console.log('open',open);

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

  const handleEdit = (id: string) => {
    // console.log(e.currentTarget.id);
    // setSelectedContactId(id); // Store only the clicked contact's ID
    setOpen((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the specific project
    }));
    dispatch(toggleModal());
  };
  const selectedContact = contacts.find((c) => c._id === selectedContactId);

  const handleEdit2 = (id: string) => {
    const foundContact = contacts.find((c) => c._id === id);
    if (foundContact) {
      // setSelectedContact(foundContact); // Now we pass the correct contact
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
         <BtnEdit 
         type="button"
         id ={contact._id}
         onClick={(e)=>handleEdit(_id)}
         >
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

