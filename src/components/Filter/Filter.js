import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectors } from '../../redux/contacts';
import Label from '../Label';
import Input from '../Input';

export default function Filter() {
  const dispatch = useDispatch();
  const onChange = useCallback(
    e => {
      dispatch(changeFilter(e.target.value));
    },
    [dispatch],
  );
  const value = useSelector(selectors.getVisibleContacts);

  return (
    <Label name={'Find contact by name'}>
      <Input type={'text'} name={'name'} value={value} onChange={onChange} />
    </Label>
  );
}
