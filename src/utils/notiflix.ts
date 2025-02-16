import { Notify } from 'notiflix';

const init = () => {
  Notify.init({
    width: '300px',
    position: 'center-top',
    closeButton: false,
    fontSize: '22px',
    clickToClose: true,
    borderRadius: '8px',
     });
}
init()