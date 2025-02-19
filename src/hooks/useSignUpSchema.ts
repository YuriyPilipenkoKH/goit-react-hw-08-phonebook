import React, { useEffect, useState } from 'react'
import { zodLangEn, zodLangUa } from '../lang/zodLang';
import { useSelector } from 'react-redux';
import { getLang } from '../redux/selectors/selectors';
import { userSchema } from '../types/user.model';
import { z } from 'zod';

export const useSignUpSchema = () => {
  const [lang, setLang] = useState(zodLangEn); 
  const language = useSelector(getLang);

    useEffect(() => {
      setLang(language === 'english' ? zodLangEn : zodLangUa);
    }, [language]);

     const signUpSchema =  userSchema(lang).pick({
      name: true,
      email: true,
      password: true,
    });

    return { signUpSchema };
}
export type SignUpSchemaType = z.infer<ReturnType<typeof useSignUpSchema>['signUpSchema']>;