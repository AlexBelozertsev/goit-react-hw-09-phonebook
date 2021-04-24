import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors, phonebookOperations } from '../redux/contacts';
import Title from '../components/Title';
import AddContactForm from '../components/AddContactForm';
import Filter from '../components/Filter';
import Contacts from '../components/Contacts';

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(phonebookOperations.getContacts());
  }, [dispatch]);
  const contacts = useSelector(selectors.getAllContacts);

  return (
    <>
      <Title text={'Add new Contact'} />
      <AddContactForm contacts={contacts} />
      {contacts.length > 0 && <Title text={'Your Contacts:'} />}
      {contacts.length > 1 && <Filter />}
      <Contacts />
    </>
  );
}
