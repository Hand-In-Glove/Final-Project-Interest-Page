import React from "react";
import css from "./AboutCopy.module.css";
import book from "../../book.svg";
import toolbox from "../../toolbox.svg";
import game from "../../jigsaw.svg";
import Form from "../Form";

function AboutCopy() {
  return (
    <div className={css.about}>
      <p>
        3'oclocktopus is a mobile app for you to find and run energisers with
        your team at the click of a button!
      </p>
      <p>Features include:</p>
      <div className={css.Library}>
        <img src={book} alt="library book" />
        <p>A library of entertaining energisers, find the perfect one easily</p>
      </div>
      <div className={css.Hosting}>
        <img src={toolbox} alt="toolkit" />
        <p>
          Tools to help you organise energisers from your mobile device
          including, team generators, score tracking, leaderboards and more.
        </p>
      </div>
      <div className={css.Games}>
        <img src={game} alt="jigsaw" />
        <p>
          No resources? No worry, in app games mean your team can play together
          instantly.
        </p>
      </div>
      <Form />
    </div>
  );
}

export default AboutCopy;
