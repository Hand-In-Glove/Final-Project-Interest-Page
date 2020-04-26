import React from "react";
import css from "./App.module.css";
import Header from "../Header";
import IntroCopy from "../IntroCopy";
import AboutCopy from "../AboutCopy";

function App() {
  return (
    <div className={css.App}>
      <Header />
      <section className={css.main}>
        <IntroCopy />
        <AboutCopy />
      </section>
    </div>
  );
}

export default App;
