import React from 'react'

const ContactList = () => {
  const contacts = useSelector(getContactsList)
  const filterValue = useSelector(getContactsFilter)
  const {activeIndex, id,  name, number}  = useSelector(getSorted)
  const arrayOfBools = [id,  name, number]
  const sortedContacts = arrayOfMethods[activeIndex]
  const filteredContacts = [...sortedContacts(contacts, arrayOfBools[activeIndex])
    .filter((contact )=>
     contact.name.toLowerCase().includes(filterValue.filter) 
     || contact.number.includes(filterValue.filter) )]


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