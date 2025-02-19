export type LangType = {
  forbiddenPrefix: string;
  minLength: string;
  maxLength: string;
  maxLengthNum: string;
 
  existingNumberError: string;
  notFoundError: string;
  incorrectFormat: string;

  addSuccess: string;
  upddateSuccess: string;
  delSuccess: string;
};


export const zodLangEn: LangType = {
  forbiddenPrefix: "Forbidden prefix",
  minLength: "Name must be at least 3 characters",
  maxLength: "Name must be at most 16 characters",
  maxLengthNum: "Number must be at most 10 digits",

  existingNumberError: 'A contact with this number already exists.',
  notFoundError: 'Contact not found.',
  incorrectFormat: 'Correct nuber format: 0985551204',

  addSuccess: 'Contact added successfully',
  upddateSuccess: 'Contact updated successfully',
  delSuccess: 'Contact deleted successfully',
};

export const zodLangUa: LangType = {
  forbiddenPrefix: "Заборонений префікс",
  minLength: "Ім'я має містити щонайменше 3 символи",
  maxLength: "Ім'я має містити не більше 16 символів",
  maxLengthNum: "Номер має містити не більше 10 символів",

  existingNumberError: 'Контакт із цим номером уже існує.',
  notFoundError: 'Контакт не знайдено.',
  incorrectFormat: 'Правильний формат номера: 0985551204',

  addSuccess: 'Контакт успішно додано',
  upddateSuccess: 'Контакт успішно оновлено',
  delSuccess: 'Контакт успішно видалено',
};