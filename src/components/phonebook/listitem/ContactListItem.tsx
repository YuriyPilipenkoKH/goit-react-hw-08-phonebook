import React, { useState } from 'react'
import { BtnDelete, BtnEdit, BtnWrapper, EditWrapper, ItemCard, ListItem } from '../contactslist/ContactList.styled';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getContactsList } from '../../../redux/contacts/selectors';
import { useLanguage } from '../../../hooks/useLanguage';
import { confirmDelete } from '../../../utils/notifier';
import { deleteContact } from '../../../redux/contacts/operations';
import { updateValue } from '../../../redux/editSlice';
import { Contact } from '../../../types/contact.model';

interface ContactListItemProps{
contact: Contact
}

const ContactListItem:React.FC<ContactListItemProps> = ({contact}) => {
  const dispatch = useAppDispatch();

  const { _id, name, number} = contact;
  const [deleted, setDeleted] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [nick, setNick] = useState(name)
  const [phone, setPhone] = useState(number)
  const lang = useLanguage()

  const handleEdit = () => {
    setIsEdit(prev => !prev )
 
    if (isEdit) {
      const updatedContact = {
        _id,
        name: nick,
        number: phone,
      };
    }
  }


  const handleDelete = () => {

    confirmDelete(`Are you sure you want to delete ${name}?`, name)
  .then(() => {
    // dispatch(deleteContact(id))
    setDeleted(true)
    setTimeout(() => {
      setDeleted(false)
    }, 5000);
  })
  .catch(() => {
    // Handle cancellation or rejection
  });

  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateValue({ field: name, value }));
  };

  

  return (
    <>
      <ListItem 
      // totalItems={4}
      >
        {/* <IDspan>{id}</IDspan> */}
        {isEdit ? (
          <EditWrapper className="edit-wrapper">
            <input type="text" name="nick" value={nick} onChange={handleChange} />
            <input type="text" name="phone" value={phone} onChange={handleChange} />
          </EditWrapper>
        ) : (
      
          <ItemCard className="cardSpan">
            {contact.name}: {contact.number}
          </ItemCard>
        )}
        <BtnWrapper className="button-wrapper">
          <BtnEdit type="button" onClick={handleEdit}>
          {isEdit  ? 'Save' : lang.edit}
          </BtnEdit>
          <BtnDelete
      
          type="button" onClick={handleDelete}>
            {lang.delete}
          </BtnDelete>
        </BtnWrapper>
      </ListItem>
     {/* {deleted && <Lottie animationData={animationDel} className='deleted'/>}
     {isEdit && <Lottie animationData={animationEdit} className='edited'/>} */}
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
