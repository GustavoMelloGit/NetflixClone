import styled from 'styled-components';
import { Colors } from '../../../Constants/Enum/Colors';

export const LoginButtonContainer = styled.button`
  width: 100%;
  height: 3.2rem;
  outline: none;
  border: none;
  background: ${Colors.accent};
  color: white;
  font-size: 1.1em;
  font-weight: bold;
  border-radius: 0.3rem;

  :focus {
    outline: 1px dashed white;
  }
`;
