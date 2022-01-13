import styled from 'styled-components';

export const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 90px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 15%, transparent 100%);
  svg {
    width: 167px;
    height: 45px;
  }
`;

export const AnchorLogo = styled.div`
  margin-left: 3%;
  min-height: 100%;
  display: flex;
  align-items: center;
`;
