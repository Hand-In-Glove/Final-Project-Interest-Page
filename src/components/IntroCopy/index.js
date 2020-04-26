import React from "react";
import css from "./IntroCopy.module.css";

function IntroCopy() {
  return (
    <div className={css.introCopy}>
      <p>Team building is essential but difficult to do effectively.</p>
      <p>
        Quality team building can <strong>improve communicaton</strong>,{" "}
        <strong>boost mental health</strong> and increase a teams overall
        performance.
      </p>
      <p>
        At 3'oclocktopus we are working on a tool which overcomes the struggle
        of organising and leading team building events.
      </p>
      <h3>Welcome energisers...</h3>
      <p>
        We give you <strong>short and sweet</strong> activities to bring teams
        together, specifically designed to beat the mid-afternoon slump.
      </p>
    </div>
  );
}

export default IntroCopy;
