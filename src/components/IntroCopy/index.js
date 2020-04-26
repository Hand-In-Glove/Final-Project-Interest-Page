import React from "react";
import css from "./IntroCopy.module.css";

function IntroCopy() {
  return (
    <div className={css.introCopy}>
      <p>
        Team building is an essential part of any organisation but something
        which is so difficult to do effectively.
      </p>
      <p>
        Quality team building can improve communicaton, boost mental health and
        increase a teams overall performance.
      </p>
      <p>
        At 3'oclocktopus we are working on a tool which overcomes the struggle
        of organising and leading team building events.
      </p>
      <h3>Welcome energisers...</h3>
      <p>
        We give you <strong>short and sweet</strong> activities to bring teams
        together specifically designed to beat the mid-afternoon slump.
      </p>
    </div>
  );
}

export default IntroCopy;
