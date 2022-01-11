import React from 'react';
import { LoginButtonContainer } from './styles';

interface ILoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}
const LoginButton: React.FC<ILoginButtonProps> = (props) => {
  const { label = 'Entrar', ...rest } = props;
  return <LoginButtonContainer {...rest}>{label}</LoginButtonContainer>;
};
export default LoginButton;
