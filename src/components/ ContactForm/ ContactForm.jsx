import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../contactsSlice';
import { Form, Label, Input, Button, ErrorText } from './ ContactForm.styled';


 const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !number.trim()) {
      setError('Заповніть обидва поля');
      return;
    }

    const duplicate = contacts.some(
      c => c.name.trim().toLowerCase() === name.trim().toLowerCase()
    );
    if (duplicate) {
      setError('Контакт з таким ім’ям уже існує');
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };
  return (
    <Form onSubmit={onSubmit} noValidate>
      <Label>
        Name
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Jane Doe"
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          value={number}
          onChange={e => setNumber(e.target.value)}
          placeholder="+38 067 000 00 00"
        />
      </Label>

      {error && <ErrorText>{error}</ErrorText>}

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {};

export  default ContactForm;



