function createLang<T extends Record<string, string>>(langObj: T): T {
  return langObj;
}

export const langEN = createLang({
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
  admin: 'Admin',
  out: "LogOut",
  slides: "Slides",
  updateInfo: "Update contact information",
  namePlaceholder: "enter name",
  sorry: "Sorry dude, we couldn't find this page",
  prev: 'Previous',
  next : 'Next',
  page: 'Page',
  of: 'of',
  
  existingNumberError: 'A contact with this number already exists.',
  notFoundError: 'Contact not found.',
  incorrectFormat: 'Correct nuber format: 0985551204',

  emailInUse: 'Email already in use',
  credentialsError: 'Invalid credentials',

  regSuccess: 'Successful registration',
  welcome: 'Welcome back',
  bye: 'Goodbye',

  addSuccess: ' added successfully',
  updSuccess: ' updated successfully',
  delSuccess: ' deleted successfully',
  cont: ' Contact',
  same: ' remained same',


  noContacts: 'No contacts have been added recently',

});


export const langUA = createLang({
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
  admin: 'Адмін',
  out: "Вийти",
  slides: "Слайди",
  updateInfo: "Оновіть контактну інформацію",
  namePlaceholder: "введіть ім'я",
  sorry: "Вибач чувак, ми не змогли знайти цю сторінку",
  prev: 'Попередня',
  next : 'Наступна',
  page: 'Сторінка',
  of: 'з',
  // dodik: 'з',

  existingNumberError: 'Контакт із цим номером уже існує.',
  notFoundError: 'Контакт не знайдено.',
  incorrectFormat: 'Правильний формат номера: 0985551204',

  emailInUse: 'імейл вже використовується',
  credentialsError: 'Недійсні облікові дані',

  regSuccess: 'Успішна реєстрація',
  welcome: 'Ласкаво просимо',
  bye: 'До побачення',


  addSuccess: ' успішно додано',
  updSuccess: ' успішно оновлено',
  delSuccess: ' успішно видалено',
  cont: ' Контакт',
  same: ' залишився таким самим',

  noContacts: 'Останнім часом не було додано жодного контакту',
});


