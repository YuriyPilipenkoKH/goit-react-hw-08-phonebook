import {  coyote404} from "utils/svgIcons";
import { Page404 } from "./Pages.styled";

export const NotFound = () => {
    return (
      <Page404 style={{ textAlign: "center", display: 'grid', placeItems: 'center' }}>
        <b style={{ fontSize: 32 }}>Sorry, we couldn't find that page</b>
        {coyote404}
      </Page404>
    );
  };
  