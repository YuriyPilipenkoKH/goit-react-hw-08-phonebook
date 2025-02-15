import Notiflix, { Confirm } from 'notiflix';


export function confirmUpdate (question, name) {

        return new Promise((resolve, reject) => {
            Confirm.show(
              'Notiflix Confirm',
              question,
              'Yes',
              'No',
              () => {
                // Notiflix.Notify.success(`Contact ${name} was updated.`);
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

export function confirmDelete (question, name) {

        return new Promise((resolve, reject) => {
            Confirm.show(
              'Notiflix Confirm',
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

