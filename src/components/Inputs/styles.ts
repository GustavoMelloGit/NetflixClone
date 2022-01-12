import { TextField } from '@mui/material';
import styled, { keyframes, css } from 'styled-components';
import { Colors } from '../../Constants/Enum/Colors';

const ShakeAnimation = keyframes`
  0%{
    transform: translateX(0);
  }
  20%{
    transform: translateX(2%);
  }
  40%{
    transform: translateX(-2%);
  }
  60%{
    transform: translateX(2%);
  }
  80%{
    transform: translateX(-2%);
  }
  100%{
    transform: translateX(0);
  }
`;
export const FormikInputContainer = styled(TextField)`
  background: ${Colors.primary};
  width: 100%;
  border-radius: 4px;

  ${(props) =>
    props.error &&
    css`
      animation: ${ShakeAnimation} 200ms linear;
    `}
  ::placeholder {
    color: #816644;
  }
`;
