import React from 'react'
import { useContacts } from '../../../hooks/useContacts';
import { ContactContainer, EmptySpan, List } from './ContactList.styled';
import { Contact } from '../../../types/contact.model';
import ContactListItem from '../listitem/ContactListItem';
import { useAll } from '../../../hooks/useAll';

interface ContactListProps{
  contacts:Contact[]
}

const ContactList:React.FC<ContactListProps> = () => {
  const {contacts} = useContacts()
    const {  modalIsOpen } = useAll()
 
  return (
    <>
      {/* <Count>{filteredContacts.length}</Count>  */}
      {contacts.length !== 0
      ?(
        <ContactContainer>
          {/* <Count>{contacts.length}</Count> */}
          <List>
            {contacts.map((contact,idx) =>(
              <ContactListItem
              key={idx}
              contact = {contact}
              ></ContactListItem>
              ))
            }
          </List>
        </ContactContainer>
      )
      :<ContactContainer>
        <EmptySpan>No match to this query
          </EmptySpan>
      </ContactContainer>}
    </>
  );
};
export default ContactList