import styled from 'styled-components';
import { FormikInputContainer } from './../../components/Inputs/styles';
import { Form } from 'formik';
import { LoginButtonContainer } from '../../components/Button/Login/styles';
import { Checkbox } from '@mui/material';
import { Colors } from '../../Constants/Enum/Colors';

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
  ${FormikInputContainer}:not(:last-child) {
    margin-bottom: 1.2rem;
  }
  ${LoginButtonContainer}:last-child {
    margin-top: 1.4rem;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: ${Colors.text};
`;

export const ForgotPassword = styled.div`
  display: flex;
  align-items: center;
`;
export const MyCheckbox = styled(Checkbox)`
  svg {
    fill: ${Colors.text};
  }
`;
