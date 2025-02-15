import React from 'react'
import { useContacts } from '../../../hooks/useContacts';
import { ContactContainer, List } from './ContactList.styled';
import { Contact } from '../../../types/contact.model';

interface ContactListProps{
  contacts:Contact[]
}

const ContactList:React.FC<ContactListProps> = ({contacts}) => {
  
 
  return (
    <>
      {/* <Count>{filteredContacts.length}</Count>  */}
      {contacts.length !== 0
      ?(
        <ContactContainer>
          {/* <Count>{contacts.length}</Count> */}
          <List>
            {contacts.map((contact) => {
      
              return (
              <ContactListItem
              key={contact._id}
              contact = {contact}
              ></ContactListItem>
              );
            })}
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