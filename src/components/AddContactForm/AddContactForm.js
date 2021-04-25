import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { phonebookOperations, selectors } from '../../redux/contacts';
import Form from '../Form';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';

export default function AddContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsNames = useSelector(selectors.getContactsNames);

  const handleChange = useCallback(({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const checkDublicat = contactsNames.filter(
        contactName => name.toLowerCase() === contactName,
      );
      if (checkDublicat.length) {
        alert(`${name} is already in contacts`);
        reset();
        return;
      }
      if (name && number) {
        dispatch(phonebookOperations.addContact({ name, number }));
        reset();
        return;
      } else alert('Please enter Name or phone number');
    },
    [name, number, dispatch],
  );

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label name={'Name:'}>
        <Input
          type={'text'}
          name={'name'}
          value={name}
          placeholder={'John Smith'}
          onChange={handleChange}
        />
      </Label>
      <Label name={'Phone:'}>
        <InputMask
          mask="+38 (099) 999-99-99"
          type="tel"
          name="number"
          value={number}
          placeholder="+38 (099) 999-99-99"
          onChange={handleChange}
        />
      </Label>
      <Button type={'submit'} text={'Add contact'} />
    </Form>
  );
}

AddContactForm.defaultProps = {
  contactsNames: [],
};

AddContactForm.propTypes = {
  contactsNames: PropTypes.array,
};
