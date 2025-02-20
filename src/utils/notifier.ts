import Notiflix, { Confirm } from 'notiflix';

export interface confirm_Response{
  success: boolean
}


export function confirmUpdate (question: string, name: string): Promise<void> {

  return new Promise((resolve, reject) => {
      Confirm.show(
        'Phonebook Confirm',
        question,
        'Yes',
        'No',
        () => {
          Notiflix.Notify.success(`Contact ${name} was updated.`);
          resolve();
        },
        () => {
          Notiflix.Notify.info(`Contact ${name} remained same.`);
          reject();
        },
        {}
      );
    });

}

export function confirmDelete (question: string, name: string): Promise<confirm_Response> {

  return new Promise((resolve, reject) => {
      Confirm.show(
        'Phonebook Confirm',
        question,
        'Yes',
        'No',
        () => {
          // Notiflix.Notify.warning(`Contact ${name} was deleted.`);
          resolve({success: true});
          
        },
        () => {
          // Notiflix.Notify.info(`Contact ${name} remained same.`);
          reject({success: false});
        },
        {}
      );
    });

}

