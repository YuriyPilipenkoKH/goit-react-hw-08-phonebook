
import { useLanguage } from '../hooks/useLanguage';
import { Page404 } from './Pages.styled';
import Coyote404 from '../img/icons/coyote404';

const NotFoundPage  = () => {
   const lang = useLanguage()
  return (
    <Page404 >
      <b > {lang.sorry} </b>
      <Coyote404/>
    </Page404>
  );
};
export default NotFoundPage 