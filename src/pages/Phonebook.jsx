// import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import ContactForm from "components/ContactForm/ContactForm";
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import ListBar from 'components/ListBar/ListBar';
import {  useDispatch, useSelector } from 'react-redux';
import { iconMphone } from 'utils/svgIcons';
import { getContactsList } from 'redux/selectors';
import { fetchContacts } from "redux/operations";
import { useEffect } from "react";
import { PhonebookWrapper } from "./Pages.styled";


 const Phonebook = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getContactsList)
  
  useEffect(() => {
    dispatch(fetchContacts())
  
  }, [dispatch] )
  
  return (
    <PhonebookWrapper className="phonebook__wrap">
    <Section title="Phonebook" icon ={iconMphone}>
      <ContactForm  />

      <Filter />
      
      {contacts.length > 0 && (
        <>
       <ListBar></ListBar>
        <ContactList  />
        </>
      )}
    </Section>

  </PhonebookWrapper>
  )
}

export default Phonebook
