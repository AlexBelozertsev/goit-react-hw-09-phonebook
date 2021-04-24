import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Title from '../components/Title';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(({ target: { name, value } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!email || !password) {
        alert('Fill In all areas');
        return;
      }
      dispatch(authOperations.logIn({ email, password }));
      setEmail('');
      setPassword('');
    },
    [email, password, dispatch],
  );

  return (
    <div>
      <Title text={'Login Page'} />
      <Form onSubmit={handleSubmit} autoComplete={'off'}>
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
            placeholder={'*******'}
            onChange={handleChange}
          />
        </Label>

        <Button type={'submit'} text={'Enter'} />
      </Form>
    </div>
  );
}
