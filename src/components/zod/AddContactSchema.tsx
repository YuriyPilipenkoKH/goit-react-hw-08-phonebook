import { useEffect, useState } from 'react';
import { contactSchema } from '../../types/contact.model';
import { zodLangEn, zodLangUa } from '../../utils/languages';
import { useSelector } from 'react-redux';
import { getLang } from '../../redux/selectors/selectors';
import { z } from 'zod';

export const useAddContactSchema = () => {
  const [lang, setLang] = useState(zodLangEn); // Default to English
  const language = useSelector(getLang);

  useEffect(() => {
    setLang(language === 'english' ? zodLangEn : zodLangUa);
  }, [language]);

  // Create schema dynamically
  const addContactSchema = contactSchema(lang).pick({
    name: true,
    number: true,
  });

  // Return the schema
  return { addContactSchema };
};

// Type for use in react-hook-form
export type AddContactSchemaType = z.infer<ReturnType<typeof useAddContactSchema>['addContactSchema']>;
