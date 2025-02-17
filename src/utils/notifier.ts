import Notiflix, { Confirm } from 'notiflix';



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

export function confirmDelete (question: string, name: string): Promise<void> {

        return new Promise((resolve, reject) => {
            Confirm.show(
              'Phonebook Confirm',
              question,
              'Yes',
              'No',
              () => {
                Notiflix.Notify.warning(`Contact ${name} was deleted.`);
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

