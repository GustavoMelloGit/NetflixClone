import React from 'react';
import {
  ActionsWrapper,
  CardContainer,
  ForgotPassword,
  FormTitle,
  LoginPageContainer,
  MyCheckbox,
  MyForm,
} from './styles';
import * as yup from 'yup';
import { Formik } from 'formik';
import FormikInputText from '../../components/Inputs/FormikInputText';
import FormikInputPassword from '../../components/Inputs/FormikInputPassword';
import LoginButton from '../../components/Button/Login';

const LoginPage: React.FC = (props) => {
  const validationSchema = yup.object({
    email: yup.string().email().required('Informe um email válido.'),
    password: yup
      .string()
      .required('A senha deve ter entre 4 e 60 caracteres.'),
  });
  return (
    <LoginPageContainer>
      <CardContainer>
        <FormTitle>Entrar</FormTitle>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
        >
          <MyForm>
            <FormikInputText name='email' label='E-mail' />
            <FormikInputPassword name='password' label='Senha' />
            <LoginButton type='submit' aria-label='Realizar login' />
            <ActionsWrapper>
              <ForgotPassword>
                <MyCheckbox size='small' color='default' />
                <span>Lembre-se de mim</span>
              </ForgotPassword>
              <span>Precisa de ajuda?</span>
            </ActionsWrapper>
          </MyForm>
        </Formik>
      </CardContainer>
    </LoginPageContainer>
  );
};
export default LoginPage;
