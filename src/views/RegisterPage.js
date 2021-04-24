import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Title from '../components/Title';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'email':
        setEmail(value);
        return;
      case 'password':
        setPassword(value);
        return;
      default:
        alert('Some areas are empty!');
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert('Some areas are empty!');
      return;
    }
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Title text={'Registration'} />
      <Form onSubmit={handleSubmit} autoComplete={'off'}>
        <Label name={'Name:'}>
          <Input
            type={'text'}
            name={'name'}
            value={name}
            placeholder={'Your Name'}
            onChange={handleChange}
          />
        </Label>

        <Label name={'E-mail:'}>
          <Input
            type={'email'}
            name={'email'}
            value={email}
            placeholder={'your@mail.com'}
            onChange={handleChange}
          />
        </Label>

        <Label name={'Password:'}>
          <Input
            type={'password'}
            name={'password'}
            value={password}
            placeholder={'More than 6 symbols'}
            onChange={handleChange}
          />
        </Label>

        <Button type={'submit'} text={'Signup'} />
      </Form>
    </div>
  );
}
