import {
  FormLogin,
  FormTitle,
  FormText,
  FormInput,
  FormButtom,
} from './Register.styled';
export default function RegisterPage() {
  return (
    <FormLogin>
      <FormTitle>Registration</FormTitle>
      <FormText>Enter your registration details</FormText>
      <FormInput
        type="text"
        name="name"
        id="outlined-basic"
        label="Username"
        placeholder="Введите ваш username"
      />
      <FormInput
        type="email"
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

      <FormButtom type="submit">Registration</FormButtom>
    </FormLogin>
  );
}
