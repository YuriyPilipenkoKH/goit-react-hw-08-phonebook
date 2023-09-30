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

// import img1 from '../../images/javascript.png'
// import img2 from '../../images/react.png'
// import img3 from '../../images/redux.png'
// import img4 from '../../images/router.png'
// import img5 from '../../images/github.png'

// <img src={img1} alt='footicon' />
// <img src={img2} alt='footicon' />
// <img src={img3} alt='footicon' />
// <img src={img4} alt='footicon' />
// <img src={img5} alt='footicon' />

// const click = () => {
//   console.log('favorites',favorites)
//   console.log('reRender',reRender)
//   console.log('visibleCars',visibleCars)
//   console.log('carsList',carsList)
//   console.log('searchedCars',searchedCars)
//   console.log('isSeaching',isSeaching)
//  }


// return (
//   <CatalogueWrapper className='wrapper'>
//     <Button 
//     onClick={click}
//     style={{width:'200px'}}>Check</Button>
