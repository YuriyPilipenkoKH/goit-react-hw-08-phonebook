import { updateField } from "../redux/formSlice"

export const langEN = {
  appTitle: 'React-phonebook',
  appUnderTitle: `web application that allows users to store and manage their contacts,
  providing features for adding, editing, and deleting contact information`,
  homeBtn: 'Home',
  contactsBtn: 'Contacts',
  logBtn: 'Login',
  regBtn: 'Register',
  footerTitle: 'React-Phonebook-2023',
  name: 'Name',
  sname: "name",
  email: 'Email',
  pass: 'Password',
  regSubmit: "SignUp",
  logSubmit: "SignIn",
  alreadyGot: "Already have an account?",
  notYet: "Don't have an account?",
  show: "Show",
  hide: "Hide",
  left: "seconds left",
  wasted: "Wasted",
  try: "Try again",
  phonebook: "Phonebook",
  number: "Number",
  phone: "phone",
  find: "Find contacts by name",
  empty: "List is empty ...",
  add: "Add contact",
  edit: "EDIT",
  editCont: "Edit contact",
  delete: "DELETE",
  avatar: "Avatar",
  set: "Set",
  settings: "Settings",
  profile: "Profile",
  out: "LogOut",
  slides: "Slides",
  updateInfo: "Update contact information",
  sorry: "Sorry dude, we couldn't find this page",
  
  contacts:{
    existingNumberError: 'A contact with this number already exists.',
    notFoundError: 'Contact not found.',
    incorrectFormat: 'Correct nuber format: 0985551204',

    addSuccess: 'Contact added successfully',
    upddateSuccess: 'Contact updated successfully',
    delSuccess: 'Contact deleted successfully',



  }
  
}


export const langUA = {
  appTitle: 'React телефонна книга',
  appUnderTitle: `веб додаток, який дозволяє користувачам зберігати та керувати своїми контактами,
  надання функцій для додавання, редагування та видалення контактної інформації`,
  homeBtn: 'Головна',
  contactsBtn: 'Контакти',
  logBtn: 'Увійти',
  regBtn: 'Реєстрація',
  footerTitle: 'React-телефонна книга-2023',
  name: 'Ім’я',
  sname: "ім’я",
  email: 'Пошта',
  pass: 'Пароль',
  regSubmit: "Зареєструватися",
  logSubmit: "Увійти",
  alreadyGot: "Вже є акаунт?",
  notYet: "Немає акаунту?",
  show: "Показати",
  hide: "Приховати",
  left: "секунд залишилося",
  wasted: "Витрачено",
  try: "Спробуйте знову",
  phonebook: "Телефонна книга",
  number: "Номер",
  phone: "номер",
  find: "Пошук контактів за іменами",
  empty: "Список порожній...",
  add: "Додати контакт",
  edit: "РЕДАГУВАТИ",
  editCont: "Редагувати контакт",
  delete: "ВИДАЛИТИ",
  avatar: "Аватар",
  set: "Встановити",
  settings: "Налаштування",
  profile: "Профіль",
  out: "Вийти",
  slides: "Слайди",
  updateInfo: "Оновіть контактну інформацію",
  sorry: "Вибач чувак, ми не змогли знайти цю сторінку",

  contacts:{
    existingNumberError: 'Контакт із цим номером уже існує.',
    notFoundError: 'Контакт не знайдено.',
    incorrectFormat: 'Правильний формат номера: 0985551204',

    addSuccess: 'Контакт успішно додано',
    upddateSuccess: 'Контакт успішно оновлено',
    delSuccess: 'Контакт успішно видалено',



  }

}


export type LangType = {
  forbiddenPrefix: string;
  minLength: string;
  maxLength: string;
  correctFormat: string;
};

export const zodLangEn: LangType = {
  forbiddenPrefix: "Forbidden prefix",
  minLength: "Name must be at least 3 characters",
  maxLength: "Name must be at most 16 characters",
  correctFormat: "Correct format: 0985551204",
};

export const zodLangUa: LangType = {
  forbiddenPrefix: "Заборонений префікс",
  minLength: "Ім'я має містити щонайменше 3 символи",
  maxLength: "Ім'я має містити не більше 16 символів",
  correctFormat: "Правильний формат: 0985551204",
};
