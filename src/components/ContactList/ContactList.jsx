import { List,  ContactContainer, EmptySpan , Count} from './ContactList.styled';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContactsList , getContactsFilter, getSorted} from 'redux/selectors';
import { arrayOfMethods} from 'redux/selectors';


export const ContactList = () => {

  const contacts = useSelector(getContactsList)
  const filterValue = useSelector(getContactsFilter)
  const {activeIndex, id,  name, number}  = useSelector(getSorted)
  const arrayOfBools = [id,  name, number]

  // console.log(arrayOfMethods[sorted.activeIndex]);
  // console.log(arrayOfBools[sorted.activeIndex])
 
  const sortedContacts = arrayOfMethods[activeIndex]

  const filteredContacts = [...sortedContacts(contacts, arrayOfBools[activeIndex])
    .filter((contact )=>
     contact.name.toLowerCase().includes(filterValue.filter) 
     || contact.number.includes(filterValue.filter) )]


  return (
    <>
      <Count>{filteredContacts.length}</Count> 
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

