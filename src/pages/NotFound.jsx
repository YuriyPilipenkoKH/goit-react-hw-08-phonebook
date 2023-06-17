import { coyoteWithPlacard } from "utils/svgIcons";

export const NotFound = () => {
    return (
      <div style={{ textAlign: "center", display: 'grid', placeItems: 'center' }}>
        <b style={{ fontSize: 32 }}>Sorry, we couldn't find that page</b>
        {coyoteWithPlacard}
      </div>
    );
  };
  