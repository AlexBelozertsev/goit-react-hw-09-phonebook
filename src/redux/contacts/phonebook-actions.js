import { createAction } from '@reduxjs/toolkit';

export const getContactsRequest = createAction('contact/getContactsRequest');
export const getContactsSuccess = createAction('contact/getContactsSuccess');
export const getContactsError = createAction('contact/getContactsError');

export const addContactRequest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactError = createAction('contact/addContactError');

export const deleteContactRequest = createAction(
  'contact/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contact/deleteContactSuccess',
);
export const deleteContactError = createAction('contact/deleteContactError');

export const editContactRequest = createAction('contact/editContactRequest');
export const editContactSuccess = createAction('contact/editContactSuccess');
export const editContactError = createAction('contact/editContactError');

export const changeFilter = createAction('contact/changeFilter');
