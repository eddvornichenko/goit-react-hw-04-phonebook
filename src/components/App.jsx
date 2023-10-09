import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import s from './App.module.css';
import Contacts from './Contacts/Contacts';
import Phonebook from './Phonebook/Phonebook';
import Section from './Section/Section';
import Filter from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const phonebookValue = (text, number) => {
    if (contacts.some((contact) => contact.name.toLowerCase() === text.toLowerCase())) {
      alert(`${text} is already in contacts`);
    } else if (text !== '' && number !== '') {
      const newContact = {
        id: nanoid(),
        name: text,
        number,
      };
      setContacts((prevContacts) => [...prevContacts, newContact]);
    } else {
      alert('Fill in all the fields');
    }
  };

  const contactFilter = (e) => {
    setFilter(e.target.value);
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className={s.App}>
      <Section title="Phonebook">
        <Phonebook phonebookValue={phonebookValue} />
      </Section>
      <Section title="Contacts">
        <Filter filter={contactFilter} />
        <Contacts contacts={visibleContacts} deleteList={deleteContact} />
      </Section>
    </div>
  );
}
