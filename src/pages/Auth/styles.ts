import styled from 'styled-components';
import { Form } from 'formik';

export const LoginPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const CardContainer = styled.div`
  width: 450px;
  height: 660px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  padding: 4rem;
`;

export const FormTitle = styled.h1`
  color: white;
  font-size: 2.3rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const MyForm = styled(Form)`
  > div:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
