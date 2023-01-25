import React from 'react';
import {
  FormLogin,
  FormTitle,
  FormText,
  FormInput,
  FormButtom,
} from './Login.styled';

export default function LoginPage() {
  return (
    <FormLogin>
      <FormTitle>Authorization</FormTitle>
      <FormText>Enter your login and password</FormText>

      <FormInput
        name="email"
        id="outlined-basic"
        label="Email"
        placeholder="Введите ваш email"
      />
      <FormInput
        name="password"
        type="password"
        id="outlined-basic"
        label="Password"
        placeholder="Введите ваш пароль"
      />
      <FormButtom type="submit">Sign in</FormButtom>
    </FormLogin>
  );
}
