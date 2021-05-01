import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { phonebookOperations, selectors } from '../../redux/contacts';
import Title from '../Title';
import Form from '../Form';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';

export default function ContactEditor({ contact, onSave }) {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsNames = useSelector(selectors.getContactsNames);
  const contactsNumbers = useSelector(selectors.getContactsNumbers);

  useEffect(() => {
    setId(contact.id);
    setName(contact.name);
    setNumber(contact.number);
  }, [contact.id, contact.name, contact.number]);

  const handleChange = useCallback(({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const checkDublicatName = contactsNames.filter(
        contactName => name.toLowerCase() === contactName,
      );
      const checkDublicatNumber = contactsNumbers.filter(
        contactNumber => number === contactNumber,
      );
      if (checkDublicatName.length && checkDublicatNumber.length) {
        alert(`Сontact ${name} has not been changed`);
        return;
      }
      if (name && number) {
        dispatch(phonebookOperations.editContact({ id, name, number }));
        reset();
        onSave();
        return;
      } else alert('Please enter Name and phone Number');
    },
    [contactsNames, contactsNumbers, name, number, dispatch, id, onSave],
  );

  const reset = () => {
    setId('');
    setName('');
    setNumber('');
  };

  return (
    <>
      <Title text={'Edit your Contact'} />
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
        <Button type={'submit'} text={'Edit contact'} />
      </Form>
    </>
  );
}

ContactEditor.propTypes = {
  contact: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
};
