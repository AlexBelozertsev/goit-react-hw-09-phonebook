import axios from 'axios';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  editContactRequest,
  editContactSuccess,
  editContactError,
} from './phonebook-actions';

const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError(error.message));
  }
};

const addContact = ({ name, number }) => async dispatch => {
  const contact = { name, number };
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

const deleteContact = Id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${Id}`);
    dispatch(deleteContactSuccess(Id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

const editContact = ({ id, contact }) => async dispatch => {
  dispatch(editContactRequest());
  try {
    const { data } = await axios.patch(`/contacts/${id}`, contact);
    dispatch(editContactSuccess(data));
  } catch (error) {
    dispatch(editContactError(error));
  }
};

export default { getContacts, addContact, deleteContact, editContact };
