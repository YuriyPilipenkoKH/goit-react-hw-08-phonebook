import { Section } from "../components/section/Section";
import ContactForm from "components/ContactForm/ContactForm";
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import ListBar from 'components/ListBar/ListBar';
import {  useDispatch, useSelector } from 'react-redux';
import { iconMphone } from 'utils/svgIcons';
import { getContactsList, getLang } from 'redux/selectors';
import { fetchContacts } from "redux/operations";
import { useEffect, useState } from "react";
import { PhonebookWrapper } from "./Pages.styled";
import { langEN, langUA } from "utils/languages";



 const Phonebook = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getContactsList)
  const [lang, setLang] = useState(langUA)
  const language = useSelector(getLang)
 
  // Language
  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])
  
  useEffect(() => {
    dispatch(fetchContacts())
  
  }, [dispatch] )
  
  return (
    <PhonebookWrapper className="phonebook__wrap">
    <Section title={lang.phonebook} icon ={language === 'english' &&   iconMphone}>
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
