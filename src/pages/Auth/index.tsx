import React from 'react';
import { CardContainer, FormTitle, LoginPageContainer, MyForm } from './styles';
import * as yup from 'yup';
import { Formik } from 'formik';
import FormikInputText from '../../components/Inputs/FormikInputText';
import FormikInputPassword from '../../components/Inputs/FormikInputPassword';

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
          </MyForm>
        </Formik>
      </CardContainer>
    </LoginPageContainer>
  );
};
export default LoginPage;
