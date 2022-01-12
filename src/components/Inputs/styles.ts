import { TextField } from '@mui/material';
import styled from 'styled-components';
import { Colors } from '../../Constants/Enum/Colors';

export const FormikInputContainer = styled(TextField)`
  background: ${Colors.primary};
  width: 100%;
  border-radius: 4px;
  ::placeholder {
    color: #816644;
  }
`;
