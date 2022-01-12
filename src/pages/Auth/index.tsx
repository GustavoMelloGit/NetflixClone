import React from 'react';
import {
  ActionsWrapper,
  CardContainer,
  ConnectWith,
  RememberPassword,
  FormTitle,
  LoginPageContainer,
  MyCheckbox,
  MyForm,
  CardContent,
  NewHereText,
  NewHereWrapper,
  ProtectText,
} from './styles';
import * as yup from 'yup';
import { Formik } from 'formik';
import FormikInputText from '../../components/Inputs/FormikInputText';
import FormikInputPassword from '../../components/Inputs/FormikInputPassword';
import LoginButton from '../../components/Button/Login';
import Facebook from '../../global/assets/facebook.png';
import { FormControlLabel } from '@mui/material';

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
        <CardContent>
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
                <FormControlLabel
                  label='Lembre-se de mim'
                  control={
                    <MyCheckbox
                      size='small'
                      color='default'
                      style={{ padding: 0 }}
                    />
                  }
                />
                <span>Precisa de ajuda?</span>
              </ActionsWrapper>
            </MyForm>
          </Formik>
          <ConnectWith>
            <img src={Facebook} alt='Facebook logo' />
            <span>Conectar com o Facebook</span>
          </ConnectWith>
          <NewHereWrapper>
            <NewHereText>
              Novo por aqui?{' '}
              <a
                href='https://www.linkedin.com/in/gustavo-marques-mello/'
                target='_blank'
                rel='noreferrer'
              >
                Assine agora
              </a>
            </NewHereText>
          </NewHereWrapper>
          <ProtectText>
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô.{' '}
            <a
              href='https://www.linkedin.com/in/gustavo-marques-mello/'
              target='_blank'
              rel='noreferrer'
            >
              Saiba mais
            </a>
          </ProtectText>
        </CardContent>
      </CardContainer>
    </LoginPageContainer>
  );
};
export default LoginPage;
