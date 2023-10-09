import React, { useState } from 'react';
import s from './Phonebook.module.css';

const Phonebook = ({ phonebookValue }) => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');

  const phonebookValueHandler = (e) => {
    e.preventDefault();
    phonebookValue(text, number);
    setText('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={phonebookValueHandler}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          value={text}
          placeholder="Enter name"
          onChange={(e) => setText(e.target.value)}
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="number"
          max="9999999999"
          value={number}
          placeholder="Enter phone number"
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <br />
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
};

export default Phonebook;
