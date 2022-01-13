import styled from 'styled-components';
import { FormikInputContainer } from './../../components/Inputs/styles';
import { Form } from 'formik';
import { LoginButtonContainer } from '../../components/Button/Login/styles';
import { Checkbox } from '@mui/material';
import { Colors } from '../../Constants/Enum/Colors';
import { Breakpoints } from '../../Constants/Enum/Breakpoints';

export const LoginPageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const CardContainer = styled.div`
  margin-top: 90px;
  margin-bottom: 110px;
  width: 450px;
  height: 660px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  @media screen and (max-width: ${Breakpoints.mobile}) {
    width: 100%;
    height: 100%;
    background: black;
  }
`;

export const CardContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 4rem;
  > :nth-child(3) {
    margin-top: 4rem;
  }
  @media screen and (max-width: ${Breakpoints.mobile}) {
    padding: 1rem;
  }
`;

export const FormTitle = styled.h1`
  color: white;
  font-size: 2.3rem;
  font-weight: bold;
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
  color: ${Colors.text};
  margin-top: 0.6rem;
  label {
    margin: 0;
  }
  span {
    font-size: 0.9rem;
  }
`;

export const RememberPassword = styled.div`
  display: flex;
  align-items: center;
`;
export const MyCheckbox = styled(Checkbox)`
  > svg {
    fill: ${Colors.text};
  }
`;

export const ConnectWith = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 20px;
    height: 20px;
    opacity: 1;
    margin-right: 0.6rem;
  }
  > span {
    opacity: 0.5;
    font-weight: lighter;
    font-size: 0.9rem;
  }
`;

export const NewHereWrapper = styled.div`
  margin: 1rem 0;
`;
export const NewHereText = styled.span`
  color: ${Colors.text};
  opacity: 0.8;
  > a {
    color: white;
  }
`;

export const ProtectText = styled.span`
  color: ${Colors.text};
  font-size: 0.85rem;
  line-height: 0.8;
`;
