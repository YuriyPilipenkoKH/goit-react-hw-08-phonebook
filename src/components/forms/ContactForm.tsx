import React from 'react'
import { ContactFormBtn, Form, Input, Label } from './Form.styled';

const ContactForm = () => {
  onst contacts = useSelector(getContactsList)
  const { name, number } = useSelector(getForm);
  const [newAdded, setNewAdded] = useState(false)
  const lang = useLanguage()
  const language = useSelector(getLang)
  const dispatch = useDispatch()
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  const handleSubmit = (e) => {
  
    e.preventDefault();

    const newContact  = {
      name,
      number,
    }

    if (contacts.find((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      Notiflix.Notify.failure(`${name} is already in contacts.`);
      return;
    } else if (contacts.find((contact) => contact.number === number)) {
      Notiflix.Notify.failure(`${number} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact))
    dispatch(resetForm()); // Reset the form after submission
    setNewAdded(true)
    setTimeout(() => {
      setNewAdded(false)
    }, 3000);
  };


  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
      {lang.name}:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
      {lang.number}:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required
          onChange={handleChange}
        />
      </Label>
      <ContactFormBtn 
      type="submit"
            >
              {lang.add}{ language === 'english' && iconRedux }</ContactFormBtn>
             {/* {newAdded && <Lottie animationData={animationData} className="new"/>} */}
            
    </Form>
  );
};

export default ContactForm