import { langEN, langUA } from "./languages";

function createLang1<T extends Record<string, string>>(langObj: T): T {
  return langObj;
}

function createLang<T extends LanguageKeys>(langObj: T): T {
  return langObj;
}

type LanguageKeys = typeof lang_en

export const lang_en = {
  contactsBtn: 'Contacts',
  logBtn: 'Login',
  regBtn: 'Register',
}

export const lang_ua ={
  alreadyGot: "Вже є акаунт?",
  notYet: "Немає акаунту?",
  show: "Показати",
  hide: "Приховати",
  left: "секунд залишилося",
}

