import React from 'react';
import { ReactComponent as Netflix } from '../../../../global/assets/Netflix.svg';
import { AnchorLogo, NavbarContainer } from './styles';

const LayoutNavbar: React.FC = (props) => {
  return (
    <NavbarContainer>
      <AnchorLogo>
        <Netflix />
      </AnchorLogo>
    </NavbarContainer>
  );
};
export default LayoutNavbar;
