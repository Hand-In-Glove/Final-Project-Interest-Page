import React, { useState } from "react";
import css from "./Form.module.css";

function Form() {
  async function postEmail(email) {
    try {
      const res = await fetch("https://energisers-api.herokuapp.com/interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: value }),
      });
      const data = await res.json();

      setResponseMsg(data.email);
      setValue("");
    } catch (err) {
      console.log(err.message);
    }
  }

  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }

  const [responseMsg, setResponseMsg] = useState(null);

  return (
    <form
      className={css.form}
      onSubmit={(e) => {
        e.preventDefault();
        postEmail(value);
      }}
    >
      <h2>Register interest below to stay informed</h2>
      <label className={css.label}>
        Please enter your email:
        <input
          className={css.input}
          type="email"
          value={value}
          onChange={handleChange}
        ></input>
      </label>
      <input className={css.regBtn} type="submit" />
      {responseMsg && (
        <p>
          Thanks email: "{responseMsg}"" was successfully registered! We'll keep
          you updated.
        </p>
      )}
    </form>
  );
}

export default Form;
