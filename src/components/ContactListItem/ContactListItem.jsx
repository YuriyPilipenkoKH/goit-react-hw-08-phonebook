import React from 'react';
import { useDispatch } from 'react-redux';
import { BtnDelete, BtnEdit, BtnWrapper, EditWrapper, ItemCard, ListItem } from 'components/ContactList/ContactList.styled';
import { useState } from 'react';
import { confirmDelete, confirmUpdate } from 'utils/notifier';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { deleteContact } from 'redux/operations';
import { getContactsList } from 'redux/selectors';
import { editContact } from 'redux/operations';
// import { IDspan } from './ContactListItem.styled';


export default function ContactListItem({ contact }) {
  const dispatch = useDispatch();
  const contactsList  = useSelector(getContactsList )
  const { id, name, number} = contact;

  const [isEdit, setIsEdit] = useState(false)
  const [nick, setNick] = useState(name)
  const [phone, setPhone] = useState(number)


  const handleEdit = () => {
    setIsEdit(prev => !prev )
 
    if (isEdit) {
      const updatedContact = {
        id,
        name: nick,
        number: phone,
      };
 

console.log('updatedContact' , updatedContact );
const contactToUpdate  = contactsList.find(contact => contact.id === updatedContact.id)
console.log('contactToUpdate',contactToUpdate)

const allExeptUpdated = contactsList.filter(contact => contact.id !== contactToUpdate.id)
// console.log('allExeptUpdated',allExeptUpdated)

const returnDefault =() =>{
  setNick(contactToUpdate.name)
  setPhone(contactToUpdate.number)
}  

if(updatedContact.name === '' || updatedContact.number === ''){
  Notiflix.Notify.failure('No Empty Strings, dude!');
  returnDefault()
  return;
}

if (allExeptUpdated.find((contact) => contact.name.toLowerCase() === updatedContact.name.toLowerCase())){
  Notiflix.Notify.failure(`${updatedContact.name} is already in contacts.`);
  returnDefault()
  return ;
}

else if (allExeptUpdated.find((contact) => contact.number === updatedContact.number)) {
  Notiflix.Notify.failure(`${updatedContact.number} is already in contacts.`);
  returnDefault() 
  return ;
}


confirmUpdate(`Are you sure you want to update ${name}?`, name)
  .then(() => {
    dispatch(editContact(updatedContact));
  })
  .catch(() => {
    // Handle cancellation or rejection
  });

    }
  };

  const handleDelete = () => {

    confirmDelete(`Are you sure you want to delete ${name}?`, name)
  .then(() => {
    dispatch(deleteContact(id))
  })
  .catch(() => {
    // Handle cancellation or rejection
  });

  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   dispatch(updateValue({ field: name, value }));
  // };

  const handleChange =(e) =>{

    const{name, value} =e.currentTarget
    switch (name) {
        case 'nick':
            setNick(value)
            break;
        case 'phone':
            setPhone(value)
            break;
    
        default:
            break;
    }
}


  return (
    <ListItem totalItems={4}>
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
        {isEdit  ? 'Save' : 'Edit'}
        </BtnEdit>

        <BtnDelete type="button" onClick={handleDelete}>
          Delete
        </BtnDelete>
      </BtnWrapper>
    </ListItem>
  );
}