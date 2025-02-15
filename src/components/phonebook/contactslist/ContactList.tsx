import React from 'react'
import { useContacts } from '../../../hooks/useContacts';

const ContactList = () => {
  
  const {ContactsList, isLoading} = useContacts()
  
  return (
    <>
      {/* <Count>{filteredContacts.length}</Count>  */}
      {filteredContacts.length !== 0
      ?(
        <ContactContainer>
          {/* <Count>{contacts.length}</Count> */}
          <List>
            {filteredContacts.map((contact) => {
      
              return (
              <ContactListItem
              key={contact.id}
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